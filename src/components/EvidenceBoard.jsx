import EvidenceCard from './EvidenceCard.jsx'
import { isEvidenceLocked } from '../utils/gameLogic.js'

export default function EvidenceBoard({
  evidence,
  selectedIds,
  revealedIds,
  examinedIds = [],
  currentActIndex = 0,
  onToggle,
  disabled = false,
}) {
  return (
    <div className="evidence-grid" aria-label="Tablero de evidencias">
      {evidence.map((item) => {
        const locked = isEvidenceLocked(item, currentActIndex)
        const examined = examinedIds.includes(item.id) || revealedIds.includes(item.id)
        const hidden = !locked && !examined
        return (
          <EvidenceCard
            key={item.id}
            evidence={item}
            isSelected={selectedIds.includes(item.id)}
            isRevealed={revealedIds.includes(item.id)}
            isHidden={hidden}
            isLocked={locked}
            lockedAct={item.act ?? 1}
            onSelect={onToggle}
            disabled={disabled}
            showAnalysis={selectedIds.includes(item.id)}
          />
        )
      })}
    </div>
  )
}