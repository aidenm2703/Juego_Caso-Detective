import { FileX2, RotateCw } from 'lucide-react'

export default function ErrorState({ message = 'No se pudo cargar la investigación.', onRetry, children }) {
  return (
    <div className="state-block" role="alert">
      <FileX2 size={40} color="var(--red)" aria-hidden="true" />
      <div>
        <strong>{message}</strong>
        {children && <div className="muted" style={{ fontSize: 13, marginTop: 4, maxWidth: 420 }}>{children}</div>}
      </div>
      {onRetry && (
        <button className="btn" onClick={onRetry}>
          <RotateCw size={15} aria-hidden="true" /> REINTENTAR
        </button>
      )}
    </div>
  )
}