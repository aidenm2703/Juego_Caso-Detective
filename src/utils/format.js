export function formatTime(totalSeconds) {
  const safe = Math.max(0, totalSeconds)
  const hours = Math.floor(safe / 3600)
  const minutes = Math.floor((safe % 3600) / 60)
  const seconds = safe % 60
  const mm = String(minutes).padStart(2, '0')
  const ss = String(seconds).padStart(2, '0')
  return hours > 0 ? `${hours}:${mm}:${ss}` : `${mm}:${ss}`
}

export function formatScore(value) {
  return Number(value || 0).toLocaleString('es-ES')
}

export function formatDate(isoString) {
  if (!isoString) return '—'
  return new Date(isoString).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function capitalize(value) {
  if (!value) return value
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export const EVIDENCE_TYPE_LABEL = {
  physical: 'Física',
  document: 'Documento',
  trace: 'Indicio',
  testimony: 'Testimonio',
  digital: 'Digital',
}

export const DIFFICULTY_LABEL = {
  EASY: 'Fácil',
  MEDIUM: 'Media',
  HARD: 'Difícil',
}

export const STATUS_LABEL = {
  AVAILABLE: 'Disponible',
  COMPLETED: 'Resuelto',
  LOCKED: 'Bloqueado',
}