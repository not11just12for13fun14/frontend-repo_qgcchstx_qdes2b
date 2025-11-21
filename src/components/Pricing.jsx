import React from 'react'
import GlassCard from './GlassCard'

const tiers = [
  { name: 'Forge Lite', price: 'Free', features: ['AI assistance', '200 code generations/day', 'Basic themes', 'Community access'] },
  { name: 'Forge Pro', price: '$20/mo', features: ['Unlimited AI generations', 'Full Auto-Build Mode', 'Cloud compute credits', 'Advanced themes', 'Project intelligence graphs', 'Collaboration mode'] },
  { name: 'Arcyn Prime', price: '$49/mo', features: ['Everything in Pro', 'Autonomous Agent Builder', 'Background architecture analysis', 'Unlimited cloud compute', 'Dedicated model lanes', 'Priority execution'] },
  { name: 'Nexalab Systems', price: 'Custom', features: ['Custom model integration', 'Team cloud environments', 'Private repo intelligence', 'SSO, compliance, audit logs'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Pricing</h2>
          <p className="mt-3 text-white/60">Flexible plans for creators, pros, and enterprises.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map(t => (
            <GlassCard key={t.name} className="p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="text-white font-semibold text-lg">{t.name}</h3>
                <span className="text-purple-300 font-medium">{t.price}</span>
              </div>
              <ul className="mt-4 space-y-2 text-white/70 text-sm">
                {t.features.map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(138,79,255,0.8)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-xl bg-white text-black py-2.5 hover:bg-white/90 transition">Get Started</button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
