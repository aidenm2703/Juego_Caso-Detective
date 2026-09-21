import { capitalize, DIFFICULTY_LABEL, STATUS_LABEL } from '../utils/format.js'

const TAG_CLASS = { EASY: 'tag-green', MEDIUM: 'tag-amber', HARD: 'tag-red', AVAILABLE: 'tag-blue', COMPLETED: 'tag-green', LOCKED: 'tag-neutral' }

export default function Tag({ children, tone }) {
  const token = tone || children
  const className = TAG_CLASS[token] || 'tag-neutral'
  const label = DIFFICULTY_LABEL[token] || STATUS_LABEL[token] || capitalize(token)
  return <span className={`tag ${className}`}>{label}</span>
}