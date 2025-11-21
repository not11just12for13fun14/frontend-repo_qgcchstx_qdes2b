import React from 'react'

export default function Footer() {
  return (
    <footer className="relative py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-white/60">
        <div>© {new Date().getFullYear()} ArcynForge</div>
        <nav className="flex items-center gap-6">
          <a className="hover:text-white transition" href="#">Arcyn.x</a>
          <a className="hover:text-white transition" href="#">Modulex</a>
          <a className="hover:text-white transition" href="#">Nexalab</a>
        </nav>
      </div>
    </footer>
  )
}
