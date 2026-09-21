import { FolderOpen } from 'lucide-react'

export default function EmptyState({ message = 'No hay registros.', children }) {
  return (
    <div className="state-block">
      <FolderOpen size={38} color="var(--text-faint)" aria-hidden="true" />
      <strong className="muted">{message}</strong>
      {children}
    </div>
  )
}