import Reveal from './Reveal'

export default function PageHero({ tag, title, subtitle }) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.16),transparent_34%)]" />
      <div className="container-shell relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-brand-orange">
              <span className="h-px w-10 bg-brand-orange" />
              {tag}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-5xl font-black leading-none tracking-tight text-brand-text md:text-7xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-muted md:text-lg">
              {subtitle}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
