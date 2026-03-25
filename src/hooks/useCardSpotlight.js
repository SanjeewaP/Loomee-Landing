import { useEffect, useRef, useCallback } from 'react'

/**
 * Attaches a cursor-following radial spotlight to every card inside `containerRef`.
 * Cards are identified by the selector passed in (default: '[data-spotlight]').
 * Each card gets CSS custom properties --spot-x and --spot-y set on mousemove,
 * and a data-hovering attribute toggled on enter/leave.
 */
export default function useCardSpotlight(containerRef, selector = '[data-spotlight]') {
  const rafId = useRef(null)

  const onMove = useCallback((e) => {
    const card = e.currentTarget
    if (rafId.current) cancelAnimationFrame(rafId.current)
    rafId.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
      card.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
    })
  }, [])

  const onEnter = useCallback((e) => {
    e.currentTarget.setAttribute('data-hovering', '')
  }, [])

  const onLeave = useCallback((e) => {
    e.currentTarget.removeAttribute('data-hovering')
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const cards = container.querySelectorAll(selector)
    cards.forEach((card) => {
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseenter', onEnter)
      card.addEventListener('mouseleave', onLeave)
    })

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', onMove)
        card.removeEventListener('mouseenter', onEnter)
        card.removeEventListener('mouseleave', onLeave)
      })
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [containerRef, selector, onMove, onEnter, onLeave])
}
