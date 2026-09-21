import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Activity, Power, Volume2, VolumeX, Music, Music2 } from 'lucide-react'
import { onConnectionChange } from '../services/api.js'
import {
  play, isSoundEnabled, isMusicEnabled, toggleSound, toggleMusic,
} from '../services/sound.js'

export default function Navbar({ player }) {
  const [soundOn, setSoundOn] = useState(isSoundEnabled())
  const [musicOn, setMusicOn] = useState(isMusicEnabled())
  const [online, setOnline] = useState(true)

  useEffect(() => {
    const unsubscribe = onConnectionChange(setOnline)
    return unsubscribe
  }, [])

  const rank = player?.bestRank && player.bestRank !== '-' ? `Rango ${player.bestRank}` : 'Sin casos aún'

  const handleSoundToggle = () => {
    const next = toggleSound()
    setSoundOn(next)
    if (next) play('click')
  }

  const handleMusicToggle = () => {
    const next = toggleMusic()
    setMusicOn(next)
    play('click')
  }

  return (
    <header className="navbar">
      <Link to="/" className="brand" aria-label="CASE 404 inicio">
        <span className="brand-badge">404</span>
        <span>
          <span className="brand-name">CASE 404</span>
          <span className="brand-sub">Cada pista esconde una historia</span>
        </span>
      </Link>

      <div className="navbar-spacer" />

      <div className={`navbar-status ${online ? '' : 'status-off'} `} title={online ? 'Conectado a json-server' : 'Ejecutándose con base de datos local precargada'}>
        <span className="status-dot" />
        <span>{online ? 'RED CID ● ONLINE' : 'BASE LOCAL ○ OFFLINE'}</span>
      </div>

      <button
        className="btn btn-ghost icon-btn"
        onClick={handleSoundToggle}
        aria-label={soundOn ? 'Silenciar efectos de sonido' : 'Activar efectos de sonido'}
        title={soundOn ? 'Sonido: ON' : 'Sonido: OFF'}
      >
        {soundOn ? <Volume2 size={17} /> : <VolumeX size={17} />}
      </button>

      <button
        className="btn btn-ghost icon-btn"
        onClick={handleMusicToggle}
        aria-label={musicOn ? 'Detener música de suspenso' : 'Iniciar música de suspenso'}
        title={musicOn ? 'Música: ON' : 'Música: OFF'}
      >
        {musicOn ? <Music2 size={17} /> : <Music size={17} />}
      </button>

      <div className="player-chip" title={player?.name ?? 'Agente desconocido'}>
        <span className="player-avatar" aria-hidden="true">
          {player?.id ?? 'D'}
        </span>
        <span className="player-meta">
          <strong>{player?.name ?? 'Detective'}</strong>
          <span>{rank}</span>
        </span>
      </div>

      <Link to="/profile" className="btn btn-ghost icon-btn" aria-label="Actividad">
        <Activity size={16} />
      </Link>
      <Link to="/" className="btn btn-ghost icon-btn" aria-label="Salir (demo)">
        <Power size={16} />
      </Link>
    </header>
  )
}