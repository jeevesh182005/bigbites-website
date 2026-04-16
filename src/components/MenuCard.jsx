import { useState } from 'react'
import Reveal from './Reveal'

function SpiceMeter({ level = 0 }) {
  return (
    <div className="flex items-center gap-1.5">
      {[0, 1, 2].map((index) => (
        <span
          key={index}
          className={`h-2.5 w-2.5 rounded-full transition ${
            index < level ? 'bg-brand-orange shadow-[0_0_10px_rgba(249,115,22,0.55)]' : 'bg-white/15'
          }`}
        />
      ))}
    </div>
  )
}

function formatPrice(price) {
  if (!price) return ''
  return price.replaceAll('₹', 'Rs. ')
}

export default function MenuCard({ item, delay = 0 }) {
  const [flipped, setFlipped] = useState(false)

  const handleToggle = () => {
    setFlipped((prev) => !prev)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setFlipped((prev) => !prev)
    }
  }

  return (
    <Reveal delay={delay}>
      <div className="group h-full [perspective:1400px]">
        <article
          role="button"
          tabIndex={0}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          className={`relative h-full min-h-[30rem] cursor-pointer outline-none transition-transform duration-700 [transform-style:preserve-3d] focus-visible:ring-2 focus-visible:ring-brand-orange/60 md:group-hover:[transform:rotateY(180deg)] ${
            flipped ? '[transform:rotateY(180deg)]' : ''
          }`}
        >
          <div className="absolute inset-0 [backface-visibility:hidden]">
            <div className="card-surface flex h-full flex-col overflow-hidden rounded-[30px] transition duration-300 group-hover:border-brand-orange/40 group-hover:shadow-[0_20px_55px_rgba(0,0,0,0.32)]">
              <div className="relative overflow-hidden border-b border-white/8">
                <div className="relative h-56 w-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {item.badge ? (
                    <span className="absolute left-4 top-4 rounded-full border border-brand-orange/30 bg-black/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-orange backdrop-blur">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold leading-snug text-brand-text">
                    {item.name}
                  </h3>

                  {typeof item.spice === 'number' ? (
                    <div className="shrink-0 pt-1">
                      <SpiceMeter level={item.spice} />
                    </div>
                  ) : null}
                </div>

                <p className="mt-3 flex-1 text-sm leading-7 text-brand-muted">
                  {item.desc}
                </p>

                <div className="mt-6 flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange/80">
                    <span className="h-2 w-2 rounded-full bg-brand-orange shadow-[0_0_10px_rgba(249,115,22,0.7)]" />
                    <span className="hidden sm:inline">Hover or tap to view price</span>
                    <span className="sm:hidden">Tap to view price</span>
                  </div>

                  <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/35">
                    Big Bites
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="card-surface flex h-full flex-col overflow-hidden rounded-[30px] border border-brand-orange/20 bg-[linear-gradient(180deg,rgba(0,0,0,0.96),rgba(18,18,18,0.98))] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.4)] sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-orange">
                    Price Details
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold leading-snug text-brand-text">
                    {item.name}
                  </h3>
                </div>

                {item.badge ? (
                  <span className="rounded-full border border-brand-orange/20 bg-brand-orange/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">
                    {item.badge}
                  </span>
                ) : null}
              </div>

              <div className="mt-6 flex flex-1 flex-col rounded-[28px] border border-brand-orange/15 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.16),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-5 py-6 text-center sm:px-6 sm:py-8">
                <div className="text-xs font-semibold uppercase tracking-[0.32em] text-white/45">
                  Big Bites Pricing
                </div>

                <div className="flex flex-1 flex-col items-center justify-center">
                  <div className="mt-5 font-display text-2xl font-black leading-[1.45] text-brand-orange sm:text-3xl">
                    {formatPrice(item.price)}
                  </div>

                  <div className="mt-5 h-px w-20 bg-brand-orange/20" />

                  <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
                    Crafted for flavour, value, and a premium food experience.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                {typeof item.spice === 'number' ? (
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                      Spice
                    </span>
                    <SpiceMeter level={item.spice} />
                  </div>
                ) : (
                  <div />
                )}

                <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-brand-orange/75">
                  <span className="hidden sm:inline">Hover or tap to go back</span>
                  <span className="sm:hidden">Tap to go back</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Reveal>
  )
}