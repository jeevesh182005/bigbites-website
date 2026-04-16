import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

export default function LoaderScreen({ minDuration = 1800 }) {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), minDuration - 350)
    const hideTimer = setTimeout(() => setVisible(false), minDuration)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [minDuration])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0c0c0c] transition-all duration-500 ${
        fadeOut ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        <div className="absolute h-40 w-40 rounded-full bg-brand-orange/20 blur-3xl" />

        <div className="relative animate-[loaderFloat_2.2s_ease-in-out_infinite]">
          <img
            src={logo}
            alt="Big Bites Logo"
            className="h-32 w-auto object-contain drop-shadow-[0_0_35px_rgba(249,115,22,0.22)] md:h-40"
          />
        </div>

        <div className="mt-6 h-1.5 w-40 overflow-hidden rounded-full bg-white/8">
          <div className="h-full w-1/2 animate-[loaderBar_1.3s_ease-in-out_infinite] rounded-full bg-brand-orange" />
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-white/55">
          Loading Big Bites
        </p>
      </div>
    </div>
  )
}