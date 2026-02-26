'use client'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-forest-200/50">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-forest-600 flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="font-display text-xl text-forest-900 tracking-tight">Segrasafe</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Services', 'Why Us', 'Clients', 'About', 'Contact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-forest-800 hover:text-forest-500 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-forest-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-forest-700 transition-colors"
        >
          Request Pickup
        </a>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-forest-800 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-5 bg-forest-800 transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-forest-800 transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-forest-200/50 px-5 py-4 flex flex-col gap-4">
          {['Services', 'Why Us', 'Clients', 'About', 'Contact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-forest-800"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center bg-forest-600 text-white text-sm font-medium px-4 py-2.5 rounded-full"
          >
            Request Pickup
          </a>
        </div>
      )}
    </header>
  )
}
