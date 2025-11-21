import React, { useEffect, useState } from 'react'
import GlassCard from './GlassCard'

const themes = [
  { id: 'arcyn-dark', name: 'Arcyn Dark', description: 'Ultra-futuristic dark with neon purple glow', vars: { '--accent': '#8A4FFF', '--bg': '#000000', '--surface': 'rgba(255,255,255,0.06)' } },
  { id: 'luminous-light', name: 'Luminous Light', description: 'Soft light with subtle glass and cool accents', vars: { '--accent': '#6B8CFF', '--bg': '#f7f8fb', '--surface': 'rgba(0,0,0,0.06)' } },
  { id: 'neon-dusk', name: 'Neon Dusk', description: 'Magenta/indigo blend with bokeh lighting', vars: { '--accent': '#FF56D6', '--bg': '#0b0b12', '--surface': 'rgba(255,255,255,0.08)' } },
]

function applyTheme(id){
  const t = themes.find(x=>x.id===id) || themes[0]
  Object.entries(t.vars).forEach(([k,v]) => document.documentElement.style.setProperty(k, v))
  document.documentElement.setAttribute('data-theme', t.id)
  localStorage.setItem('theme-preset', t.id)
}

export default function ThemeGallery(){
  const [active, setActive] = useState(() => localStorage.getItem('theme-preset') || 'arcyn-dark')
  useEffect(() => { applyTheme(active) }, [active])

  return (
    <GlassCard className="p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-semibold">Theme presets</div>
        <div className="text-xs text-white/60">Live apply</div>
      </div>
      <div className="mt-4 grid sm:grid-cols-3 gap-3">
        {themes.map(t => (
          <button
            key={t.id}
            onClick={()=>setActive(t.id)}
            className={`rounded-2xl p-4 text-left border transition-all ${active===t.id? 'border-white/30 bg-white/10' : 'border-white/10 hover:border-white/20 bg-white/5'}`}
          >
            <div className="h-20 rounded-xl mb-3 bg-[radial-gradient(400px_200px_at_20%_10%,rgba(138,79,255,0.25),transparent_50%),radial-gradient(300px_180px_at_90%_10%,rgba(138,79,255,0.15),transparent_50%)]" />
            <div className="text-white/90 font-medium">{t.name}</div>
            <div className="text-white/60 text-xs mt-1">{t.description}</div>
          </button>
        ))}
      </div>
    </GlassCard>
  )
}
