import { Sparkles, Users, Siren, Gavel } from 'lucide-react'

const STEPS = [
  { key: 'scene', label: 'Escena', icon: Sparkles },
  { key: 'interrogation', label: 'Interrogatorio', icon: Users },
  { key: 'evidence', label: 'Evidencia', icon: Siren },
  { key: 'verdict', label: 'Veredicto', icon: Gavel },
]

/**
 * Barra de progreso interactiva: los pasos se desbloquean de a uno
 * ("aparece luego de otra cosa") y permiten volver a los anteriores.
 */
export default function SceneStepper({ current, maxUnlocked, onGo }) {
  return (
    <nav className="flow-steps" aria-label="Avance de la investigación">
      {STEPS.map((step, i) => {
        const Icon = step.icon
        const state = i < current ? 'done' : i === current ? 'active' : i <= maxUnlocked ? 'ready' : 'locked'
        return (
          <button
            key={step.key}
            type="button"
            className={`flow-step ${state}`}
            disabled={i > maxUnlocked}
            onClick={() => onGo(i)}
            aria-current={i === current ? 'step' : undefined}
          >
            <span className={`flow-step-ico ${state}`}>
              {i < current ? '✓' : <Icon size={16} aria-hidden="true" />}
            </span>
            <span className="flow-step-label">{step.label}</span>
          </button>
        )
      })}
    </nav>
  )
}