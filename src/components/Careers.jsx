import { careers } from '../data/content'
import useReveal from '../hooks/useReveal'

export default function Careers() {
  const ref = useReveal()

  return (
    <section id="careers" ref={ref} className="py-24 md:py-32 bg-platinum min-h-[calc(100vh-76px)] flex flex-col justify-center">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5 reveal">
            <p className="eyebrow mb-5">{careers.eyebrow}</p>
            <h2 className="section-heading">{careers.heading}</h2>
            <p className="mt-6 text-ash leading-relaxed max-w-prose2">{careers.body}</p>

            <div className="mt-10 border border-navy/15 bg-white p-7">
              <h3 className="font-display text-lg text-navy">{careers.submit.heading}</h3>
              <p className="mt-2 text-sm text-ash leading-relaxed">
                {careers.submit.body}{' '}
                <a href={`mailto:${careers.submit.email}`} className="text-gold-500 font-medium hover:underline">
                  {careers.submit.email}
                </a>
                .
              </p>
              <a
                href={`mailto:${careers.submit.email}`}
                className="mt-6 inline-flex items-center justify-center bg-navy text-white text-[12px] tracking-widest2 uppercase px-7 py-3.5 hover:bg-navy-400 transition-colors duration-300"
              >
                Submit Credentials
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="reveal reveal-delay-1 aspect-[16/9] rounded-sm overflow-hidden mb-10 shadow-card">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2200&auto=format&fit=crop"
                alt="Professionals collaborating around a table with strategy documents"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <h3 className="eyebrow reveal reveal-delay-1">{careers.whyHeading}</h3>
            <div className="mt-6 grid sm:grid-cols-3 gap-6">
              {careers.points.map((p, i) => (
                <div key={p.title} className={`reveal reveal-delay-${i + 2} bg-white border border-navy/10 p-6`}>
                  <h4 className="font-display text-[1.05rem] text-navy">{p.title}</h4>
                  <p className="mt-2 text-sm text-ash leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
