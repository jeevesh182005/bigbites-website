import InfoCard from '../components/InfoCard'
import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'
import { values } from '../data/site'

export default function ValuesSection() {
  return (
    <section className="bg-black/20 py-24">
      <div className="container-shell">
        <SectionIntro
          tag="What We Stand For"
          title={
            <>
              Our Brand <em className="text-brand-orange">Philosophy</em>
            </>
          }
          subtitle="Big Bites is built on more than food. It stands for quality, courage, consistency, and a belief that even a small beginning can grow into something meaningful."
        />

        <Reveal delay={0.08}>
          <div className="mt-8 rounded-[28px] border border-brand-orange/12 bg-[linear-gradient(180deg,rgba(249,115,22,0.08),rgba(255,255,255,0.02))] px-6 py-5 backdrop-blur-sm md:px-7">
            <p className="text-sm leading-7 text-white/75 md:text-[15px]">
              Every milestone in the Big Bites journey reflects a simple idea:
              <span className="font-semibold text-brand-text">
                {' '}
                build with heart, serve with quality, and grow with vision.
              </span>
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {values.map((item, index) => (
            <InfoCard key={item.title} {...item} delay={index * 0.06} />
          ))}
        </div>
      </div>
    </section>
  )
}