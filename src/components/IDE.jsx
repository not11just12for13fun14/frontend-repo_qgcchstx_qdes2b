import React, { useEffect, useMemo, useState } from 'react'
import GlassCard from './GlassCard'
import CommandPalette from './CommandPalette'
import { api } from '../utils/api'
import { File, GitBranch, Play, Plus, Save } from 'lucide-react'
import JobDrawer from './JobDrawer'

const sampleFiles = {
  'app/page.jsx': `export default function Page(){\n  return <main className=\"p-8\">ArcynForge</main>\n}`,
  'lib/utils.js': `export function cn(...a){return a.filter(Boolean).join(' ')}`,
  'components/Button.jsx': `export function Button({children}){\n  return <button className=\"rounded-xl bg-white text-black px-3 py-2\">{children}</button>\n}`
}

export default function IDE() {
  const [files] = useState(Object.keys(sampleFiles))
  const [active, setActive] = useState(files[0])
  const [content, setContent] = useState(sampleFiles[files[0]])
  const [palette, setPalette] = useState(false)
  const [projects, setProjects] = useState([])
  const [jobs, setJobs] = useState([])
  const [creating, setCreating] = useState(false)
  const [drawerJob, setDrawerJob] = useState(null)

  useEffect(() => {
    setContent(sampleFiles[active])
  }, [active])

  async function refresh() {
    try {
      const [p, j] = await Promise.all([
        api.get('/api/projects'),
        api.get('/api/tuning-jobs'),
      ])
      setProjects(p.items || [])
      setJobs(j.items || [])
    } catch (e) {
      // ignore for demo
    }
  }

  useEffect(() => {
    refresh()
    const interval = setInterval(refresh, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    function onKey(e){
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'){
        e.preventDefault();
        setPalette(v=>!v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    function onNewProject(){ handleAction('new-project') }
    function onOpenIDE(){ document.getElementById('ide-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
    function onStartTuning(){ handleAction('start-tuning') }
    window.addEventListener('arcyn:new-project', onNewProject)
    window.addEventListener('arcyn:open-ide', onOpenIDE)
    window.addEventListener('arcyn:start-tuning', onStartTuning)
    return () => {
      window.removeEventListener('arcyn:new-project', onNewProject)
      window.removeEventListener('arcyn:open-ide', onOpenIDE)
      window.removeEventListener('arcyn:start-tuning', onStartTuning)
    }
  }, [projects])

  const projectName = useMemo(() => (projects[0]?.name || 'Untitled Project'), [projects])

  async function handleAction(id){
    if(id === 'new-project'){
      try {
        setCreating(true)
        await api.post('/api/projects', { name: `Arcyn ${Date.now()}`, language: 'javascript' })
        await refresh()
      } catch {
        // ignore
      } finally {
        setCreating(false)
        setPalette(false)
      }
    }
    if(id === 'open-terminal'){
      document.getElementById('terminal')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    if(id === 'start-tuning'){
      try {
        const pid = projects[0]?.id || null
        await api.post('/api/tuning-jobs', { project_id: pid, model: 'arcyn-prime', objective: 'reduce latency', status: 'queued' })
        await refresh()
        setPalette(false)
      } catch {}
    }
  }

  async function markJobRunning(job){
    try {
      await api.put(`/api/tuning-jobs/${job.id}/status`, { status: 'running' })
      await refresh()
    } catch {}
  }

  return (
    <section id="ide-section" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[280px_1fr_360px] gap-6">
        <GlassCard className="p-4 h-[600px]">
          <div className="flex items-center justify-between text-white/70 text-sm">
            <div>Explorer</div>
            <button className="rounded-lg bg-white/10 px-2 py-1 text-xs" onClick={()=>setPalette(true)}><Plus size={12} /></button>
          </div>
          <div className="mt-3 space-y-2 text-white/80 text-sm">
            {files.map(f => (
              <button key={f} onClick={()=>setActive(f)} className={`w-full rounded-lg px-3 py-2 flex items-center gap-2 ${active===f? 'bg-white/10 text-white' : 'bg-white/5 text-white/70 hover:bg-white/7'}`}>
                <File size={14} /> {f}
              </button>
            ))}
          </div>
          <div className="mt-6 text-xs text-white/50">Projects</div>
          <div className="mt-2 space-y-2 text-white/70 text-sm">
            {projects.map(p => (
              <div key={p.id} className="rounded-lg bg-white/5 px-3 py-2">{p.name}</div>
            ))}
            {projects.length===0 && <div className="rounded-lg bg-white/5 px-3 py-2 text-white/50">No projects yet</div>}
          </div>
        </GlassCard>

        <GlassCard className="p-0 h-[600px] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <GitBranch size={14} /> main • {projectName}
            </div>
            <div className="flex items-center gap-2">
              <button disabled={creating} className="rounded-lg bg-white/10 px-2 py-1 text-xs"><Save size={12} /></button>
              <button className="rounded-lg bg-white text-black px-3 py-1 text-xs flex items-center gap-1"><Play size={12} />Run</button>
            </div>
          </div>
          <div className="grid grid-rows-[1fr_180px] h-full">
            <textarea value={content} onChange={e=>setContent(e.target.value)} className="bg-black/60 p-4 text-white/80 text-sm font-mono outline-none" />
            <div id="terminal" className="border-t border-white/10 bg-black/70 text-white/70 p-3 font-mono text-xs overflow-auto">
              $ build --watch\n> compiled successfully
            </div>
          </div>
        </GlassCard>

        <div className="space-y-6">
          <GlassCard className="p-4 h-[280px]">
            <div className="text-white/70 text-sm">AI Panel</div>
            <div className="mt-3 rounded-lg bg-white/5 h-[200px]" />
          </GlassCard>
          <GlassCard className="p-4 h-[300px]">
            <div className="flex items-center justify-between">
              <div className="text-white/70 text-sm">Tuning Jobs</div>
              <button onClick={()=>handleAction('start-tuning')} className="text-xs rounded-lg bg-white/10 px-2 py-1 text-white/70 hover:text-white">Start</button>
            </div>
            <div className="mt-3 space-y-2 text-white/70 text-sm">
              {jobs.map(j => (
                <button key={j.id} onClick={()=>setDrawerJob(j.id)} className="w-full rounded-lg bg-white/5 px-3 py-2 flex items-center justify-between text-left hover:bg-white/10">
                  <span>{j.model}</span>
                  <span className="flex items-center gap-3">
                    <span className="text-xs text-white/50">{j.status}</span>
                    {j.status !== 'completed' && (
                      <span onClick={(e)=>{ e.stopPropagation(); markJobRunning(j) }} className="text-xs rounded bg-white/10 px-2 py-1 cursor-pointer">Run</span>
                    )}
                  </span>
                </button>
              ))}
              {jobs.length===0 && <div className="rounded-lg bg-white/5 px-3 py-2 text-white/50">No jobs</div>}
            </div>
          </GlassCard>
        </div>
      </div>

      <CommandPalette open={palette} onClose={()=>setPalette(false)} onAction={handleAction} />
      <JobDrawer jobId={drawerJob} onClose={()=>setDrawerJob(null)} />
    </section>
  )
}
