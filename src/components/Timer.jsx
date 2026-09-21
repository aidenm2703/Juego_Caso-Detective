import { Timer as TimerIcon } from 'lucide-react'
import { formatTime } from '../utils/format.js'

export default function Timer({ seconds, low = seconds <= 60 }) {
  return (
    <span className={`timer${low ? ' low' : ''}`} aria-label={`Tiempo restante: ${formatTime(seconds)}`}>
      <TimerIcon size={17} aria-hidden="true" />
      {formatTime(seconds)}
    </span>
  )
}