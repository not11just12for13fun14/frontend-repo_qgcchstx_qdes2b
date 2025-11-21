import React from 'react'
import GlassCard from './GlassCard'

const tokens = {
  color: {
    accent: '#8A4FFF',
    bg: '#000000',
    surface: 'rgba(255,255,255,0.06)',
    ring: 'rgba(138,79,255,0.6)'
  },
  shadow: {
    soft: '0 10px 30px rgba(0,0,0,0.4)',
    glow: '0 0 24px rgba(138,79,255,0.55)'
  },
  radii: {
    sm: '10px',
    md: '14px',
    xl: '20px',
  }
}

export default function DesignTokens(){
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <GlassCard className="p-6">
          <div className="text-white font-semibold">Design tokens</div>
          <pre className="mt-4 text-xs md:text-sm text-white/80 bg-black/40 rounded-xl p-4 overflow-auto"><code>{JSON.stringify(tokens, null, 2)}</code></pre>
        </GlassCard>
      </div>
    </section>
  )
}
