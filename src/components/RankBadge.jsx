export default function RankBadge({ rank, size = 46 }) {
  if (!rank || rank === '-') {
    return <span className="rank-badge rank-F" style={{ width: size, height: size, color: 'var(--text-faint)' }}>?</span>
  }
  return <span className={`rank-badge rank-${rank}`} style={{ width: size, height: size }} aria-label={`Rango ${rank}`}>{rank}</span>
}