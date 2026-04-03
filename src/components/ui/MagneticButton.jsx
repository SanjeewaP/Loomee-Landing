import { useRef, useCallback, useEffect } from 'react'

/**
 * Wrapper that makes its single child element gently pull toward the cursor
 * when hovered, and spring back when the cursor leaves.
 *
 * Props:
 *   children  — single React element (the button / link)
 *   strength  — pull factor 0–1 (default 0.35)
 *   className — extra classes on the wrapper div
 */
export default function MagneticButton({ children, strength = 0.35, className = '' }) {
  const wrapperRef = useRef(null)
  const rafId = useRef(null)
  const reducedMotion = useRef(false)

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const onMouseMove = useCallback(
    (e) => {
      if (reducedMotion.current) return
      const el = wrapperRef.current
      if (!el) return

      if (rafId.current) cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const dx = (e.clientX - (rect.left + rect.width / 2)) * strength
        const dy = (e.clientY - (rect.top + rect.height / 2)) * strength
        el.style.transform = `translate(${dx}px, ${dy}px)`
      })
    },
    [strength]
  )

  const onMouseLeave = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current)
    if (wrapperRef.current) {
      wrapperRef.current.style.transform = ''
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className={`magnetic-btn-wrapper ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  )
}
