import { useEffect, useMemo, useState } from 'react'
import { Trophy } from 'lucide-react'
import { api } from '../services/api.js'
import RankBadge from '../components/RankBadge.jsx'
import LoadingState from '../components/LoadingState.jsx'
import ErrorState from '../components/ErrorState.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { formatScore, formatDate, formatTime } from '../utils/format.js'

const MEDALS = { 1: '🥇', 2: '🥈', 3: '🥉' }

export default function Leaderboard() {
  const [results, setResults] = useState([])
  const [caseFilter, setCaseFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    let cancelled = false
    api.getResults()
      .then((data) => { if (!cancelled) setResults(data) })
      .catch((err) => { if (!cancelled) setError(err) })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [reloadKey])

  const caseKeys = useMemo(() => {
    return [...new Set(results.map((r) => `${r.caseId}:${r.caseName}`))]
  }, [results])

  const filtered = useMemo(() => {
    const rows = results
      .filter((r) => caseFilter === 'all' || r.caseId === Number(caseFilter))
      .sort((a, b) => b.score - a.score)
    return rows
  }, [results, caseFilter])

  return (
    <div className="page">
      <div className="page-head">
        <div>
          <span className="page-kicker">Registros de campo</span>
          <h1 className="page-title">Clasificación</h1>
          <p className="page-desc">Ranking de todas las investigaciones cerradas, ordenado por puntaje final. Menos penalizaciones, acusaciones más precisas y velocidad te suben en la tabla.</p>
        </div>

        <label className="muted" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
          <Trophy size={15} color="var(--amber)" aria-hidden="true" /> Caso
          <select
            value={caseFilter}
            onChange={(e) => setCaseFilter(e.target.value)}
            style={{
              background: 'var(--panel-solid)',
              border: '1px solid var(--border-strong)',
              color: 'var(--text)',
              borderRadius: 9,
              padding: '8px 10px',
              fontSize: 13,
            }}
          >
            <option value="all">Todos los expedientes</option>
            {caseKeys.map((key) => {
              const [caseId, name] = key.split(':')
              return <option key={key} value={caseId}>{name}</option>
            })}
          </select>
        </label>
      </div>

      {loading && <LoadingState message="Cargando clasificación..." />}
      {error && <ErrorState message="No se pudo cargar la clasificación." onRetry={() => setReloadKey((k) => k + 1)} />}

      {!loading && !error && filtered.length === 0 && (
        <EmptyState message="Aún no hay investigaciones registradas. Cierra un caso para aparecer aquí." />
      )}

      {!loading && !error && filtered.length > 0 && (
        <div className="panel">
          <div style={{ overflowX: 'auto' }}>
            <table className="lb-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Oficial</th>
                  <th className="lb-hide-sm">Expediente</th>
                  <th>⇅ Acusación</th>
                  <th>Rango</th>
                  <th className="lb-hide-sm">Precisión</th>
                  <th className="lb-hide-sm">Tiempo</th>
                  <th className="lb-hide-sm">Fecha</th>
                  <th>Puntaje</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((row, index) => {
                  const solved = row.correct
                  return (
                    <tr key={row.id} className={`lb-row${index < 3 ? ` top${index + 1}` : ''}`}>
                      <td>
                        <span className="rank-pill">{MEDALS[index + 1] ?? index + 1}</span>
                      </td>
                      <td><strong>{row.playerName}</strong></td>
                      <td className="lb-hide-sm">{row.caseName}</td>
                      <td>
                        <span className={`tag ${solved ? 'tag-green' : 'tag-red'}`}>
                          {solved ? 'RESUELTO' : 'FALLADO'}
                        </span>
                      </td>
                      <td><RankBadge rank={row.rank} size={30} /></td>
                      <td className="lb-hide-sm">{row.accuracy}%</td>
                      <td className="lb-hide-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                        {formatTime(row.timeUsed)}
                      </td>
                      <td className="lb-hide-sm">{formatDate(row.completedAt)}</td>
                      <td><strong style={{ fontFamily: 'var(--font-mono)' }}>{formatScore(row.score)}</strong></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}