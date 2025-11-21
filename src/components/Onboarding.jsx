import React, { useState } from 'react'
import GlassCard from './GlassCard'

const questions = [
  { key: 'languages', label: 'Preferred languages', options: ['JavaScript/TypeScript', 'Python', 'Go', 'Rust', 'Java', 'Swift', 'Kotlin'] },
  { key: 'skill', label: 'Skill level', options: ['Beginner', 'Intermediate', 'Advanced'] },
  { key: 'frameworks', label: 'Frameworks', options: ['React', 'Next.js', 'Vue', 'Svelte', 'FastAPI', 'Django', 'Flutter'] },
  { key: 'projects', label: 'Project categories', options: ['Web apps', 'APIs', 'AI/ML', 'Mobile', 'CLIs', 'Tooling'] },
  { key: 'preference', label: 'Speed vs Accuracy', options: ['Speed', 'Balanced', 'Accuracy'] },
  { key: 'ui', label: 'UI look', options: ['Spatial', 'Minimal'] },
]

export default function Onboarding() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const done = step >= questions.length

  const select = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }))
    setTimeout(() => setStep(step + 1), 250)
  }

  return (
    <section className="relative py-24">
      <div className="relative max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Onboarding</h2>
          <p className="mt-3 text-white/60">We’ll tune ArcynForge to your habits.</p>
        </div>
        {!done ? (
          <GlassCard className="p-6">
            <div className="text-white/80">{questions[step].label}</div>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              {questions[step].options.map(opt => (
                <button key={opt} onClick={() => select(questions[step].key, opt)} className="text-left rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white/80 px-4 py-3">
                  {opt}
                </button>
              ))}
            </div>
            <div className="mt-6 h-2 w-full rounded-full bg-white/5 overflow-hidden">
              <div className="h-full bg-purple-500" style={{ width: `${((step+1)/questions.length)*100}%` }} />
            </div>
          </GlassCard>
        ) : (
          <GlassCard className="p-6">
            <div className="text-white font-semibold">Personalization ready</div>
            <pre className="mt-3 text-xs text-white/70">{JSON.stringify(answers, null, 2)}</pre>
            <button className="mt-6 rounded-xl bg-white text-black px-4 py-2">Enter Dashboard</button>
          </GlassCard>
        )}
      </div>
    </section>
  )
}
