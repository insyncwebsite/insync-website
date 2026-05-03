'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-md border-b border-border shadow-[0_1px_24px_rgba(0,0,0,0.4)]'
          : 'bg-background border-b border-border'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="IN'SYNC Digital"
              width={100}
              height={40}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  pathname === href
                    ? 'text-accent'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 rounded-full bg-accent text-background text-sm font-semibold transition-all duration-200 hover:brightness-110 active:scale-95"
            >
              Book a Call
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden p-2 -mr-2 text-text-muted hover:text-text-primary transition-colors"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                <path d="M3 6H19M3 11H19M3 16H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="border-t border-border bg-surface flex flex-col px-6 py-5 gap-1">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`py-2.5 text-sm font-medium transition-colors duration-200 ${
                pathname === href
                  ? 'text-accent'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full flex justify-center items-center px-5 py-2.5 rounded-full bg-accent text-background text-sm font-semibold hover:brightness-110 transition-all duration-200"
          >
            Book a Call
          </a>
        </nav>
      </div>
    </header>
  )
}
