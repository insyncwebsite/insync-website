'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

/* ── scroll-in animation ─────────────────────────────────────────── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return { ref, visible }
}

function FadeIn({ children, className = '', delay = 0 }: {
  children: ReactNode; className?: string; delay?: number
}) {
  const { ref, visible } = useFadeIn()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  )
}

/* ── svg icon wrapper ────────────────────────────────────────────── */
function SvgIcon({ children }: { children: ReactNode }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {children}
    </svg>
  )
}

/* ── shared WhatsApp icon ────────────────────────────────────────── */
function WaIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

/* ── data ────────────────────────────────────────────────────────── */
const WA = 'https://wa.me/94XXXXXXXXX'
const CAL = 'https://calendly.com'

const steps = [
  {
    n: '01', title: 'Understand your business',
    body: 'We start with a clear understanding of your service, audience, and goals.',
  },
  {
    n: '02', title: 'Build your content + ad system',
    body: 'We create content and run targeted ads designed to attract the right people.',
  },
  {
    n: '03', title: 'Optimize weekly',
    body: 'We continuously test, improve, and refine what works.',
  },
  {
    n: '04', title: 'Track and report',
    body: 'You get a clear breakdown of performance every month.',
  },
]

const industries: { label: string; icon: ReactNode }[] = [
  {
    label: 'Construction Companies',
    icon: (
      <>
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
        <path d="M9 22V12h6v10" />
        <path d="M8 7h8M8 11h8" />
      </>
    ),
  },
  {
    label: 'Real Estate Agents',
    icon: (
      <>
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
  },
  {
    label: 'Villa & Rental Property Owners',
    icon: (
      <>
        <circle cx="7.5" cy="15.5" r="5.5" />
        <path d="m21 2-9.6 9.6" />
        <path d="m15.5 7.5 3 3L22 7l-3-3" />
      </>
    ),
  },
  {
    label: 'Service-Based Businesses',
    icon: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </>
    ),
  },
  {
    label: 'Restaurants & F&B',
    icon: (
      <>
        <path d="M3 2v5c0 1.7 1.3 3 3 3s3-1.3 3-3V2" />
        <line x1="6" y1="2" x2="6" y2="22" />
        <path d="M21 2c-2 3-3 5-3 7s1 3 3 3v10" />
      </>
    ),
  },
  {
    label: 'Healthcare & Clinics',
    icon: (
      <path d="M10 2h4v8h8v4h-8v8h-4v-8H2v-4h8V2z" />
    ),
  },
]

const inclusions = [
  '8–10 social media posts per month',
  '3–4 reels per month',
  'Meta ads setup & management',
  'Lead generation campaigns',
  'Ad creatives + copywriting',
  'Weekly optimization',
  'Monthly performance report',
  'Direct communication & weekly check-ins',
]

const whyPoints = [
  {
    title: 'Clear communication',
    body: "You'll always know what's being done and why. No jargon, no fluff.",
  },
  {
    title: 'Structured execution',
    body: 'Every action follows a clear plan — content, ads, and optimization working together.',
  },
  {
    title: 'Consistent improvement',
    body: 'We track what works and build on it every week.',
  },
]

/* ── page ────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">

        {/* animated gradient blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full blur-[120px] animate-[blob_10s_ease-in-out_infinite]"
            style={{ background: 'radial-gradient(circle, rgba(0,212,180,0.10) 0%, transparent 65%)' }}
          />
          <div
            className="absolute top-1/2 -right-20 w-[500px] h-[500px] rounded-full blur-[100px] animate-[blob_14s_ease-in-out_3000ms_infinite]"
            style={{ background: 'radial-gradient(circle, rgba(0,212,180,0.06) 0%, transparent 65%)' }}
          />
          <div
            className="absolute -bottom-32 left-1/3 w-[450px] h-[450px] rounded-full blur-[110px] animate-[blob_12s_ease-in-out_6000ms_infinite]"
            style={{ background: 'radial-gradient(circle, rgba(0,212,180,0.05) 0%, transparent 65%)' }}
          />
        </div>

        {/* noise overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" aria-hidden>
          <filter id="hero-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#hero-noise)" />
        </svg>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="inline-block text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-7">
              Digital Marketing · Colombo, Sri Lanka
            </span>
          </FadeIn>

          <FadeIn delay={80}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.06] tracking-tight mb-6">
              No inquiries?<br />No consistent leads?
            </h1>
          </FadeIn>

          <FadeIn delay={160}>
            <p className="text-text-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              We help service-based businesses generate consistent inquiries
              using structured social media and Meta ads.
            </p>
          </FadeIn>

          <FadeIn delay={240}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={CAL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-accent text-background font-semibold text-sm hover:brightness-110 active:scale-[0.97] transition-all duration-200 w-full sm:w-auto"
              >
                Book a Quick Call
              </a>
              <a
                href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-border text-text-primary font-semibold text-sm hover:border-accent hover:text-accent transition-all duration-200 w-full sm:w-auto"
              >
                <WaIcon />
                Message us on WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2" aria-hidden>
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-text-muted opacity-30" />
        </div>
      </section>

      {/* ── WHAT WE DO ────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-surface border-y border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-text-primary leading-tight mb-6">
              Most businesses are posting regularly…
              <br className="hidden md:block" />
              but still not getting real inquiries.
            </h2>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="text-text-muted text-lg leading-relaxed">
              That&apos;s because content alone is not enough. At IN&apos;SYNC, we focus on
              building a simple system that brings in consistent inquiries — not
              just likes and views.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16">
              <span className="text-accent text-xs font-semibold tracking-[0.25em] uppercase">The Process</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mt-3">
                How it works
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {steps.map((step, i) => (
              <FadeIn key={step.n} delay={i * 80}>
                <div className="border border-border rounded-2xl p-6 md:p-8 bg-surface flex flex-col gap-4 hover:border-accent/30 transition-colors duration-300">
                  <span
                    className="font-heading text-5xl font-bold leading-none select-none"
                    style={{ color: 'rgba(0,212,180,0.18)' }}
                  >
                    {step.n}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-text-primary">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{step.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ──────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-surface border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16">
              <span className="text-accent text-xs font-semibold tracking-[0.25em] uppercase">Industries</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mt-3">
                Who we work with
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <FadeIn key={ind.label} delay={i * 60}>
                <div className="bg-background border border-border rounded-xl p-4 sm:p-6 flex flex-col gap-4 hover:border-accent/40 group transition-colors duration-300">
                  <span className="text-accent group-hover:scale-110 transition-transform duration-300 inline-block">
                    <SvgIcon>{ind.icon}</SvgIcon>
                  </span>
                  <span className="text-text-primary text-sm font-medium leading-snug">
                    {ind.label}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE PACKAGE ──────────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-accent text-xs font-semibold tracking-[0.25em] uppercase">Pricing</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mt-3">
                Simple. Transparent.
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="relative rounded-2xl border border-border bg-surface overflow-hidden">
              {/* top accent line */}
              <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
              <div className="p-6 sm:p-8 md:p-10">
                <h3 className="font-heading text-2xl font-bold text-text-primary">Monthly Retainer</h3>
                <div className="flex items-end gap-2 mt-2 mb-8">
                  <span className="font-heading text-4xl font-bold text-accent">LKR 50,000</span>
                  <span className="text-text-muted text-sm mb-1">/month</span>
                </div>
                <ul className="flex flex-col gap-3 mb-8">
                  {inclusions.map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        className="flex-shrink-0 mt-0.5 text-accent" aria-hidden>
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5"
                          strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={CAL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-7 py-3.5 rounded-full bg-accent text-background font-semibold text-sm hover:brightness-110 active:scale-[0.97] transition-all duration-200"
                >
                  Get Started
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── WHY IN'SYNC ───────────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-surface border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16">
              <span className="text-accent text-xs font-semibold tracking-[0.25em] uppercase">Why us</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mt-3">
                We&apos;re not here to just manage your page.
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyPoints.map((pt, i) => (
              <FadeIn key={pt.title} delay={i * 100}>
                <div className="bg-background border border-border rounded-2xl p-6 md:p-8 flex flex-col gap-4">
                  <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-text-primary">{pt.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{pt.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ───────────────────────────────────────────── */}
      <section className="relative py-16 md:py-24 lg:py-36 bg-background overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full blur-[140px]"
            style={{ background: 'radial-gradient(circle, rgba(0,212,180,0.07) 0%, transparent 65%)' }}
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-primary leading-tight mb-5">
              Ready to build a system that
              <br className="hidden md:block" />
              actually brings in leads?
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-text-muted text-lg leading-relaxed mb-10">
              If you&apos;re looking to build a system that brings in consistent
              inquiries — let&apos;s have a quick conversation.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={CAL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-accent text-background font-semibold text-sm hover:brightness-110 active:scale-[0.97] transition-all duration-200 w-full sm:w-auto"
              >
                Book a Call
              </a>
              <a
                href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-border text-text-primary font-semibold text-sm hover:border-accent hover:text-accent transition-all duration-200 w-full sm:w-auto"
              >
                <WaIcon />
                WhatsApp Us
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  )
}
