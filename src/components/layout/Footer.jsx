import { Github, Instagram, Mail } from 'lucide-react'
import NavLink from '../ui/NavLink'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <NavLink href="/" className="navbar-logo">
              <img src="/Logo.png" alt="Loomeé logo" className="logo-icon" />
              Loomeé VTO
            </NavLink>
            <p>
              AI-powered virtual fitting room that helps you shop online with
              confidence. Built with Google Gemini, Flutter, and love.
            </p>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <NavLink href="/#features">Features</NavLink>
            <NavLink href="/#how-it-works">How It Works</NavLink>
            <NavLink href="/#technology">Technology</NavLink>
            <NavLink href="/#demo">Live Demo</NavLink>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <NavLink href="/#faq">FAQ</NavLink>
            {/* API Docs not yet available — link removed to avoid dead URLs */}
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <NavLink href="/privacy">Privacy Policy</NavLink>
            <NavLink href="/terms">Terms of Service</NavLink>
            <NavLink href="/cookies">Cookie Policy</NavLink>
            <a href="mailto:loomeevto@gmail.com">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Loomeé. All rights reserved CS-123.</p>
          <div className="footer-socials">
            <a href="https://github.com/ShaneRowell/LoomeeApp" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/company/loomeevto/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/loomeevto/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="mailto:loomeevto@gmail.com" className="footer-social-link" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
