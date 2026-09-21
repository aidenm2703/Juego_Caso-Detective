import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Navbar.jsx'
import Sidebar from '../Sidebar.jsx'
import Notification from '../Notification.jsx'
import { usePlayer } from '../../hooks/usePlayer.js'
import { play, ensureMusicState } from '../../services/sound.js'

export default function AppLayout() {
  const { player } = usePlayer()
  const [notification, setNotification] = useState(null)
  const location = useLocation()

  const notify = (message, type = 'info') => {
    setNotification({ id: Date.now(), message, type })
  }

  useEffect(() => {
    play('page')
  }, [location.pathname])

  useEffect(() => {
    ensureMusicState()
  }, [])

  return (
    <div className="app-shell">
      <Navbar player={player} />

      <div className="layout-body">
        <Sidebar />

        <main className="layout-main">
          <Outlet context={{ player, notify }} />
        </main>
      </div>

      {notification && (
        <Notification
          key={notification.id}
          message={notification.message}
          type={notification.type}
          onDismiss={() => setNotification(null)}
        />
      )}
    </div>
  )
}