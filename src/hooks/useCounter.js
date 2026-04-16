import { useEffect, useState } from 'react'

export default function useCounter(target = 0, suffix = '', duration = 1800, start = false) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return

    let frame
    let startTime

    const easeOut = (t) => 1 - Math.pow(1 - t, 3)

    const tick = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setValue(Math.floor(easeOut(progress) * target))
      if (progress < 1) {
        frame = window.requestAnimationFrame(tick)
      }
    }

    frame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frame)
  }, [duration, start, target])

  return `${value.toLocaleString()}${suffix}`
}
