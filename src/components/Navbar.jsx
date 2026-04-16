import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { brand } from '../data/site'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/about' },
  { label: 'Menu', to: '/menu' },
  { label: 'Franchise', to: '/franchise' },
  { label: 'Contact', to: '/contact' },
]

function DesktopNavLink({ to, label }) {
  return (
    <NavLink to={to} className="group relative inline-flex py-2 text-sm font-medium tracking-wide">
      {({ isActive }) => (
        <>
          <span className={`transition duration-300 ${isActive ? 'text-brand-text' : 'text-white/65 group-hover:text-brand-text'}`}>
            {label}
          </span>
          <span
            className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-brand-orange transition-transform duration-400 ease-out ${
              isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            }`}
          />
        </>
      )}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl shadow-[0_6px_20px_rgba(249,115,22,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-shell flex h-20 items-center justify-between gap-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Big Bites Logo"
                className="h-13 w-auto object-contain transition duration-300 hover:scale-105"
              />
            </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <DesktopNavLink key={item.to} {...item} />
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={brand.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/12 px-5 py-3 text-sm font-semibold text-brand-text transition hover:-translate-y-0.5 hover:border-brand-orange hover:bg-brand-orange hover:text-black hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]"
            >
              <Phone size={16} />
              Call Now
            </a>
            <Link
              to="/franchise"
              className="rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-brand-orange-strong hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
            >
              Start Franchise
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-text lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-black/96 px-6 transition-all duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {navLinks.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => setOpen(false)}
            className="font-display text-4xl font-bold tracking-tight text-brand-text transition hover:text-brand-orange"
          >
            {item.label}
          </NavLink>
        ))}

        <a
          href={brand.phoneHref}
          onClick={() => setOpen(false)}
          className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 px-6 py-3 font-semibold text-brand-text"
        >
          <Phone size={18} />
          {brand.phoneDisplay}
        </a>

        <Link
          to="/franchise"
          onClick={() => setOpen(false)}
          className="rounded-full bg-brand-orange px-6 py-3 font-semibold text-black"
        >
          Start Franchise
        </Link>
      </div>
    </>
  )
}