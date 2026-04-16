import Reveal from './Reveal'

export default function InfoCard({ icon: Icon, title, desc, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="card-surface h-full rounded-[28px] p-6 transition hover:-translate-y-1.5 hover:border-brand-orange/40">
        <div className="mb-5 inline-flex rounded-2xl border border-brand-orange/20 bg-brand-orange/10 p-3 text-brand-orange">
          <Icon size={22} />
        </div>
        <h3 className="text-xl font-semibold text-brand-text">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-brand-muted">{desc}</p>
      </div>
    </Reveal>
  )
}
