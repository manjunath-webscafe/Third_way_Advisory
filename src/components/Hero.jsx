import { Link } from 'react-router-dom'
import { hero } from '../data/content'
import Counter from './Counter'
import logo from '../assets/logo-white.png'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-end overflow-hidden bg-navy">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2400&auto=format&fit=crop"
          alt="Modern commercial towers viewed from below, representing institutional-grade real estate and infrastructure advisory"
          className="w-full h-full object-cover object-center scale-105 animate-fadeIn"
          style={{ animationDuration: '2.2s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-navy/40" />
      </div>

      {/* Fine architectural rule motif */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <div className="h-full container border-x border-white" />
      </div>

      <div className="relative container pb-24 pt-40">
        <img
          src={logo}
          alt="Third Way Advisory"
          className="h-20 w-auto mb-8 opacity-0 animate-fadeUp"
          style={{ animationDelay: '0s' }}
        />

        <p
          className="eyebrow text-gold-300 mb-6 opacity-0 animate-fadeUp"
          style={{ animationDelay: '0.15s' }}
        >
          {hero.eyebrow}
        </p>

        <h1
          className="font-display text-white text-[2.6rem] leading-[1.08] sm:text-6xl md:text-7xl font-semibold max-w-4xl opacity-0 animate-fadeUp"
          style={{ animationDelay: '0.3s' }}
        >
          {hero.headline}
        </h1>

        <p
          className="mt-7 text-white/75 text-lg md:text-xl max-w-2xl leading-relaxed font-light opacity-0 animate-fadeUp"
          style={{ animationDelay: '0.45s' }}
        >
          {hero.sub}
        </p>

        <div
          className="mt-10 flex flex-wrap items-center gap-4 opacity-0 animate-fadeUp"
          style={{ animationDelay: '0.6s' }}
        >
          <Link
            to={hero.ctaPrimary.href}
            className="inline-flex items-center justify-center bg-gold-400 text-navy text-[12px] tracking-widest2 uppercase px-8 py-4 font-semibold hover:bg-gold-300 transition-colors duration-300"
          >
            {hero.ctaPrimary.label}
          </Link>
          <Link
            to={hero.ctaSecondary.href}
            className="inline-flex items-center justify-center border border-white/30 text-white text-[12px] tracking-widest2 uppercase px-8 py-4 hover:border-gold-400 hover:text-gold-400 transition-colors duration-300"
          >
            {hero.ctaSecondary.label}
          </Link>
        </div>

        <div
          className="mt-16 grid grid-cols-3 gap-6 max-w-xl border-t border-white/15 pt-8 opacity-0 animate-fadeUp"
          style={{ animationDelay: '0.75s' }}
        >
          {hero.stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl md:text-4xl text-gold-400">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1.5 text-[11px] uppercase tracking-wide text-white/55 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
