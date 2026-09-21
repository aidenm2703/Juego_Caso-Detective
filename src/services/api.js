import { localDatabase } from '../data/database.js'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'
const TIMEOUT_MS = 3000

const RESULTS_KEY = 'case404_results'
const PLAYER_KEY = 'case404_player'

/* ------------------------------------------------------------------
   Local persistence (used when json-server is unreachable)
   ------------------------------------------------------------------ */

function loadLocalResults() {
  try {
    return JSON.parse(localStorage.getItem(RESULTS_KEY) || '[]')
  } catch {
    return []
  }
}

function saveLocalResults(results) {
  localStorage.setItem(RESULTS_KEY, JSON.stringify(results))
}

function loadLocalPlayer() {
  try {
    return JSON.parse(localStorage.getItem(PLAYER_KEY))
  } catch {
    return null
  }
}

function saveLocalPlayer(player) {
  localStorage.setItem(PLAYER_KEY, JSON.stringify(player))
}

/* ------------------------------------------------------------------
   Connection status (online / offline) for the UI badge
   ------------------------------------------------------------------ */

let connectionStatus = 'online'
const connectionListeners = new Set()

function setStatus(status) {
  if (status !== connectionStatus) {
    connectionStatus = status
    connectionListeners.forEach((fn) => fn(status))
  }
}

export function getConnectionStatus() {
  return connectionStatus
}

export function onConnectionChange(listener) {
  connectionListeners.add(listener)
  return () => connectionListeners.delete(listener)
}

/* ------------------------------------------------------------------
   HTTP core — every call falls back to local data when unreachable
   ------------------------------------------------------------------ */

async function request(path, options = {}) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

  let res
  try {
    res = await fetch(`${API_URL}${path}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
      signal: controller.signal,
    })
  } catch {
    clearTimeout(timer)
    setStatus('offline')
    throw new Error(`API unreachable: ${path}`)
  }
  clearTimeout(timer)

  if (!res.ok) {
    throw new Error(`API ${res.status}: ${path}`)
  }

  setStatus('online')
  return res.json()
}

function findBy(list, needle, key = 'id') {
  return list.find((item) => String(item[key]) === String(needle))
}

function dedupeById(items) {
  const seen = new Set()
  return items.filter((item) => {
    if (seen.has(item.id)) return false
    seen.add(item.id)
    return true
  })
}

/* ------------------------------------------------------------------
   API wrapper
   ------------------------------------------------------------------ */

export const api = {
  async getCases() {
    try {
      return await request('/cases')
    } catch {
      return localDatabase.cases
    }
  },

  async getCase(caseId) {
    let data
    try {
      data = await request(`/cases/${caseId}`)
    } catch {
      data = findBy(localDatabase.cases, caseId)
    }
    if (!data) throw new Error(`Case ${caseId} not found`)
    return data
  },

  async getSuspects(caseId) {
    try {
      return await request(`/suspects?caseId=${caseId}`)
    } catch {
      return localDatabase.suspects.filter((s) => String(s.caseId) === String(caseId))
    }
  },

  async getEvidence(caseId) {
    try {
      return await request(`/evidence?caseId=${caseId}`)
    } catch {
      return localDatabase.evidence.filter((e) => String(e.caseId) === String(caseId))
    }
  },

  async getPlayer(playerId = 1) {
    try {
      return await request(`/players/${playerId}`)
    } catch {
      return loadLocalPlayer() ?? findBy(localDatabase.players, playerId) ?? localDatabase.players[0]
    }
  },

  async updatePlayer(playerId, data) {
    try {
      return await request(`/players/${playerId}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      })
    } catch {
      saveLocalPlayer(data)
      setStatus('offline')
      return data
    }
  },

  async getResults() {
    let remote = []
    try {
      remote = await request('/results')
    } catch {
      /* fall through to local */
    }
    return dedupeById([...remote, ...loadLocalResults()])
  },

  async getResult(resultId) {
    let data
    try {
      data = await request(`/results/${resultId}`)
    } catch {
      data = findBy(loadLocalResults(), resultId)
    }
    if (!data) throw new Error(`Result ${resultId} not found`)
    return data
  },

  async createResult(resultData) {
    try {
      return await request('/results', {
        method: 'POST',
        body: JSON.stringify(resultData),
      })
    } catch {
      const localResult = {
        ...resultData,
        id: `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
        storedLocally: true,
      }
      saveLocalResults([...loadLocalResults(), localResult])
      setStatus('offline')
      return localResult
    }
  },

  async updateResult(resultId, patch) {
    try {
      return await request(`/results/${resultId}`, {
        method: 'PUT',
        body: JSON.stringify(patch),
      })
    } catch {
      const localResults = loadLocalResults()
      const updated = localResults.map((r) =>
        String(r.id) === String(resultId) ? { ...r, ...patch } : r,
      )
      saveLocalResults(updated)
      setStatus('offline')
      return patch
    }
  },
}