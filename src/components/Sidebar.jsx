import { NavLink } from 'react-router-dom'
import { Home, FolderSearch, Trophy, UserRound } from 'lucide-react'

const LINKS = [
  { to: '/', label: 'Central', icon: Home },
  { to: '/cases', label: 'Casos', icon: FolderSearch },
  { to: '/leaderboard', label: 'Clasificación', icon: Trophy },
  { to: '/profile', label: 'Perfil', icon: UserRound },
]

export default function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Navegación principal">
      {LINKS.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) => `side-link${isActive ? ' active' : ''}`}
        >
          <Icon size={19} aria-hidden="true" />
          <span className="side-label">{label}</span>
        </NavLink>
      ))}

      <div className="sidebar-footer">
        <span>CID · Terminal 04</span>
        <br />
        <span>v1.1.0 · ES</span>
      </div>
    </aside>
  )
}