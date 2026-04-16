import { PhoneCall } from 'lucide-react'
import { brand } from '../data/site'

export default function CallFab() {
  return (
    <a
      href={brand.phoneHref}
      aria-label={`Call Big Bites at ${brand.phoneDisplay}`}
      className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-brand-orange px-4 py-3 text-sm font-semibold text-black shadow-[0_18px_40px_rgba(249,115,22,0.35)] transition hover:-translate-y-0.5 sm:right-6 sm:bottom-6 lg:hidden"
    >
      <PhoneCall size={18} />
      Call Now
    </a>
  )
}
