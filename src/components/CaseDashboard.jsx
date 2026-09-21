import { useMemo, useState } from 'react'
import { FileText, MapPin, FlaskConical, UserRound, Lock, Link2, AlertTriangle, Clock3, BookOpenCheck } from 'lucide-react'
import { EVIDENCE_TYPE_LABEL } from '../utils/format.js'
import { areNotesVisible } from '../utils/gameLogic.js'

function SuspectFicha({ suspect, notesVisible }) {
  return (
    <div className="exp-ficha">
      <div className="ficha-head">
        <img src={`/suspects/${suspect.id}.svg`} alt={`Retrato de ${suspect.name}`} width="84" height="84" loading="lazy" />
        <div className="ficha-ident">
          <strong>{suspect.name}</strong>
          <span>{suspect.profession}</span>
          <span className="muted">Edad: {suspect.age} · Sospecha: {suspect.suspicionLevel}</span>
        </div>
      </div>
      <p className="muted exp-text">{suspect.description}</p>

      <div className="ficha-row">
        <span><Link2 size={12} color="var(--amber)" aria-hidden="true" /> Relación con la víctima</span>
        <b>{suspect.relation}</b>
      </div>
      {suspect.motive && (
        <div className="ficha-row motive">
          <span><AlertTriangle size={12} color="var(--red)" aria-hidden="true" /> Por qué parece culpable</span>
          <b>{suspect.motive}</b>
        </div>
      )}
      <div className="ficha-row alibi">
        <span><Clock3 size={12} color="var(--green)" aria-hidden="true" /> Coartada</span>
        <b>{suspect.alibi}</b>
      </div>

      {notesVisible && suspect.notes && (
        <div className="suspect-notes">
          <strong style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Notas del expediente · </strong>
          {suspect.notes}
        </div>
      )}
      {!notesVisible && (
        <div className="suspect-notes locked">
          <Lock size={12} aria-hidden="true" /> Notas del expediente clasificadas hasta el acto {suspect.act ?? 1}.
        </div>
      )}
    </div>
  )
}

/**
 * EXPEDIENTE — dashboard de lectura: muchos documentos para leer
 * antes de tomar decisiones. Cada documento se abre al tocarlo.
 */
export default function CaseDashboard({ caseData, suspects, evidence, currentActIndex = 0, leakSuspectId = null }) {
  const labItems = evidence.map((item) => ({
    id: item.id,
    title: item.title,
    type: item.type,
    act: item.act ?? 1,
    unlocked: (item.act ?? 1) <= currentActIndex + 1,
    text: item.summary + (item.analysisNote ? ` · Lab: ${item.analysisNote}` : ''),
  }))

  const docs = useMemo(() => {
    const suspectDocs = suspects.map((s, i) => ({
      id: `sus-${s.id}`,
      kind: 'suspect',
      title: s.name,
      sub: s.profession,
      icon: UserRound,
      thumb: `/suspects/${s.id}.svg`,
      suspect: s,
      unlocked: areNotesVisible(s, currentActIndex) || leakSuspectId === s.id,
      order: i,
    }))
    return [
      { id: 'resumen', kind: 'resumen', title: 'Resumen del caso', sub: caseData.summary, icon: FileText, order: -1 },
      { id: 'escena', kind: 'escena', title: 'Registro de la escena', sub: `${caseData.location} · ${caseData.date}`, icon: MapPin, order: -0.5 },
      { id: 'lab', kind: 'lab', title: 'Informes del laboratorio', sub: `${labItems.length} muestras analizadas`, icon: FlaskConical, order: 0 },
      ...suspectDocs,
    ].sort((a, b) => a.order - b.order)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [caseData, suspects, currentActIndex, leakSuspectId])

  const [openId, setOpenId] = useState(docs[0]?.id)
  const [readIds, setReadIds] = useState(() => new Set(docs[0] ? [docs[0].id] : []))

  function openDoc(doc) {
    setOpenId(doc.id)
    setReadIds((prev) => new Set(prev).add(doc.id))
  }

  const active = docs.find((d) => d.id === openId) ?? docs[0]
  const readCount = readIds.size

  return (
    <div className="exp-dashboard">
      <div className="panel panel-pad">
        <div className="panel-title">
          <span className="ico"><BookOpenCheck size={16} aria-hidden="true" /></span>
          Expediente completo · {readCount} de {docs.length} documentos leídos
        </div>
        <p className="muted" style={{ fontSize: 13 }}>
          Lee todo el material antes de decidir: {docs.length} documentos · la evidencia y las notas de
          expediente se desclasifican con cada acto.
        </p>

        <div className="exp-docs">
          {docs.map((doc) => {
            const Icon = doc.icon
            const isOpen = doc.id === active?.id
            const unread = !readIds.has(doc.id)
            return (
              <button
                key={doc.id}
                type="button"
                className={`exp-doc${isOpen ? ' open' : ''}`}
                onClick={() => openDoc(doc)}
              >
                {doc.thumb ? <span className="exp-doc-thumb"><img src={doc.thumb} alt="" width="34" height="34" loading="lazy" /></span> : <span className="exp-doc-ico"><Icon size={15} aria-hidden="true" /></span>}
                <span className="exp-doc-meta">
                  <strong>{doc.title}</strong>
                  <span className="exp-doc-sub">{doc.sub}</span>
                </span>
                {isOpen && <span className="tag tag-green">ABIERTO</span>}
                {unread && !isOpen && <span className="exp-new">NUEVO</span>}
                {!doc.unlocked && doc.kind === 'suspect' && <Lock size={12} aria-hidden="true" />}
              </button>
            )
          })}
        </div>

        <div className="exp-reader">
          {!active && <p className="muted">Selecciona un documento.</p>}

          {active?.kind === 'resumen' && <p className="exp-text">{active.sub}</p>}

          {active?.kind === 'escena' && (
            <div className="ficha-row">
              <span><MapPin size={12} color="var(--blue)" aria-hidden="true" /> Escena</span>
              <b>{caseData.location}</b>
            </div>
          )}

          {active?.kind === 'lab' && (
            <div className="exp-lab">
              {labItems.map((item) => (
                <div key={item.id} className={`ficha-row${item.unlocked ? '' : ' sealed'}`}>
                  <span>{EVIDENCE_TYPE_LABEL[item.type] || item.type}</span>
                  <b>{item.unlocked ? item.text : `Muestra ${item.title} — examen clasificado hasta el ACTO ${item.act}.`}</b>
                </div>
              ))}
            </div>
          )}

          {active?.kind === 'suspect' && (
            <SuspectFicha suspect={active.suspect} notesVisible={active.unlocked} />
          )}
        </div>
      </div>
    </div>
  )
}