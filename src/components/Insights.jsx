import { insights } from '../data/content'
import useReveal from '../hooks/useReveal'

export default function Insights() {
  const ref = useReveal()

  return (
    <section id="insights" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">{insights.eyebrow}</p>
            <h2 className="section-heading">{insights.heading}</h2>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-navy/10 border border-navy/10">
          {insights.categories.map((cat, ci) => (
            <div key={cat.label} className={`reveal reveal-delay-${(ci % 4) + 1} bg-white p-8 md:p-10`}>
              <p className="text-[11px] tracking-widest2 uppercase text-navy/50 font-semibold mb-6">{cat.label}</p>
              <div className="space-y-5">
                {cat.items.map((item) => (
                  <a
                    key={item.title}
                    href="#contact"
                    className="group flex items-start justify-between gap-4 border-t border-navy/10 pt-5 first:border-t-0 first:pt-0"
                  >
                    <div>
                      <span className="text-[11px] uppercase tracking-wide text-gold-500 font-semibold">{item.type}</span>
                      <h4 className="mt-1.5 font-display text-[1.05rem] text-navy leading-snug group-hover:text-gold-500 transition-colors duration-300">
                        {item.title}
                      </h4>
                    </div>
                    <span className="mt-1 flex-shrink-0 text-navy/30 group-hover:text-gold-500 group-hover:translate-x-1 transition-all duration-300">
                      &rarr;
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
