import React, { useEffect, useRef, useState } from 'react'
import { Command, Rocket, Search, Settings, Sparkles, Terminal, Clock } from 'lucide-react'
import GlassCard from './GlassCard'

export default function CommandPalette({ open, onClose, onAction }) {
  const ref = useRef(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    function onKey(e){
      if(e.key === 'Escape') onClose?.()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const actions = [
    { id: 'new-project', icon: <Sparkles size={16} />, label: 'New Project' },
    { id: 'open-recent', icon: <Clock size={16} />, label: 'Open Recent Project' },
    { id: 'open-terminal', icon: <Terminal size={16} />, label: 'Open Terminal' },
    { id: 'start-tuning', icon: <Rocket size={16} />, label: 'Start Tuning Job' },
    { id: 'settings', icon: <Settings size={16} />, label: 'Settings' },
  ]

  const filtered = actions.filter(a => a.label.toLowerCase().includes(query.toLowerCase()))

  if (!open) return null
  return (
    <div className="fixed inset-0 z-[100] grid place-items-start pt-28 bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <GlassCard className="mx-auto w-full max-w-xl p-2" onClick={e=>e.stopPropagation()}>
        <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
          <Command size={16} className="text-purple-300" />
          <input
            ref={ref}
            autoFocus
            value={query}
            onChange={e=>setQuery(e.target.value)}
            placeholder="Type a command…"
            className="w-full bg-transparent outline-none text-white placeholder:text-white/40 text-sm"
          />
          <Search size={16} className="text-white/50" />
        </div>
        <div className="max-h-64 overflow-y-auto">
          {filtered.map(a => (
            <button key={a.id} onClick={()=>onAction?.(a.id)} className="w-full flex items-center gap-3 text-left px-3 py-2 hover:bg-white/5 text-white/80">
              {a.icon}
              <span>{a.label}</span>
            </button>
          ))}
          {filtered.length === 0 && (
            <div className="px-3 py-6 text-white/50 text-sm">No results</div>
          )}
        </div>
      </GlassCard>
    </div>
  )
}
