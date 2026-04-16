import Reveal from '../components/Reveal'

const items = [
  'Chicken Shawarma',
  'Grilled Shawarma',
  'Crispy Wings',
  'BBQ',
  'Loaded Wraps',
  'Big Bites Special',
  'Franchise Ready Model',
  '50,000+ Happy Customers',
]

export default function Marquee() {
  const loopItems = [...items, ...items]

  return (
    <section className="overflow-hidden py-8">
      <Reveal>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0c0c0c] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0c0c0c] to-transparent" />

          <div className="marquee-wrapper">
            <div className="marquee-track">
              {loopItems.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-orange shadow-[0_0_16px_rgba(249,115,22,0.8)]" />
                  <span className="whitespace-nowrap text-sm font-medium tracking-wide text-white/85 md:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}