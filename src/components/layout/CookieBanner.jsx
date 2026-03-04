import { useState, useEffect } from 'react'
import NavLink from '../ui/NavLink'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('loomee_cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('loomee_cookie_consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('loomee_cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="region" aria-label="Cookie consent">
      <div className="cookie-banner-content">
        <div className="cookie-banner-text">
          <strong>We use cookies 🍪</strong>
          <p>
            We use essential, functional, and analytics cookies to improve your experience
            and understand how Loomeé VTO is used. See our{' '}
            <NavLink href="/cookies">Cookie Policy</NavLink> for details.
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button className="cookie-btn cookie-btn-decline" onClick={decline}>Decline</button>
          <button className="cookie-btn cookie-btn-accept" onClick={accept}>Accept All</button>
        </div>
      </div>
    </div>
  )
}
