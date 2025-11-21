import React from 'react'
import GlassCard from './GlassCard'

const sections = [
  { id: 'getting-started', title: 'Getting Started' },
  { id: 'ide', title: 'IDE' },
  { id: 'ai-engine', title: 'AI Engine' },
  { id: 'api', title: 'API' },
  { id: 'glossary', title: 'Glossary' },
]

export default function Docs() {
  return (
    <section id="docs" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[260px_1fr] gap-8">
        <aside className="sticky top-28 h-fit">
          <GlassCard className="p-4">
            <nav className="space-y-1 text-sm">
              {sections.map(s => (
                <a key={s.id} href={`#${s.id}`} className="block rounded-lg px-3 py-2 text-white/70 hover:text-white hover:bg-white/5">{s.title}</a>
              ))}
            </nav>
          </GlassCard>
        </aside>
        <div className="space-y-8">
          {sections.map(s => (
            <GlassCard key={s.id} className="p-6" id={s.id}>
              <h3 className="text-white font-semibold text-xl">{s.title}</h3>
              <pre className="mt-4 text-xs md:text-sm text-white/80 bg-black/40 rounded-xl p-4 overflow-auto"><code>{`// ${s.title}\n// Code examples and API references will render here.`}</code></pre>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
