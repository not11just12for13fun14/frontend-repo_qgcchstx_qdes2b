import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Bot, Code2, GitBranch, CircuitBoard, Cog, Layers, Radar, LineChart, TerminalSquare, Sparkles, Users } from 'lucide-react'
import GlassCard from './GlassCard'

const items = [
  {
    icon: Brain,
    title: 'AI Engine',
    points: ['Auto-build mode', 'Autonomous code gen', 'Context memory across files', 'Smart refactors']
  },
  {
    icon: Radar,
    title: 'Deep System Intelligence',
    points: ['Predictive architecture', 'Automatic API integration', 'Self-debugging', 'Live dependency graph']
  },
  {
    icon: Layers,
    title: 'Creator Tools',
    points: ['UI Builder', 'Prompt pipelines', '3D file explorer', 'Multi-cursor AI agents']
  },
  {
    icon: Users,
    title: 'Collaboration',
    points: ['Real-time sessions', 'Pair-AI mode', 'Shared contexts', 'Cloud presence']
  },
  {
    icon: CircuitBoard,
    title: 'Cloud Environment',
    points: ['Built-in sandboxes', 'Auto-deploy', 'Cloud compute', 'Seamless scaling']
  },
  {
    icon: Cog,
    title: 'Customization',
    points: ['Themes', 'Extension marketplace', 'Keyboard-first', 'Smart command palette']
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 opacity-50 bg-[radial-gradient(1000px_circle_at_20%_20%,rgba(138,79,255,0.15),transparent_40%),radial-gradient(800px_circle_at_80%_60%,rgba(138,79,255,0.12),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Core Systems</h2>
          <p className="mt-3 text-white/60">Designed to outperform Cursor, Windsurf, and VS Code — by design.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, points }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <GlassCard className="p-6 h-full">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{title}</h3>
                </div>
                <ul className="mt-4 space-y-2 text-white/70 text-sm">
                  {points.map(p => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(138,79,255,0.8)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
