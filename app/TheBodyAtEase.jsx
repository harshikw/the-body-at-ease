import React from 'react'
import { useState } from 'react'

// --- Utility components ---
const Container = ({ children, className = '' }) => (
  <div className={`mx-auto w-full max-w-7xl px-6 md:px-8 ${className}`}>{children}</div>
)

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-14 md:py-20">
    <Container>
      {title && (
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-emerald-950">
            {title}
          </h2>
          {subtitle && <p className="mt-2 max-w-3xl text-emerald-900/80">{subtitle}</p>}
        </div>
      )}
      {children}
    </Container>
  </section>
)

const IconPhone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.73 19.73 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.12.9.36 1.77.7 2.58a2 2 0 0 1-.45 2.11L10.91 11a16 16 0 0 0 6.09 6.09l1.59-1.42a2 2 0 0 1 2.11-.45c.81.34 1.68.58 2.58.7A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconMap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function TheBodyAtEase() {
  const services = ['Rehabilitation', 'Physical Therapy', 'Therapeutic Massage', 'Assisted Stretching', 'Personal Training']

  return (
    <main className="min-h-screen scroll-smooth bg-gradient-to-b from-emerald-50 via-emerald-50 to-stone-50 text-stone-800">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-emerald-900/10">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-emerald-950">
            <img src="/logo.png" alt="The Body at Ease logo" className="h-8 w-8 rounded-full"/>
            <span className="text-base md:text-lg">The Body at Ease</span>
          </div>
          <a href="tel:+94719887666" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-700">
            <IconPhone/> <span>Book a session</span>
          </a>
        </Container>
      </header>

      <Section id="home" title="Restore ease in every move" subtitle="Rehabilitation • Physical Therapy • Massage • Stretching • Personal Training">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-emerald-900/80 text-lg max-w-xl">
              At The Body at Ease, we combine clinical precision with calming comfort to help you move, heal, and feel better—guided by our owner, <strong>Charith Bopage</strong>.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://wa.me/94719887666" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700">
                Chat on WhatsApp
              </a>
              <a href="tel:+94719887666" className="inline-flex items-center justify-center rounded-full border border-emerald-700/20 bg-white px-6 py-3 text-sm font-semibold text-emerald-900 shadow-sm hover:bg-emerald-50">
                Call 071 988 7666
              </a>
            </div>
          </div>
          <img src="/studio-hero.jpg" alt="Therapy session" className="rounded-3xl shadow-xl ring-1 ring-emerald-900/10"/>
        </div>
      </Section>

      <Section id="contact" title="Contact Us" subtitle="We’re happy to answer questions or help you schedule a session.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-emerald-950">Get in touch</h3>
            <div className="mt-4 space-y-3 text-sm">
              <a href="https://wa.me/94719887666" className="flex items-center gap-3 text-emerald-800 hover:text-emerald-900"><IconPhone/> WhatsApp: 071 988 7666</a>
              <a href="tel:+94719887666" className="flex items-center gap-3 text-emerald-800 hover:text-emerald-900"><IconPhone/> Call: 071 988 7666</a>
              <p className="flex items-center gap-3 text-emerald-900/80"><IconMap/> 37/A/175, Rukmalgama Housing Scheme, Pannipitiya</p>
            </div>
          </div>
          <form className="rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-emerald-950">Name</label>
                <input id="name" name="name" placeholder="Your name" className="mt-1 w-full rounded-xl border border-emerald-900/20 px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-300"/>
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-emerald-950">Phone</label>
                <input id="phone" name="phone" placeholder="e.g., +94 7X XXX XXXX" className="mt-1 w-full rounded-xl border border-emerald-900/20 px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-300"/>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="service" className="text-sm font-medium text-emerald-950">Service</label>
                <select id="service" name="service" className="mt-1 w-full rounded-xl border border-emerald-900/20 px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-300">
                  {services.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-emerald-950">Message</label>
                <textarea id="message" name="message" rows={4} placeholder="Tell us briefly about your goals or pain points…" className="mt-1 w-full rounded-xl border border-emerald-900/20 px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-300"/>
              </div>
              <button type="button" className="md:col-span-2 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700">Send enquiry</button>
            </div>
          </form>
        </div>
      </Section>

      <footer className="border-t border-emerald-900/10 bg-white/70 py-10">
        <Container className="text-center text-sm text-emerald-900/70">
          <img src="/logo.png" alt="The Body at Ease" className="mx-auto mb-3 h-10 w-auto"/>
          <p>© {new Date().getFullYear()} The Body at Ease • by Charith Bopage • All rights reserved.</p>
        </Container>
      </footer>
    </main>
  )
}
