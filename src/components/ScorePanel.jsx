import { Gauge } from 'lucide-react'
import { SCORING } from '../utils/scoring.js'
import { formatScore } from '../utils/format.js'

/**
 * Panel de puntuación en vivo de la investigación activa.
 * Solo muestra los factores conocidos ANTES de calificar el veredicto —
 * nunca revela qué sospechoso o evidencia es la correcta.
 */
export default function ScorePanel({ timeRemaining, timeLimit, hintsUsed }) {
  const ratio = timeLimit > 0 ? Math.max(0, Math.min(1, timeRemaining / timeLimit)) : 0
  const timeBonus = Math.round(SCORING.timeBonusMax * ratio)
  const deductions = hintsUsed * SCORING.hintPenalty
  const guaranteed = Math.max(0, SCORING.baseScore + timeBonus - deductions)

  return (
    <div className="panel panel-pad">
      <div className="panel-title">
        <span className="ico"><Gauge size={16} aria-hidden="true" /></span>
        Panel de puntuación
      </div>

      <div className="verdict-row">
        <span className="k">Puntuación base</span>
        <span className="v">+{formatScore(SCORING.baseScore)}</span>
      </div>
      <div className="verdict-row">
        <span className="k">Sospechoso correcto</span>
        <span className="v">+{formatScore(SCORING.correctSuspectBonus)}</span>
      </div>
      <div className="verdict-row">
        <span className="k">Evidencia relevante (cada una)</span>
        <span className="v">+{formatScore(SCORING.correctEvidenceBonus)}</span>
      </div>
      <div className="verdict-row">
        <span className="k">Evidencia irrelevante (cada una)</span>
        <span className="v" style={{ color: 'var(--red)' }}>−{formatScore(SCORING.incorrectEvidencePenalty)}</span>
      </div>
      <div className="verdict-row">
        <span className="k">Bonus de tiempo (en vivo)</span>
        <span className="v">+{formatScore(timeBonus)}</span>
      </div>
      <div className="verdict-row">
        <span className="k">Descuento por pistas</span>
        <span className="v" style={{ color: 'var(--red)' }}>−{formatScore(deductions)}</span>
      </div>

      <div className="verdict-row" style={{ marginTop: 10, borderTop: '1px solid var(--border)', paddingTop: 12 }}>
        <span className="k"><strong>Mínimo garantizado</strong></span>
        <span className="v" style={{ fontFamily: 'var(--font-mono)', fontSize: 18, color: 'var(--amber)' }}>
          {formatScore(guaranteed)}
        </span>
      </div>
    </div>
  )
}