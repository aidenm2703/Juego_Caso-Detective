import { useEffect } from 'react'
import { CheckCircle2, AlertTriangle, Info, X } from 'lucide-react'

const ICONS = {
  success: CheckCircle2,
  error: AlertTriangle,
  info: Info,
}

export default function Notification({ message, type = 'info', duration = 4000, onDismiss }) {
  const Icon = ICONS[type] || Info

  useEffect(() => {
    if (!duration) return undefined
    const timeout = setTimeout(onDismiss, duration)
    return () => clearTimeout(timeout)
  }, [duration, onDismiss])

  return (
    <div className={`notification ${type}`} role="status" aria-live="polite">
      <Icon size={19} color="var(--text)" style={{ flexShrink: 0 }} aria-hidden="true" />
      <span>{message}</span>
      <button
        className="btn btn-ghost"
        style={{ margin: '-4px -6px -4px 4px', padding: 4 }}
        onClick={onDismiss}
        aria-label="Descartar notificación"
      >
        <X size={14} />
      </button>
    </div>
  )
}