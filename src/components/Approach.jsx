import useReveal from '../hooks/useReveal'

const steps = [
  {
    n: '01',
    title: 'Diagnose',
    body: 'We assess the financial, regulatory, and transactional position of your enterprise to identify the true source of risk and opportunity.'
  },
  {
    n: '02',
    title: 'Structure',
    body: 'We design the capital, compliance, or transaction framework — bridging strategy with the realities of Karnataka\u2019s regulatory landscape.'
  },
  {
    n: '03',
    title: 'Execute',
    body: 'We do not just advise; we execute with precision — managing the engagement end-to-end with institutional discretion.'
  }
]

export default function Approach() {
  const ref = useReveal()

  return (
    <section id="approach" ref={ref} className="py-24 md:py-32 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative">
        <div className="max-w-2xl reveal">
          <p className="eyebrow mb-5">Our Approach</p>
          <h2 className="section-heading text-white">A Disciplined Engagement Model</h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-white/10">
          {steps.map((s, i) => (
            <div key={s.n} className={`reveal reveal-delay-${i + 1} bg-navy p-9 md:p-10 relative`}>
              <span className="font-display text-5xl text-gold-400/40">{s.n}</span>
              <h3 className="mt-6 font-display text-xl text-white">{s.title}</h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
