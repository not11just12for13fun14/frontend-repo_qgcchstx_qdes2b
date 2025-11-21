import React, { useEffect, useMemo, useState } from 'react'
import GlassCard from './GlassCard'
import CommandPalette from './CommandPalette'
import { api } from '../utils/api'
import { File, GitBranch, Github, Play, Plus, Save, Terminal as TermIcon } from 'lucide-react'

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

  useEffect(() => {
    setContent(sampleFiles[active])
  }, [active])

  useEffect(() => {
    // load projects and jobs from backend
    api.get('/api/projects').then(r => setProjects(r.items || [])).catch(()=>{})
    api.get('/api/tuning-jobs').then(r => setJobs(r.items || [])).catch(()=>{})
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

  const projectName = useMemo(() => (projects[0]?.name || 'Untitled Project'), [projects])

  async function handleAction(id){
    if(id === 'new-project'){
      try {
        const res = await api.post('/api/projects', { name: `Arcyn ${Date.now()}`, language: 'javascript' })
        const list = await api.get('/api/projects')
        setProjects(list.items||[])
      } catch {
        // ignore
      }
    }
    if(id === 'open-terminal'){
      document.getElementById('terminal')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <section className="relative py-24">
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
              <button className="rounded-lg bg-white/10 px-2 py-1 text-xs"><Save size={12} /></button>
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
            <div className="text-white/70 text-sm">Tuning Jobs</div>
            <div className="mt-3 space-y-2 text-white/70 text-sm">
              {jobs.map(j => (
                <div key={j.id} className="rounded-lg bg-white/5 px-3 py-2 flex items-center justify-between">
                  <span>{j.model}</span>
                  <span className="text-xs text-white/50">{j.status}</span>
                </div>
              ))}
              {jobs.length===0 && <div className="rounded-lg bg-white/5 px-3 py-2 text-white/50">No jobs</div>}
            </div>
          </GlassCard>
        </div>
      </div>

      <CommandPalette open={palette} onClose={()=>setPalette(false)} onAction={handleAction} />
    </section>
  )
}
