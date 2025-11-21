import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import DemoReel from './components/DemoReel'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Docs from './components/Docs'
import Onboarding from './components/Onboarding'
import Dashboard from './components/Dashboard'
import IDE from './components/IDE'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(138,79,255,0.15),transparent_50%),radial-gradient(900px_500px_at_90%_20%,rgba(138,79,255,0.1),transparent_50%)]" />
      </div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <DemoReel />
        <Testimonials />
        <Pricing />
        <Onboarding />
        <Dashboard />
        <IDE />
        <Docs />
      </main>
      
      <footer className="relative z-10 border-t border-white/10 mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12 text-white/60">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>© {new Date().getFullYear()} ArcynForge • Arcyn ecosystem</div>
            <div className="flex items-center gap-6">
              <a className="hover:text-white" href="#">Arcyn.x</a>
              <a className="hover:text-white" href="#">Modulex</a>
              <a className="hover:text-white" href="#">Nexalab</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
