'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Link from 'next/link'

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

/* ── data ────────────────────────────────────────────────────────── */
const approach = [
  { n: '01', text: 'Understand the business properly' },
  { n: '02', text: 'Build a clear strategy' },
  { n: '03', text: 'Execute consistently' },
  { n: '04', text: 'Improve based on data' },
]

const principles = [
  {
    no: 'No overpromising.',
    body: 'We only commit to what we can actually deliver. Honest timelines, honest expectations.',
  },
  {
    no: 'No confusion.',
    body: "You'll always know what's happening, what we're doing, and why it matters.",
  },
  {
    no: 'No unnecessary complexity.',
    body: 'Simple, focused systems outperform complicated ones every time.',
  },
]

/* ── page ────────────────────────────────────────────────────────── */
export default function About() {
  return (
    <main>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-32 lg:pb-28 bg-background overflow-hidden">
        {/* blob */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px]"
            style={{ background: 'radial-gradient(ellipse, rgba(0,212,180,0.08) 0%, transparent 65%)' }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn>
            <span className="inline-block text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              About Us
            </span>
          </FadeIn>

          <FadeIn delay={80}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-[1.08] tracking-tight max-w-2xl">
              Built on clarity,<br />consistency, and trust.
            </h1>
          </FadeIn>

          <FadeIn delay={160}>
            <p className="mt-6 text-text-muted text-lg leading-relaxed max-w-xl">
              A digital marketing agency based in Colombo, focused on helping
              businesses generate consistent inquiries through social media
              and Meta ads.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-surface border-y border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 lg:gap-24 items-start">

            {/* left label */}
            <FadeIn>
              <div className="md:sticky md:top-28">
                <span className="text-accent text-xs font-semibold tracking-[0.25em] uppercase">
                  Our Story
                </span>
                <div className="mt-4 w-8 h-px bg-accent opacity-60" />
              </div>
            </FadeIn>

            {/* right content */}
            <div className="flex flex-col gap-8">
              <FadeIn delay={80}>
                <p className="text-text-primary text-lg leading-relaxed">
                  IN&apos;SYNC started with a simple idea:{' '}
                  <span className="text-text-primary font-medium">
                    most businesses don&apos;t need more content — they need a
                    system that actually brings in customers.
                  </span>
                </p>
              </FadeIn>

              <FadeIn delay={140}>
                <p className="text-text-muted text-base leading-relaxed">
                  With around a year of hands-on experience in social media
                  marketing and paid ads, we&apos;ve seen what works — and what
                  doesn&apos;t. We&apos;ve worked with service-based businesses across
                  Colombo and seen the same pattern: posting consistently but
                  still not seeing inquiries come in.
                </p>
              </FadeIn>

              <FadeIn delay={200}>
                <p className="text-text-muted text-base leading-relaxed">
                  The problem is almost never the content itself. It&apos;s the lack
                  of a structured system behind it — one that connects content,
                  paid ads, and clear messaging into something that moves people
                  to reach out.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ──────────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 lg:gap-24 items-start">

            {/* left label */}
            <FadeIn>
              <div className="md:sticky md:top-28">
                <span className="text-accent text-xs font-semibold tracking-[0.25em] uppercase">
                  Our Approach
                </span>
                <div className="mt-4 w-8 h-px bg-accent opacity-60" />
                <p className="mt-4 text-text-muted text-sm leading-relaxed">
                  Four things we do for every client, every time.
                </p>
              </div>
            </FadeIn>

            {/* right steps */}
            <div className="flex flex-col divide-y divide-border">
              {approach.map((item, i) => (
                <FadeIn key={item.n} delay={i * 80}>
                  <div className="flex items-center gap-6 py-6 group">
                    <span
                      className="font-heading text-2xl font-bold tabular-nums flex-shrink-0 w-10"
                      style={{ color: 'rgba(0,212,180,0.25)' }}
                    >
                      {item.n}
                    </span>
                    <span className="text-text-primary text-lg font-medium group-hover:text-accent transition-colors duration-200">
                      {item.text}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-surface border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16">
              <span className="text-accent text-xs font-semibold tracking-[0.25em] uppercase">
                How We Operate
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mt-3">
                Three things we don&apos;t do.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <FadeIn key={p.no} delay={i * 100}>
                <div className="bg-background border border-border rounded-2xl p-6 md:p-8 flex flex-col gap-5 hover:border-accent/30 transition-colors duration-300">
                  {/* accent dash */}
                  <div className="w-6 h-0.5 bg-accent rounded-full" />
                  <h3 className="font-heading text-xl font-bold text-text-primary leading-snug">
                    {p.no}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING ───────────────────────────────────────────────── */}
      <section className="relative py-16 md:py-24 lg:py-36 bg-background overflow-hidden">
        {/* ambient glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[130px]"
            style={{ background: 'radial-gradient(ellipse, rgba(0,212,180,0.07) 0%, transparent 65%)' }}
          />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            {/* opening quote mark */}
            <span className="block font-heading text-6xl text-accent opacity-20 leading-none mb-2 select-none" aria-hidden>
              &ldquo;
            </span>
            <p className="font-heading text-2xl md:text-3xl font-semibold text-text-primary leading-snug">
              Just clear work, consistent effort,
              <br className="hidden sm:block" /> and continuous improvement.
            </p>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-accent text-background font-semibold text-sm hover:brightness-110 active:scale-[0.97] transition-all duration-200 w-full sm:w-auto"
              >
                See Our Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-border text-text-primary font-semibold text-sm hover:border-accent hover:text-accent transition-all duration-200 w-full sm:w-auto"
              >
                Get in Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  )
}
