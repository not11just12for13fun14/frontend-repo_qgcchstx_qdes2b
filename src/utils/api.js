// Simple API client using VITE_BACKEND_URL fallback to same host on port 8000
export const API_BASE = (import.meta.env.VITE_BACKEND_URL?.replace(/\/$/, '')) || `${location.protocol}//${location.hostname}${location.port === '3000' ? ':8000' : ':8000'}`

async function request(path, { method = 'GET', body } = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`API ${method} ${path} failed: ${res.status} ${text}`)
  }
  return res.json()
}

export const api = {
  get: (path) => request(path, { method: 'GET' }),
  post: (path, data) => request(path, { method: 'POST', body: data }),
  put: (path, data) => request(path, { method: 'PUT', body: data }),
}
