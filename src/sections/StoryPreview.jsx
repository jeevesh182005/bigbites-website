import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'
import ownerImage from '../assets/owner-santhosh.png'
import { brand } from '../data/site'

export default function StoryPreview() {
  return (
    <section className="py-24">
      <div className="container-shell grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal direction="left">
          <div className="relative max-w-md">
            <div className="card-surface overflow-hidden rounded-[34px] border-white/10 bg-[linear-gradient(180deg,rgba(249,115,22,0.18),rgba(255,255,255,0.04))]">
              <img
                src={ownerImage}
                alt={`${brand.ownerName}, ${brand.ownerTitle}`}
                className="h-[28rem] w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <SectionIntro
            tag="Our Journey"
            title={
              <>
                From <em className="text-brand-orange">Pushcart</em> to Pride
              </>
            }
            subtitle="Started by Santhosh Kumar at just 21 years old, Big Bites began with one pushcart in Tiruvallur on April 13, 2024. Today, it stands as a growing brand with multiple own outlets and franchises — a journey that inspires youngsters to believe that even the smallest beginning can lead to something extraordinary."
          />

          <Reveal delay={0.18}>
            <blockquote className="mt-8 border-l border-brand-orange pl-6 font-display text-2xl font-bold leading-10 text-white/90 md:text-3xl">
              “From a single pushcart in Tiruvallur to multiple own outlets and growing
              franchises, Santhosh Kumar’s journey proves that age is never a limit when
              vision is strong and effort is relentless.”
            </blockquote>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex items-center gap-4">
              <img
                src={ownerImage}
                alt={brand.ownerName}
                className="h-14 w-14 rounded-full border border-brand-orange/20 object-cover"
              />
              <div>
                <div className="font-semibold text-brand-text">{brand.ownerName}</div>
                <div className="text-sm text-brand-muted">{brand.ownerTitle} — Tiruvallur</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <Link
              to="/about"
              className="mt-10 inline-flex rounded-full border border-brand-orange px-6 py-3.5 font-semibold text-brand-orange transition hover:-translate-y-1 hover:bg-brand-orange hover:text-black"
            >
              Read Full Story
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}