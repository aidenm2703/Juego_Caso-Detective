import { useState } from 'react'
import { Lightbulb, Eye, ShieldCheck, UserCheck } from 'lucide-react'
import { SCORING } from '../utils/scoring.js'

const HINT_META = [
  { icon: Lightbulb, key: 'profile' },
  { icon: Eye, key: 'reveal' },
  { icon: ShieldCheck, key: 'eliminate' },
]

export default function HintPanel({ hints, hintsUsed, scoreDeduction = SCORING.hintPenalty, onUse }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="panel panel-pad">
      <button
        className="panel-title"
        onClick={() => setExpanded((v) => !v)}
        style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
        aria-expanded={expanded}
        aria-label="Protocolo de pistas"
      >
        <span className="ico"><Lightbulb size={16} aria-hidden="true" /></span>
        Protocolo de pistas · −{scoreDeduction} pts cada una
      </button>

      {expanded && (
        <div className="hint-list">
          {hints.map((hint, index) => {
            const used = hintsUsed.includes(hint.id)
            const IconComp = HINT_META[index % HINT_META.length]?.icon || Lightbulb
            return (
              <div key={hint.id} className={`hint-item${used ? ' used' : ''}`}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <IconComp size={15} color="var(--amber)" aria-hidden="true" />
                  <strong>{hint.title}</strong>
                  <span className="tag tag-amber" style={{ marginLeft: 'auto' }}>−{scoreDeduction}</span>
                </div>
                <p className="muted" style={{ fontSize: 12.5, margin: '6px 0 10px' }}>{hint.description}</p>
                <button
                  className="btn btn-ghost btn-block"
                  disabled={used}
                  onClick={() => onUse?.(hint)}
                >
                  {used ? 'USADA' : 'SOLICITAR PISTA'}
                </button>
              </div>
            )
          })}

          <div className="muted" style={{ fontSize: 12, display: 'flex', gap: 8, alignItems: 'center' }}>
            <UserCheck size={14} aria-hidden="true" /> No toda la evidencia es relevante. Marca solo lo que pruebe tu acusación.
          </div>
        </div>
      )}
    </div>
  )
}