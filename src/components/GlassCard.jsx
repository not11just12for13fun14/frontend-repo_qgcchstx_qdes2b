import React from 'react'
import { cn } from '../utils/cn'

export default function GlassCard({ className = '', children, onClick }) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.06)]',
        'overflow-hidden transition-all duration-300 hover:bg-white/7.5 hover:shadow-[0_8px_40px_rgba(138,79,255,0.25)]',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--x,50%)_var(--y,50%),rgba(138,79,255,0.12),transparent_40%)]" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
