export const GAME_STATUS = {
  LOADING: 'loading',
  INVESTIGATING: 'investigating',
  FINISHED: 'finished',
}

export const DIFFICULTY_ORDER = { EASY: 1, MEDIUM: 2, HARD: 3 }

export function sortByDifficulty(cases) {
  return [...cases].sort((a, b) => DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty])
}

export function isVerdictReady(selectedSuspectId, selectedEvidenceIds) {
  return selectedSuspectId != null && selectedEvidenceIds.length > 0
}

export function mapResultToN8nPayload(result, playerName) {
  return {
    playerId: result.playerId,
    playerName: playerName || 'Detective',
    caseId: result.caseId,
    caseName: result.caseName,
    score: result.score,
    accuracy: result.accuracy,
    timeUsed: result.timeUsed,
    rank: result.rank,
    solved: result.correct,
  }
}

/* ---------- Staged progression ("actos" dependientes del tiempo) ---------- */

/**
 * Devuelve el índice (0-based) del acto activo dado el tiempo restante.
 * Los actos se desbloquean según el tiempo transcurrido (timeLimit - timeRemaining).
 */
export function getCurrentActIndex(caseData, timeRemaining) {
  const acts = caseData?.acts ?? []
  if (!acts.length) return 0
  const elapsed = Math.max(0, (caseData.timeLimit ?? 0) - (timeRemaining ?? 0))
  let index = 0
  acts.forEach((act, i) => {
    if (elapsed >= (act.unlockAt ?? 0)) index = i
  })
  return index
}

/**
 * Tiempo restante (segundos) hasta que se desbloquee el siguiente acto,
 * o 0 si ya se desbloquearon todos.
 */
export function getSecondsToNextAct(caseData, timeRemaining) {
  const acts = caseData?.acts ?? []
  const current = getCurrentActIndex(caseData, timeRemaining)
  const next = acts[current + 1]
  if (!next) return 0
  const elapsed = Math.max(0, (caseData.timeLimit ?? 0) - (timeRemaining ?? 0))
  return Math.max(0, next.unlockAt - elapsed)
}

/** ¿Está bloqueada una evidencia en el acto actual? */
export function isEvidenceLocked(evidence, currentActIndex) {
  return (evidence.act ?? 1) > currentActIndex + 1
}

/** ¿Se pueden ver las notas de un sospechoso en el acto actual? */
export function areNotesVisible(suspect, currentActIndex) {
  return (suspect.act ?? 1) <= currentActIndex + 1
}

/** ¿Está bloqueado un sospechoso para interrogar en el acto actual? */
export function isSuspectInterrogable(suspect, currentActIndex) {
  return (suspect.act ?? 1) <= currentActIndex + 1
}

/** ¿Está bloqueada una pregunta del interrogatorio? */
export function isQuestionLocked(question, currentActIndex) {
  return (question.act ?? 1) > currentActIndex + 1
}

/** Etiquetas en español de los tipos de pregunta del interrogatorio. */
export const QUESTION_TYPES = {
  ALIBI: 'Alibi',
  RELACION: 'Relación',
  MOTIVO: 'Motivo',
  GENERAL: 'General',
  PRUEBA: 'Prueba',
}

/**
 * Orden de tensión de las reacciones (para pintar la intensidad del pulso).
 */
export const REACTION_RANK = { CALM: 0, TENSE: 1, NERVOUS: 2, EVASIVE: 3, CONTRADICTS: 4 }