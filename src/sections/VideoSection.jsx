import { PlayCircle } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'
import ownerImage from '../assets/owner-santhosh.png'

const videoMap = {
  founder: {
    title: 'How Big Bites Started',
    subtitle: 'Founder Journey',
    description:
      'A personal story from the founder about how Big Bites began, the early struggles, and the vision behind the brand.',
    status: 'Coming Soon',
    thumbnail: ownerImage,
    youtubeUrl: '',
  },
  franchise: {
    title: 'Why Partner With Big Bites',
    subtitle: 'Franchise Vision',
    description:
      'An introduction to the Big Bites franchise opportunity, growth model, and what future partners can expect.',
    status: 'Coming Soon',
    thumbnail: ownerImage,
    youtubeUrl: '',
  },
}

function VideoCard({ video }) {
  const isLive = Boolean(video.youtubeUrl)

  return (
    <div className="group card-surface overflow-hidden rounded-[30px]">
      <div className="relative">
        {isLive ? (
          <div className="aspect-video w-full overflow-hidden">
            <iframe
              src={video.youtubeUrl}
              title={video.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        ) : (
          <div className="relative aspect-video overflow-hidden">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.72))]" />

            <div className="absolute left-4 top-4 rounded-full border border-brand-orange/25 bg-brand-orange/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
              {video.status}
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-orange/30 bg-black/45 text-brand-orange backdrop-blur-md transition duration-300 group-hover:scale-105 group-hover:bg-brand-orange group-hover:text-black md:h-18 md:w-18">
                <PlayCircle size={34} />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 md:p-7">
        <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-orange">
          {video.subtitle}
        </div>
        <h3 className="mt-3 text-2xl font-semibold leading-snug text-brand-text">
          {video.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-brand-muted">
          {video.description}
        </p>
      </div>
    </div>
  )
}

export default function VideoSection({ type = 'founder' }) {
  const video = videoMap[type] || videoMap.founder

  const sectionContent =
    type === 'franchise'
      ? {
          tag: 'Franchise Video',
          title: (
            <>
              Why <em className="text-brand-orange">Partner</em> With Big Bites
            </>
          ),
          subtitle:
            'A future-ready video block for franchise communication. Add the owner’s franchise explanation later without redesigning the page.',
        }
      : {
          tag: 'Founder Story',
          title: (
            <>
              Hear How <em className="text-brand-orange">Big Bites</em> Started
            </>
          ),
          subtitle:
            'A future-ready video section for founder storytelling. Add the owner’s journey video later without redesigning the page.',
        }

  return (
    <section className="py-20">
    <div className="container-shell">
        <SectionIntro
        tag={sectionContent.tag}
        title={sectionContent.title}
        subtitle={sectionContent.subtitle}
        />

        <div className="mt-12 flex justify-center">
        <div className="w-full max-w-4xl">
            <Reveal>
            <div className="group card-surface overflow-hidden rounded-[28px]">
                <div className="relative aspect-video overflow-hidden">
                
                {video.youtubeUrl ? (
                    <iframe
                    src={video.youtubeUrl}
                    title={video.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    />
                ) : (
                    <>
                    <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.75))]" />

                    {/* Coming soon badge */}
                    <div className="absolute left-4 top-4 rounded-full border border-brand-orange/25 bg-brand-orange/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                        {video.status}
                    </div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-orange/30 bg-black/45 text-brand-orange backdrop-blur-md transition duration-300 group-hover:scale-105 group-hover:bg-brand-orange group-hover:text-black md:h-16 md:w-16">
                        <PlayCircle size={28} />
                        </div>
                    </div>
                    </>
                )}
                </div>

                {/* Text Content */}
                <div className="p-5 md:p-6 text-center">
                <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-orange">
                    {video.subtitle}
                </div>

                <h3 className="mt-3 text-xl font-semibold text-brand-text md:text-2xl">
                    {video.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-brand-muted max-w-xl mx-auto">
                    {video.description}
                </p>
                </div>
            </div>
            </Reveal>
        </div>
        </div>
    </div>
    </section>
  )
}