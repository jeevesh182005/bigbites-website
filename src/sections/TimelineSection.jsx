import { Sparkles } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'
import { timeline } from '../data/site'

export default function TimelineSection() {
  return (
    <section className="py-24">
      <div className="container-shell">
        <SectionIntro
          tag="Our Journey"
          title={
            <>
              Milestones That <em className="text-brand-orange">Matter</em>
            </>
          }
          subtitle="From one pushcart to a growing brand, each milestone reflects belief, discipline, and the courage to keep building."
        />

        <div className="relative mt-14">
          <div className="absolute bottom-0 left-5 top-2 w-px bg-gradient-to-b from-brand-orange/40 via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-10">
            {timeline.map((item, index) => {
              const isRight = index % 2 === 1

              return (
                <Reveal key={`${item.year}-${item.title}`} delay={index * 0.08}>
                  <div className="relative md:grid md:grid-cols-2 md:gap-12 md:items-center">
                    <div
                      className={`relative ml-14 md:ml-0 ${
                        isRight ? 'md:col-start-2 md:pl-10' : 'md:pr-10'
                      }`}
                    >
                      <div className="group relative overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-brand-orange/20 hover:shadow-[0_18px_50px_rgba(0,0,0,0.28)] md:p-7">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.08),transparent_35%)] opacity-0 transition duration-300 group-hover:opacity-100" />

                        <div className="relative z-10">
                          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
                            <Sparkles size={12} />
                            {item.year}
                          </div>

                          <h3 className="mt-5 text-2xl font-semibold leading-snug text-brand-text">
                            {item.title}
                          </h3>

                          <p className="mt-4 text-sm leading-7 text-brand-muted md:text-[15px]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute left-5 top-8 -translate-x-1/2 md:left-1/2">
                      <div className="relative flex h-5 w-5 items-center justify-center">
                        <div className="absolute h-5 w-5 rounded-full border-4 border-brand-bg bg-brand-orange" />
                        <div className="absolute h-10 w-10 rounded-full bg-brand-orange/20 blur-md" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}