import React from 'react'
import GlassCard from './GlassCard'

export default function IDE() {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[280px_1fr_360px] gap-6">
        <GlassCard className="p-4 h-[600px]">
          <div className="text-white/70 text-sm">File Explorer</div>
          <div className="mt-3 space-y-2 text-white/60 text-sm">
            {['app','components','lib','api','styles'].map(f => (
              <div key={f} className="rounded-lg bg-white/5 px-3 py-2">{f}/</div>
            ))}
          </div>
        </GlassCard>
        <GlassCard className="p-4 h-[600px]">
          <div className="rounded-xl bg-black/60 h-full p-4 text-white/80 text-sm font-mono overflow-auto">
            <div>// Editor</div>
            <pre className="mt-4">{`function hello() {\n  console.log('ArcynForge');\n}`}</pre>
          </div>
        </GlassCard>
        <div className="space-y-6">
          <GlassCard className="p-4 h-[280px]">
            <div className="text-white/70 text-sm">Side AI</div>
            <div className="mt-3 rounded-lg bg-white/5 h-[200px]" />
          </GlassCard>
          <GlassCard className="p-4 h-[300px]">
            <div className="text-white/70 text-sm">Terminal</div>
            <div className="mt-3 rounded-lg bg-black/70 h-[220px] text-white/70 p-3 font-mono text-xs">$ build --watch</div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
