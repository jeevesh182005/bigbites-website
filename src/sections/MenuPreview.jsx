import { Link } from 'react-router-dom'
import MenuCard from '../components/MenuCard'
import SectionIntro from '../components/SectionIntro'
import { menuPreview } from '../data/site'

export default function MenuPreview() {
  return (
    <section className="py-24">
      <div className="container-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            tag="Big Bites Specials"
            title={
              <>
                Signature <em className="text-brand-orange">Flavours</em> You Can’t Miss
              </>
            }
            subtitle="From our exclusive Big Bites Specials to customer-favourite shawarma and grills — every item is crafted for bold taste and premium experience."
          />

          <Link
            to="/menu"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-brand-text transition hover:-translate-y-1 hover:border-brand-orange/50 hover:text-brand-orange"
          >
            Explore Full Menu
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menuPreview.map((item, index) => (
            <MenuCard key={item.name} item={item} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}