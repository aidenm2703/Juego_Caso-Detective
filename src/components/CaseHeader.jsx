import Timer from './Timer.jsx'
import Tag from './Tag.jsx'

export default function CaseHeader({ caseData, timeRemaining, timeActive, currentAct }) {
  const acts = caseData.acts ?? []
  return (
    <div className="case-header">
      <div className="case-title-wrap">
        <span className="mono" style={{ color: 'var(--red)' }}>
          CASO #{caseData.caseNumber}
        </span>
        <h2>{caseData.title}</h2>
        {acts.length > 0 && (
          <span className="mono act-chip">
            ACTO {Math.min(currentAct + 1, acts.length)} DE {acts.length} · {acts[currentAct]?.name}
          </span>
        )}
      </div>
      <Tag tone={caseData.difficulty} />
      <span className="tag tag-neutral">{caseData.category}</span>
      {timeActive && <Timer seconds={timeRemaining} />}
    </div>
  )
}