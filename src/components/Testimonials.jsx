import React from 'react'
import GlassCard from './GlassCard'

const testimonials = [
  { name: 'Nova Chen', role: 'Founder, Nexalab', quote: 'ArcynForge feels like coding in the future. The Auto-Build mode is absurdly fast.' },
  { name: 'Jules Armitage', role: 'CTO, Modulex', quote: 'The AI anticipates architecture like a senior staff engineer. Unreal.' },
  { name: 'Mara Gupta', role: 'Designer-Engineer', quote: 'The UI builder makes interfaces feel tactile and alive.' },
]

export default function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white">What builders say</h2>
          <p className="mt-3 text-white/60">Designers, founders, and engineers switching every day.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <GlassCard key={t.name} className="p-6">
              <p className="text-white/80">“{t.quote}”</p>
              <div className="mt-6 text-sm text-white/60">{t.name} • {t.role}</div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
