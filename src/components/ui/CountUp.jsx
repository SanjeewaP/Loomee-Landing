import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

export default function CountUp({ value }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(() => {
    const match = value.match(/(\d+)/)
    if (!match) return value
    const prefix = value.slice(0, match.index)
    const suffix = value.slice(match.index + match[1].length)
    return `${prefix}0${suffix}`
  })

  useEffect(() => {
    if (!isInView) return
    const match = value.match(/(\d+)/)
    if (!match) { setDisplay(value); return }
    const num = parseInt(match[1], 10)
    const prefix = value.slice(0, match.index)
    const suffix = value.slice(match.index + match[1].length)
    let frame = 0
    const totalFrames = 45
    const tick = () => {
      frame++
      const progress = frame / totalFrames
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(`${prefix}${Math.round(eased * num)}${suffix}`)
      if (frame < totalFrames) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, value])

  return <span ref={ref}>{display}</span>
}
