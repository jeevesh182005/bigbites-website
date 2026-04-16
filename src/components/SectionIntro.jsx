import Reveal from './Reveal'

export default function SectionIntro({ tag, title, subtitle, center = false, action }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : ''}>
      <Reveal>
        <div className={`mb-4 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.38em] text-brand-orange ${center ? 'justify-center' : ''}`}>
          <span className="h-px w-10 bg-brand-orange" />
          {tag}
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-4xl font-black leading-tight tracking-tight text-brand-text md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.14}>
          <p className={`mt-5 max-w-2xl text-base leading-8 text-brand-muted ${center ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        </Reveal>
      ) : null}
      {action}
    </div>
  )
}
