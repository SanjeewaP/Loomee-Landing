import { useEffect, useRef } from 'react'

/**
 * A warm radial glow that follows the cursor across the page.
 * Uses requestAnimationFrame for smooth 60fps tracking.
 */
export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const el = glowRef.current
    if (!el) return

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.display = 'none'
      return
    }

    // Hide on touch devices
    let hasTouch = false
    const onTouch = () => { hasTouch = true; el.style.display = 'none' }
    window.addEventListener('touchstart', onTouch, { once: true })

    let rafId
    const onMove = (e) => {
      if (hasTouch) return
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        el.style.left = e.clientX + 'px'
        el.style.top = e.clientY + 'px'
        el.style.opacity = '1'
      })
    }

    const onLeave = () => { el.style.opacity = '0' }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('touchstart', onTouch)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
}
