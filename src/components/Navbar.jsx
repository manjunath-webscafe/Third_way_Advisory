import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav } from '../data/content'
import logo from '../assets/logo-white.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const solid = scrolled || !isHome

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
        solid ? 'bg-navy/95 backdrop-blur shadow-[0_1px_0_rgba(197,168,128,0.18)]' : 'bg-transparent'
      }`}
    >
      <nav className="container">
        <div className="flex items-center justify-between h-[76px]">
          <Link to="/" className="flex items-center group" onClick={() => setOpen(false)}>
            <img src={logo} alt="Third Way Advisory" className="h-16 w-auto" />
          </Link>

          <ul className="hidden lg:flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `text-[13px] tracking-wide uppercase transition-colors duration-300 relative py-2 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full ${
                      isActive ? 'text-gold-400 after:w-full' : 'text-white/70 hover:text-gold-400 after:w-0'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center border border-gold-400 text-gold-400 text-[12px] tracking-widest2 uppercase px-5 py-2.5 hover:bg-gold-400 hover:text-navy transition-all duration-300"
          >
            Get in Touch
          </Link>

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
              <NavLink
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-3 border-b border-white/10 text-sm tracking-wide uppercase ${
                    isActive ? 'text-gold-400' : 'text-white/80 hover:text-gold-400'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-4">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center border border-gold-400 text-gold-400 text-[12px] tracking-widest2 uppercase px-5 py-2.5"
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
