import { FileSearch } from 'lucide-react'
import ProgressBar from './ProgressBar.jsx'

export default function InvestigationProgress({ selectedCount, total }) {
  const analyzed = Math.min(selectedCount, total)

  return (
    <div className="panel panel-pad">
      <div className="panel-title">
        <span className="ico"><FileSearch size={16} aria-hidden="true" /></span>
        Evidencia analizada
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
        <strong className="mono" style={{ fontSize: 26, letterSpacing: '0.04em' }}>
          {analyzed} <span className="faint">/ {total}</span>
        </strong>
        <span className="tag tag-neutral">{total - analyzed} por revisar</span>
      </div>

      <ProgressBar value={analyzed} max={total} tone="blue" label="Progreso del análisis de evidencia" />
    </div>
  )
}