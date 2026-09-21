import { useEffect, useState } from 'react'
import { api } from '../services/api.js'

const DEFAULT_PLAYER_ID = 1

/**
 * Loads the active player from the API and exposes a small error/loading
 * state wrapper so screens never render blank while the request is pending.
 */
export function usePlayer(playerId = DEFAULT_PLAYER_ID) {
  const [player, setPlayer] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [requestKey, setRequestKey] = useState(0)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    api
      .getPlayer(playerId)
      .then((data) => {
        if (!cancelled) setPlayer(data)
      })
      .catch((err) => {
        if (!cancelled) setError(err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [playerId, requestKey])

  const reload = () => setRequestKey((key) => key + 1)

  return { player, setPlayer, loading, error, reload }
}