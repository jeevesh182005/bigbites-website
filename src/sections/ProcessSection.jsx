import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'
import { processSteps } from '../data/site'

export default function ProcessSection() {
  return (
    <section id="process" className="py-24">
      <div className="container-shell">
        <SectionIntro
          tag="How it Works"
          title={<>Your Franchise <em className="text-brand-orange">Journey</em></>}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.num} delay={index * 0.08}>
              <div className="card-surface h-full rounded-[30px] p-7">
                <div className="font-display text-5xl font-black text-brand-orange/85">{step.num}</div>
                <h3 className="mt-5 text-2xl font-semibold text-brand-text">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-muted">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
