import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'
import { testimonials } from '../data/site'

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container-shell">
        <SectionIntro
          tag="Trust & Credibility"
          title={<>Built on <em className="text-brand-orange">Community</em> Confidence</>}
          subtitle="Every outlet, repeat visit, and franchise conversation is powered by consistency, flavour, and service that customers remember."
          center
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <div className="card-surface h-full rounded-[30px] p-7">
                <div className="text-brand-orange">★★★★★</div>
                <blockquote className="mt-5 font-display text-2xl font-bold leading-10 text-brand-text">
                  “{item.quote}”
                </blockquote>
                <div className="mt-8 border-t border-white/8 pt-5">
                  <div className="font-semibold text-brand-text">{item.name}</div>
                  <div className="mt-1 text-sm text-brand-muted">{item.title}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
