import InfoCard from '../components/InfoCard'
import SectionIntro from '../components/SectionIntro'
import { franchiseBenefits } from '../data/site'

export default function BenefitsSection() {
  return (
    <section className="py-24">
      <div className="container-shell">
        <SectionIntro
          tag="Why Partner With Us"
          title={<>A Franchise System Built to <em className="text-brand-orange">Scale</em></>}
          subtitle="We have already done the hard work — built the brand, proven the model, trained the team. You bring the drive; we bring the operating system."
          center
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {franchiseBenefits.map((item, index) => (
            <InfoCard key={item.title} {...item} delay={index * 0.06} />
          ))}
        </div>
      </div>
    </section>
  )
}
