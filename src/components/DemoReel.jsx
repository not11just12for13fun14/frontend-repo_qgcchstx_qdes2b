import React from 'react'
import GlassCard from './GlassCard'

export default function DemoReel() {
  return (
    <section id="demo" className="relative py-24">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Demo Reel</h2>
          <p className="mt-3 text-white/60">A glimpse of the AI-in-the-loop building experience.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard className="aspect-video flex items-center justify-center text-white/70">Auto-Build Mode • Live</GlassCard>
          <GlassCard className="aspect-video flex items-center justify-center text-white/70">Architecture Prediction • Live</GlassCard>
        </div>
      </div>
    </section>
  )
}
