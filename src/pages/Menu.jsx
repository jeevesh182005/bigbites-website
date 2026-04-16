import { useMemo, useState } from 'react'
import MenuCard from '../components/MenuCard'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { fullMenu } from '../data/site'

const categoryMeta = [
  { key: 'all', label: 'All Items' },
  { key: 'special', label: 'Big Bites Special' },
  { key: 'shawarma', label: 'Shawarma' },
  { key: 'barbeque', label: 'Barbeque' },
  { key: 'leg', label: 'Big Bites Leg' },
  { key: 'kebab', label: 'Kebab' },
  { key: 'wings', label: 'Big Bites Wings' },
  { key: 'tikka', label: 'Tikka' },
  { key: 'mojito', label: 'Mojito' },
  { key: 'addons', label: 'Add-ons' },
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [search, setSearch] = useState('')

  const filteredMenu = useMemo(() => {
    return fullMenu.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory
      const query = search.trim().toLowerCase()
      const matchesSearch =
        query.length === 0 ||
        item.name.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, search])

  return (
    <>
      <PageHero
        tag="Our Menu"
        title={<>Bold Flavour, <em className="text-brand-orange">Signature</em> Taste</>}
        subtitle="From Big Bites Specials and shawarma to barbeque, wings, tikka, mojitos, and add-ons — explore the full Big Bites menu."
      />

      <section className="pb-24">
        <div className="container-shell">
          <Reveal>
            <div className="flex flex-col gap-6 rounded-[32px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] p-6 md:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-orange">
                    Explore Categories
                  </div>
                  <h2 className="mt-3 font-display text-3xl font-black text-brand-text md:text-4xl">
                    Choose What You’re Craving
                  </h2>
                </div>

                <div className="w-full lg:max-w-sm">
                  <input
                    type="text"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search menu items..."
                    className="w-full rounded-2xl border border-white/10 bg-[#121212] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/40"
                  />
                </div>
              </div>

              <div className="-mx-1 overflow-x-auto pb-1">
                <div className="flex min-w-max flex-nowrap gap-3 px-1 md:flex-wrap md:min-w-0">
                  {categoryMeta.map((category) => {
                    const isActive = activeCategory === category.key

                    return (
                      <button
                        key={category.key}
                        type="button"
                        onClick={() => setActiveCategory(category.key)}
                        className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-semibold transition ${
                          isActive
                            ? 'bg-brand-orange text-black shadow-[0_0_24px_rgba(249,115,22,0.2)]'
                            : 'border border-white/10 bg-white/5 text-brand-text hover:-translate-y-0.5 hover:border-brand-orange/40 hover:text-brand-orange'
                        }`}
                      >
                        {category.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10 flex items-center justify-between gap-4">
              <div className="text-sm text-brand-muted">
                Showing <span className="font-semibold text-brand-text">{filteredMenu.length}</span>{' '}
                item{filteredMenu.length !== 1 ? 's' : ''}
              </div>
            </div>
          </Reveal>

          {filteredMenu.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredMenu.map((item, index) => (
                <MenuCard key={`${item.category}-${item.name}`} item={item} delay={index * 0.04} />
              ))}
            </div>
          ) : (
            <Reveal delay={0.08}>
              <div className="mt-10 rounded-[30px] border border-white/8 bg-white/4 p-10 text-center">
                <div className="text-5xl">🍽️</div>
                <h3 className="mt-5 text-2xl font-semibold text-brand-text">
                  No items found
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-muted">
                  Try a different category or search term to explore more from the Big Bites menu.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  )
}