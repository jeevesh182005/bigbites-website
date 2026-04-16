  import { ArrowRight, Handshake } from 'lucide-react'
  import { Link } from 'react-router-dom'
  import Reveal from '../components/Reveal'
  import { brand } from '../data/site'
  import ownerImage from '../assets/owner-santhosh.png'
  import useCounter from '../hooks/useCounter'
  import classicShawarmaImg from '../assets/menu/classic_shawarma.png'

  function HeroCounter({ value, suffix, label }) {
    const count = useCounter(value, '', 1800, true)

    return (
      <div>
        <div className="font-display text-4xl font-black text-brand-text">
          {count}
          {suffix}
        </div>
        <div className="mt-2 text-xs uppercase tracking-[0.28em] text-brand-muted">{label}</div>
      </div>
    )
  }

  export default function Hero() {
    return (
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.15),transparent_24%),radial-gradient(circle_at_80%_12%,rgba(249,115,22,0.12),transparent_18%)]" />
        <div className="container-shell relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/80">
                <span className="rounded-full bg-brand-orange px-2 py-0.5 text-[10px] tracking-[0.24em] text-black">Est. 2024</span>
                Tiruvallur · Tamil Nadu
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-8 font-display text-5xl font-black leading-none tracking-tight text-brand-text md:text-7xl xl:text-[5.5rem]">
                Every Bite <br />
                <span className="text-gradient">Tells a Story</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-base leading-8 text-brand-muted md:text-lg">
              What began with a single pushcart in Tiruvallur on April 13, 2024 has grown into a rising
              food brand built through courage, consistency, and belief. Founded by Santhosh Kumar at just
              21 years old, Big Bites stands today as an inspiring journey for youngsters who dream of
              building something of their own.
            </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-2 text-xs font-semibold tracking-wide text-brand-orange backdrop-blur-sm transition duration-300 hover:border-brand-orange/40 hover:bg-brand-orange/15">
                <span className="h-2 w-2 rounded-full bg-brand-orange shadow-[0_0_12px_rgba(249,115,22,0.8)]" />
                App launching soon for seamless ordering
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 backdrop-blur-sm">
                <img src={ownerImage} alt={`${brand.ownerName}, founder of Big Bites`} className="h-11 w-11 rounded-full object-cover" />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-brand-orange">Founded by {brand.ownerName}</div>
                  <div className="mt-1 text-sm text-brand-muted">Founder, Big Bites</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/franchise"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-4 font-semibold text-black transition hover:-translate-y-1 hover:bg-brand-orange-strong"
                >
                  <Handshake size={18} />
                  Start Franchise
                </Link>
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 font-semibold text-brand-text transition hover:-translate-y-1 hover:border-brand-orange/50 hover:text-brand-orange"
                >
                  Explore Menu
                  <ArrowRight size={18} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-12 grid max-w-2xl grid-cols-1 gap-8 border-t border-white/8 pt-8 sm:grid-cols-3">
                <HeroCounter value={50000} suffix="+" label="Customers Served" />
                <HeroCounter value={9} suffix="+" label="Outlets" />
                <HeroCounter value={3} suffix="" label="Own Stores" />
              </div>
            </Reveal>
          </div>

          <Reveal direction="right">
            <div className="relative mx-auto max-w-xl">
              <div className="card-surface orange-glow relative overflow-hidden rounded-[36px] p-8 md:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.22),transparent_26%)]" />

                <div className="relative min-h-[26rem] overflow-hidden rounded-[28px] border border-white/8">

                  <div className="absolute inset-0">

                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(249,115,22,0.35),transparent_65%)]" />

                    <img
                      src={classicShawarmaImg}
                      alt="Signature Shawarma"
                      className="
                        h-full w-full object-cover object-center
                        scale-105
                        animate-float
                        transition duration-700
                        hover:scale-110
                      "
                      style={{ filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.7))' }}
                    />

                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />

                    <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/30 to-transparent" />
                    <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/30 to-transparent" />

                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.08),transparent_55%)]" />
                  </div>

                  <div className="relative z-10 flex items-start justify-between p-6">
                    <div className="inline-flex rounded-full border border-brand-orange/30 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-brand-orange backdrop-blur-md">
                      Signature Shawarma
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-6">
                    <div>
                      <div className="text-xs uppercase tracking-[0.28em] text-white/60">Customer Rating</div>
                      <div className="mt-1 text-2xl font-semibold text-brand-text">⭐ 4.9</div>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-black/50 px-5 py-4 text-right backdrop-blur-md">
                      <div className="font-display text-3xl font-black text-brand-orange">50K+</div>
                      <div className="text-xs uppercase tracking-[0.28em] text-brand-muted">Happy Bites</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>
        </div>
      </section>
    )
  }
