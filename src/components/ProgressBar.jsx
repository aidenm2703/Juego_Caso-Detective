export default function ProgressBar({ value, max = 100, tone = 'default', label }) {
  const pct = max > 0 ? Math.min(100, Math.max(0, Math.round((value / max) * 100))) : 0
  const toneClass = tone === 'green' ? 'progress-fill green' : tone === 'amber' ? 'progress-fill amber' : tone === 'blue' ? 'progress-fill blue' : 'progress-fill'

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{ display: 'grid', gap: 6 }}
    >
      <div className="progress-track">
        <div className={toneClass} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}