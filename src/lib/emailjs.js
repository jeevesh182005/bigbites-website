import emailjs from '@emailjs/browser'

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

if (publicKey) {
  emailjs.init({
    publicKey,
    blockHeadless: true,
    limitRate: {
      id: 'bigbites-site',
      throttle: 10000,
    },
  })
}

export async function sendEmail(templateId, templateParams) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID

  if (!publicKey || !serviceId || !templateId) {
    throw new Error('Email service is not configured.')
  }

  return emailjs.send(serviceId, templateId, templateParams)
}

export function buildWhatsAppUrl(message) {
  const phone = import.meta.env.VITE_FOUNDER_WHATSAPP || '917397045556'
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}