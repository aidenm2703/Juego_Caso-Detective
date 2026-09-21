import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Fingerprint, Clock, Trophy, MapPin, Target, UserX, ArrowRight, FileText,
} from 'lucide-react'
import Tag from './Tag.jsx'
import { formatTime, formatScore } from '../utils/format.js'

export default function CaseBriefing({ caseData, onAccept }) {
  return (
    <div className="page">
      <motion.div
        className="briefing"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="briefing-seal" aria-hidden="true">
          <Fingerprint size={44} />
        </div>

        <span className="page-kicker">Tarea confidencial</span>
        <h1 className="page-title">
          CASO #{caseData.caseNumber}
        </h1>
        <h2 className="briefing-title">{caseData.title}</h2>

        <div className="case-meta" style={{ justifyContent: 'center' }}>
          <Tag tone={caseData.difficulty} />
          <Tag tone={caseData.category} />
        </div>

        <div className="briefing-facts">
          <div className="briefing-fact">
            <UserX size={16} color="var(--red)" aria-hidden="true" />
            <div>
              <span>Incidente</span>
              <b>{caseData.victim}</b>
            </div>
          </div>
          <div className="briefing-fact">
            <MapPin size={16} color="var(--blue)" aria-hidden="true" />
            <div>
              <span>Escena</span>
              <b>{caseData.location}</b>
            </div>
          </div>
          <div className="briefing-fact">
            <Clock size={16} color="var(--amber)" aria-hidden="true" />
            <div>
              <span>Ventana de tiempo</span>
              <b>{formatTime(caseData.timeLimit)}</b>
            </div>
          </div>
          <div className="briefing-fact">
            <Trophy size={16} color="var(--green)" aria-hidden="true" />
            <div>
              <span>Meta de rango</span>
              <b>{formatScore(caseData.maxScore)} pts máx.</b>
            </div>
          </div>
        </div>

        <div className="briefing-objective">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--amber)', fontWeight: 700, marginBottom: 6 }}>
            <Target size={16} aria-hidden="true" /> OBJETIVO
          </div>
          <p className="muted" style={{ margin: 0 }}>
            Lee el resumen, interroga a los sospechosos, marca la evidencia que respalde una sola
            acusación, selecciona al responsable y presenta tu veredicto antes de que se agote el tiempo.
          </p>
        </div>

        <div className="hero-actions" style={{ justifyContent: 'center', marginTop: 26 }}>
          <button className="btn btn-primary btn-lg" onClick={onAccept}>
            <FileText size={17} aria-hidden="true" /> ACEPTAR TAREA
            <ArrowRight size={17} aria-hidden="true" />
          </button>
          <Link to="/cases" className="btn btn-ghost btn-lg">
            VOLVER A LA SALA
          </Link>
        </div>
      </motion.div>
    </div>
  )
}