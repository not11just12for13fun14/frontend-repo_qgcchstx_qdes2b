import React from 'react'
import GlassCard from './GlassCard'

const faqs = [
  {
    q: 'How is ArcynForge different from Cursor or Windsurf?',
    a: 'It predicts architecture, auto-builds end-to-end flows, and runs an autonomous self-debugging engine with live dependency graphs.'
  },
  {
    q: 'Does it work with my stack?',
    a: 'Yes. It integrates with major frameworks and services. Automatic API wiring is built-in.'
  },
  {
    q: 'Can teams collaborate?',
    a: 'Real-time sessions, shared contexts, and Pair-AI mode let teams move faster together.'
  },
]

export default function FAQ() {
  return (
    <section className="relative py-24">
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white">FAQ</h2>
          <p className="mt-3 text-white/60">Answers to common questions.</p>
        </div>
        <div className="space-y-4">
          {faqs.map(item => (
            <GlassCard key={item.q} className="p-6">
              <h3 className="text-white font-medium">{item.q}</h3>
              <p className="mt-2 text-white/70">{item.a}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
