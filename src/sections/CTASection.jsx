import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

export default function CTASection({ title, subtitle, buttonLabel = 'Get Started', to = '/franchise' }) {
  return (
    <section className="py-24">
      <div className="container-shell">
        <div className="card-surface rounded-[36px] px-8 py-14 text-center md:px-14 md:py-20">
          <Reveal>
            <h2 className="font-display text-4xl font-black leading-tight text-brand-text md:text-6xl">{title}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-muted">{subtitle}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <Link
              to={to}
              className="mt-9 inline-flex rounded-full bg-brand-orange px-6 py-4 font-semibold text-black transition hover:-translate-y-1 hover:bg-brand-orange-strong"
            >
              {buttonLabel}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
