'use client'

import { useEffect, useRef, useState, type ReactNode, type ChangeEvent, type SyntheticEvent } from 'react'

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

/* ── constants ───────────────────────────────────────────────────── */
const WA_NUMBER = '94XXXXXXXXX'
const WA = `https://wa.me/${WA_NUMBER}`

const businessTypes = [
  'Construction',
  'Real Estate',
  'Villa & Rental',
  'Restaurant & F&B',
  'Healthcare & Clinics',
  'Other',
]

/* ── shared field wrapper ────────────────────────────────────────── */
function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-text-primary text-sm font-medium">{label}</label>
      {children}
    </div>
  )
}

const inputCls =
  'w-full bg-background border border-border rounded-xl px-4 py-3 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors duration-200'

/* ── page ────────────────────────────────────────────────────────── */
export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    businessType: '',
    whatsapp: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const update =
    (field: keyof typeof form) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    const text = [
      `Hi IN’SYNC! I’d like to discuss my business.`,
      ``,
      `Name: ${form.name}`,
      `Business Type: ${form.businessType}`,
      `WhatsApp: ${form.whatsapp}`,
      ``,
      `About my business:`,
      form.message,
    ].join('\n')
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
    setSubmitted(true)
  }

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
              Contact
            </span>
          </FadeIn>
          <FadeIn delay={80}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-[1.08] tracking-tight max-w-xl">
              Let&apos;s discuss your business.
            </h1>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="mt-6 text-text-muted text-lg leading-relaxed max-w-xl">
              If you&apos;re looking to generate more inquiries and build a consistent
              flow of leads, we&apos;d be happy to understand your business and see
              how we can help.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── CONTACT SECTION ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">

            {/* ── LEFT: contact details ── */}
            <div className="flex flex-col gap-10">
              <FadeIn>
                <div>
                  <span className="text-accent text-xs font-semibold tracking-[0.25em] uppercase">
                    Reach Us Directly
                  </span>
                  <div className="mt-6 flex flex-col gap-6">

                    {/* WhatsApp */}
                    <a
                      href={WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center flex-shrink-0 group-hover:border-accent/50 transition-colors duration-200">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
                          className="text-accent" aria-hidden>
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-text-muted text-xs uppercase tracking-wider mb-0.5">WhatsApp</p>
                        <p className="text-text-primary text-sm font-medium group-hover:text-accent transition-colors duration-200">
                          Message us on WhatsApp
                        </p>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:info@in-syncdigital.com"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center flex-shrink-0 group-hover:border-accent/50 transition-colors duration-200">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round" className="text-accent" aria-hidden>
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-text-muted text-xs uppercase tracking-wider mb-0.5">Email</p>
                        <p className="text-text-primary text-sm font-medium group-hover:text-accent transition-colors duration-200">
                          info@in-syncdigital.com
                        </p>
                      </div>
                    </a>

                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center flex-shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round" className="text-accent" aria-hidden>
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-text-muted text-xs uppercase tracking-wider mb-0.5">Location</p>
                        <p className="text-text-primary text-sm font-medium leading-relaxed">
                          46, Sri Saranankara Road,<br />
                          Dehiwela, Colombo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* WhatsApp note */}
              <FadeIn delay={100}>
                <div className="rounded-xl border border-border bg-background p-5">
                  <p className="text-text-muted text-sm leading-relaxed">
                    Or{' '}
                    <a
                      href={WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline underline-offset-2"
                    >
                      send us a message directly on WhatsApp
                    </a>{' '}
                    with a short description of your business and we&apos;ll get back to you.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* ── RIGHT: form ── */}
            <FadeIn delay={80}>
              {submitted ? (
                <div className="rounded-2xl border border-border bg-background p-7 sm:p-10 flex flex-col items-center text-center gap-5">
                  {/* checkmark */}
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                      className="text-accent" aria-hidden>
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-text-primary mb-2">
                      WhatsApp opened!
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed max-w-xs">
                      Your message has been pre-filled. Just hit send and we&apos;ll
                      get back to you shortly.
                    </p>
                  </div>
                  <p className="text-text-muted text-xs">
                    Didn&apos;t open?{' '}
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                      className="text-accent hover:underline underline-offset-2">
                      Click here to message us.
                    </a>
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', businessType: '', whatsapp: '', message: '' }) }}
                    className="mt-2 text-text-muted text-xs hover:text-text-primary transition-colors duration-200 underline underline-offset-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-border bg-background p-7 md:p-9 flex flex-col gap-6"
                >
                  {/* top accent line */}
                  <div className="-mt-7 md:-mt-9 -mx-7 md:-mx-9 h-px bg-gradient-to-r from-transparent via-accent to-transparent mb-2" />

                  <Field label="Full Name">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Naleef Siraj"
                      value={form.name}
                      onChange={update('name')}
                      className={inputCls}
                    />
                  </Field>

                  <Field label="Business Type">
                    <div className="relative">
                      <select
                        required
                        value={form.businessType}
                        onChange={update('businessType')}
                        className={`${inputCls} appearance-none pr-10 cursor-pointer bg-background`}
                      >
                        <option value="" disabled>Select your industry</option>
                        {businessTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round" aria-hidden>
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                  </Field>

                  <Field label="WhatsApp Number">
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 077 123 4567"
                      value={form.whatsapp}
                      onChange={update('whatsapp')}
                      className={inputCls}
                    />
                  </Field>

                  <Field label="Tell us about your business">
                    <textarea
                      required
                      rows={5}
                      placeholder="What do you sell or offer? Who is your target customer? What's your current marketing situation?"
                      value={form.message}
                      onChange={update('message')}
                      className={`${inputCls} resize-none`}
                    />
                  </Field>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-accent text-background font-semibold text-sm hover:brightness-110 active:scale-[0.98] transition-all duration-200 mt-1"
                  >
                    Send Message
                  </button>

                  <p className="text-text-muted text-xs text-center leading-relaxed">
                    This will open WhatsApp with your details pre-filled.
                    <br />No spam. We only respond to serious enquiries.
                  </p>
                </form>
              )}
            </FadeIn>

          </div>
        </div>
      </section>

    </main>
  )
}
