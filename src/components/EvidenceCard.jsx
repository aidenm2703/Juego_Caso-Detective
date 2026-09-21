import { Check, MapPin, Fingerprint, FileText, Search, Mic, Cpu, Lock, Sparkles } from 'lucide-react'
import { EVIDENCE_TYPE_LABEL } from '../utils/format.js'

const TYPE_ICON = {
  physical: Fingerprint,
  document: FileText,
  trace: Search,
  testimony: Mic,
  digital: Cpu,
}

export default function EvidenceCard({
  evidence,
  isSelected,
  isRevealed,
  isHidden = false,
  isLocked = false,
  lockedAct = null,
  onSelect,
  showAnalysis = false,
  disabled = false,
}) {
  const Icon = TYPE_ICON[evidence.type] || Fingerprint

  if (isLocked) {
    return (
      <div
        className="evidence-card locked"
        role="status"
        aria-label={`Evidencia bloqueada: ${evidence.title}. Se desbloquea en el acto ${lockedAct}.`}
      >
        <div className="evidence-lock-ico">
          <Lock size={20} aria-hidden="true" />
        </div>
        <div className="evidence-title">{evidence.title}</div>
        <span className="muted" style={{ fontSize: 11.5 }}>Se desbloquea en el ACTO {lockedAct}</span>
      </div>
    )
  }

  if (isHidden) {
    return (
      <button
        type="button"
        className="evidence-card hidden"
        onClick={() => onSelect?.(evidence)}
        disabled={disabled}
        aria-label={`Pista velada. Toca para examinar: ${evidence.title}.`}
        style={{ textAlign: 'left' }}
      >
        <div className="evidence-mystery-ico" aria-hidden="true">
          <Sparkles size={18} />
        </div>
        <strong className="evidence-mystery-label">PISTA VELADA</strong>
        <span className="muted" style={{ fontSize: 11.5 }}>Toca para examinar</span>
      </button>
    )
  }

  return (
    <button
      type="button"
      className={`evidence-card${isSelected ? ' selected' : ''}${isRevealed ? ' revealed' : ''}`}
      onClick={() => onSelect?.(evidence)}
      disabled={disabled}
      aria-pressed={Boolean(isSelected)}
      aria-label={`Evidencia: ${evidence.title}. ${isSelected ? 'Marcada. Selecciónala otra vez para desmarcar.' : 'Sin marcar.'}`}
      style={{ textAlign: 'left' }}
    >
      {isSelected && <span className="selected-flag" aria-hidden="true"><Check size={13} /></span>}

      <div className="evidence-head">
        <span className="evidence-type">
          <Icon size={13} aria-hidden="true" /> {EVIDENCE_TYPE_LABEL[evidence.type] || evidence.type}
        </span>
        {isSelected && <span className="tag tag-green">MARCADA</span>}
      </div>

      <div className="evidence-title">{evidence.title}</div>
      <div className="evidence-summary">{evidence.summary}</div>

      <span className="evidence-location">
        <MapPin size={11} aria-hidden="true" /> {evidence.location}
      </span>

      {(showAnalysis || isSelected) && evidence.analysisNote && (
        <div className="evidence-analysis">LAB: {evidence.analysisNote}</div>
      )}

      {isRevealed && !isSelected && <span className="tag tag-amber" style={{ position: 'absolute', top: 10, right: 10 }}>¿RELEVANTE?</span>}
    </button>
  )
}