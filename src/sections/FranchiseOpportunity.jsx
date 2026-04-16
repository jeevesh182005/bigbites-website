import { BadgeIndianRupee, Image, Phone, TrendingUp } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'
import { brand, franchiseSupport } from '../data/site'

export default function FranchiseOpportunity() {
  return (
    <section className="py-24">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionIntro
              tag="Franchise Opportunity"
              title={<>A Premium <em className="text-brand-orange">Growth Model</em> Built to Scale</>}
              subtitle="A strong low-investment opportunity designed for entrepreneurs who want a scalable food business with a practical entry point and early profit potential."
            />

            <Reveal delay={0.12}>
              <div className="mt-6 inline-flex items-center rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-orange">
                Low Investment Business
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 grid items-stretch gap-5 sm:grid-cols-2">
                <div className="card-surface flex h-full flex-col rounded-[28px] p-6">
                  <div className="flex flex-1 flex-col">
                    <div className="inline-flex w-fit rounded-2xl border border-brand-orange/20 bg-brand-orange/10 p-3 text-brand-orange">
                      <BadgeIndianRupee size={20} />
                    </div>

                    <div className="mt-4 text-xs uppercase tracking-[0.28em] text-brand-orange">
                      Total Investment
                    </div>

                    <div className="mt-3 font-display text-3xl font-black leading-tight text-brand-text">
                      ₹2,60,000
                    </div>

                    <p className="mt-3 text-sm leading-7 text-brand-muted">
                      A practical startup investment for a modern Big Bites outlet with growth-focused potential.
                    </p>
                  </div>
                </div>

                <div className="card-surface flex h-full flex-col rounded-[28px] border border-brand-orange/30 bg-[linear-gradient(180deg,rgba(249,115,22,0.10),rgba(255,255,255,0.03))] p-6 shadow-[0_0_35px_rgba(249,115,22,0.10)]">
                  <div className="flex flex-1 flex-col">
                    <div className="inline-flex w-fit rounded-2xl border border-brand-orange/20 bg-brand-orange/10 p-3 text-brand-orange">
                      <TrendingUp size={20} />
                    </div>

                    <div className="mt-4 inline-flex w-fit rounded-full border border-brand-orange/20 bg-brand-orange/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                      Fast ROI
                    </div>

                    <div className="mt-5 text-xs uppercase tracking-[0.28em] text-brand-orange">
                      Expected Monthly Profit
                    </div>

                    <div className="mt-3 font-display text-3xl font-black leading-tight text-brand-orange">
                      ₹20,000 – ₹35,000
                    </div>

                    <p className="mt-3 text-sm leading-7 text-white/75">
                      Expected monthly profit during the first 3 months, depending on location, daily sales, and operations quality.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="space-y-5">
            <Reveal direction="right">
              <div className="card-surface rounded-[32px] p-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[1, 2].map((item) => (
                    <div
                      key={item}
                      className="flex min-h-[12rem] items-end justify-between rounded-[26px] border border-dashed border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(249,115,22,0.05))] p-5"
                    >
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.28em] text-brand-orange">Placeholder</div>
                        <div className="mt-2 text-sm text-brand-muted">Store / kitchen / customer area image</div>
                      </div>
                      <Image size={22} className="text-white/40" />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.08}>
              <div className="card-surface rounded-[32px] p-7">
                <div className="text-[11px] uppercase tracking-[0.32em] text-brand-orange">Support Included</div>

                <div className="mt-5 grid gap-3">
                  {franchiseSupport.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-white/85"
                    >
                      <span className="h-2 w-2 rounded-full bg-brand-orange" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={brand.phoneHref}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-3 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-brand-orange-strong"
                >
                  <Phone size={17} />
                  Call for Franchise Details
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}