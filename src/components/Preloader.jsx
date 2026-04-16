import { useEffect, useState } from 'react'

export default function Preloader() {
  // const [hidden, setHidden] = useState(false)

  // useEffect(() => {
  //   const timer = window.setTimeout(() => setHidden(true), 1600)
  //   return () => window.clearTimeout(timer)
  // }, [])

  // return (
  //   <div
  //     className={`pointer-events-none fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-bg transition-all duration-700 ${hidden ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
  //   >
  //     <div className="font-display text-4xl font-black tracking-tight text-brand-text md:text-5xl">
  //       Big<span className="text-brand-orange"> Bites</span>
  //     </div>
  //     <div className="mt-6 h-1.5 w-52 overflow-hidden rounded-full bg-white/10">
  //       <div className="h-full w-full origin-left animate-[pulse_1.4s_ease-in-out_infinite] bg-brand-orange" />
  //     </div>
  //   </div>
  // )
}
