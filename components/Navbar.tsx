'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Results', href: '#results' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1160px] px-4"
      style={{ pointerEvents: 'none' }}
    >
      <nav
        className="w-full rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(20px)',
          boxShadow: scrolled
            ? '0 4px 50px rgba(0,0,0,0.12)'
            : '0 4px 30px rgba(0,0,0,0.06)',
          pointerEvents: 'auto',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-display no-underline">
          <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="font-semibold text-navy-900 text-[1.05rem]" style={{ color: '#0d1526' }}>
            Meetbound
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          {navLinks.map(link => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-[0.95rem] font-medium no-underline transition-colors duration-200"
                style={{ color: '#3d4a6b' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#4A6CF7')}
                onMouseLeave={e => (e.currentTarget.style.color = '#3d4a6b')}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="#contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.9rem' }}>
            Book a Call
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#0d1526' }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="mt-2 rounded-2xl p-6 flex flex-col gap-4"
          style={{
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.1)',
            pointerEvents: 'auto',
          }}
        >
          {navLinks.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base font-medium no-underline"
              style={{ color: '#0d1526' }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="#contact" className="btn-primary text-center mt-2">
            Book a Call
          </Link>
        </div>
      )}
    </header>
  )
}
