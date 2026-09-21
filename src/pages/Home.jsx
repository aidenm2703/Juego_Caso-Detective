import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArrowRight, FolderOpen, Volume2, VolumeX } from 'lucide-react'
import { api } from '../services/api.js'
import LoadingState from '../components/LoadingState.jsx'
import { isMusicEnabled, play, toggleMusic } from '../services/sound.js'

export default function Home() {
  const [cases, setCases] = useState([])
  const [caseFile, setCaseFile] = useState(null)
  const [ambienceOn, setAmbienceOn] = useState(isMusicEnabled())
  useEffect(() => {
    api.getCases()
      .then((list) => {
        setCases(list)
        setCaseFile(list.find((item) => item.id === 1) ?? list[0])
      })
      .catch(() => {})
  }, [])
  return <main className="detective-office">
    <div className="window-rain" aria-hidden="true"><i /><i /><i /><i /><i /></div>
    <div className="office-lamp" aria-hidden="true"><span /></div><div className="desk-surface" aria-hidden="true" />
    <section className="case-folder-home" aria-label="Expediente principal">
      <div className="folder-tab">DIVISIÓN DE HOMICIDIOS</div><div className="folder-stamp">CONFIDENCIAL</div>
      <p className="folder-code">EXPEDIENTE / {caseFile?.caseNumber ?? '404-001'}</p><h1>CASE 404</h1><h2>{caseFile?.title ?? 'El asesinato de la galería'}</h2><div className="folder-rule" />
      <dl><div><dt>VÍCTIMA</dt><dd>{caseFile?.victim ?? 'Víctor Marlowe'}</dd></div><div><dt>ESCENA</dt><dd>{caseFile?.location ?? 'Galería Marlowe, Ala Este'}</dd></div><div><dt>FECHA</dt><dd>{caseFile?.date ?? '12 SEP 2026'}</dd></div></dl>
      <p className="folder-note">La escena fue alterada. Seis declaraciones esperan ser contrastadas.</p>
      {caseFile ? <Link to={`/case/${caseFile.id}`} className="open-folder"><FolderOpen size={17} />ABRIR EXPEDIENTE <ArrowRight size={15} /></Link> : <LoadingState message="Localizando expediente…" />}
    </section>
    <aside className="desk-clippings" aria-label="Notas de investigación"><p>23:47</p><strong>GALERÍA MARLOWE</strong><span>La ventana no explica la escena.</span><p className="red-pencil">revisar entrada trasera</p></aside>
    <div className="coffee-ring" aria-hidden="true" /><Link className="office-archive" to="/cases"><span>ARCHIVO GENERAL</span><b>{(cases.length || 6).toString().padStart(2, '0')}</b> expedientes abiertos</Link>
    <button className="ambience-control" type="button" onClick={() => { const next = toggleMusic(); setAmbienceOn(next); play('click') }} aria-pressed={ambienceOn} aria-label={ambienceOn ? 'Desactivar ambiente sonoro' : 'Activar ambiente sonoro'}>{ambienceOn ? <Volume2 size={14} /> : <VolumeX size={14} />} {ambienceOn ? 'AMBIENTE: ON' : 'AMBIENTE: OFF'}</button>
  </main>
}
