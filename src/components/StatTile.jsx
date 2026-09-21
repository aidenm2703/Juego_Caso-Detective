export default function StatTile({ icon: Icon, value, label, color = 'var(--red)' }) {
  return (
    <div className="stat-tile">
      {Icon && (
        <span className="stat-ico" style={{ color }}>
          <Icon size={18} aria-hidden="true" />
        </span>
      )}
      <div className="stat-val">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}