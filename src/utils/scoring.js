export const SCORING = {
  baseScore: 5000,
  correctSuspectBonus: 3000,
  wrongSuspectPenalty: 4500,
  correctEvidenceBonus: 500,
  incorrectEvidencePenalty: 300,
  timeBonusMax: 2000,
  hintPenalty: 500,
}

export const RANK_BANDS = [
  { rank: 'S', min: 9000 },
  { rank: 'A', min: 7500 },
  { rank: 'B', min: 6000 },
  { rank: 'C', min: 4500 },
  { rank: 'D', min: 3000 },
  { rank: 'F', min: 0 },
]

export function getRank(score) {
  return RANK_BANDS.find((band) => score >= band.min).rank
}

const RANK_ORDER = { S: 5, A: 4, B: 3, C: 2, D: 1, F: 0, '-': -1 }

export function betterRank(current, candidate) {
  if (!current || current === '-') return candidate
  return RANK_ORDER[candidate] > RANK_ORDER[current] ? candidate : current
}

export function calculateScore({
  correctSuspect,
  selectedEvidenceIds,
  correctEvidenceIds,
  timeRemaining,
  timeLimit,
  hintsUsed,
}) {
  const correctEvidenceCount = selectedEvidenceIds.filter((id) => correctEvidenceIds.includes(id)).length
  const incorrectEvidenceCount = selectedEvidenceIds.filter((id) => !correctEvidenceIds.includes(id)).length

  const safeTimeLimit = timeLimit > 0 ? timeLimit : 1
  const timeRatio = Math.max(0, Math.min(1, timeRemaining / safeTimeLimit))
  const timeBonus = Math.round(SCORING.timeBonusMax * timeRatio)

  const rawScore =
    SCORING.baseScore +
    (correctSuspect ? SCORING.correctSuspectBonus : -SCORING.wrongSuspectPenalty) +
    correctEvidenceCount * SCORING.correctEvidenceBonus -
    incorrectEvidenceCount * SCORING.incorrectEvidencePenalty +
    timeBonus -
    hintsUsed * SCORING.hintPenalty

  const score = Math.max(0, rawScore)
  const rank = getRank(score)

  return {
    score,
    rank,
    correctEvidenceCount,
    incorrectEvidenceCount,
    timeBonus,
    evidenceCoverage: percentage(correctEvidenceCount, correctEvidenceIds.length),
  }
}

export function calculateAccuracy({ selectedEvidenceIds, correctEvidenceIds }) {
  if (selectedEvidenceIds.length === 0) return 0
  const correct = selectedEvidenceIds.filter((id) => correctEvidenceIds.includes(id)).length
  return percentage(correct, selectedEvidenceIds.length)
}

export function percentage(part, total) {
  if (total <= 0) return 0
  return Math.round((part / total) * 100)
}