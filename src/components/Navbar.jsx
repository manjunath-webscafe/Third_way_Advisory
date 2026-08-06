import { useEffect, useState } from 'react'
import { nav } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-navy/95 backdrop-blur shadow-[0_1px_0_rgba(197,168,128,0.18)]' : 'bg-transparent'
      }`}
    >
      <nav className="container">
        <div className="flex items-center justify-between h-[76px]">
          <a href="#top" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
            <span className="w-9 h-9 rounded-sm border border-gold-400/60 flex items-center justify-center font-display text-gold-400 text-lg">
              W
            </span>
            <span className="font-display text-[1.05rem] tracking-wide text-white">
              Third Wave <span className="text-gold-400">Advisory</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[13px] tracking-wide uppercase text-white/70 hover:text-gold-400 transition-colors duration-300 relative py-2 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center border border-gold-400 text-gold-400 text-[12px] tracking-widest2 uppercase px-5 py-2.5 hover:bg-gold-400 hover:text-navy transition-all duration-300"
          >
            Get in Touch
          </a>

          <button
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${open ? 'translate-y-[3px] rotate-45' : ''}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${open ? '-translate-y-[3px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed inset-x-0 top-[76px] bg-navy overflow-hidden transition-[max-height] duration-500 ease-premium ${
          open ? 'max-h-[520px]' : 'max-h-0'
        }`}
      >
        <ul className="container py-6 flex flex-col gap-1">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-white/80 hover:text-gold-400 border-b border-white/10 text-sm tracking-wide uppercase"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center border border-gold-400 text-gold-400 text-[12px] tracking-widest2 uppercase px-5 py-2.5"
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
