import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams, useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  CheckCircle2, XCircle, FileSearch, Trophy, ArrowLeft, ArrowRight,
  Send, ScrollText, ShieldAlert, Clock, Target, Fingerprint,
} from 'lucide-react'
import { api } from '../services/api.js'
import { submitInvestigationToN8n } from '../services/n8n.js'
import { play } from '../services/sound.js'
import RankBadge from '../components/RankBadge.jsx'
import StatTile from '../components/StatTile.jsx'
import ProgressBar from '../components/ProgressBar.jsx'
import LoadingState from '../components/LoadingState.jsx'
import ErrorState from '../components/ErrorState.jsx'
import { mapResultToN8nPayload } from '../utils/gameLogic.js'
import { formatTime, formatScore, formatDate } from '../utils/format.js'

export default function Results() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { notify } = useOutletContext()

  const [result, setResult] = useState(null)
  const [caseData, setCaseData] = useState(null)
  const [suspects, setSuspects] = useState([])
  const [evidence, setEvidence] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showReport, setShowReport] = useState(false)
  const [retrying, setRetrying] = useState(false)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    api
      .getResult(id)
      .then(async (resultData) => {
        if (cancelled) return
        const [caseObj, suspectList, evidenceList] = await Promise.all([
          api.getCase(resultData.caseId),
          api.getSuspects(resultData.caseId),
          api.getEvidence(resultData.caseId),
        ])
        if (cancelled) return
        setResult(resultData)
        setCaseData(caseObj)
        setSuspects(suspectList)
        setEvidence(evidenceList)
      })
      .catch((err) => {
        if (!cancelled) setError(err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [id])

  /* ---------- useMemo: derived display stats ---------- */
  const selectedEvidenceMap = useMemo(() => {
    const map = {}
    result?.evidenceSelected?.forEach((eid) => { map[eid] = true })
    return map
  }, [result])

  const suspectsById = useMemo(
    () => suspects.reduce((m, s) => { m[s.id] = s; return m }, {}),
    [suspects],
  )

  const evidenceById = useMemo(
    () => evidence.reduce((m, e) => { m[e.id] = e; return m }, {}),
    [evidence],
  )

  const correctEvidence = useMemo(
    () => (result ? result.evidenceSelected.filter((eid) => evidenceById[eid]?.relevant) : []),
    [result, evidenceById],
  )
  const incorrectEvidence = useMemo(
    () => (result ? result.evidenceSelected.filter((eid) => !evidenceById[eid]?.relevant) : []),
    [result, evidenceById],
  )

  async function retryN8nSubmission() {
    setRetrying(true)
    try {
      const player = await api.getPlayer(1).catch(() => null)
      const response = await submitInvestigationToN8n(mapResultToN8nPayload(result, player?.name))
      await api.updateResult(result.id, {
        n8nSubmitted: true,
        n8nPerformance: response.performance ?? null,
        n8nMessage: response.message ?? null,
      })
      setResult((prev) => ({ ...prev, n8nSubmitted: true, n8nPerformance: response.performance ?? null }))
      notify('El reporte de investigación fue aceptado por el servicio de automatización.', 'success')
    } catch (err) {
      notify('El servicio de automatización sigue inaccesible. Verifica que n8n esté activo.', 'error')
    } finally {
      setRetrying(false)
    }
  }

  if (loading) return <LoadingState message="Procesando tu reporte..." sub="Reconstruyendo la investigación…" />

  if (error || !result || !caseData) {
    return (
      <ErrorState message="Este reporte de investigación no se pudo encontrar." onRetry={() => navigate('/cases')}>
        El reporte puede haber sido eliminado, o la API está desconectada.
      </ErrorState>
    )
  }

  const success = result.correct
  const selectedSuspect = suspectsById[result.suspectId]
  const correctSuspect = suspectsById[result.correctSuspectId]

  return (
    <div className="page">
      <motion.section
        className={`results-hero ${success ? 'good' : 'bad'}`}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
      >
        <div className="verdict-line">
          {success ? (
            <CheckCircle2 size={38} color="var(--green)" aria-hidden="true" />
          ) : (
            <XCircle size={38} color="var(--red)" aria-hidden="true" />
          )}
          <div>
            <span className="page-kicker" style={{ color: success ? 'var(--green)' : 'var(--red)' }}>
              {success ? 'Investigación cerrada' : 'Caso reabierto'}
            </span>
            <h2>{success ? 'CASO RESUELTO' : 'ACUSACIÓN EQUIVOCADA'}</h2>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <RankBadge rank={result.rank} size={58} />
          </div>
        </div>

        <div className="muted" style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>
          CASE #{caseData.caseNumber} — {caseData.title.toUpperCase()}
        </div>

        <div className="result-stats">
          <StatTile icon={Target} value={formatScore(result.score)} label="Puntaje final" color="var(--red)" />
          <StatTile icon={Fingerprint} value={`${result.accuracy}%`} label="Precisión" color="var(--green)" />
          <StatTile icon={Clock} value={formatTime(result.timeUsed)} label="Tiempo usado" color="var(--blue)" />
          <StatTile icon={CheckCircle2} value={`${result.correctEvidenceCount} ✓`} label="Evidencia correcta marcada" color="var(--amber)" />
          <StatTile icon={FileSearch} value={`${result.evidenceCoverage}%`} label="Cobertura de evidencia" color="var(--blue)" />
          <StatTile
            icon={ScrollText}
            value={result.hintsUsed ? `−${result.hintsUsed}` : '0'}
            label="Pistas usadas"
            color="var(--text-dim)"
          />
        </div>
      </motion.section>

      <div className="panel panel-pad" style={{ marginTop: 22 }}>
        <div className="panel-title">
          <span className="ico"><Fingerprint size={16} aria-hidden="true" /></span>
          Desempeño del detective
        </div>

        <div style={{ display: 'grid', gap: 16 }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span className="muted" style={{ fontSize: 12.5 }}>Análisis de evidencia</span>
              <span className="mono" style={{ fontSize: 12.5 }}>{result.evidenceCoverage}%</span>
            </div>
            <ProgressBar value={result.evidenceCoverage} max={100} tone="blue" label="Análisis de evidencia" />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span className="muted" style={{ fontSize: 12.5 }}>Precisión de la decisión</span>
              <span className="mono" style={{ fontSize: 12.5 }}>{result.accuracy}%</span>
            </div>
            <ProgressBar value={result.accuracy} max={100} tone={result.correct ? 'green' : 'amber'} label="Precisión de la decisión" />
          </div>
        </div>
      </div>

      <div className="panel panel-pad" style={{ marginTop: 22 }}>
        <button
          className="panel-title"
          style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
          onClick={() => {
            play('click')
            setShowReport((prev) => !prev)
          }}
          aria-expanded={showReport}
        >
          <span className="ico"><ScrollText size={16} aria-hidden="true" /></span>
          Reporte del caso {showReport ? '▲' : '▼'}
        </button>

        {showReport && (
          <div className="report-block">
            <div className="report-line">
              <span className="k">Sospechoso acusado</span>
              <span className={`v ${selectedSuspect?.id === result.correctSuspectId ? 'right' : 'wrong'}`}>
                {selectedSuspect ? selectedSuspect.name : 'Ninguno'} {success && '✓'}
              </span>
            </div>
            <div className="report-line">
              <span className="k">Responsable real</span>
              <span className="v right">{correctSuspect?.name}</span>
            </div>
            <div className="report-line">
              <span className="k">Evidencia correcta seleccionada</span>
              <span className="v right">
                {correctEvidence.length
                  ? correctEvidence.map((eid) => evidenceById[eid]?.title).join(' · ')
                  : 'Ninguna'}
              </span>
            </div>
            <div className="report-line">
              <span className="k">Evidencia incorrecta seleccionada</span>
              <span className="v wrong">
                {incorrectEvidence.length
                  ? incorrectEvidence.map((eid) => evidenceById[eid]?.title).join(' · ')
                  : 'Ninguna ✓'}
              </span>
            </div>
            <div className="report-line">
              <span className="k">Completado</span>
              <span className="v">{formatDate(result.completedAt)}</span>
            </div>
          </div>
        )}

        <div className="report-block">
          <div className="panel-title" style={{ marginBottom: 8 }}>
            <span className="ico" style={{ color: 'var(--amber)' }}><ShieldAlert size={16} aria-hidden="true" /></span>
            Resolución del caso
          </div>
          <p className="muted" style={{ fontSize: 13.5 }}>{caseData.solution}</p>
        </div>
      </div>

      <div className="panel panel-pad" style={{ marginTop: 22 }}>
        <div className="panel-title">
          <span className="ico" style={{ color: success ? 'var(--green)' : 'var(--red)' }}>
            <Send size={16} aria-hidden="true" />
          </span>
          Canal de automatización
        </div>

        {result.n8nSubmitted ? (
          <div style={{ display: 'grid', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'var(--green)' }}>
              <CheckCircle2 size={17} aria-hidden="true" /> REPORTE DE INVESTIGACIÓN ENVIADO
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'var(--blue)' }}>
              <Target size={17} aria-hidden="true" /> DESEMPEÑO ANALIZADO — {result.n8nPerformance ?? 'ESTÁNDAR'}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'var(--amber)' }}>
              <Trophy size={17} aria-hidden="true" /> CLASIFICACIÓN ACTUALIZADA
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: 10 }}>
            <p className="muted" style={{ fontSize: 13, margin: 0 }}>
              Investigación completada. Tu resultado se guardó localmente, pero el servicio de automatización no pudo ser contactado.
            </p>
            <button className="btn btn-blue" style={{ alignSelf: 'start' }} disabled={retrying} onClick={retryN8nSubmission}>
              <Send size={15} aria-hidden="true" /> {retrying ? 'REINTENTANDO…' : 'REINTENTAR ENVÍO'}
            </button>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: 14, marginTop: 26, flexWrap: 'wrap' }}>
        <Link to="/cases" className="btn btn-ghost">
          <ArrowLeft size={16} aria-hidden="true" /> VOLVER A CASOS
        </Link>
        <button className="btn" style={{ borderColor: 'var(--border-strong)' }} onClick={() => navigate(`/case/${caseData.id}`)}>
          <Fingerprint size={16} aria-hidden="true" /> REVISAR ESTE CASO
        </button>
        <Link to="/leaderboard" className="btn btn-primary" style={{ marginLeft: 'auto' }}>
          CLASIFICACIÓN <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}