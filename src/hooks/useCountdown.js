import { useEffect, useRef, useState } from 'react'

/**
 * Countdown hook used by the investigation timer.
 *
 * - Decrements every second through setInterval.
 * - Re-syncs to `initial` whenever the time limit (from the API) changes.
 * - Cleans up the interval on unmount / when the countdown stops.
 * - Calls onExpire exactly once when the countdown actually reaches zero.
 *   Expiration only fires after the timer has genuinely started ticking
 *   (countdownStartedRef), so the async data-loading phase — where the
 *   limit briefly renders as 0 — can never trigger a premature finish.
 * - timerFinishedRef guards against double-finishing in React StrictMode.
 */
export function useCountdown({ initial, running, onExpire }) {
  const [timeRemaining, setTimeRemaining] = useState(initial ?? 0)
  const timerFinishedRef = useRef(false)
  const countdownStartedRef = useRef(false)

  useEffect(() => {
    setTimeRemaining(initial ?? 0)
    timerFinishedRef.current = false
    countdownStartedRef.current = false
  }, [initial])

  useEffect(() => {
    if (!running) return undefined

    if (timeRemaining <= 0) {
      if (countdownStartedRef.current && !timerFinishedRef.current) {
        timerFinishedRef.current = true
        onExpire?.()
      }
      return undefined
    }

    countdownStartedRef.current = true

    const interval = setInterval(() => {
      setTimeRemaining((prev) => Math.max(0, prev - 1))
    }, 1000)

    return () => clearInterval(interval)
  }, [running, timeRemaining, initial, onExpire])

  return [timeRemaining, setTimeRemaining]
}