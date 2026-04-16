import { Apple, Play, Smartphone } from 'lucide-react'
import Reveal from '../components/Reveal'

export default function AppSection() {
  return (
    <section className="py-24">
      <div className="container-shell">
        <div className="grid items-center gap-12 overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.16),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] px-6 py-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] md:px-10 md:py-12 lg:grid-cols-[0.92fr_1.08fr] lg:px-14">
          <Reveal direction="left">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-brand-orange/20 blur-3xl" />
              <div className="absolute -right-8 bottom-10 h-32 w-32 rounded-full bg-brand-orange/10 blur-3xl" />

              <div className="relative mx-auto w-[280px] rounded-[38px] border border-white/12 bg-[#111111] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <div className="rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(249,115,22,0.10),rgba(255,255,255,0.03))] p-4">
                  <div className="mx-auto mb-4 h-1.5 w-24 rounded-full bg-white/10" />

                  <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0c0c0c]">
                    <div className="border-b border-white/6 px-4 py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs uppercase tracking-[0.28em] text-brand-orange/80">
                            Big Bites
                          </div>
                          <div className="mt-1 text-lg font-semibold text-brand-text">
                            App Preview
                          </div>
                        </div>
                        <div className="rounded-full border border-brand-orange/20 bg-brand-orange/10 p-2 text-brand-orange">
                          <Smartphone size={18} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 p-4">
                      <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
                        <div className="mb-2 h-3 w-24 rounded-full bg-white/10" />
                        <div className="h-2 w-40 rounded-full bg-white/8" />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
                          <div className="mb-3 h-20 rounded-xl bg-[linear-gradient(135deg,rgba(249,115,22,0.18),rgba(255,255,255,0.04))]" />
                          <div className="h-2 w-16 rounded-full bg-white/10" />
                        </div>
                        <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
                          <div className="mb-3 h-20 rounded-xl bg-[linear-gradient(135deg,rgba(249,115,22,0.12),rgba(255,255,255,0.03))]" />
                          <div className="h-2 w-20 rounded-full bg-white/10" />
                        </div>
                      </div>

                      <div className="rounded-2xl border border-brand-orange/15 bg-brand-orange/8 p-4">
                        <div className="mb-2 h-2 w-20 rounded-full bg-brand-orange/40" />
                        <div className="h-2 w-32 rounded-full bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
                Coming Soon
              </div>

              <h2 className="mt-6 font-display text-4xl font-black leading-tight text-brand-text md:text-5xl">
                Order Faster with Our App
              </h2>

              <p className="mt-3 text-lg font-semibold text-brand-orange/90">
                Big Bites App — Coming Soon
              </p>

              <p className="mt-5 max-w-xl text-base leading-8 text-white/68 md:text-lg">
                We’re building a smoother way to enjoy Big Bites. The upcoming app
                will make ordering faster, delivery simpler, and exclusive offers
                easier to access — all in one premium experience built for our
                growing customer family.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/4 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-brand-orange/20 hover:bg-white/6">
                  <div className="text-sm font-semibold text-brand-text">Easy Ordering</div>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    Fewer steps, faster checkout, smoother experience.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/4 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-brand-orange/20 hover:bg-white/6">
                  <div className="text-sm font-semibold text-brand-text">Faster Delivery</div>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    Quick access to your favorites with better convenience.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/4 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-brand-orange/20 hover:bg-white/6">
                  <div className="text-sm font-semibold text-brand-text">Exclusive Offers</div>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    App-only deals, launches, and loyalty-focused perks.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  disabled
                  className="inline-flex cursor-not-allowed items-center justify-center rounded-full border border-brand-orange/25 bg-brand-orange/12 px-6 py-3.5 font-semibold text-brand-orange/75 opacity-90 shadow-[0_0_30px_rgba(249,115,22,0.08)] transition duration-300"
                >
                  Download App (Coming Soon)
                </button>

                <div className="flex items-center gap-3 text-white/30">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2.5">
                    <Play size={16} />
                    <span className="text-sm font-medium">Play Store</span>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2.5">
                    <Apple size={16} />
                    <span className="text-sm font-medium">App Store</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}