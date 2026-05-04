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
  { n: '01', text: 'Understand what drives your business' },
  { n: '02', text: 'Build a strategy with clear direction' },
  { n: '03', text: 'Execute to attract the right audience' },
  { n: '04', text: 'Improve using real performance data' },
]

const principles = [
  {
    no: 'No overpromising.',
    body: 'We set clear targets, realistic timelines, and deliver work that moves your business forward.',
  },
  {
    no: 'No confusion.',
    body: 'You get clear communication, clear direction, and full visibility on what is happening.',
  },
  {
    no: 'No unnecessary complexity.',
    body: 'We keep your marketing focused, efficient, and built to generate results without wasted effort.',
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
              Growth starts with the right system.
            </h1>
          </FadeIn>

          <FadeIn delay={160}>
            <p className="mt-6 text-text-muted text-lg leading-relaxed max-w-xl">
              At IN&apos;SYNC, we build digital marketing systems that align brand, audience, and business goals. Based in Colombo, we partner with businesses to drive consistent inquiries through social media and Meta ads, with every strategy grounded in clarity, consistency, and trust. Our approach is deliberate and focused. We combine strong messaging, structured execution, and performance-led thinking so every touchpoint supports growth. By working in close alignment with each client, we create a digital presence that feels cohesive, credible, and built for long-term impact.
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
                  IN&apos;SYNC began with a clear belief. Businesses need more than an online presence. They need a system that turns attention into real inquiries.
                </p>
              </FadeIn>

              <FadeIn delay={140}>
                <p className="text-text-muted text-base leading-relaxed">
                  Working closely with service-based businesses, we saw a common problem. Brands were posting content, spending on ads, and staying active online, yet results stayed inconsistent. We understood why. The strategy was disconnected, the messaging was unclear, and growth was left to chance.
                </p>
              </FadeIn>

              <FadeIn delay={200}>
                <p className="text-text-muted text-base leading-relaxed">
                  IN&apos;SYNC was built to change that. We bring content, paid media, and brand messaging together into a clear digital system that helps your business attract the right audience, build trust, and drive steady growth.
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
                  The four steps behind consistent inquiries and stronger growth.
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
                We protect your time, budget, and growth.
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
              If your marketing is not bringing leads,
              <br className="hidden sm:block" /> it is costing you business.
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
