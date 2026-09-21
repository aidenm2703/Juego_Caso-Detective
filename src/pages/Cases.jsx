import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { api } from '../services/api.js'
import CaseCard from '../components/CaseCard.jsx'
import LoadingState from '../components/LoadingState.jsx'
import ErrorState from '../components/ErrorState.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { sortByDifficulty } from '../utils/gameLogic.js'

export default function Cases() {
  const [cases, setCases] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    let cancelled = false
    api
      .getCases()
      .then((data) => {
        if (!cancelled) setCases(sortByDifficulty(data))
      })
      .catch((err) => {
        if (!cancelled) setError(err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => { cancelled = true }
  }, [reloadKey])

  return (
    <div className="page">
      <div className="page-head">
        <div>
          <span className="page-kicker">Sala de casos</span>
          <h1 className="page-title">Selección de casos</h1>
          <p className="page-desc">
            Cada expediente contiene una investigación completa: perfiles de sospechosos, evidencia física,
            testimonios y una única acusación correcta.
          </p>
        </div>
      </div>

      {loading && <LoadingState message="Cargando expedientes..." sub="Consultando la base de datos de evidencia." />}

      {error && (
        <ErrorState message="No se pudieron cargar los expedientes." onRetry={() => setReloadKey((k) => k + 1)}>
          Verifica que la API esté activa (`npm run server`) e inténtalo de nuevo.
        </ErrorState>
      )}

      {!loading && !error && cases.length === 0 && <EmptyState message="La sala de casos está vacía." />}

      {!loading && !error && cases.length > 0 && (
        <div className="case-grid">
          {cases.map((caseData, i) => (
            <motion.div key={caseData.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
              <CaseCard caseData={caseData} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}