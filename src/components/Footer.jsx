import { Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { brand, footerSocials } from '../data/site'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black/40 py-16">
      <div className="container-shell grid gap-10 md:grid-cols-2 xl:grid-cols-4">
        <div>
        <div className="flex items-center gap-3">
          <img src={logo} alt="Big Bites Logo" className="h-12 w-auto" />
        </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-brand-muted">
            Tiruvallur&apos;s premium shawarma brand — from pushcart to pride, built by {brand.ownerName} for flavour, loyalty, and franchise growth.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {footerSocials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-text transition duration-300 hover:-translate-y-1 hover:border-brand-orange hover:text-brand-orange hover:shadow-[0_0_26px_rgba(249,115,22,0.18)]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-white/90">Navigate</h4>
          <div className="mt-5 grid gap-3 text-sm text-brand-muted">
            <Link to="/">Home</Link>
            <Link to="/about">Our Story</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/franchise">Franchise</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-white/90">Popular Menu</h4>
          <div className="mt-5 grid gap-3 text-sm text-brand-muted">
            <Link to="/menu">Chicken Shawarma</Link>
            <Link to="/menu">Arabian Shawarma</Link>
            <Link to="/menu">Paneer Shawarma</Link>
            <Link to="/menu">Platters & Sides</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-white/90">Contact</h4>
          <div className="mt-5 grid gap-4 text-sm text-brand-muted">
            <p>Tiruvallur, Tamil Nadu</p>
            <a href={brand.phoneHref} className="transition hover:text-brand-orange">{brand.phoneDisplay}</a>
            <a href="mailto:hello@bigbites.in" className="transition hover:text-brand-orange">hello@bigbites.in</a>
            <a href="mailto:franchise@bigbites.in" className="transition hover:text-brand-orange">franchise@bigbites.in</a>
          </div>
          <a
            href={brand.phoneHref}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-5 py-3 font-semibold text-brand-text transition hover:-translate-y-0.5 hover:border-brand-orange hover:bg-brand-orange hover:text-black"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      </div>

      <div className="container-shell mt-12 flex flex-col gap-4 border-t border-white/8 pt-8 text-sm text-brand-muted md:flex-row md:items-center md:justify-between">
        <p>© 2024–2026 Big Bites. All rights reserved.</p>
        <p>Founded by {brand.ownerName} · Tiruvallur&apos;s #1 Shawarma Brand</p>
      </div>
    </footer>
  )
}
