import { Link } from 'react-router-dom'
import { ArrowRight, Lock, MapPin } from 'lucide-react'

export default function CaseCard({ caseData }) {
  const locked = caseData.status === 'LOCKED'
  return <article className={`case-file${locked ? ' locked' : ''}`}>
    <div className="file-clip" aria-hidden="true" />
    <div className="file-photo" style={{ '--case-hue': caseData.posterHue ?? 35 }}><span>ESCENA / {caseData.date}</span></div>
    <div className="file-copy">
      <p className="file-index">CASE {caseData.caseNumber} · {caseData.category}</p>
      <h3>{caseData.title}</h3>
      <p className="file-victim"><b>VÍCTIMA</b> {caseData.victim}</p>
      <p className="file-location"><MapPin size={13} /> {caseData.location}</p>
      <p className="file-brief">{caseData.brief}</p>
    </div>
    <div className="file-action">
      <span>{locked ? 'ARCHIVADO' : 'ACTIVO'} · {caseData.difficulty}</span>
      {locked ? <span className="file-lock"><Lock size={14} /> RESTRINGIDO</span> : <Link to={`/case/${caseData.id}`}>EXAMINAR <ArrowRight size={15} /></Link>}
    </div>
  </article>
}
