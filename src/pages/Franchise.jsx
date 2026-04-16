import { Phone } from 'lucide-react'
import { useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import FormField from '../components/FormField'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { brand, investmentCards } from '../data/site'
import BenefitsSection from '../sections/BenefitsSection'
import FranchiseOpportunity from '../sections/FranchiseOpportunity'
import ProcessSection from '../sections/ProcessSection'
import CustomSelect from '../components/CustomSelect'
import VideoSection from '../sections/VideoSection'
import { buildWhatsAppUrl, sendEmail } from '../lib/emailjs'


const initialForm = {
  name: '',
  phone: '',
  email: '',
  city: '',
  capacity: '',
  experience: '',
  vision: '',
}

function normalizePhone(phone) {
  return phone.replace(/[^\d+]/g, '').trim()
}

export default function Franchise() {
  const [form, setForm] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showWhatsappCta, setShowWhatsappCta] = useState(false)
  const [lastWhatsappMessage, setLastWhatsappMessage] = useState('')

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const validateForm = () => {
    if (!form.name.trim()) return 'Please enter your full name.'
    if (!form.phone.trim()) return 'Please enter your phone number.'
    if (!form.email.trim()) return 'Please enter your email address.'
    if (!form.city.trim()) return 'Please enter your city or preferred location.'
    if (!form.capacity.trim()) return 'Please select your investment capacity.'
    if (!form.experience.trim()) return 'Please select your prior business experience.'

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    if (!emailOk) return 'Please enter a valid email address.'

    const phoneDigits = form.phone.replace(/\D/g, '')
    if (phoneDigits.length < 10) return 'Please enter a valid phone number.'

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
      enquiry_type: 'Franchise Enquiry',
      name: form.name.trim(),
      phone: normalizePhone(form.phone),
      email: form.email.trim(),
      city: form.city.trim(),
      investment_capacity: form.capacity,
      business_experience: form.experience,
      subject: 'Franchise Enquiry',
      message: form.vision.trim() || 'No additional message provided.',
      submitted_at: new Date().toLocaleString(),
    }

    const whatsappMessage = `
*New Franchise Enquiry — Big Bites*

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
City / Location: ${form.city}
Investment Capacity: ${form.capacity}
Prior Experience: ${form.experience}
Vision: ${form.vision || 'No additional message'}
`.trim()

    try {
      const templateId = import.meta.env.VITE_EMAILJS_FRANCHISE_TEMPLATE_ID
      await sendEmail(templateId, templateParams)

      setLastWhatsappMessage(whatsappMessage)
      setShowWhatsappCta(true)
      toast.success('Application sent successfully.')
      setForm(initialForm)
    } catch (error) {
      console.error('Franchise form submission failed:', error)
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
        tag="Franchise Opportunities"
        title={<>Own the Next <em className="text-brand-orange">Big Bites</em> Outlet</>}
        subtitle="Join a fast-growing food brand with a proven model, strong local traction, and a premium customer experience."
      />

      <BenefitsSection />

      <section className="bg-black/20 py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-brand-orange">
                <span className="h-px w-10 bg-brand-orange" />
                Investment Overview
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-4xl font-black text-brand-text md:text-5xl">
                What to <span className="text-brand-orange">Expect</span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-brand-muted">
                Transparent, fair, and designed for ROI. Reach out to get exact figures for your location.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
            {investmentCards.map(({ icon: Icon, tag, value, sub, highlight, badge }, index) => (
              <Reveal key={tag} delay={index * 0.08}>
                <div
                  className={`card-surface flex h-full flex-col rounded-[30px] p-8 text-center ${
                    highlight ? 'border-brand-orange/40 shadow-[0_0_35px_rgba(249,115,22,0.10)]' : ''
                  }`}
                >
                  <div className="flex flex-1 flex-col items-center">
                    <div className="mx-auto inline-flex rounded-2xl border border-brand-orange/20 bg-brand-orange/10 p-4 text-brand-orange">
                      <Icon size={24} />
                    </div>

                    {badge ? (
                      <div className="mt-4 inline-flex rounded-full border border-brand-orange/20 bg-brand-orange/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                        {badge}
                      </div>
                    ) : null}

                    <div className="mt-5 text-xs font-semibold uppercase tracking-[0.32em] text-brand-orange">
                      {tag}
                    </div>

                    <div
                      className={`mt-4 font-display text-4xl font-black leading-tight ${
                        highlight ? 'text-brand-orange' : 'text-brand-text'
                      }`}
                    >
                      {value}
                    </div>

                    <div className="mt-3 text-sm leading-7 text-brand-muted">
                      {sub}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VideoSection type="franchise" />
      <FranchiseOpportunity />
      <ProcessSection />

      <section id="apply" className="pb-24">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-brand-orange">
                <span className="h-px w-10 bg-brand-orange" />
                Apply Today
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-4xl font-black text-brand-text md:text-5xl">
                Start Your <span className="text-brand-orange">Application</span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-brand-muted">
                Fill in your details and we&apos;ll get back to you. You can also continue the enquiry directly on WhatsApp after submission.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <a
                href={brand.phoneHref}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-6 py-3 font-semibold text-brand-text transition hover:-translate-y-0.5 hover:border-brand-orange hover:bg-brand-orange hover:text-black"
              >
                <Phone size={18} />
                Call {brand.phoneDisplay}
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} className="card-surface mx-auto mt-12 max-w-4xl rounded-[36px] p-8 md:p-10">
              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  label="Full Name *"
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  placeholder="Your full name"
                  required
                  disabled={isSubmitting}
                />

                <FormField
                  label="Phone Number *"
                  name="phone"
                  value={form.phone}
                  onChange={updateField}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  disabled={isSubmitting}
                />

                <FormField
                  label="Email Address *"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="you@email.com"
                  required
                  disabled={isSubmitting}
                />

                <FormField
                  label="City / Location *"
                  name="city"
                  value={form.city}
                  onChange={updateField}
                  placeholder="Where do you want to open?"
                  required
                  disabled={isSubmitting}
                />

                <CustomSelect
                  label="Investment Capacity"
                  value={form.capacity}
                  onChange={(val) => setForm((prev) => ({ ...prev, capacity: val }))}
                  options={[
                    'Below ₹5 Lakhs',
                    '₹5L – ₹10L',
                    '₹10L – ₹20L',
                    'Above ₹20L',
                  ]}
                  disabled={isSubmitting}
                />

                <CustomSelect
                  label="Prior Business Experience"
                  value={form.experience}
                  onChange={(val) => setForm((prev) => ({ ...prev, experience: val }))}
                  options={[
                    'No experience (first business)',
                    'Some experience',
                    'Food industry experience',
                    'Existing franchise owner',
                  ]}
                  disabled={isSubmitting}
                />
              </div>

              <FormField
                className="mt-6"
                as="textarea"
                rows="6"
                label="Tell us about yourself & your vision"
                name="vision"
                value={form.vision}
                onChange={updateField}
                placeholder="Why do you want to own a Big Bites franchise? What makes your location ideal?"
                disabled={isSubmitting}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full rounded-full bg-brand-orange px-6 py-4 font-semibold text-black transition hover:-translate-y-1 hover:bg-brand-orange-strong disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
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
                Your enquiry is sent by email. Use WhatsApp for instant founder follow-up.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}