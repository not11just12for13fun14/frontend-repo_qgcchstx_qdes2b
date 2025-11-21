import React from 'react'
import GlassCard from './GlassCard'

const motions = [
  { name: 'Fade + Lift', duration: 220, easing: 'cubic-bezier(0.2, 0.0, 0.2, 1)', desc: 'Default entrance: slight Y-8 lift, opacity 0→1.' },
  { name: 'Hover Glow', duration: 160, easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)', desc: 'Buttons glow, shadow intensifies subtly.' },
  { name: 'Dialog In', duration: 260, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', desc: 'Springy ease for modals.' },
  { name: 'Command Palette', duration: 200, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', desc: 'Fast search with soft fade.' },
]

export default function MotionGuidelines(){
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <div className="text-white font-semibold">Motion guidelines</div>
          <ul className="mt-4 space-y-3 text-white/80 text-sm">
            {motions.map(m => (
              <li key={m.name} className="rounded-xl bg-white/5 p-4">
                <div className="font-medium text-white">{m.name}</div>
                <div className="text-xs text-white/60 mt-1">{m.duration}ms • {m.easing}</div>
                <div className="text-white/70 text-sm mt-1">{m.desc}</div>
              </li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard className="p-6">
          <div className="text-white font-semibold">Easing presets</div>
          <pre className="mt-4 text-xs text-white/80 bg-black/40 rounded-xl p-4 overflow-auto"><code>{`// CSS variables for easing curves
:root {
  --ease-standard: cubic-bezier(0.2, 0.0, 0.2, 1);
  --ease-accelerate: cubic-bezier(0.4, 0.0, 1, 1);
  --ease-decelerate: cubic-bezier(0.0, 0, 0.2, 1);
  --ease-emphasized: cubic-bezier(0.22, 1, 0.36, 1);
}

// Usage
.element {
  transition: all 220ms var(--ease-standard);
}`}</code></pre>
        </GlassCard>
      </div>
    </section>
  )
}
