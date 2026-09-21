import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="page">
      <div className="state-block">
        <span className="brand-badge" style={{ width: 64, height: 64, fontSize: 26 }}>404</span>
        <h1 className="page-title">EXPEDIENTE NO ENCONTRADO</h1>
        <p className="muted" style={{ maxWidth: 420 }}>
          Este registro de investigación no existe, nunca fue registrado o ha sido sellado.
        </p>
        <Link to="/" className="btn btn-primary">
          <ArrowLeft size={16} aria-hidden="true" /> VOLVER AL CUARTEL
        </Link>
      </div>
    </div>
  )
}