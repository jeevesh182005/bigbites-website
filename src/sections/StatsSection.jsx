import SectionIntro from '../components/SectionIntro'
import StatCard from '../components/StatCard'
import { stats } from '../data/site'

export default function StatsSection() {
  return (
    <section className="py-24">
      <div className="container-shell">
        <SectionIntro
          tag="By the Numbers"
          title={<>The <em className="text-brand-orange">Growth</em> Speaks</>}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <StatCard key={item.label} item={item} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
