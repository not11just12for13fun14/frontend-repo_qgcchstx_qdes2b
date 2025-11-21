import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(1200px circle at 50% 10%, rgba(138,79,255,0.25), transparent 50%)'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
        >
          ArcynForge — Architecting the Future of Coding
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl mx-auto"
        >
          An ultra-futuristic IDE with AI-in-the-loop. Glass, neon, and motion — built for speed, precision, and deep system intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#demo" className="relative inline-flex items-center gap-2 rounded-xl px-6 py-3 text-black bg-white hover:bg-white/90 transition shadow-[0_10px_40px_rgba(255,255,255,0.25)]">
            Launch Demo
          </a>
          <a href="#features" className="relative inline-flex items-center gap-2 rounded-xl px-6 py-3 text-white bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/30">
            Explore Features
          </a>
        </motion.div>
      </div>
    </section>
  )
}
