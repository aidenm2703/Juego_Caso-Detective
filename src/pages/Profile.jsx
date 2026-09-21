import { useEffect, useState } from 'react'
import { Fingerprint, Trophy, Target, Activity, BadgeCheck } from 'lucide-react'
import { api } from '../services/api.js'
import { usePlayer } from '../hooks/usePlayer.js'
import StatTile from '../components/StatTile.jsx'
import RankBadge from '../components/RankBadge.jsx'
import LoadingState from '../components/LoadingState.jsx'
import ErrorState from '../components/ErrorState.jsx'
import EmptyState from '../components/EmptyState.jsx'
import ProgressBar from '../components/ProgressBar.jsx'
import { formatScore, formatDate, formatTime } from '../utils/format.js'

export default function Profile() {
  const { player, loading, error, reload } = usePlayer()
  const [history, setHistory] = useState([])
  const [loadingHistory, setLoadingHistory] = useState(true)

  useEffect(() => {
    let cancelled = false
    api.getResults()
      .then((all) => {
        if (cancelled) return
        const mine = all
          .filter((r) => r.playerId === (player?.id ?? 1))
          .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))
        setHistory(mine)
      })
      .catch(() => {})
      .finally(() => { if (!cancelled) setLoadingHistory(false) })
    return () => { cancelled = true }
  }, [player?.id])

  const totalCases = (player?.casesSolved ?? 0) + (player?.casesFailed ?? 0)
  const solveRate = totalCases > 0 ? Math.round((player.casesSolved / totalCases) * 100) : 0

  return (
    <div className="page">
      <div className="page-head">
        <div>
          <span className="page-kicker">Expediente del oficial</span>
          <h1 className="page-title">Perfil</h1>
        </div>

        <div className="player-chip" style={{ padding: '8px 12px' }}>
          <span className="player-avatar">{player?.id ?? 'D'}</span>
          <div className="player-meta">
            <strong>{player?.name ?? 'Detective'}</strong>
            <span>{player?.codename ?? '—'}</span>
          </div>
        </div>
      </div>

      {loading && <LoadingState message="Cargando tu expediente..." />}
      {error && <ErrorState message="Base de datos de personal inaccesible." onRetry={reload} />}

      {!loading && !error && player && (
        <>
          <div className="stat-grid">
            <StatTile icon={Fingerprint} value={player.casesSolved} label="Casos resueltos" color="var(--green)" />
            <StatTile icon={Activity} value={player.casesFailed} label="Casos fallidos" color="var(--red)" />
            <StatTile icon={Target} value={formatScore(player.totalScore)} label="Puntaje total" color="var(--red)" />
            <StatTile icon={BadgeCheck} value={`${player.averageAccuracy}%`} label="Precisión promedio" color="var(--blue)" />
          </div>

          <div className="panel panel-pad" style={{ marginTop: 20 }}>
            <div className="panel-title">
              <span className="ico"><Trophy size={16} aria-hidden="true" /></span>
              Resumen de carrera
            </div>

            <div style={{ display: 'grid', gap: 18, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span className="muted" style={{ fontSize: 12.5 }}>Tasa de resolución</span>
                  <span className="mono" style={{ fontSize: 12.5 }}>{solveRate}%</span>
                </div>
                <ProgressBar value={solveRate} max={100} tone="green" label="Tasa de resolución" />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span className="muted" style={{ fontSize: 12.5 }}>Mejor rango</span>
                  <RankBadge rank={player.bestRank} size={34} />
                </div>
              </div>

              <div className="field-box">
                <span>ID de división</span>
                <b>CID · 404 {String(player.id).padStart(3, '0')}</b>
              </div>
            </div>
          </div>

          <div className="panel panel-pad" style={{ marginTop: 20 }}>
            <div className="panel-title">
              <span className="ico" style={{ color: 'var(--amber)' }}><Fingerprint size={16} aria-hidden="true" /></span>
              Historial de investigaciones
            </div>

            {loadingHistory ? (
              <LoadingState message="Cargando historial..." />
            ) : history.length === 0 ? (
              <EmptyState message="Aún no hay investigaciones cerradas. Toma un caso de la sala de casos." />
            ) : (
              <div className="history-list">
                {history.map((item) => (
                  <div key={item.id} className="history-item">
                    <RankBadge rank={item.rank} size={38} />
                    <div className="h-main">
                      <div className="h-title">{item.caseName}</div>
                      <div className="h-sub">
                        {formatDate(item.completedAt)} · {formatTime(item.timeUsed)} · {item.accuracy}% prec
                      </div>
                    </div>
                    <span className={`tag ${item.correct ? 'tag-green' : 'tag-red'}`}>
                      {item.correct ? 'RESUELTO' : 'FALLADO'}
                    </span>
                    <strong style={{ fontFamily: 'var(--font-mono)' }}>{formatScore(item.score)}</strong>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}