import { about } from "../data/content";
import useReveal from "../hooks/useReveal";
import aboutImage from "../assets/About.png";

export default function About() {
  const ref = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32 bg-navy relative overflow-hidden min-h-[calc(100vh-76px)] flex flex-col justify-center"
    >
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5 reveal">
            <p className="eyebrow mb-5">{about.eyebrow}</p>
            <h2 className="section-heading text-white">{about.heading}</h2>
            <p className="mt-6 text-white/60 text-[1.05rem] leading-relaxed max-w-prose2">
              {about.body}
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="border-l-2 border-gold-400 pl-5 py-1">
                <h3 className="font-display text-lg text-white">
                  {about.mission.heading}
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {about.mission.body}
                </p>
              </div>
              <div className="border-l-2 border-white/30 pl-5 py-1">
                <h3 className="font-display text-lg text-white">
                  {about.coreValue.heading}
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {about.coreValue.body}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="reveal reveal-delay-1 relative rounded-sm overflow-hidden aspect-[4/3] mb-10 shadow-cardHover">
              <img
                src={aboutImage}
                alt="Senior advisory partners in a boardroom discussion, reviewing institutional strategy documents"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>

            <h3 className="eyebrow reveal reveal-delay-1">
              {about.why.heading}
            </h3>

            <div className="mt-6 grid sm:grid-cols-3 gap-px bg-white/10">
              {about.why.points.map((p, i) => (
                <div
                  key={p.title}
                  className={`reveal reveal-delay-${i + 2} bg-navy-400 p-7`}
                >
                  <span className="font-display text-2xl text-gold-400">
                    0{i + 1}
                  </span>
                  <h4 className="mt-4 font-display text-lg text-white">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
