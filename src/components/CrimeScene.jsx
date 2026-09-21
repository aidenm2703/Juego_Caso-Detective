import { Crosshair, Search, LockKeyhole } from 'lucide-react'

const HOTSPOT_CLASS = ['body', 'window', 'desk', 'floor', 'phone', 'weapon']

export default function CrimeScene({ evidence = [], examinedIds = [], currentActIndex = 0, onExamine, disabled = false }) {
  const available = evidence.filter((item) => (item.act ?? 1) <= currentActIndex + 1).slice(0, 6)
  const examined = available.filter((item) => examinedIds.includes(item.id)).length

  return <section className="crime-scene" aria-label="Escena del crimen interactiva">
    <header className="crime-scene-head">
      <div><span className="page-kicker">Inspección inicial</span><h2>Galería Marlowe · despacho este</h2></div>
      <p><Crosshair size={15} /> {examined}/{Math.min(2, available.length)} hallazgos necesarios</p>
    </header>
    <div className="crime-scene-view">
      <div className="scene-light" aria-hidden="true" /><div className="scene-window" aria-hidden="true" /><div className="scene-desk" aria-hidden="true" />
      {available.map((item, index) => {
        const done = examinedIds.includes(item.id)
        return <button key={item.id} type="button" disabled={disabled} className={`scene-hotspot ${HOTSPOT_CLASS[index] ?? 'desk'}${done ? ' examined' : ''}`} onClick={() => onExamine(item)} aria-label={`${done ? 'Pista examinada' : 'Examinar'}: ${item.title}`}>
          <span>{done ? '✓' : <Search size={14} />}</span><b>{done ? item.title : 'EXAMINAR'}</b>
        </button>
      })}
      {!available.length && <p className="scene-empty"><LockKeyhole size={18} /> La escena se está preparando.</p>}
    </div>
    <p className="crime-scene-note">No puedes abrir entrevistas hasta examinar al menos dos elementos de la escena. Cada hallazgo se incorpora al tablero de evidencia.</p>
  </section>
}
