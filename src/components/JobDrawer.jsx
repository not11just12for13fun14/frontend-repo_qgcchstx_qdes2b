import React, { useEffect, useState } from 'react'
import { api } from '../utils/api'

export default function JobDrawer({ jobId, onClose }){
  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let mounted = true
    async function load(){
      if(!jobId) return
      setLoading(true)
      try {
        const data = await api.get(`/api/tuning-jobs/${jobId}`)
        if(mounted) setJob(data)
      } finally {
        if(mounted) setLoading(false)
      }
    }
    load()
    const t = setInterval(load, 1500)
    return () => { mounted = false; clearInterval(t) }
  }, [jobId])

  if(!jobId) return null

  return (
    <div className="fixed inset-0 z-[110]" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="absolute right-0 top-0 h-full w-[380px] bg-black/80 border-l border-white/10 p-4" onClick={e=>e.stopPropagation()}>
        <div className="flex items-center justify-between text-white">
          <div className="font-semibold">Job Details</div>
          <button onClick={onClose} className="text-white/60 hover:text-white">Close</button>
        </div>
        {loading && <div className="text-white/60 text-sm mt-4">Loading…</div>}
        {job && (
          <div className="mt-4 space-y-2 text-white/80 text-sm">
            <div><span className="text-white/50">ID:</span> {job.id}</div>
            <div><span className="text-white/50">Model:</span> {job.model}</div>
            <div><span className="text-white/50">Status:</span> {job.status}</div>
            {job.objective && <div><span className="text-white/50">Objective:</span> {job.objective}</div>}
            {job.project_id && <div><span className="text-white/50">Project:</span> {job.project_id}</div>}
          </div>
        )}
      </div>
    </div>
  )
}
