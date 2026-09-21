const ACCENTS = /[áéíóúüñ]/g
const FOLD = { á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u', ü: 'u', ñ: 'n' }

function normalise(value = '') {
  return value.toLowerCase().replace(ACCENTS, (letter) => FOLD[letter] || letter)
}

const INTENTS = [
  ['GREETING', /^(hola|buenas|buenos dias|buenas tardes|buenas noches|hey)\b/],
  ['WELLBEING', /\b(como estas|que tal|te encuentras|estas bien|como se siente)\b/],
  ['PROVOCATION', /\b(pene|sexo|idiota|estupido|estupida|imbecil|callate)\b/],
  ['INTEGRITY', /\b(imparcial|honesto|honesta|fiable|confiar|ocultas|oculta|nervioso|nerviosa|miedo|personalidad|como eres)\b/],
  ['ALIBI', /\b(donde|estabas|encontraba|paradero|coartada|quien estaba contigo|confirmar)\b/],
  ['TIMELINE', /\b(cuando|hora|llegaste|saliste|entro|entraste|vio|viste|antes|despues)\b/],
  ['MOTIVE', /\b(porque|motivo|odiabas|problema|discusion|dinero|deuda|beneficio|ganar)\b/],
  ['RELATIONSHIP', /\b(relacion|conocia|conocias|socio|victima|victor|aurora|marlowe)\b/],
  ['EVIDENCE', /\b(foto|fotografia|prueba|evidencia|grabacion|mensaje|registro|huella|arma|documento)\b/],
  ['ACCUSATION', /\b(mientes|mintio|mintiendo|culpable|asesino|acuso|acusas|responsable|mentira)\b/],
]

function editDistance(left, right) {
  const row = Array.from({ length: right.length + 1 }, (_, index) => index)
  for (let i = 1; i <= left.length; i += 1) {
    let diagonal = row[0]
    row[0] = i
    for (let j = 1; j <= right.length; j += 1) {
      const saved = row[j]
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, diagonal + (left[i - 1] === right[j - 1] ? 0 : 1))
      diagonal = saved
    }
  }
  return row[right.length]
}

function hasApproximateAccusation(text) {
  return text.split(/\s+/).some((word) => word.length >= 5 && ['culpable', 'asesino', 'mentira', 'mientes'].some((term) => editDistance(word, term) <= 2))
}

export function detectIntent(question) {
  const text = normalise(question)
  if (hasApproximateAccusation(text)) return 'ACCUSATION'
  return INTENTS.find(([, pattern]) => pattern.test(text))?.[0] ?? 'GENERAL'
}

function getState(history, suspect, caseObj, discoveredEvidence = []) {
  const turns = history.length
  const intents = history.map((entry) => detectIntent(entry.question))
  const accusations = intents.filter((intent) => intent === 'ACCUSATION').length
  const evidenceQuestions = intents.filter((intent) => intent === 'EVIDENCE').length
  const offTopicCount = intents.filter((intent) => ['GREETING', 'WELLBEING', 'PROVOCATION'].includes(intent)).length
  const caseEvidence = discoveredEvidence.filter(Boolean)
  const relevantEvidence = caseEvidence.filter((item) => {
    const haystack = normalise(`${item.title} ${item.description} ${item.analysis}`)
    return haystack.includes(normalise(suspect.name.split(' ')[0])) || suspect.id === caseObj.correctSuspectId
  })
  const pressure = Math.min(100, turns * 9 + accusations * 24 + evidenceQuestions * 10 + relevantEvidence.length * 18)
  return { turns, intents, pressure, relevantEvidence, guilty: suspect.id === caseObj.correctSuspectId, offTopicCount }
}

function pick(options, state, intent) {
  const used = new Set(state.history.filter((turn) => detectIntent(turn.question) === intent).map((turn) => turn.answer))
  return options.find((answer) => !used.has(answer)) ?? options[(state.turns + intent.length) % options.length]
}

function personalVoice(suspect) {
  const job = normalise(suspect.profession)
  if (job.includes('contable') || job.includes('contador')) return 'Soy una persona de números: una cifra tiene respaldo o no lo tiene.'
  if (job.includes('guardia') || job.includes('seguridad')) return 'Me entrenaron para describir hechos y horarios, no para adornarlos.'
  if (job.includes('restaur')) return 'Trabajo con piezas frágiles; aprendí a observar antes de tocar nada.'
  if (job.includes('curador') || job.includes('galer')) return 'Conozco esta galería mejor que muchos, y sé cómo una apariencia puede engañar.'
  if (job.includes('abog')) return 'Mido las palabras porque sé cuánto pesa una afirmación sin prueba.'
  return `No me gusta que me definan por un titular. Soy ${suspect.profession.toLowerCase()}.`
}

function responseFor({ suspect, caseObj, question, history, discoveredEvidence }) {
  const intent = detectIntent(question)
  const state = { ...getState(history, suspect, caseObj, discoveredEvidence), history }
  state.pressure = Math.min(100, state.pressure + (intent === 'ACCUSATION' ? 24 : intent === 'EVIDENCE' ? 10 : 0))
  const firstName = suspect.name.split(' ')[0]
  const defensive = state.pressure > 62
  let answer
  let reaction = 'CALM'
  let note = 'Contesta sin apartar la vista de la grabadora.'

  if (intent === 'GREETING') {
    answer = pick([
      `Buenas. ${firstName}, ${suspect.profession}. Entiendo que quiere hablar de la noche del caso.`,
      `Hola, detective. Estoy dispuesto a colaborar dentro de lo que sé.`,
      `Buenas noches. Llevo aquí desde que me citaron; pregunte lo que necesite del expediente.`,
    ], state, intent)
    note = 'Responde al saludo, pero encuadra la conversación en la investigación.'
  } else if (intent === 'WELLBEING') {
    answer = pick([
      `No estoy especialmente bien; me han traído a declarar por algo grave. Pero puedo contestar con calma.`,
      `Cansado, si quiere saberlo. Aun así, prefiero que hablemos de lo que ocurrió.`,
      `He tenido mejores noches. Si su pregunta tiene relación con el caso, adelante.`,
    ], state, intent)
    reaction = state.guilty ? 'TENSE' : 'CALM'
    note = 'La respuesta humana no revela hechos nuevos ni evita el procedimiento.'
  } else if (intent === 'PROVOCATION') {
    answer = state.offTopicCount > 1
      ? `Ya le advertí que no voy a seguir una conversación así. Si tiene una pregunta sobre el caso, la responderé.`
      : `No voy a responder a provocaciones. Si intenta desestabilizarme, hágalo con una pregunta que tenga relación con el caso.`
    reaction = state.guilty ? 'EVASIVE' : 'TENSE'
    note = 'Marca un límite y redirige la entrevista sin inventar una confesión.'
  } else if (intent === 'INTEGRITY') {
    answer = pick([
      `¿Imparcial? ${personalVoice(suspect)} Mi relación con el caso es ${suspect.relation.toLowerCase()}, pero eso no cambia lo que vi.`,
      `No le pido que confíe en mí por mi palabra. Contraste mi versión con ${suspect.alibi.toLowerCase()} y saque sus conclusiones.`,
      `Tengo mis propios intereses, como cualquiera en esta sala. Lo importante es que no le voy a vender una historia distinta para quedar bien.`,
    ], state, intent)
    reaction = state.guilty ? (defensive ? 'EVASIVE' : 'TENSE') : 'CALM'
    note = state.guilty ? 'Responde con precisión, pero evita separar sus intereses personales del expediente.' : 'Reconoce su posición personal y propone contrastar su declaración.'
  } else if (intent === 'GENERAL') {
    answer = pick([
      `No quiero responderle con una frase vacía. ${personalVoice(suspect)} Si concreta qué le preocupa, puedo ser útil.`,
      `No voy a inventar detalles para ayudarle a cerrar el expediente. Pero sí puedo hablar de mi relación con la víctima, de mi horario o de lo que vi.`,
      `${firstName} se toma un segundo antes de responder: «Pregunte por una persona, una hora o una prueba concreta; no quiero contaminar su investigación con conjeturas».`,
    ], state, intent)
    reaction = state.guilty && state.pressure > 55 ? 'EVASIVE' : 'CALM'
    note = 'Da una respuesta propia y ofrece líneas concretas de investigación.'
  } else if (intent === 'ALIBI' || intent === 'TIMELINE') {
    const answers = [
      `Mi declaración es la misma: ${suspect.alibi}`,
      `Ya indiqué dónde estaba: ${suspect.alibi} Puede comprobarlo en el registro.`,
      `No voy a rellenar los huecos con suposiciones. ${suspect.alibi}`,
    ]
    answer = pick(answers, state, intent)
    reaction = state.guilty && state.pressure > 38 ? 'TENSE' : 'CALM'
    note = reaction === 'TENSE' ? 'Repite la coartada, pero tarda un instante antes de fijar la hora.' : 'Mantiene una versión estable y ofrece una vía de verificación.'
  } else if (intent === 'MOTIVE' || intent === 'RELATIONSHIP') {
    answer = pick([
      `Mi relación con este asunto era ${suspect.relation.toLowerCase()}. Eso no convierte una tensión en un crimen.`,
      `Sí, había un motivo para discutir: ${suspect.motive.toLowerCase()} Pero discutir no es matar.`,
      `No voy a fingir que todo era cordial. ${suspect.motive} Aun así, me fui sin hacerle daño a nadie.`,
    ], state, intent)
    reaction = state.guilty ? (defensive ? 'EVASIVE' : 'TENSE') : 'NERVOUS'
    note = state.guilty ? 'Aprieta la mandíbula al separar el conflicto personal del crimen.' : 'Reconoce el roce personal, pero no altera los hechos comprobables.'
  } else if (intent === 'EVIDENCE') {
    const clue = state.relevantEvidence[0]
    if (state.guilty && clue) {
      answer = state.pressure > 42
        ? `Está bien, esa pieza me sitúa más cerca de lo que dije. Pero estar cerca no prueba que yo lo hiciera.`
        : `He visto esa evidencia. No sé qué pretende concluir con ella; una fotografía no cuenta toda la noche.`
      reaction = state.pressure > 42 ? 'CONTRADICTS' : 'EVASIVE'
      note = state.pressure > 42 ? 'Su explicación se aparta de la coartada registrada por primera vez.' : 'Mira la evidencia antes de responder y evita nombrar el detalle comprometedor.'
    } else {
      answer = `No puedo interpretar una prueba que no vi en el momento. Dígame qué acredita y le diré si encaja con lo que sé.`
      reaction = 'CALM'
      note = 'No rellena lagunas con información que no podría conocer.'
    }
  } else if (intent === 'ACCUSATION') {
    answer = state.guilty && defensive
      ? `¿Acusarme no le basta? Entonces presente algo que resista una sala, detective. No voy a confesar una historia que usted armó.`
      : `Puede sospechar lo que quiera, pero una acusación no reemplaza una prueba. Mi versión sigue en el acta.`
    reaction = state.guilty ? (state.pressure > 72 ? 'CONTRADICTS' : 'EVASIVE') : 'TENSE'
    note = state.guilty ? 'Su indignación llega tarde; la voz pierde firmeza al defender su versión.' : 'Se pone a la defensiva, pero no añade datos incompatibles.'
  } else {
    answer = pick([
      `Pregunte con precisión, detective. Puedo hablar de lo que vi, no de una teoría completa.`,
      `No voy a inventar detalles para ayudarle a cerrar el expediente. Diga qué momento quiere aclarar.`,
      `${firstName} se toma un segundo antes de responder: «Si se refiere a esa noche, pregunte por una persona, una hora o una prueba concreta».`,
    ], state, intent)
    reaction = state.guilty && state.pressure > 55 ? 'EVASIVE' : 'CALM'
    note = 'Pide delimitar el asunto en lugar de improvisar información.'
  }
  return { answer, reaction, note, intent, pressure: state.pressure }
}

export function askContextualDemoLive({ suspect, caseObj, question, history = [], discoveredEvidence = [], onToken }) {
  const result = responseFor({ suspect, caseObj, question, history, discoveredEvidence })
  let cancelled = false
  let timer
  let cursor = 0
  const promise = new Promise((resolve) => {
    const tick = () => {
      if (cancelled) return resolve(null)
      cursor = Math.min(result.answer.length, cursor + 3)
      onToken?.(result.answer.slice(0, cursor))
      if (cursor >= result.answer.length) return resolve(result)
      timer = setTimeout(tick, 15)
    }
    timer = setTimeout(tick, 120)
  })
  return { promise, cancel() { cancelled = true; clearTimeout(timer) } }
}
