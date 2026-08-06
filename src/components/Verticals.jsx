import { useState } from 'react'
import { verticals } from '../data/content'
import useReveal from '../hooks/useReveal'

export default function Verticals() {
  const [active, setActive] = useState(verticals[0].id)
  const ref = useReveal()
  const current = verticals.find((v) => v.id === active)

  return (
    <section id="verticals" ref={ref} className="py-24 md:py-32 bg-platinum">
      <div className="container">
        <div className="max-w-2xl reveal">
          <p className="eyebrow mb-5">Our Verticals</p>
          <h2 className="section-heading">Four Disciplines, One Advisory House</h2>
          <p className="mt-6 text-ash text-[1.05rem] leading-relaxed">
            Every engagement draws on the same institutional rigor, whether the work is financial, regulatory, or
            transactional in nature.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-0 border border-navy/10 bg-white shadow-card reveal reveal-delay-1">
          {/* Tab list */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-navy/10">
            {verticals.map((v, i) => (
              <button
                key={v.id}
                onClick={() => setActive(v.id)}
                className={`w-full text-left px-7 py-6 flex items-start gap-4 border-b border-navy/10 last:border-b-0 transition-colors duration-300 ${
                  active === v.id ? 'bg-navy' : 'hover:bg-navy/[0.03]'
                }`}
              >
                <span className={`font-display text-sm mt-0.5 ${active === v.id ? 'text-gold-400' : 'text-ash'}`}>
                  0{i + 1}
                </span>
                <span>
                  <span className={`block font-display text-lg leading-snug ${active === v.id ? 'text-white' : 'text-navy'}`}>
                    {v.title}
                  </span>
                  <span className={`block mt-1 text-[13px] ${active === v.id ? 'text-white/60' : 'text-ash'}`}>
                    {v.tagline}
                  </span>
                </span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-8 p-8 md:p-12">
            <p className="eyebrow">{current.tag}</p>
            <h3 className="mt-3 font-display text-2xl md:text-[1.9rem] text-navy">{current.title}</h3>
            <p className="mt-4 text-ash leading-relaxed max-w-prose2">{current.body}</p>

            <div className="mt-9 grid sm:grid-cols-2 gap-x-8 gap-y-7">
              {current.items.map((item) => (
                <div key={item.title} className="flex gap-3.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-navy font-semibold text-[15px] leading-snug">{item.title}</h4>
                    <p className="mt-1.5 text-sm text-ash leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
