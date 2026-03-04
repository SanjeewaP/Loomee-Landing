import useNavigate from '../../hooks/useNavigate'

/**
 * NavLink — renders a real <a> element (good for SEO & right-click) that also
 * performs SPA client-side navigation so the page never fully reloads.
 */
export default function NavLink({ href, children, className, onClick, style }) {
  const navigate = useNavigate()
  const handleClick = (e) => {
    // Let modifier-key clicks (new tab, etc.) fall through
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    if (href.startsWith('http') || href.startsWith('mailto:')) return
    e.preventDefault()
    onClick?.()
    navigate(href)
  }
  return (
    <a href={href} className={className} style={style} onClick={handleClick}>
      {children}
    </a>
  )
}
