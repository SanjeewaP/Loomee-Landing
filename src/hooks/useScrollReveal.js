import { useEffect } from 'react'

const REVEAL_SELECTOR = '[data-scroll-reveal]'

export default function useScrollReveal(triggerKey) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(REVEAL_SELECTOR))
    if (nodes.length === 0) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    nodes.forEach((node) => {
      node.classList.remove('is-visible')
      observer.observe(node)
    })

    return () => observer.disconnect()
  }, [triggerKey])
}
