import { leadership } from '../data/content.js'
import useReveal from '../hooks/useReveal'

export default function Leadership() {
  const ref = useReveal()

  return (
    <section
      id="leadership"
      ref={ref}
      className="py-24 md:py-32 bg-white min-h-[calc(100vh-76px)] flex flex-col justify-center"
    >
      <div className="container">
        <div className="max-w-2xl reveal">
          <p className="eyebrow mb-5">
            {leadership.eyebrow}
          </p>

          <h2 className="section-heading">
            {leadership.heading}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {leadership.people.map((p, i) => (
            <div
              key={p.name + i}
              className={`reveal reveal-delay-${i + 1} group`}
            >
              {/* Portrait */}
              <div className="w-full max-w-[300px] h-[380px] mx-auto flex items-center justify-center overflow-hidden rounded-md bg-platinum">
                <img
                  src={p.image}
                  alt={`Portrait of ${p.name}`}
                  className="
                    block
                    max-w-full
                    max-h-full
                    w-auto
                    h-auto
                    object-contain
                    transition-transform
                    duration-700
                    ease-premium
                    group-hover:scale-[1.02]
                  "
                  loading="lazy"
                />
              </div>

              {/* Info section */}
              <div className="mt-6 border-t border-navy/10 pt-6">
                <h3 className="font-display text-xl text-navy">
                  {p.name}
                </h3>

                <p className="mt-1 text-gold-500 text-[13px] tracking-wide uppercase">
                  {p.title}
                </p>

                <p className="mt-4 text-sm text-ash leading-relaxed">
                  {p.role}
                </p>

                <p className="mt-2 text-sm text-ash leading-relaxed">
                  {p.background}
                </p>

                <p className="mt-2 text-sm text-ash leading-relaxed italic">
                  {p.credentials}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}