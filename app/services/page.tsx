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

/* ── icon wrapper ────────────────────────────────────────────────── */
function SvgIcon({ children }: { children: ReactNode }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {children}
    </svg>
  )
}

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

type ServiceCategory = {
  title: string
  items: string[]
  icon: ReactNode
  wide?: boolean
}

const categories: ServiceCategory[] = [
  {
    title: 'Content Creation',
    items: ['8–10 posts per month', '3–4 reels per month'],
    icon: (
      <>
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </>
    ),
  },
  {
    title: 'Performance Marketing',
    items: ['Meta ads setup & management', 'Lead generation campaigns (WhatsApp/messages)'],
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
  },
  {
    title: 'Creative & Copy',
    items: ['Ad creatives', 'Conversion-focused copywriting'],
    icon: (
      <>
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </>
    ),
  },
  {
    title: 'Optimization & Reporting',
    items: ['Weekly optimization', 'Monthly performance report'],
    icon: (
      <>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </>
    ),
  },
  {
    title: 'Communication',
    items: ['Direct communication', 'Weekly check-ins'],
    icon: (
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    ),
    wide: true,
  },
]

const processSteps = [
  { label: 'Initial discussion',          desc: 'We get on a call and learn what you want to achieve.' },
  { label: 'Understanding your business', desc: 'We dig into who you sell to and what makes you different.' },
  { label: 'Strategy and plan',           desc: 'We plan the content, ads, and messaging before anything goes live.' },
  { label: 'Execution',                   desc: 'Posts, reels, and campaigns start running.' },
  { label: 'Optimization & updates',      desc: "We check what's working and adjust every week." },
]

/* ── page ────────────────────────────────────────────────────────── */
export default function Services() {
  return (
    <main>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-32 lg:pb-28 bg-background overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px]"
            style={{ background: 'radial-gradient(ellipse, rgba(0,212,180,0.08) 0%, transparent 65%)' }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn>
            <span className="inline-block text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              Services
            </span>
          </FadeIn>
          <FadeIn delay={80}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-[1.08] tracking-tight max-w-3xl">
              Simple, structured marketing
              <br className="hidden sm:block" />that drives inquiries.
            </h1>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="mt-6 text-text-muted text-lg leading-relaxed max-w-xl">
              We don&apos;t offer dozens of services. We do one thing well: get you more inquiries through content and ads.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── CORE SERVICE ──────────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-surface border-y border-border">
        <div className="max-w-5xl mx-auto px-6">

          {/* section header */}
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
              <div>
                <span className="text-accent text-xs font-semibold tracking-[0.25em] uppercase">
                  Core Service
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mt-3">
                  What&apos;s Included
                </h2>
              </div>
              <div className="inline-flex items-end gap-1.5 flex-shrink-0">
                <span className="font-heading text-3xl font-bold text-accent">LKR 50,000</span>
                <span className="text-text-muted text-sm mb-1">/month</span>
              </div>
            </div>
          </FadeIn>

          {/* category cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((cat, i) => (
              <FadeIn key={cat.title} delay={i * 70} className={cat.wide ? 'md:col-span-2' : ''}>
                <div className={`border border-border rounded-xl bg-background p-5 sm:p-7 flex gap-5 hover:border-accent/40 group transition-colors duration-300 h-full ${cat.wide ? 'md:flex-row md:items-center' : 'flex-col'}`}>
                  {/* icon */}
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent/15 transition-colors duration-300">
                    <SvgIcon>{cat.icon}</SvgIcon>
                  </div>
                  {/* content */}
                  <div className={cat.wide ? 'flex flex-col md:flex-row md:items-center md:gap-16 flex-1' : ''}>
                    <h3 className="font-heading text-base font-semibold text-text-primary mb-3 md:mb-0 md:min-w-[180px]">
                      {cat.title}
                    </h3>
                    <ul className={`flex flex-col gap-2 ${cat.wide ? 'md:flex-row md:gap-8' : ''}`}>
                      {cat.items.map(item => (
                        <li key={item} className="flex items-start gap-2.5 text-text-muted text-sm">
                          <div className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* optional note */}
          <FadeIn delay={400}>
            <div className="mt-8 flex items-start gap-3 p-5 rounded-xl border border-border bg-background/50">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                className="text-accent flex-shrink-0 mt-0.5" aria-hidden>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              <p className="text-text-muted text-sm leading-relaxed">
                <span className="text-text-primary font-medium">Not ready for ads yet?</span>{' '}
                We can start with content only and bring in ads when you&apos;re ready.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16">
              <span className="text-accent text-xs font-semibold tracking-[0.25em] uppercase">
                How We Work
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mt-3">
                From first call to first results.
              </h2>
            </div>
          </FadeIn>

          {/* step flow */}
          <div className="relative">
            {/* connecting line — desktop only */}
            <div
              className="hidden md:block absolute top-4 h-px bg-border"
              style={{ left: '10%', right: '10%' }}
              aria-hidden
            />

            <div className="flex flex-col md:flex-row gap-10 md:gap-0">
              {processSteps.map((step, i) => (
                <FadeIn key={step.label} delay={i * 80} className="flex-1">
                  <div className="flex flex-col items-center text-center gap-4 px-3">
                    {/* circle */}
                    <div className="relative z-10 w-8 h-8 rounded-full border border-border bg-surface flex items-center justify-center flex-shrink-0">
                      <span
                        className="font-heading text-xs font-bold tabular-nums"
                        style={{ color: 'rgba(0,212,180,0.75)' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    {/* label */}
                    <p className="text-text-primary text-sm font-semibold font-heading leading-snug">
                      {step.label}
                    </p>
                    {/* desc */}
                    <p className="text-text-muted text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ───────────────────────────────────────────── */}
      <section className="relative py-16 md:py-24 lg:py-36 bg-background overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[400px] rounded-full blur-[140px]"
            style={{ background: 'radial-gradient(ellipse, rgba(0,212,180,0.07) 0%, transparent 65%)' }}
          />
        </div>
        {/* top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-border" />

        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary leading-snug mb-5">
              Want to grow your business with a system that actually works?
            </h2>
            <p className="text-text-muted text-lg mb-10">Let&apos;s talk.</p>
          </FadeIn>
          <FadeIn delay={120}>
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
