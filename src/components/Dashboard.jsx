import React from 'react'
import GlassCard from './GlassCard'

const projects = [
  { name: 'Nexalab Platform', updated: '2h ago' },
  { name: 'Modulex UI', updated: '1d ago' },
  { name: 'Arcyn.x Agents', updated: '3d ago' },
]

export default function Dashboard() {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <GlassCard className="p-6">
            <div className="text-white font-semibold">Recent projects</div>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              {projects.map(p => (
                <div key={p.name} className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/80">
                  <div>{p.name}</div>
                  <div className="text-xs text-white/50 mt-1">Updated {p.updated}</div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-white font-semibold">Architecture insights</div>
            <div className="mt-4 text-white/70 text-sm">Live dependency graphs and suggested refactors will appear here.</div>
          </GlassCard>
        </div>
        <div className="space-y-6">
          <GlassCard className="p-6">
            <div className="text-white font-semibold">AI recommendations</div>
            <ul className="mt-3 space-y-2 text-white/70 text-sm">
              <li>Enable Auto-Build for your Modulex UI project</li>
              <li>Add type-safe API layer to Arcyn.x Agents</li>
              <li>Optimize bundle for Nexalab Platform</li>
            </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-white font-semibold">Quick actions</div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {['New Project','Open IDE','Start Session','Tune Model'].map(a => (
                <button key={a} className="rounded-xl bg-white text-black px-3 py-2 text-sm">{a}</button>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-white font-semibold">Usage analytics</div>
            <div className="mt-4 h-24 rounded-xl bg-white/5" />
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
