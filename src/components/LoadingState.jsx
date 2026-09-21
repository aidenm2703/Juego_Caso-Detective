import { Radar } from 'lucide-react'

export default function LoadingState({ message = 'Cargando...', sub }) {
  return (
    <div className="state-block" role="status" aria-live="polite">
      <div className="spinner" aria-hidden="true" />
      <div>
        <strong style={{ color: 'var(--text)' }}>{message}</strong>
        {sub && <div className="muted" style={{ fontSize: 13, marginTop: 4 }}>{sub}</div>}
      </div>
      <Radar size={18} color="var(--red)" aria-hidden="true" />
    </div>
  )
}