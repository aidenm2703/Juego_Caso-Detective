import { useEffect, useRef, useState } from 'react'
import { Activity, AlertTriangle, Clock3, FileSearch, Link2, Lock, MessageCircle, Mic, Send, ShieldAlert, Zap } from 'lucide-react'
import Tag from './Tag.jsx'
import { QUESTION_TYPES, isQuestionLocked, isSuspectInterrogable } from '../utils/gameLogic.js'
import { askSuspectLive, getAiLabel, isAiConfigured } from '../services/ai.js'
import { askContextualDemoLive } from '../services/interrogationEngine.js'
import { play } from '../services/sound.js'

const MAX_QUESTIONS = 5
const REACTION_META = { CALM: { label: 'Tranquilo', tone: 'green' }, TENSE: { label: 'Tenso', tone: 'amber' }, NERVOUS: { label: 'Nervioso', tone: 'orange' }, EVASIVE: { label: 'Evasivo', tone: 'violet' }, CONTRADICTS: { label: 'Se contradice', tone: 'red' } }
const QUESTION_ICON = { ALIBI: Clock3, RELACION: Link2, MOTIVO: AlertTriangle, GENERAL: MessageCircle, PRUEBA: FileSearch }

function PromptIdea({ question, type, used, locked, onPick }) {
  const Icon = QUESTION_ICON[type] ?? MessageCircle
  return <button type="button" className={`asked-card${used ? ' asked' : ''}${locked ? ' locked' : ''}`} onClick={() => onPick(question)} disabled={locked}>
    <span className="asked-ico"><Icon size={15} /></span>
    <span className="asked-body"><span className="asked-type">{QUESTION_TYPES[type] ?? type}</span><span className="asked-q">{question}</span></span>
    {used && <span className="tag tag-neutral tag-check">USADA</span>}
  </button>
}

function Transcript({ entries, pending, stream, suspect }) {
  if (!entries.length && !pending) return <div className="iq-empty-log"><MessageCircle size={20} /><p>La grabadora está lista. Formula tu primera pregunta.</p></div>
  return <div className="iq-log" aria-live="polite">
    {entries.map((entry) => {
      const meta = REACTION_META[entry.reaction] ?? REACTION_META.CALM
      return <article className={`iq-entry reaction-${entry.reaction}`} key={entry.questionId}>
        <div className="iq-head iq-question-line"><span className="iq-speaker">TÚ</span><span className="iq-q">{entry.question}</span><span className="iq-chat" data-tone={meta.tone}>{meta.label}</span></div>
        <p className="iq-speaker-answer"><strong>{suspect.name.split(' ')[0]}</strong>{entry.answer}</p>
        {entry.note && <p className="iq-note">▸ {entry.note}</p>}
      </article>
    })}
    {pending && <article className="iq-entry iq-pending"><div className="iq-head iq-question-line"><span className="iq-speaker">TÚ</span><span className="iq-q">{pending}</span><span className="iq-chat" data-tone="violet">pensando</span></div><p className="iq-speaker-answer iq-stream"><strong>{suspect.name.split(' ')[0]}</strong>{stream}<span className="iq-caret" /></p></article>}
  </div>
}

function TellsPanel({ entries }) {
  if (!entries.length) return null
  return <aside className="iq-tells panel panel-pad"><div className="panel-title"><span className="ico"><ShieldAlert size={15} /></span>Señales archivadas</div><ul>{entries.map((entry) => <li key={entry.questionId}><span className={`tell-dot reaction-${entry.reaction}`} /><span>{entry.note}</span></li>)}</ul></aside>
}

export default function InterrogationRoom({ suspects, insights, onAsk, currentActIndex = 0, disabled = false, caseData = null, onAiError, discoveredEvidence = [] }) {
  const aiEnabled = isAiConfigured()
  const [activeId, setActiveId] = useState(suspects[0]?.id)
  const [questionText, setQuestionText] = useState('')
  const [pendingQ, setPendingQ] = useState(null)
  const [pendingStream, setPendingStream] = useState('')
  const cancelRef = useRef(null)
  const suspect = suspects.find((item) => item.id === activeId) ?? suspects[0]
  useEffect(() => () => cancelRef.current?.(), [activeId])
  if (!suspect) return null
  const entries = insights[suspect.id] ?? []
  const usedCount = entries.length + (pendingQ ? 1 : 0)
  const sessionOver = usedCount >= MAX_QUESTIONS
  const interrogable = isSuspectInterrogable(suspect, currentActIndex)
  const busy = Boolean(pendingQ)
  const canType = !disabled && interrogable && !busy && !sessionOver
  const lastMeta = entries.length ? REACTION_META[entries.at(-1).reaction] : null

  async function ask(text) {
    const clean = text.trim()
    if (!clean || !canType) return
    setQuestionText(''); setPendingQ(clean); setPendingStream('')
    play('question')
    const history = entries.map(({ question, answer }) => ({ question, answer }))
    const live = aiEnabled && caseData
      ? askSuspectLive({ suspect, caseObj: caseData, question: clean, history, discoveredEvidence, onToken: setPendingStream, onError: onAiError })
      : askContextualDemoLive({ suspect, caseObj: caseData, question: clean, history, discoveredEvidence, onToken: setPendingStream })
    cancelRef.current = live.cancel
    try {
      const result = await live.promise
      if (result) {
        play(result.reaction === 'CONTRADICTS' ? 'contradiction' : 'answer')
        onAsk(suspect, { questionId: `live-${Date.now()}`, question: clean, ...result })
      }
    } catch { /* Parent shows connection errors. */ }
    finally { cancelRef.current?.(); cancelRef.current = null; setPendingQ(null); setPendingStream('') }
  }

  return <div className="iq-room iq-room-chat">
    <aside className="iq-rail" aria-label="Sospechosos">{suspects.map((item) => {
      const locked = !isSuspectInterrogable(item, currentActIndex); const active = item.id === suspect.id
      return <button key={item.id} type="button" className={`iq-rail-btn${active ? ' active' : ''}${locked ? ' locked' : ''}`} disabled={disabled || locked || busy} onClick={() => setActiveId(item.id)}><span className="iq-rail-photo"><img src={`/suspects/${item.id}.svg`} alt="" />{locked && <span className="iq-lock"><Lock size={11} /></span>}</span><span className="iq-rail-meta"><strong>{item.name}</strong><span>{(insights[item.id] ?? []).length}/{MAX_QUESTIONS} preguntas · {item.profession}</span></span></button>
    })}</aside>
    <section className="iq-stage">
      <header className="iq-suspect-head"><div className="iq-portrait" data-reaction={busy ? 'NERVOUS' : (entries.at(-1)?.reaction ?? '')}><img src={`/suspects/${suspect.id}.svg`} alt={`Retrato de ${suspect.name}`} /><div className="iq-spotlight" /><span className={`iq-reaction-chip${busy ? ' busy' : ''}`} data-tone={busy ? 'violet' : lastMeta?.tone}>{busy ? 'Respondiendo…' : lastMeta?.label}</span></div><div className="iq-suspect-info"><span className="page-kicker">Entrevista activa</span><h3>{suspect.name} <Tag tone={suspect.suspicionLevel} /></h3><p className="muted">{suspect.profession} · {suspect.age} años</p><p className="iq-case-note">{suspect.relation}</p><p className="ai-badge" data-on={aiEnabled ? '1' : '0'}><Zap size={12} />{aiEnabled ? `CONEXIÓN EN VIVO · ${getAiLabel()}` : 'MODO LOCAL · RESPUESTA PROGRESIVA'}</p></div></header>
      <div className="iq-meter"><span className="panel-title"><Activity size={13} />Presión</span><div className="iq-bars">{Array.from({ length: MAX_QUESTIONS }, (_, i) => <span className={`iq-bar${i < usedCount ? ' on' : ''}`} key={i} />)}</div><span className="iq-meter-label">{usedCount}/{MAX_QUESTIONS}</span></div>
      {!interrogable ? <div className="iq-session-over"><Lock size={18} /><div><strong>Sin orden de interrogatorio.</strong><span>Disponible en el acto {suspect.act}.</span></div></div> : sessionOver ? <div className="iq-session-over"><ShieldAlert size={18} /><div><strong>La sesión se levantó.</strong><span>Ya registraste todas las declaraciones permitidas.</span></div></div> : <>
        <section className="iq-conversation panel"><div className="iq-conversation-head"><div><span className="page-kicker">Transcripción en directo</span><h4>Habla con {suspect.name.split(' ')[0]}</h4></div><span className="iq-live-dot">EN VIVO</span></div><Transcript entries={entries} pending={pendingQ} stream={pendingStream} suspect={suspect} /><div className="iq-askbar"><div className="iq-input-wrap"><Mic size={17} /><input value={questionText} onChange={(e) => setQuestionText(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); ask(questionText) } }} disabled={!canType} maxLength={180} placeholder="Escribe tu propia pregunta…" aria-label="Pregunta al sospechoso" /><button type="button" className="btn btn-primary" disabled={!questionText.trim() || !canType} onClick={() => ask(questionText)}><Send size={15} />PREGUNTAR</button></div><p className="iq-hint muted">La respuesta aparece aquí mismo, palabra a palabra. Quedan <strong>{MAX_QUESTIONS - usedCount} preguntas</strong>.</p></div></section>
        <details className="iq-suggestions"><summary>¿Quieres una pista para empezar? Ver ideas de preguntas</summary><div className="iq-questions">{(suspect.interrogation ?? []).map((q) => <PromptIdea key={q.id} {...q} used={entries.some((entry) => entry.question === q.question)} locked={isQuestionLocked(q, currentActIndex)} onPick={setQuestionText} />)}</div></details>
      </>}
      <div className="iq-main" style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 16 }}><TellsPanel entries={entries} /></div>
    </section>
  </div>
}
