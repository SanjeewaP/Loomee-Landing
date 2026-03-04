import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import NavLink from '../ui/NavLink'
import { trackEvent } from '../../utils/analytics'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = 'mobile-nav-menu'
  const menuBtnRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Escape key closes the mobile menu and returns focus to the trigger button
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        menuBtnRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Technology', href: '#technology' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        aria-label="Main navigation"
      >
        <div className="navbar-inner">
          <NavLink href="/" className="navbar-logo">
            <img src="/Logo.png" alt="Loomeé logo" className="logo-icon" />
            Loomeé VTO
          </NavLink>

          <div className="navbar-links">
            {links.map(link => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </div>

          <div className="navbar-actions">
            <a href="#demo" className="btn-ghost">See Demo</a>
            <a
              href="#cta"
              className="btn-primary"
              onClick={() => trackEvent('cta_click', { location: 'navbar' })}
            >
              Get Started <ArrowRight size={16} />
            </a>
            <button
              ref={menuBtnRef}
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls={menuId}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id={menuId}
            className="mobile-menu-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="mobile-close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.15 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#cta"
              className="btn-primary btn-large"
              onClick={() => {
                setMenuOpen(false)
                trackEvent('cta_click', { location: 'mobile_menu' })
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Get Started <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
