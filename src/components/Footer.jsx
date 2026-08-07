import { Link } from 'react-router-dom'
import { footer, nav } from '../data/content'
import logo from '../assets/logo-white.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-700 bg-[#06111F] text-white/60 pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Third Way Advisory" className="h-20 w-auto" />
            </Link>
            <p className="mt-5 text-sm leading-relaxed max-w-xs">{footer.tagline}</p>
            <p className="mt-4 text-xs uppercase tracking-wide text-white/35">{footer.city}</p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-[11px] uppercase tracking-widest2 text-white/40 mb-5">Navigate</h4>
            <ul className="space-y-3">
              {nav.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm hover:text-gold-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-widest2 text-white/40 mb-5">Advisory House</h4>
            <ul className="space-y-3">
              {nav.slice(5).map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm hover:text-gold-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="mailto:advisory@thirdway.com" className="text-sm hover:text-gold-400 transition-colors">
                  advisory@thirdway.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/35">
          <p>&copy; {year} {footer.name}. All rights reserved.</p>
          <p>Institutional Advisory &middot; Karnataka, India</p>
        </div>
      </div>
    </footer>
  )
}
