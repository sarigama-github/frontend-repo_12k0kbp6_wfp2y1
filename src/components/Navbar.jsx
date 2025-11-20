import { useState } from 'react'
import { Menu, X, Sparkles, Trophy, BookOpenCheck } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Product', href: '#features' },
    { label: 'How it works', href: '#how' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/30">
            <BookOpenCheck className="w-5 h-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">StudyPlay</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-slate-200/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#pricing" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 bg-white rounded-full px-4 py-2 shadow/50 shadow-blue-500/10 hover:shadow-blue-500/20 transition-shadow">
            <Trophy className="w-4 h-4" /> Start Competing
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 rounded-xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-4 space-y-4">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="block text-slate-200/90">
              {item.label}
            </a>
          ))}
          <a href="#pricing" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 bg-white rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4" /> Start Competing
          </a>
        </div>
      )}
    </header>
  )
}
