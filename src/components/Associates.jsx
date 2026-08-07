import { associates } from '../data/content'
import useReveal from '../hooks/useReveal'

function Block({ data, delayBase }) {
  return (
    <div className="reveal" style={{ transitionDelay: `${delayBase}s` }}>
      <p className="eyebrow mb-5">{data.eyebrow}</p>
      <h3 className="font-display text-2xl md:text-[1.8rem] text-navy">{data.heading}</h3>
      <p className="mt-5 text-ash leading-relaxed max-w-prose2">{data.body}</p>

      <div className="mt-8 space-y-6">
        {data.items.map((item) => (
          <div key={item.title} className="flex gap-4 border-t border-navy/10 pt-5 first:border-t-0 first:pt-0">
            <div className="w-10 h-10 flex-shrink-0 rounded-full border border-gold-400/50 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            </div>
            <div>
              <h4 className="text-navy font-semibold text-[15px]">{item.title}</h4>
              <p className="mt-1 text-sm text-ash leading-relaxed">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Associates() {
  const ref = useReveal()

  return (
    <section id="associates" ref={ref} className="py-24 md:py-32 bg-platinum min-h-[calc(100vh-76px)] flex flex-col justify-center">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16">
          <Block data={associates.partners} delayBase={0} />
          <Block data={associates.clients} delayBase={0.15} />
        </div>
      </div>
    </section>
  )
}
