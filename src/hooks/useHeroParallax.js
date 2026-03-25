import { useEffect } from 'react'

/**
 * Fades and scales the hero section as the user scrolls down.
 * Uses only transform + opacity (GPU-composited) for 60fps performance.
 */
export default function useHeroParallax() {
  useEffect(() => {
    const hero = document.querySelector('.hero')
    if (!hero) return undefined

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion) return undefined

    const content = hero.querySelector('.hero-content')
    const mockup = hero.querySelector('.hero-mockup-area')

    let ticking = false

    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const scrollY = window.scrollY
        const heroH = hero.offsetHeight
        // Progress 0..1 as hero scrolls out of view
        const progress = Math.min(scrollY / (heroH * 0.7), 1)

        if (content) {
          const opacity = 1 - progress
          const scale = 1 - progress * 0.06
          const translateY = progress * -30
          content.style.opacity = opacity
          content.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`
        }

        if (mockup) {
          const opacity = 1 - progress * 1.1 // fades slightly faster
          const scale = 1 - progress * 0.08
          const translateY = progress * -20
          mockup.style.opacity = Math.max(opacity, 0)
          mockup.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`
        }

        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
