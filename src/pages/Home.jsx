import CTASection from '../sections/CTASection'
import FranchiseSection from '../sections/FranchiseSection'
import Hero from '../sections/Hero'
import Marquee from '../sections/Marquee'
import MenuPreview from '../sections/MenuPreview'
import StatsSection from '../sections/StatsSection'
import StoryPreview from '../sections/StoryPreview'
import Testimonials from '../sections/Testimonials'
import AppSection from '../sections/AppSection'
import VideoSection from '../sections/VideoSection'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <StoryPreview />
      <VideoSection type="founder" />
      <StatsSection />
      <AppSection />
      <MenuPreview />
      <FranchiseSection />
      <Testimonials />
      <CTASection
        title={<>Ready to Join the <span className="text-brand-orange">Big Bites</span> Story?</>}
        subtitle="Whether you want to explore the menu or start a franchise conversation, this is just the beginning."
        buttonLabel="Start Franchise Journey"
      />
    </>
  )
}
