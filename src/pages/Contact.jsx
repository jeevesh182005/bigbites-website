import { ExternalLink, MapPin, Phone, Star } from 'lucide-react'
import { useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import FormField from '../components/FormField'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { contactCards, faqs, footerSocials } from '../data/site'
import CustomSelect from '../components/CustomSelect'
import { buildWhatsAppUrl, sendEmail } from '../lib/emailjs'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
}

const locations = [
  {
    id: 'main',
    name: 'BIG BITES',
    address: 'Oilmill, near HP petrol pump, Kakkalur, Tamil Nadu 602001',
    rating: '4.3',
    reviews: '21',
    tag: 'Main Outlet',
    embedUrl:
      'https://www.google.com/maps?q=BIG%20BITES%20Oilmill%20near%20HP%20petrol%20pump%20Kakkalur%20Tiruvallur%20Tamil%20Nadu%20602001&z=15&output=embed',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=BIG+BITES+Oilmill+near+HP+petrol+pump+Kakkalur+Tamil+Nadu+602001',
  },
  {
    id: 'branch2',
    name: 'BIG BITES branch 2',
    address: 'CV Naidu Rd, opposite to Ganga Sweets, Tiruvallur, Tamil Nadu 602001',
    rating: '5.0',
    reviews: '3',
    tag: 'Branch 2',
    embedUrl:
      'https://www.google.com/maps?q=BIG%20BITES%20branch%202%20CV%20Naidu%20Road%20opposite%20to%20Ganga%20Sweets%20Tiruvallur%20Tamil%20Nadu%20602001&z=15&output=embed',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=BIG+BITES+branch+2+CV+Naidu+Road+opposite+to+Ganga+Sweets+Tiruvallur+Tamil+Nadu+602001',
  },
]

function normalizePhone(phone) {
  return phone.replace(/[^\d+]/g, '').trim()
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showWhatsappCta, setShowWhatsappCta] = useState(false)
  const [lastWhatsappMessage, setLastWhatsappMessage] = useState('')

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const validateForm = () => {
    if (!form.name.trim()) return 'Please enter your name.'
    if (!form.email.trim()) return 'Please enter your email address.'
    if (!form.subject.trim()) return 'Please choose a subject.'
    if (!form.message.trim()) return 'Please enter your message.'

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    if (!emailOk) return 'Please enter a valid email address.'

    if (form.phone.trim()) {
      const phoneDigits = form.phone.replace(/\D/g, '')
      if (phoneDigits.length < 10) return 'Please enter a valid phone number.'
    }

    return null
  }

  const whatsappUrl = useMemo(() => {
    return lastWhatsappMessage ? buildWhatsAppUrl(lastWhatsappMessage) : '#'
  }, [lastWhatsappMessage])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationError = validateForm()
    if (validationError) {
      toast.error(validationError)
      return
    }

    setIsSubmitting(true)
    setShowWhatsappCta(false)

    const templateParams = {
      enquiry_type: 'Contact Enquiry',
      name: form.name.trim(),
      phone: normalizePhone(form.phone),
      email: form.email.trim(),
      city: '',
      investment_capacity: '',
      business_experience: '',
      subject: form.subject,
      message: form.message.trim(),
      submitted_at: new Date().toLocaleString(),
    }

    const whatsappMessage = `
*New Contact Enquiry — Big Bites*

Name: ${form.name}
Phone: ${form.phone || 'Not provided'}
Email: ${form.email}
Subject: ${form.subject}
Message: ${form.message}
    `.trim()

    try {
      const templateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID
      await sendEmail(templateId, templateParams)

      setLastWhatsappMessage(whatsappMessage)
      setShowWhatsappCta(true)
      toast.success('Message sent successfully.')
      setForm(initialForm)
    } catch (error) {
      console.error('Contact form submission failed:', error)
      setLastWhatsappMessage(whatsappMessage)
      setShowWhatsappCta(true)
      toast.error('Email could not be sent. You can still continue on WhatsApp.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <PageHero
        tag="Get in Touch"
        title={
          <>
            Let&apos;s <em className="text-brand-orange">Talk</em>
          </>
        }
        subtitle="Franchise enquiry, general question, or just want to say hello — we&apos;d love to hear from you."
      />

      <section className="pb-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-brand-orange">
                <span className="h-px w-10 bg-brand-orange" />
                Contact Info
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-4xl font-black text-brand-text md:text-5xl">
                Find <span className="text-brand-orange">Us</span> Here
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-5 max-w-xl text-base leading-8 text-brand-muted">
                We&apos;re based in Tiruvallur, Tamil Nadu. Reach us via any of the channels below.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5">
              {contactCards.map(({ icon: Icon, title, value, sub, href }, index) => (
                <Reveal key={title} delay={index * 0.08}>
                  <div className="card-surface flex items-start gap-4 rounded-[28px] p-6">
                    <div className="rounded-2xl border border-brand-orange/20 bg-brand-orange/10 p-3 text-brand-orange">
                      <Icon size={22} />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-text">{title}</div>
                      {href ? (
                        <a href={href} className="mt-2 block text-sm leading-7 text-white/90 hover:text-brand-orange">
                          {value}
                        </a>
                      ) : (
                        <div className="mt-2 text-sm leading-7 text-white/90">{value}</div>
                      )}
                      <div className="text-sm leading-7 text-brand-muted">{sub}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.26}>
              <div className="mt-10">
                <div className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-muted">
                  Follow Us
                </div>
                <div className="mt-5 flex items-center gap-3">
                  {footerSocials.map(({ href, label, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-text transition hover:-translate-y-1 hover:border-brand-orange hover:text-brand-orange"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right">
            <form onSubmit={handleSubmit} className="card-surface rounded-[36px] p-8 md:p-10">
              <div className="mb-6 text-sm font-semibold uppercase tracking-[0.32em] text-brand-orange">
                Send a Message
              </div>

              <FormField
                label="Your Name *"
                name="name"
                value={form.name}
                onChange={updateField}
                placeholder="Full name"
                required
                disabled={isSubmitting}
              />

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <FormField
                  label="Phone"
                  name="phone"
                  value={form.phone}
                  onChange={updateField}
                  placeholder="+91 XXXXX XXXXX"
                  disabled={isSubmitting}
                />
                <FormField
                  label="Email *"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="you@email.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="mt-6">
                <CustomSelect
                  label="Subject"
                  value={form.subject}
                  onChange={(val) => setForm((prev) => ({ ...prev, subject: val }))}
                  options={[
                    'Franchise Enquiry',
                    'General Question',
                    'Feedback',
                    'Media / Press',
                    'Partnership',
                    'Other',
                  ]}
                  disabled={isSubmitting}
                />
              </div>

              <FormField
                className="mt-6"
                as="textarea"
                rows="6"
                label="Your Message *"
                name="message"
                value={form.message}
                onChange={updateField}
                placeholder="Write your message here..."
                required
                disabled={isSubmitting}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full rounded-full bg-brand-orange px-6 py-4 font-semibold text-black transition hover:-translate-y-1 hover:bg-brand-orange-strong disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {showWhatsappCta ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-6 py-4 font-semibold text-brand-text transition hover:-translate-y-1 hover:border-brand-orange hover:bg-brand-orange hover:text-black"
                >
                  <Phone size={18} />
                  Continue to WhatsApp
                </a>
              ) : null}

              <p className="mt-4 text-center text-xs text-brand-muted">
                Your message is sent by email. Use WhatsApp for faster follow-up if needed.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-brand-orange">
                <span className="h-px w-10 bg-brand-orange" />
                Visit Our Locations
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-4xl font-black text-brand-text md:text-5xl">
                Find Big Bites on the <span className="text-brand-orange">Map</span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-brand-muted">
                Explore our main outlet and second branch in Tiruvallur. Each location card includes live map view, address, and current Google rating snapshot.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-8 xl:grid-cols-2">
            {locations.map((location, index) => (
              <Reveal key={location.id} delay={index * 0.08}>
                <div className="card-surface overflow-hidden rounded-[34px] border border-white/8">
                  <div className="aspect-[16/11] w-full overflow-hidden border-b border-white/8">
                    <iframe
                      title={location.name}
                      src={location.embedUrl}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-full w-full"
                    />
                  </div>

                  <div className="p-6 md:p-7">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="inline-flex rounded-full border border-brand-orange/20 bg-brand-orange/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                          {location.tag}
                        </div>

                        <h3 className="mt-4 text-2xl font-semibold text-brand-text">
                          {location.name}
                        </h3>

                        <div className="mt-4 flex items-start gap-3 text-sm leading-7 text-white/85">
                          <MapPin size={18} className="mt-1 shrink-0 text-brand-orange" />
                          <span>{location.address}</span>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left sm:min-w-[10rem] sm:text-right">
                        <div className="flex items-center gap-2 text-brand-text sm:justify-end">
                          <Star size={16} className="fill-brand-orange text-brand-orange" />
                          <span className="font-semibold">{location.rating}</span>
                        </div>
                        <div className="mt-1 text-xs uppercase tracking-[0.22em] text-brand-muted">
                          {location.reviews} Reviews
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <a
                        href={location.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-5 py-3 font-semibold text-brand-text transition hover:-translate-y-0.5 hover:border-brand-orange hover:bg-brand-orange hover:text-black"
                      >
                        <ExternalLink size={17} />
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black/20 py-24">
        <div className="container-shell">
          <Reveal>
            <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-brand-orange">
              <span className="h-px w-10 bg-brand-orange" />
              FAQ
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl font-black text-brand-text md:text-5xl">
              Common <span className="text-brand-orange">Questions</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {faqs.map((item, index) => (
              <Reveal key={item.q} delay={index * 0.08}>
                <div className="card-surface rounded-[28px] p-6">
                  <h3 className="text-xl font-semibold text-brand-text">{item.q}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-muted">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}