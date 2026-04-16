import useCounter from '../hooks/useCounter'
import Reveal from './Reveal'
import useInView from '../hooks/useInView'

export default function StatCard({ item, delay = 0 }) {
  const [ref, isInView] = useInView({ threshold: 0.35 })
  const count = useCounter(item.value, item.suffix, 1800, isInView)
  const Icon = item.icon

  return (
    <Reveal delay={delay}>
      <div ref={ref} className="card-surface orange-glow rounded-[28px] p-6 transition hover:-translate-y-1.5 hover:border-brand-orange/40">
        <div className="mb-4 inline-flex rounded-2xl border border-brand-orange/20 bg-brand-orange/10 p-3 text-brand-orange">
          <Icon size={22} />
        </div>
        <div className="font-display text-4xl font-black tracking-tight text-brand-text md:text-5xl">{count}</div>
        <div className="mt-3 text-sm uppercase tracking-[0.28em] text-brand-muted">{item.label}</div>
      </div>
    </Reveal>
  )
}
