import { FileText, MapPin, CalendarDays, UserX, Layers, Clock } from 'lucide-react'
import { formatTime } from '../utils/format.js'

export default function StoryPanel({ caseData, currentActIndex = 0, secondsToNextAct = 0 }) {
  const acts = caseData?.acts ?? []
  const current = acts[currentActIndex]

  return (
    <div className="panel panel-pad story-panel">
      <div className="panel-title">
        <span className="ico"><FileText size={16} aria-hidden="true" /></span>
        Resumen del caso
      </div>

      <p className="story-body">{caseData.summary}</p>

      <div style={{ display: 'grid', gap: 8, fontSize: 13 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'var(--text-dim)' }}>
          <UserX size={15} color="var(--red)" aria-hidden="true" />
          <span><strong style={{ color: 'var(--text)' }}>Víctima:</strong> {caseData.victim}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'var(--text-dim)' }}>
          <MapPin size={15} color="var(--blue)" aria-hidden="true" />
          <span><strong style={{ color: 'var(--text)' }}>Escena:</strong> {caseData.location}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'var(--text-dim)' }}>
          <CalendarDays size={15} color="var(--amber)" aria-hidden="true" />
          <span><strong style={{ color: 'var(--text)' }}>Registrado:</strong> {caseData.date}</span>
        </div>
      </div>

      {acts.length > 0 && (
        <div className="acts-block">
          <div className="acts-head">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <Layers size={15} color="var(--amber)" aria-hidden="true" /> Avance de la investigación
            </span>
            {secondsToNextAct > 0 ? (
              <span className="mono acts-next" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Clock size={13} aria-hidden="true" /> Siguiente acto en {formatTime(secondsToNextAct)}
              </span>
            ) : (
              <span className="tag tag-green">CASO COMPLETADO</span>
            )}
          </div>

          <div className="acts-timeline">
            {acts.map((act, i) => {
              const done = i < currentActIndex
              const isNow = i === currentActIndex
              return (
                <div key={act.name} className={`act-item${isNow ? ' current' : ''}${done ? ' done' : ''}`}>
                  <div className="act-marker">{isNow ? '●' : done ? '✓' : i + 1}</div>
                  <div className="act-info">
                    <strong>ACTO {i + 1} · {act.name}</strong>
                    {isNow && <p className="act-text">{act.text}</p>}
                    {!isNow && <span className="muted act-note">{done ? 'Desbloqueado' : 'Bloqueado'}</span>}
                  </div>
                </div>
              )
            })}
          </div>

          {current?.text && <p className="act-current-text">{current.text}</p>}
        </div>
      )}
    </div>
  )
}