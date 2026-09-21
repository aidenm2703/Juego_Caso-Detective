const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || ''

/**
 * Sends the completed investigation payload to the n8n webhook.
 * Returns the parsed JSON response from the workflow (or throws on failure).
 */
export async function submitInvestigationToN8n(payload) {
  if (!N8N_WEBHOOK_URL) {
    throw new Error('VITE_N8N_WEBHOOK_URL is not configured.')
  }

  const res = await fetch(N8N_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    throw new Error(`n8n webhook responded with ${res.status}`)
  }

  return res.json()
}

export function isN8nConfigured() {
  return Boolean(N8N_WEBHOOK_URL)
}