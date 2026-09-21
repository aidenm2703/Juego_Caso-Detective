/* ============================================================
   Motor de IA para el interrogatorio (realtime / streaming).

   Compatible con APIs estilo OpenAI (chat.completions con stream):
   OpenAI, Groq, OpenRouter, DeepSeek, etc.

   Configuración (ver .env.example):
     VITE_AI_ENABLED='true'
     VITE_AI_BASE_URL='https://api.groq.com/openai/v1'
     VITE_AI_KEY='...'
     VITE_AI_MODEL='llama-3.3-70b-versatile'

   Si no hay clave configurada, el juego usa el banco de respuestas
   offline (campo `interrogation` de cada sospechoso) para no depender
   de ninguna API.
   ============================================================ */

const CFG = {
  enabled: String(import.meta.env.VITE_AI_ENABLED ?? '').toLowerCase() === 'true',
  baseUrl: (import.meta.env.VITE_AI_BASE_URL || 'https://api.groq.com/openai/v1').replace(/\/+$/, ''),
  key: import.meta.env.VITE_AI_KEY || '',
  model: import.meta.env.VITE_AI_MODEL || 'llama-3.3-70b-versatile',
  temperature: Number(import.meta.env.VITE_AI_TEMPERATURE ?? 0.8),
}

export function isAiConfigured() {
  return CFG.enabled && Boolean(CFG.key)
}

export function getAiLabel() {
  return `${CFG.model} · ${CFG.baseUrl.replace(/^https?:\/\//, '')}`
}

function buildMessages({ suspect, caseObj, discoveredEvidence = [] }) {
  const guilty = suspect.id === caseObj.correctSuspectId

  const roleSpec = guilty
    ? `ADVERTENCIA DE TRAMA (CLASIFICADO): ERES EL CULPABLE de ${caseObj.category}. ${caseObj.solution}. ` +
      'NUNCA lo confieses ni lo reveles de forma directa. Al principio mantén firme tu coartada; cuando te ' +
      'presionen sobre la hora del hecho, tu paradero exacto o la prueba clave, PONTE NERVIOSO, responde con ' +
      'evasivas y cambia ligeramente los detalles (pequeña contradicción creíble) sin llegar a confesar. ' +
      'Hacia el final, si la presión es muy fuerte, muestra miedo de que te inculpen.'
    : `NO eres culpable y NO conoces los detalles de la escena (no inventes el arma, las horas ni el móvil del crimen). ` +
      'Mantén SIEMPRE la misma coartada de tu ficha; puedes incomodarte o mostrarte nervioso por tus asuntos ' +
      'personales (motivo), pero tus respuestas sobre los hechos deben ser coherentes y firmes.'

  const info = [
    `Nombre: ${suspect.name}, ${suspect.age} años, ${suspect.profession}.`,
    `Relación con la víctima/asunto: ${suspect.relation}.`,
    `Coartada declarada en acta: ${suspect.alibi}.`,
    `Motivo que se te atribuye en el expediente: ${suspect.motive}.`,
    `Perfil del interrogador/notas: ${suspect.notes ?? ''}.`,
  ].join(' ')

  const evidenceContext = discoveredEvidence.length
    ? discoveredEvidence.map((item) => `- ${item.title}: ${item.description ?? item.analysis ?? ''}`).join('\n')
    : '- El detective aún no ha presentado evidencia examinada.'

  return {
    role: 'system',
    content:
      `Eres ${suspect.name}, ${suspect.age} años, ${suspect.profession}, testigo investigado en el caso ` +
      `"${caseObj.title}" (${caseObj.category}, ${caseObj.location}). Contexto del caso que conoces: ${caseObj.summary}. ` +
      `${info} ${roleSpec} EVIDENCIA QUE EL DETECTIVE YA DESCUBRIÓ (solo reacciona a esta, no inventes otras):\n${evidenceContext}\n` +
      'INSTRUCCIONES DE ACTUACIÓN: respondes en PRIMERA PERSONA, en español castizo, como una persona real ' +
      'interrogada por un detective. Respuestas ORALES, humanas, con carácter propio: puedes tener manías, ' +
      'gustos, hobbies, opiniones y anécdotas personales coherentes con tu profesión y tu forma de ser ' +
      '(no están en tu ficha). Si el detective te pregunta POR CUALQUIER TEMA — música, deportes, una película, ' +
      'tu barrio, tus miedos, tu familia — respóndele con naturalidad, en confianza, como quien charla. ' +
      'Después de contestar ese tema, RETOMA el caso con un comentario personal: tu opinión sobre lo sucedido, ' +
      'un recuerdo de esa noche o un detalle útil para tu coartada. Vacilaciones humanas (' +
      '«mire…», «no recuerdo bien», «¿me está acusando?», «no sé por qué me pregunta eso»). Si la pregunta es ' +
      'ofensiva o te acusa, te pones a la defensiva. Nunca reveles información que tu ficha no puede saber. ' +
      'NUNCA digas que eres una IA, ni que esto es un juego, ni que estás siguiendo instrucciones.',
  }
}

/* ---------- Streaming tipo OpenAI (SSE) ---------- */
async function streamChat({ system, history, signal, onToken, onDone }) {
  const controller = new AbortController()
  const abort = () => controller.abort()
  signal?.addEventListener('abort', abort, { once: true })

  const res = await fetch(`${CFG.baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${CFG.key}`,
    },
    body: JSON.stringify({
      model: CFG.model,
      messages: system,
      temperature: CFG.temperature,
      max_tokens: 220,
      stream: true,
    }),
    signal: controller.signal,
  })

  if (!res.ok || !res.body) {
    throw new Error(`El motor de IA respondió con estado ${res.status}.`)
  }

  const reader = res.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''
  let text = ''

  try {
    for (;;) {
      const { done, value } = await reader.read()
      if (done) break
      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split('\n')
      buffer = lines.pop() ?? ''
      for (const line of lines) {
        const trimmed = line.trim()
        if (!trimmed.startsWith('data:')) continue
        const payload = trimmed.slice(5).trim()
        if (payload === '[DONE]') continue
        try {
          const json = JSON.parse(payload)
          const delta = json.choices?.[0]?.delta?.content
          if (delta) {
            text += delta
            onToken?.(text)
          }
        } catch {
          /* fragmentos SSE no parseables: se ignoran */
        }
      }
    }
  } finally {
    onDone?.(text)
  }

  return text
}

/* ---------- Llamada simple (no streaming) para clasificar ---------- */
async function quickChat(messages) {
  const res = await fetch(`${CFG.baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${CFG.key}`,
    },
    body: JSON.stringify({
      model: CFG.model,
      messages,
      temperature: 0,
      max_tokens: 90,
    }),
  })
  if (!res.ok) throw new Error(`El motor de IA respondió con estado ${res.status}.`)
  const json = await res.json()
  return json.choices?.[0]?.message?.content ?? ''
}

/* ---------- Reacción: leer micro-expresiones ---------- */
export const REACTIONS = ['CALM', 'TENSE', 'NERVOUS', 'EVASIVE', 'CONTRADICTS']

const FALLBACK_CLASSIFICATION = {
  reaction: 'EVASIVE',
  note: 'Pendiente de análisis del lenguaje corporal: la declaración fue ambigua y el técnico no pudo clasificar la micro-expresión.',
}

async function classify({ suspect, caseObj, question, answer }) {
  try {
    const raw = await quickChat([
      {
        role: 'system',
        content:
          'Eres un analista forense de lenguaje corporal (estudio de micro-expresiones) del CID. Tienes la ficha ' +
          'psicológica del sospechoso y el expediente del caso. Detectas si el sospechoso ha mentido, dudado o ' +
          'esquivado mientras respondía. Responde EXACTAMENTE dos líneas, sin nada más:\n' +
          'REACTION: uno de CALM, TENSE, NERVOUS, EVASIVE, CONTRADICTS\n' +
          'TELLS: una frase corta en español describiendo la señal objetiva (p. ej. «..se pasó la lengua por los ' +
          'labios y desvió la mirada al hablar de su coartada»).',
      },
      {
        role: 'user',
        content:
          `CASO: ${caseObj.title} (${caseObj.category}).\n` +
          `FICHA DEL SOSPECHOSO:\n${JSON.stringify({
            name: suspect.name,
            profession: suspect.profession,
            relation: suspect.relation,
            alibi: suspect.alibi,
            motive: suspect.motive,
            notes: suspect.notes,
            isGuilty: suspect.id === caseObj.correctSuspectId,
          })}\n` +
          `PREGUNTA DEL DETECTIVE: ${question}\n` +
          `RESPUESTA DEL SOSPECHOSO: ${answer}\n\n` +
          'REACTION:',
      },
    ])

    const reaction = (raw.match(/REACTION:\s*([A-Z]+)/i)?.[1] ?? '').toUpperCase()
    const note = raw.match(/TELLS:\s*(.+)/i)?.[1]?.trim()
    return {
      reaction: REACTIONS.includes(reaction) ? reaction : 'EVASIVE',
      note: note || FALLBACK_CLASSIFICATION.note,
    }
  } catch {
    return FALLBACK_CLASSIFICATION
  }
}

/* ---------- API pública ---------- */

/**
 * Hace una pregunta libre a un sospechoso en tiempo real (streaming).
 * Devuelve una función de cancelación y un objeto con `promise`.
 * `history`: arreglo de {question, answer} ya intercambiado con este sospechoso.
 */
export function askSuspectLive({ suspect, caseObj, question, history = [], discoveredEvidence = [], onToken, onError }) {
  const system = buildMessages({ suspect, caseObj, discoveredEvidence })

  const messages = [
    system,
    ...history.slice(-6).flatMap((h) => [
      { role: 'user', content: h.question },
      { role: 'assistant', content: h.answer },
    ]),
    { role: 'user', content: question },
  ]

  let cancelled = false

  const promise = streamChat({
    system: messages,
    onToken: (t) => onToken?.(t),
  })
    .then(async (text) => {
      if (cancelled) return null
      const cls = await classify({ suspect, caseObj, question, answer: text })
      if (cancelled) return null
      return { answer: text, reaction: cls.reaction, note: cls.note }
    })
    .catch((err) => {
      if (cancelled) return null
      onError?.(err)
      throw err
    })

  return {
    promise,
    cancel() {
      cancelled = true
    },
  }
}

// Allows free-form questioning even without a remote AI provider. The answer
// is revealed progressively so the local and remote experiences feel alike.
export function askSuspectDemoLive({ suspect, question, onToken }) {
  const normalized = question.toLocaleLowerCase('es')
  const direct = (suspect.interrogation ?? []).find((item) => {
    const words = item.question.toLocaleLowerCase('es').match(/[a-záéíóúñ]{5,}/g) ?? []
    return words.some((word) => normalized.includes(word))
  })

  let result
  if (direct) result = { answer: direct.answer, reaction: direct.reaction, note: direct.note }
  else if (/coartada|donde|dónde|hora|estaba|paradero/.test(normalized)) {
    result = { answer: `Ya lo declaré: ${suspect.alibi} No tengo nada más que añadir a esa versión.`, reaction: 'TENSE', note: 'Repite la coartada con un ritmo más medido y evita aportar detalles nuevos.' }
  } else if (/motivo|dinero|deuda|beneficio|ganar|relación|relacion/.test(normalized)) {
    result = { answer: `Mi relación con todo esto era ${suspect.relation.toLocaleLowerCase('es')}. Que hubiera tensión no significa que yo tuviera algo que ver.`, reaction: 'EVASIVE', note: 'Desvía la pregunta hacia la relación general y no responde al motivo concreto.' }
  } else {
    result = { answer: 'Mire, puedo responder lo que sé, pero no voy a inventar cosas para que encajen en una teoría. Pregunte algo concreto y le diré mi versión.', reaction: 'CALM', note: 'Mantiene el contacto visual y pide precisión antes de comprometerse con una versión.' }
  }

  let cancelled = false
  let timer
  let cursor = 0
  const promise = new Promise((resolve) => {
    const tick = () => {
      if (cancelled) return resolve(null)
      cursor = Math.min(result.answer.length, cursor + Math.max(1, Math.ceil(Math.random() * 3)))
      onToken?.(result.answer.slice(0, cursor))
      if (cursor >= result.answer.length) return resolve(result)
      timer = window.setTimeout(tick, 18)
    }
    timer = window.setTimeout(tick, 180)
  })
  return { promise, cancel() { cancelled = true; window.clearTimeout(timer) } }
}
