import { useState } from 'react'
import { contact } from '../data/content'
import useReveal from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()
  const [submitted, setSubmitted] = useState(false)
  const [domain, setDomain] = useState(contact.framework.domains[0])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 bg-navy text-white min-h-[calc(100vh-76px)] flex flex-col justify-center">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5 reveal">
            <p className="eyebrow mb-5">{contact.eyebrow}</p>
            <h2 className="section-heading text-white">{contact.heading}</h2>
            <p className="mt-6 text-white/60 leading-relaxed max-w-prose2">{contact.body}</p>

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="text-[11px] tracking-widest2 uppercase text-gold-400 font-semibold mb-3">
                  {contact.headquarters.heading}
                </h3>
                <address className="not-italic text-white/70 text-sm leading-relaxed">
                  {contact.headquarters.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              <div>
                <h3 className="text-[11px] tracking-widest2 uppercase text-gold-400 font-semibold mb-3">
                  {contact.channels.heading}
                </h3>
                <ul className="space-y-2">
                  {contact.channels.items.map((c) => (
                    <li key={c.label} className="text-sm">
                      <span className="text-white/45">{c.label}: </span>
                      <a href={c.href} className="text-white/80 hover:text-gold-400 transition-colors">
                        {c.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 reveal reveal-delay-1">
            <div className="bg-white text-charcoal p-8 md:p-10 shadow-cardHover">
              <h3 className="font-display text-xl text-navy mb-1">{contact.framework.heading}</h3>
              <p className="text-sm text-ash mb-7 leading-relaxed">{contact.framework.body}</p>

              {submitted ? (
                <div className="border border-gold-400/50 bg-gold-50/40 p-6 text-navy">
                  <p className="font-display text-lg">Thank you.</p>
                  <p className="mt-2 text-sm text-ash">
                    Your inquiry has been received. A senior advisory partner will respond via your preferred channel
                    shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-[11px] uppercase tracking-wide text-navy/60 mb-2">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full border border-navy/15 bg-platinum px-4 py-3 text-sm focus:border-gold-400 outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-[11px] uppercase tracking-wide text-navy/60 mb-2">
                        Enterprise
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        className="w-full border border-navy/15 bg-platinum px-4 py-3 text-sm focus:border-gold-400 outline-none transition-colors"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-[11px] uppercase tracking-wide text-navy/60 mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full border border-navy/15 bg-platinum px-4 py-3 text-sm focus:border-gold-400 outline-none transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[11px] uppercase tracking-wide text-navy/60 mb-2">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full border border-navy/15 bg-platinum px-4 py-3 text-sm focus:border-gold-400 outline-none transition-colors"
                        placeholder="+91"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="domain" className="block text-[11px] uppercase tracking-wide text-navy/60 mb-2">
                      Query Domain
                    </label>
                    <select
                      id="domain"
                      name="domain"
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      className="w-full border border-navy/15 bg-platinum px-4 py-3 text-sm focus:border-gold-400 outline-none transition-colors"
                    >
                      {contact.framework.domains.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[11px] uppercase tracking-wide text-navy/60 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full border border-navy/15 bg-platinum px-4 py-3 text-sm focus:border-gold-400 outline-none transition-colors resize-none"
                      placeholder="Briefly describe your enterprise's requirement"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-navy text-white text-[12px] tracking-widest2 uppercase px-9 py-4 hover:bg-navy-400 transition-colors duration-300"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
