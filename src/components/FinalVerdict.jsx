import { AlertTriangle, Check, FileSearch } from 'lucide-react'
import { isVerdictReady, REACTION_RANK } from '../utils/gameLogic.js'

const REACTION_SHORT = {
  CALM: 'Tranquilo',
  TENSE: 'Tenso',
  NERVOUS: 'Nervioso',
  EVASIVE: 'Evasivo',
  CONTRADICTS: 'Se contradice',
}

function strongestSignal(entries) {
  let best = null
  for (const e of entries) {
    const rank = REACTION_RANK[e.reaction] ?? 0
    if (!best || rank > REACTION_RANK[best.reaction]) best = e
  }
  return best
}

/**
 * DECISIÓN FINAL — elegir entre opciones. Tras el interrogatorio (y sus
 * micro-expresiones) y la evidencia, el jugador acusa al culpable.
 */
export default function FinalVerdict({
  suspects,
  selectedSuspectId,
  onSelectSuspect,
  selectedEvidenceIds,
  evidenceTotal,
  eliminatedIds = [],
  insights = {},
  onSubmit,
  disabled = false,
}) {
  const selectedSuspect = suspects.find((s) => s.id === selectedSuspectId)
  const ready = isVerdictReady(selectedSuspectId, selectedEvidenceIds)
  const selectedEntries = insights[selectedSuspectId] ?? []
  const selectedSignal = strongestSignal(selectedEntries)

  return (
    <div className="panel verdict-panel panel-pad">
      <div className="panel-title">
        <span className="ico" style={{ color: 'var(--amber)' }}>
          <AlertTriangle size={16} aria-hidden="true" />
        </span>
        Veredicto final · elige al culpable
      </div>

      <p className="muted" style={{ fontSize: 13, marginTop: -2 }}>
        Interroga hasta estar seguro y marca evidencia. Las señales de lenguaje corporal de cada sospechoso
        se archivaron durante la sesión.
      </p>

      <div className="verdict-options">
        {suspects.map((suspect) => {
          const selected = selectedSuspectId === suspect.id
          const eliminated = eliminatedIds.includes(suspect.id)
          const entries = insights[suspect.id] ?? []
          const signal = strongestSignal(entries)
          return (
            <button
              key={suspect.id}
              type="button"
              className={`verdict-option${selected ? ' selected' : ''}${eliminated ? ' eliminated' : ''}`}
              onClick={() => onSelectSuspect?.(suspect)}
              disabled={disabled || eliminated}
              aria-pressed={Boolean(selected)}
              aria-label={`Acusar a ${suspect.name}, ${suspect.profession}${signal ? `. Lectura corporal: ${REACTION_SHORT[signal.reaction]}. ${entries.length} señales.` : ' sin señales registradas.'}`}
            >
              {selected && <span className="selected-flag" aria-hidden="true"><Check size={13} /></span>}
              <img src={`/suspects/${suspect.id}.svg`} alt="" width="62" height="62" loading="lazy" />
              <strong>{suspect.name}</strong>
              <span className="muted" style={{ fontSize: 11.5 }}>{suspect.profession}</span>
              {signal && (
                <span className={`signal-chip reaction-${signal.reaction}`}>
                  {REACTION_SHORT[signal.reaction]} · {entries.length}
                </span>
              )}
              {!signal && <span className="muted" style={{ fontSize: 10.5 }}>Sin sesión</span>}
              {eliminated && <span className="tag tag-neutral">DESCARTADO</span>}
            </button>
          )
        })}
      </div>

      <div className="verdict-row" style={{ marginTop: 14 }}>
        <span className="k">Sospechoso</span>
        <span className="v">{selectedSuspect ? selectedSuspect.name : 'Sin elegir'}</span>
      </div>
      <div className="verdict-row">
        <span className="k">Evidencias marcadas</span>
        <span className="v">{selectedEvidenceIds.length} de {evidenceTotal}</span>
      </div>
      <div className="verdict-row">
        <span className="k">Señales del interrogatorio</span>
        <span className="v">
          {selectedEntries.length
            ? `${selectedEntries.length} registrada(s)${selectedSignal ? ` · pico: ${REACTION_SHORT[selectedSignal.reaction].toLowerCase()}` : ''}`
            : 'No interrogado'}
        </span>
      </div>

      {selectedEntries.length > 0 && (
        <div className="selected-signals">
          {[...selectedEntries].sort((a, b) => a.questionId - b.questionId).map((entry) => (
            <div key={entry.questionId} className="ficha-row">
              <span><FileSearch size={12} aria-hidden="true" /> {entry.question}</span>
              <b className={`reaction-txt reaction-${entry.reaction}`}>{entry.note}</b>
            </div>
          ))}
        </div>
      )}

      {!ready && <p className="muted" style={{ fontSize: 12.5, margin: '10px 0 0' }}>
        Marca evidencia en el paso anterior y elige a un sospechoso antes de presentar tu acusación.
      </p>}

      <button className="btn btn-primary btn-block" style={{ marginTop: 16 }} disabled={!ready || disabled} onClick={onSubmit}>
        PRESENTAR VEREDICTO
      </button>
    </div>
  )
}