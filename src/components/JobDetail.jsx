import React, { useEffect, useState } from 'react'
import GlassCard from './GlassCard'
import { api } from '../utils/api'

export default function JobDetail({ jobId, onClose }){
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    async function load(){
      setLoading(true)
      setError(null)
      try {
        const res = await api.get(`/api/tuning-jobs/${jobId}`)
        if(mounted) setData(res)
      } catch (e){
        if(mounted) setError('Could not load job details')
      } finally {
        if(mounted) setLoading(false)
      }
    }
    if(jobId) load()
    return () => { mounted = false }
  }, [jobId])

  if (!jobId) return null

  return (
    <div className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm grid place-items-center" onClick={onClose}>
      <GlassCard className="w-full max-w-md p-4" onClick={e=>e.stopPropagation()}>
        {loading && <div className="text-white/70 text-sm">Loading…</div>}
        {error && <div className="text-red-300 text-sm">{error}</div>}
        {data && (
          <div className="text-white/80 text-sm space-y-2">
            <div className="text-white font-semibold">Tuning Job</div>
            <div><span className="text-white/50">ID:</span> {data.id}</div>
            <div><span className="text-white/50">Model:</span> {data.model}</div>
            <div><span className="text-white/50">Status:</span> {data.status}</div>
            {data.objective && <div><span className="text-white/50">Objective:</span> {data.objective}</div>}
            {data.project_id && <div><span className="text-white/50">Project:</span> {data.project_id}</div>}
            <div className="pt-2">
              <button onClick={onClose} className="rounded-lg bg-white text-black px-3 py-1 text-xs">Close</button>
            </div>
          </div>
        )}
      </GlassCard>
    </div>
  )
}
