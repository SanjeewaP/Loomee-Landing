import { useEffect } from 'react'

/**
 * Smooths mouse-wheel scrolling by lerping between scroll positions.
 * Helps mice with low polling rates (125Hz etc.) feel buttery smooth.
 * Automatically disables on touch devices and when reduced motion is preferred.
 */
export default function useSmoothScroll() {
  useEffect(() => {
    // Skip on touch devices or reduced motion
    if ('ontouchstart' in window) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let target = window.scrollY
    let current = window.scrollY
    let rafId = null
    let isRunning = false

    const ease = 0.08       // Interpolation speed per frame (lower = smoother glide)
    const sensitivity = 0.4  // Dampen wheel delta (0.4 = 40% of raw value)

    function animate() {
      current += (target - current) * ease

      // Stop animating once we're close enough (sub-pixel)
      if (Math.abs(target - current) < 0.5) {
        current = target
        window.scrollTo(0, current)
        isRunning = false
        return
      }

      window.scrollTo(0, current)
      rafId = requestAnimationFrame(animate)
    }

    function onWheel(e) {
      e.preventDefault()

      // Dampen the delta so each notch doesn't jump too far
      target += e.deltaY * sensitivity

      // Clamp to page bounds
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      target = Math.max(0, Math.min(target, maxScroll))

      if (!isRunning) {
        isRunning = true
        rafId = requestAnimationFrame(animate)
      }
    }

    // Sync target when user scrolls via other means (keyboard, scrollbar drag)
    function onScroll() {
      if (!isRunning) {
        target = window.scrollY
        current = window.scrollY
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('scroll', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])
}
