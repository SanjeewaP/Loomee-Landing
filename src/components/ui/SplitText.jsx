import { useEffect, useRef, useState } from 'react'

/**
 * Splits `children` (string) into words and reveals them one-by-one
 * with a staggered translateY + opacity transition.
 *
 * Props:
 *   children   — string text to split
 *   delay      — ms before the first word starts (default 300)
 *   wordDelay  — ms added per word for stagger (default 70)
 *   className  — optional class on the outer <span>
 */
export default function SplitText({
  children,
  delay = 300,
  wordDelay = 70,
  className = '',
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Skip animation for users who prefer reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const words = String(children).split(' ')

  return (
    <span
      ref={ref}
      className={className}
      aria-label={children}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="split-word"
          aria-hidden="true"
          style={{
            '--word-delay': `${delay + i * wordDelay}ms`,
            '--word-visible': visible ? 1 : 0,
          }}
        >
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  )
}
