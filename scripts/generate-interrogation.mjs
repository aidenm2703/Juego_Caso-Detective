#!/usr/bin/env node
/* eslint-disable no-console */
// Genera el campo `interrogation` de cada sospechoso en db.json
// (preguntas, respuestas, reacciones y anotaciones de micro-expresiones)
// y regenera la copia embebida src/data/database.js.
// Uso: node scripts/generate-interrogation.cjs

import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const ROOT = resolve(process.cwd())
const dbPath = resolve(ROOT, 'db.json')
const db = JSON.parse(readFileSync(dbPath, 'utf8'))

const evidenceById = Object.fromEntries(db.evidence.map((e) => [e.id, e]))

/* Contexto redaccional por caso (no es dato de gameplay, solo lenguaje narrativo). */
const CASE_CONTEXT = {
  1: { victimRef: 'al señor Marlowe', crime: 'la muerte', moment: 'la noche de la galería' },
  2: { victimRef: 'con el proyecto', crime: 'el robo', moment: 'esa noche en el laboratorio' },
  3: { victimRef: 'al señor Ashworth', crime: 'la muerte', moment: 'aquella noche en el hotel' },
  4: { victimRef: 'a Aurora', crime: 'el envenenamiento', moment: 'el entreacto de la gala' },
  5: { victimRef: 'a Cosme Aldana', crime: 'la muerte', moment: 'el trayecto nocturno' },
  6: { victimRef: 'con el archivo', crime: 'el incendio', moment: 'la madrugada del incendio' },
  7: { victimRef: 'con Sergio Ordóñez', crime: 'el rapto', moment: 'la noche de la subasta' },
  8: { victimRef: 'con Aldo Castel', crime: 'la desaparición', moment: 'esa noche en el teatro' },
  9: { victimRef: 'con Olga Ferrán', crime: 'el fraude', moment: 'aquellos días en el fondo' },
  10: { victimRef: 'con Iván Curiel', crime: 'el accidente', moment: 'esa mañana en la feria' },
}

/* Pseudo-aleatoreidad estable por sospechoso. */
function pick(seed, options) {
  const s = String(seed)
  let h = 0
  for (let i = 0; i < s.length; i += 1) h = (h * 31 + s.charCodeAt(i)) | 0
  return options[Math.abs(h) % options.length]
}

function guiltyCrimeAnswer(suspect) {
  const alibiStart = suspect.alibi.slice(0, 46)
  return `«No sé de qué habla. Yo no estaba allí. Y quien le dijo eso…» — se detiene, traga saliva y reconstruye la frase desde cero. Antes lo había dicho de carrerilla; ahora titubea hasta en los nombres: ${alibiStart ? `primero situó su alibi en ${alibiStart}…` : ''}`
}

function innocentCrimeAnswer() {
  return '«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»'
}

function buildQuestions(caseObj, suspect, ctx, guilty) {
  const keyEvidenceTitle = caseObj.correctEvidenceIds.map((id) => evidenceById[id]?.title).find(Boolean)
  const suspicionTense = suspect.suspicionLevel === 'HIGH' || suspect.suspicionLevel === 'MEDIUM'

  const clincherAct = 3

  return [
    {
      id: suspect.id * 10 + 1,
      type: 'ALIBI',
      act: 1,
      question: `¿Dónde estabas cuando ocurrió ${ctx.crime}?`,
      answer: suspect.alibi,
      reaction: guilty ? 'TENSE' : 'CALM',
      note: guilty
        ? 'Recitó el guion de su alibi en orden perfecto, con los dedos tamborileando sobre la mesa. Demasiado ensayado para alguien que «no sabía nada».'
        : 'Respondió sin titubear; su versión coincide con los registros disponibles.',
    },
    {
      id: suspect.id * 10 + 2,
      type: 'RELACION',
      act: 1,
      question: `¿Qué relación te unía ${ctx.victimRef}?`,
      answer: suspect.relation,
      reaction: 'CALM',
      note: guilty
        ? 'Habla de la víctima en pasado con una frialdad que no encaja con su relato de «cercanía».'
        : 'Tono neutro y coherente con su rol; esta es la parte que relata con más soltura.',
    },
    {
      id: suspect.id * 10 + 3,
      type: 'MOTIVO',
      act: 1,
      question: `Hay quien dice que ${suspect.motive.trim().replace(/[.!]+$/, '')}. ¿Qué respondes?`,
      answer: guilty
        ? '«Eso es una mentira calculada. Quien me acusa debería explicar por qué la escena no tiene puertas forzadas reales.» — responde demasiado rápido, sin dejar pausas para interrumpir.'
        : `«Eso es mi vida privada, no ${ctx.crime}. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.`,
      reaction: guilty ? 'EVASIVE' : suspicionTense ? 'NERVOUS' : 'TENSE',
      note: guilty
        ? 'Cambió de tema al instante y al insistirle se pasó la lengua por los labios y desvió la mirada hacia la puerta. Fue la única pregunta que intentó cerrar sola.'
        : 'Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria.',
    },
    {
      id: suspect.id * 10 + 4,
      type: 'GENERAL',
      act: 1,
      question: `¿Hay algo que ocultes acerca de ${ctx.moment}?`,
      answer: guilty
        ? '«No oculto nada, y este interrogatorio me está hartando.» — cruza los brazos y la voz se le seca a mitad de frase.'
        : '«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»',
      reaction: guilty ? 'NERVOUS' : 'TENSE',
      note: guilty
        ? 'Respiración audible, pulso visible en la mandíbula. Es la pregunta donde pierde por completo la compostura.'
        : 'Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona.',
    },
    {
      id: suspect.id * 10 + 5,
      type: 'PRUEBA',
      act: clincherAct,
      question: `Mi equipo encontró ${keyEvidenceTitle}. ¿Todavía lo niegas todo?`,
      answer: guilty ? guiltyCrimeAnswer(suspect) : innocentCrimeAnswer(),
      reaction: guilty ? 'CONTRADICTS' : suspicionTense ? 'TENSE' : 'CALM',
      note: guilty
        ? 'CONTRADICCIÓN: recién había fijado su alibi para esa misma franja y ahora sostiene que «no estaba allí». Los dedos le tiemblan y repite la frase dos veces, cambiando los detalles entre cada repetición.'
        : suspicionTense
          ? 'Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió.'
          : 'Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño.',
    },
  ]
}

let changed = 0

for (const caseObj of db.cases) {
  const ctx = CASE_CONTEXT[caseObj.id] ?? CASE_CONTEXT[1]
  const suspects = db.suspects.filter((s) => s.caseId === caseObj.id)
  for (const suspect of suspects) {
    const guilty = suspect.id === caseObj.correctSuspectId
    suspect.interrogation = buildQuestions(caseObj, suspect, ctx, guilty)
    changed += 1
  }
}

writeFileSync(dbPath, `${JSON.stringify(db, null, 2)}\n`, 'utf8')

/* Regenera la copia embebida que usa el offline fallback. */
const dbModulePath = resolve(ROOT, 'src/data/database.js')
writeFileSync(
  dbModulePath,
  `// Generado automáticamente desde db.json - no editar a mano.\nexport const localDatabase = ${JSON.stringify(db, null, 2)}\n`,
  'utf8',
)

console.log(`[generate-interrogation] ${changed} sospechosos con interrogatorio actualizado.`)
console.log('[generate-interrogation] db.json y src/data/database.js regenerados.')