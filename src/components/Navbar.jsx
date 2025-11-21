import React from 'react'

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-purple-300 shadow-[0_0_24px_rgba(138,79,255,0.8)]" />
            <span className="text-white font-semibold">ArcynForge</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-white/70">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#docs" className="hover:text-white">Docs</a>
          </nav>
          <a href="#" className="rounded-xl bg-white text-black px-4 py-2 text-sm">Get Started</a>
        </div>
      </div>
    </div>
  )
}
