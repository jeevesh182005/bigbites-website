import { Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'
import { brand } from '../data/site'

export default function FranchiseSection() {
  return (
    <section className="py-24">
      <div className="container-shell">
        <div className="card-surface relative overflow-hidden rounded-[36px] p-8 md:p-12 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.20),transparent_28%)]" />
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionIntro
                tag="Franchise Growth"
                title={<>Build with the <em className="text-brand-orange">Big Bites</em> Name</>}
                subtitle="From 6+ active franchise outlets to a repeatable operating system, Big Bites is designed to help ambitious partners launch faster with stronger brand trust."
              />
              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/75">
                  {['Complete setup support', 'Training & launch guidance', 'Marketing assets', 'Quality-led operations'].map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.28}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    to="/franchise"
                    className="inline-flex rounded-full bg-brand-orange px-6 py-4 font-semibold text-black transition hover:-translate-y-1 hover:bg-brand-orange-strong"
                  >
                    Start Your Franchise Journey
                  </Link>
                  <a
                    href={brand.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-6 py-4 font-semibold text-brand-text transition hover:-translate-y-1 hover:border-brand-orange hover:bg-brand-orange hover:text-black"
                  >
                    <Phone size={18} />
                    Call {brand.phoneDisplay}
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal direction="right">
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  ['7+', 'Outlets'],
                  ['4', 'Franchise Partners'],
                  ['48h', 'Lead Response'],
                  ['2024', 'Brand Started'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-[28px] border border-white/10 bg-black/25 p-6">
                    <div className="font-display text-5xl font-black text-brand-orange">{value}</div>
                    <div className="mt-3 text-xs uppercase tracking-[0.28em] text-brand-muted">{label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
