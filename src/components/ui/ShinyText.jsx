/**
 * Wraps `children` in a span that shows a sliding shimmer highlight.
 * Inherits the current text colour from the parent for the shimmer base.
 *
 * Props:
 *   children  — text content
 *   className — extra classes
 *   speed     — animation duration in seconds (default 3)
 */
export default function ShinyText({ children, className = '', speed = 3 }) {
  return (
    <span
      className={`shiny-text ${className}`}
      style={{ '--shiny-duration': `${speed}s` }}
    >
      {children}
    </span>
  )
}
