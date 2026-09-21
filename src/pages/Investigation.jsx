import { useMemo, useRef, useState, useEffect } from 'react'
import { useNavigate, useParams, useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, BookOpenCheck, Mic2, Search, Gavel } from 'lucide-react'
import { api } from '../services/api.js'
import { submitInvestigationToN8n } from '../services/n8n.js'
import { play } from '../services/sound.js'
import { useCountdown } from '../hooks/useCountdown.js'
import CaseBriefing from '../components/CaseBriefing.jsx'
import CaseHeader from '../components/CaseHeader.jsx'
import StoryPanel from '../components/StoryPanel.jsx'
import InterrogationRoom from '../components/InterrogationRoom.jsx'
import CaseDashboard from '../components/CaseDashboard.jsx'
import EvidenceBoard from '../components/EvidenceBoard.jsx'
import InvestigationProgress from '../components/InvestigationProgress.jsx'
import HintPanel from '../components/HintPanel.jsx'
import FinalVerdict from '../components/FinalVerdict.jsx'
import ScorePanel from '../components/ScorePanel.jsx'
import SceneStepper from '../components/SceneStepper.jsx'
import CrimeScene from '../components/CrimeScene.jsx'
import Modal from '../components/Modal.jsx'
import LoadingState from '../components/LoadingState.jsx'
import ErrorState from '../components/ErrorState.jsx'
import { calculateScore, calculateAccuracy, betterRank } from '../utils/scoring.js'
import {
  isVerdictReady,
  mapResultToN8nPayload,
  getCurrentActIndex,
  getSecondsToNextAct,
  isEvidenceLocked,
  GAME_STATUS,
} from '../utils/gameLogic.js'

const SUSPICION_ORDER = { LOW: 0, MEDIUM: 1, HIGH: 2 }

export default function Investigation() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { notify } = useOutletContext()

  const [caseData, setCaseData] = useState(null)
  const [suspects, setSuspects] = useState([])
  const [evidence, setEvidence] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [selectedEvidenceIds, setSelectedEvidenceIds] = useState([])
  const [examinedEvidenceIds, setExaminedEvidenceIds] = useState([])
  const [selectedSuspectId, setSelectedSuspectId] = useState(null)
  const [hintsUsed, setHintsUsed] = useState([])
  const [revealedEvidenceIds, setRevealedEvidenceIds] = useState([])
  const [eliminatedSuspectIds, setEliminatedSuspectIds] = useState([])
  const [profileLeakSuspectId, setProfileLeakSuspectId] = useState(null)

  /** Señales del interrogatorio: { [suspectId]: [{questionId, question, answer, reaction, note}] } */
  const [insights, setInsights] = useState({})

  const [gameStatus, setGameStatus] = useState(GAME_STATUS.LOADING)
  const [showVerdictModal, setShowVerdictModal] = useState(false)
  const [briefed, setBriefed] = useState(false)

  /** Flujo por pasos: Escena → Interrogatorio → Evidencia → Veredicto */
  const [step, setStep] = useState(0)
  const [maxUnlocked, setMaxUnlocked] = useState(0)
  const [intelMode, setIntelMode] = useState('interrogate')

  const finishedRef = useRef(false)

  /* ---------- Cargar el expediente desde la API ---------- */
  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    Promise.all([api.getCase(id), api.getSuspects(id), api.getEvidence(id)])
      .then(([caseObj, suspectList, evidenceList]) => {
        if (cancelled) return
        setCaseData(caseObj)
        setSuspects(suspectList)
        setEvidence(evidenceList)
        setGameStatus(GAME_STATUS.INVESTIGATING)
      })
      .catch((err) => {
        if (!cancelled) setError(err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [id])

  /* ---------- Valores derivados (useMemo) ---------- */
  const correctEvidenceIds = useMemo(() => caseData?.correctEvidenceIds ?? [], [caseData])

  const selectedSuspect = selectedSuspectId ? suspects.find((s) => s.id === selectedSuspectId) : null

  const askedCount = Object.values(insights).reduce((acc, list) => acc + list.length, 0)
  const sceneFindings = examinedEvidenceIds.length + revealedEvidenceIds.filter((id) => !examinedEvidenceIds.includes(id)).length

  /* ---------- Temporizador de cuenta regresiva ---------- */
  const timerActive = gameStatus === GAME_STATUS.INVESTIGATING && briefed
  const [timeRemaining, setTimeRemaining] = useCountdown({
    initial: caseData?.timeLimit ?? 0,
    running: timerActive,
    onExpire: () => completeCase(),
  })

  const currentActIndex = getCurrentActIndex(caseData, timeRemaining)
  const secondsToNextAct = getSecondsToNextAct(caseData, timeRemaining)

  /* Tics de suspenso cuando queda poco tiempo (últimos 10 segundos) */
  useEffect(() => {
    if (timerActive && timeRemaining > 0 && timeRemaining <= 10) play('tick')
  }, [timeRemaining, timerActive])

  /* ---------- Navegación del flujo por pasos ---------- */
  function goToStep(next) {
    if (next < 0 || next > 3) return
    if (next > maxUnlocked) {
      play('hintBlocked')
      return
    }
    setStep(next)
    setIntelMode('interrogate')
    play('page')
  }

  function advanceStep() {
    if (step === 0 && sceneFindings < 2) {
      play('hintBlocked')
      notify('Primero examina al menos dos elementos de la escena. Una investigación empieza con hallazgos, no con acusaciones.', 'info')
      return
    }
    const next = Math.min(step + 1, 3)
    setStep(next)
    setMaxUnlocked((prev) => Math.max(prev, next))
    setIntelMode('interrogate')
    play('page')
  }

  /* ---------- Interrogatorio ---------- */
  function handleAsk(suspect, question) {
    if (gameStatus !== GAME_STATUS.INVESTIGATING) return
    setInsights((prev) => ({
      ...prev,
      [suspect.id]: [
        ...(prev[suspect.id] ?? []),
        { questionId: question.id, question: question.question, answer: question.answer, reaction: question.reaction, note: question.note },
      ],
    }))

    if (question.reaction === 'CONTRADICTS') {
      play('reveal')
      notify(`¡Se contradice! ${suspect.name.split(' ')[0]} se enreda con su propia versión.`, 'error')
    } else if (question.reaction === 'NERVOUS' || question.reaction === 'EVASIVE') {
      play('reveal')
      notify(`Micro-expresión detectada en ${suspect.name.split(' ')[0]}: ${question.reaction === 'EVASIVE' ? 'se pone evasivo' : 'se pone nervioso'}.`, 'info')
    } else {
      play('select')
    }
  }

  /* ---------- Interacciones ---------- */
  function toggleEvidence(item) {
    if (gameStatus !== GAME_STATUS.INVESTIGATING) return
    if (isEvidenceLocked(item, currentActIndex)) {
      play('hintBlocked')
      notify(`Evidencia cerrada. Estará disponible en el ACTO ${item.act}.`, 'info')
      return
    }

    const examined = examinedEvidenceIds.includes(item.id) || revealedEvidenceIds.includes(item.id)

    /* Primer toque: examinar la pista velada. */
    if (!examined) {
      play('reveal')
      setExaminedEvidenceIds((prev) => [...prev, item.id])
      notify(`Evidencia revelada: ${item.title}. Toca de nuevo para marcarla.`, 'info')
      return
    }

    const next = !selectedEvidenceIds.includes(item.id)
    play(next ? 'select' : 'deselect')
    setSelectedEvidenceIds((prev) =>
      prev.includes(item.id) ? prev.filter((one) => one !== item.id) : [...prev, item.id],
    )
  }

  function selectSuspect(suspect) {
    if (gameStatus !== GAME_STATUS.INVESTIGATING) return
    play('suspect')
    setSelectedSuspectId((prev) => (prev === suspect.id ? null : suspect.id))
  }

  function useHint(hint) {
    if (gameStatus !== GAME_STATUS.INVESTIGATING || hintsUsed.includes(hint.id)) {
      play('hintBlocked')
      return
    }

    const hintIndex = caseData.hints.findIndex((candidate) => candidate.id === hint.id)

    if (hintIndex === 0 && suspects.length) {
      setHintsUsed((prev) => [...prev, hint.id])
      play('hint')
      const candidates = suspects.filter((s) => !eliminatedSuspectIds.includes(s.id))
      const target = [...candidates].sort(
        (a, b) => (SUSPICION_ORDER[b.suspicionLevel] ?? 0) - (SUSPICION_ORDER[a.suspicionLevel] ?? 0),
      )[0]
      if (target) {
        setProfileLeakSuspectId(target.id)
        notify(`Fuga de perfil: las notas de ${target.name} se adjuntaron a su expediente.`, 'info')
      }
      return
    }

    if (hintIndex === 1) {
      const unlocked = correctEvidenceIds.filter(
        (eid) => !isEvidenceLocked(evidence.find((e) => e.id === eid) ?? {}, currentActIndex),
      )
      const pool = unlocked.filter((eid) => !revealedEvidenceIds.includes(eid))
      if (!pool.length) {
        play('hintBlocked')
        notify('Aún no hay evidencia relevante desbloqueada. Espera al siguiente acto.', 'info')
        return
      }
      setHintsUsed((prev) => [...prev, hint.id])
      play('hint')
      const target = pool[Math.floor(Math.random() * pool.length)]
      setRevealedEvidenceIds((prev) => [...prev, target])
      play('reveal')
      notify('PISTA: el escáner de relevancia marcó una evidencia para revisión.', 'info')
      return
    }

    if (hintIndex === 2) {
      const pool = suspects.filter(
        (s) => s.id !== caseData.correctSuspectId && !eliminatedSuspectIds.includes(s.id),
      )
      if (!pool.length) {
        play('hintBlocked')
        return
      }
      setHintsUsed((prev) => [...prev, hint.id])
      play('hint')
      const target = pool[Math.floor(Math.random() * pool.length)]
      setEliminatedSuspectIds((prev) => [...prev, target.id])
      play('reveal')
      notify(`PISTA: el protocolo descartó a ${target.name} de toda participación.`, 'success')
    }
  }

  /* ---------- Cierre del caso + persistencia + n8n ---------- */
  async function completeCase() {
    if (finishedRef.current || !caseData) return
    finishedRef.current = true
    setGameStatus(GAME_STATUS.FINISHED)
    setShowVerdictModal(false)

    const correctSuspect = selectedSuspectId === caseData.correctSuspectId
    const timeUsed = Math.max(0, caseData.timeLimit - timeRemaining)

    const { score, rank, timeBonus, correctEvidenceCount, incorrectEvidenceCount, evidenceCoverage } =
      calculateScore({
        correctSuspect,
        selectedEvidenceIds,
        correctEvidenceIds,
        timeRemaining,
        timeLimit: caseData.timeLimit,
        hintsUsed: hintsUsed.length,
      })

    const accuracy = calculateAccuracy({ selectedEvidenceIds, correctEvidenceIds })

    try {
      play(correctSuspect ? 'solved' : 'failed')
      const result = await api.createResult({
        playerId: 1,
        caseId: caseData.id,
        caseName: caseData.title,
        suspectId: selectedSuspectId,
        correctSuspectId: caseData.correctSuspectId,
        correct: correctSuspect,
        score,
        rank,
        accuracy,
        evidenceCoverage,
        evidenceSelected: selectedEvidenceIds,
        timeUsed,
        timeBonus,
        hintsUsed: hintsUsed.length,
        correctEvidenceCount,
        incorrectEvidenceCount,
        n8nSubmitted: false,
        n8nPerformance: null,
        completedAt: new Date().toISOString(),
      })

      await updatePlayerStats(result)

      await submitToN8n(result).catch(() => {
        notify(
          'Investigación completada. Tu resultado quedó guardado; no se pudo contactar el servicio de automatización. Reintenta desde el reporte.',
          'error',
        )
      })

      navigate(`/results/${result.id}`)
    } catch (err) {
      notify('El reporte no se pudo guardar. Verifica que la API esté activa.', 'error')
      finishedRef.current = false
      setGameStatus(GAME_STATUS.INVESTIGATING)
    }
  }

  async function updatePlayerStats(result) {
    try {
      const [player, allResults] = await Promise.all([api.getPlayer(1), api.getResults()])
      const nextSolved = player.casesSolved + (result.correct ? 1 : 0)
      const nextFailed = player.casesFailed + (result.correct ? 0 : 1)

      const averageAccuracy = allResults.length
        ? Math.round((allResults.reduce((acc, r) => acc + (r.accuracy ?? 0), 0)) / allResults.length)
        : result.accuracy

      await api.updatePlayer(player.id, {
        ...player,
        casesSolved: nextSolved,
        casesFailed: nextFailed,
        totalScore: player.totalScore + result.score,
        averageAccuracy,
        bestRank: betterRank(player.bestRank, result.rank),
        hintsUsed: player.hintsUsed + result.hintsUsed,
      })
    } catch {
      /* Las estadísticas del perfil no son críticas: el resultado ya quedó guardado. */
    }
  }

  async function submitToN8n(result) {
    const player = await api.getPlayer(1).catch(() => null)
    const payload = mapResultToN8nPayload(result, player?.name)
    const response = await submitInvestigationToN8n(payload)

    await api.updateResult(result.id, {
      n8nSubmitted: true,
      n8nPerformance: response.performance ?? null,
      n8nMessage: response.message ?? null,
    })
  }

  /* ---------- Render ---------- */
  if (loading) {
    return <LoadingState message="Cargando investigación..." sub="Preparando la sala de interrogatorios…" />
  }

  if (error || !caseData) {
    return (
      <ErrorState message="El expediente de investigación no se pudo abrir." onRetry={() => navigate('/cases')}>
        El caso {id} puede no existir, o la API está desconectada. Verifica con `npm run server`.
      </ErrorState>
    )
  }

  if (!briefed) {
    return (
      <CaseBriefing
        caseData={caseData}
        onAccept={() => {
          play('start')
          setBriefed(true)
        }}
      />
    )
  }

  const canSubmit = isVerdictReady(selectedSuspectId, selectedEvidenceIds)
  const evidenceAccuracy = calculateAccuracy({ selectedEvidenceIds, correctEvidenceIds })

  return (
    <div className="page" style={{ maxWidth: 1280 }}>
      <CaseHeader
        caseData={caseData}
        timeRemaining={timeRemaining}
        timeActive={timerActive}
        currentAct={currentActIndex}
      />

      <SceneStepper current={step} maxUnlocked={maxUnlocked} onGo={goToStep} />

      <div className="investigation-flow">
        {step === 0 && (
          <motion.section key="step-scene" className="flow-section" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
            <StoryPanel caseData={caseData} currentActIndex={currentActIndex} secondsToNextAct={secondsToNextAct} />
            <CrimeScene
              evidence={evidence}
              examinedIds={[...examinedEvidenceIds, ...revealedEvidenceIds]}
              currentActIndex={currentActIndex}
              onExamine={toggleEvidence}
              disabled={!timerActive}
            />
            <div className="flow-actions">
              <button className="btn btn-primary btn-lg" onClick={advanceStep}>
                <Mic2 size={17} aria-hidden="true" /> ABRIR LA SALA DE INTERROGATORIOS
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>
          </motion.section>
        )}

        {step === 1 && (
          <motion.section key="step-interrogation" className="flow-section" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
            <div className="intel-header">
              <div>
                <span className="page-kicker" style={{ marginBottom: 2 }}>Fase de intel</span>
                <h2 style={{ fontSize: 20 }}>Interroga y lee sus micro-expresiones</h2>
                <p className="muted" style={{ fontSize: 13 }}>
                  Preguntas citadas: <strong style={{ color: 'var(--amber)' }}>{askedCount}</strong>. Cada reacción
                  deja una marca en el expediente: si dudan, si se ponen nerviosos o si se contradicen.
                </p>
              </div>
              <div className="intel-toggle" role="tablist" aria-label="Modo de fase de intel">
                <button
                  type="button"
                  role="tab"
                  aria-selected={intelMode === 'interrogate'}
                  className={`intel-tab${intelMode === 'interrogate' ? ' active' : ''}`}
                  onClick={() => { setIntelMode('interrogate'); play('select') }}
                >
                  <Mic2 size={15} aria-hidden="true" /> INTERROGATORIO
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={intelMode === 'dossier'}
                  className={`intel-tab${intelMode === 'dossier' ? ' active' : ''}`}
                  onClick={() => { setIntelMode('dossier'); play('select') }}
                >
                  <BookOpenCheck size={15} aria-hidden="true" /> EXPEDIENTE
                </button>
              </div>
            </div>

            {intelMode === 'interrogate' ? (
              <InterrogationRoom
                suspects={suspects}
                insights={insights}
                onAsk={handleAsk}
                currentActIndex={currentActIndex}
                disabled={!timerActive}
                caseData={caseData}
                discoveredEvidence={evidence.filter((item) => examinedEvidenceIds.includes(item.id) || revealedEvidenceIds.includes(item.id))}
                onAiError={(err) => notify(err?.message || 'El motor de IA no respondió. Revisa tu clave en la configuración.', 'error')}
              />
            ) : (
              <CaseDashboard
                caseData={caseData}
                suspects={suspects}
                evidence={evidence}
                currentActIndex={currentActIndex}
                leakSuspectId={profileLeakSuspectId}
              />
            )}

            <HintPanel hints={caseData.hints} hintsUsed={hintsUsed} onUse={useHint} />

            <div className="flow-actions">
              <button className="btn btn-ghost btn-lg" onClick={() => goToStep(0)}>
                <ArrowLeft size={16} aria-hidden="true" /> VOLVER A LA ESCENA
              </button>
              <button className="btn btn-primary btn-lg" onClick={advanceStep}>
                RECORRER LA EVIDENCIA <ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>
          </motion.section>
        )}

        {step === 2 && (
          <motion.section key="step-evidence" className="flow-section" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
            <div className="panel panel-pad">
              <div className="panel-title">
                <span className="ico"><Search size={16} aria-hidden="true" /></span>
                Recorre la escena · evidencia
              </div>
              <p className="muted" style={{ fontSize: 13 }}>
                Las pistas aparecen veladas: <strong style={{ color: 'var(--amber)' }}>toca cada una para examinarla</strong>{' '}
                y vuelve a tocarla para marcarla como evidencia clave. Contrasta esto con lo que te dijeron en el interrogatorio.
              </p>
              <InvestigationProgress selectedCount={selectedEvidenceIds.length} total={evidence.length} />
              <div style={{ height: 16 }} />
              <EvidenceBoard
                evidence={evidence}
                selectedIds={selectedEvidenceIds}
                revealedIds={revealedEvidenceIds}
                examinedIds={examinedEvidenceIds}
                currentActIndex={currentActIndex}
                onToggle={toggleEvidence}
                disabled={!timerActive}
              />
            </div>

            <HintPanel hints={caseData.hints} hintsUsed={hintsUsed} onUse={useHint} />

            <div className="flow-actions">
              <button className="btn btn-ghost btn-lg" onClick={() => goToStep(1)}>
                <ArrowLeft size={16} aria-hidden="true" /> VOLVER AL INTERROGATORIO
              </button>
              <button className="btn btn-primary btn-lg" onClick={advanceStep}>
                <Gavel size={17} aria-hidden="true" /> TOMAR LA DECISIÓN
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>
          </motion.section>
        )}

        {step === 3 && (
          <motion.section key="step-verdict" className="flow-section" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ display: 'grid', gap: 20 }}>
              <ScorePanel
                timeRemaining={timeRemaining}
                timeLimit={caseData.timeLimit}
                hintsUsed={hintsUsed.length}
              />
              <FinalVerdict
                suspects={suspects}
                selectedSuspectId={selectedSuspectId}
                onSelectSuspect={selectSuspect}
                selectedEvidenceIds={selectedEvidenceIds}
                evidenceTotal={evidence.length}
                eliminatedIds={eliminatedSuspectIds}
                insights={insights}
                onSubmit={() => setShowVerdictModal(true)}
                disabled={!timerActive}
              />
            </div>

            <HintPanel hints={caseData.hints} hintsUsed={hintsUsed} onUse={useHint} />

            <div className="flow-actions">
              <button className="btn btn-ghost btn-lg" onClick={() => goToStep(2)}>
                <ArrowLeft size={16} aria-hidden="true" /> VOLVER A LA EVIDENCIA
              </button>
            </div>
          </motion.section>
        )}
      </div>

      <Modal
        open={showVerdictModal}
        title="Confirmación requerida"
        onClose={() => setShowVerdictModal(false)}
      >
        <p className="muted">
          Estás por acusar a{' '}
          <strong style={{ color: 'var(--text)' }}>{selectedSuspect?.name}</strong> de{' '}
          <strong style={{ color: 'var(--text)' }}>{caseData.category.toLowerCase()}</strong>, respaldado por{' '}
          <strong style={{ color: 'var(--text)' }}>{selectedEvidenceIds.length}</strong> evidencia(s) y{' '}
          <strong style={{ color: 'var(--text)' }}>{(insights[selectedSuspectId] ?? []).length}</strong> registro(s)
          del interrogatorio. Una acusación no se puede retirar una vez presentada.
        </p>

        <div className="verdict-row">
          <span className="k">Estimación de precisión de la evidencia</span>
          <span className="v">{evidenceAccuracy}%</span>
        </div>
        <div className="verdict-row">
          <span className="k">Selección</span>
          <span className="v">{selectedEvidenceIds.length} de {evidence.length} elementos revisados</span>
        </div>

        <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
          <button className="btn btn-ghost" style={{ flex: 1 }} onClick={() => setShowVerdictModal(false)}>
            REVISAR ANTES DE ACUSAR
          </button>
          <button
            className="btn btn-primary"
            style={{ flex: 1.4 }}
            disabled={!canSubmit}
            onClick={() => {
              play('submit')
              completeCase()
            }}
          >
            CONFIRMAR ACUSACIÓN
          </button>
        </div>
      </Modal>
    </div>
  )
}
