import { leadership } from '../data/content'
import useReveal from '../hooks/useReveal'

const photos = [
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop'
]

export default function Leadership() {
  const ref = useReveal()

  return (
    <section id="leadership" ref={ref} className="py-24 md:py-32 bg-white min-h-[calc(100vh-76px)] flex flex-col justify-center">
      <div className="container">
        <div className="max-w-2xl reveal">
          <p className="eyebrow mb-5">{leadership.eyebrow}</p>
          <h2 className="section-heading">{leadership.heading}</h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {leadership.people.map((p, i) => (
            <div key={p.name + i} className={`reveal reveal-delay-${i + 1} group`}>
              <div className="aspect-[5/4] overflow-hidden rounded-sm">
                <img
                  src={photos[i % photos.length]}
                  alt={`Portrait placeholder for ${p.title}`}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:scale-105 transition-transform duration-700 ease-premium"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 border-t border-navy/10 pt-6">
                <h3 className="font-display text-xl text-navy">{p.name}</h3>
                <p className="mt-1 text-gold-500 text-[13px] tracking-wide uppercase">{p.title}</p>
                <p className="mt-4 text-sm text-ash leading-relaxed">{p.role}</p>
                <p className="mt-2 text-sm text-ash leading-relaxed">{p.background}</p>
                <p className="mt-2 text-sm text-ash leading-relaxed italic">{p.credentials}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
