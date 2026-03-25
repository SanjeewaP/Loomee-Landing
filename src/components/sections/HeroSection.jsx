import { ArrowRight } from 'lucide-react'
import { trackEvent } from '../../utils/analytics'
import CountUp from '../ui/CountUp'
import PhoneMockup from '../ui/PhoneMockup'
import ParticleNetwork from '../ui/ParticleNetwork'

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      <ParticleNetwork particleCount={50} color="#B5673D" />
      <div className="hero-bg-gradient" aria-hidden="true" />
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />
      <div className="hero-orb hero-orb-3" aria-hidden="true" />
      <div className="hero-grid-lines" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" aria-hidden="true" />
          Powered by Gemini and Replicate
        </div>

        <h1>
          Your style,
          <br />
          <span className="highlight gradient-text">perfectly fitted.</span>
        </h1>

        <p className="hero-description">
          Loomeé is your virtual fitting room. Upload a photo, pick something you
          like, and see exactly how it fits before you buy it.
        </p>

        <div className="hero-buttons">
          <a
            href="#cta"
            className="btn-primary btn-large"
            onClick={() => trackEvent('cta_click', { location: 'hero' })}
          >
            Try Loomeé Free <ArrowRight size={18} />
          </a>
          <a href="#how-it-works" className="btn-outline">
            See How It Works
          </a>
        </div>

        <div className="hero-stats" aria-label="Key statistics">
          <div className="hero-stat">
            <div className="stat-value"><CountUp value="95%" /></div>
            <div className="stat-label">AI Confidence</div>
          </div>
          <div className="hero-stat-divider" aria-hidden="true" />
          <div className="hero-stat">
            <div className="stat-value"><CountUp value="<5s" /></div>
            <div className="stat-label">Analysis Time</div>
          </div>
          <div className="hero-stat-divider" aria-hidden="true" />
          <div className="hero-stat">
            <div className="stat-value"><CountUp value="40%" /></div>
            <div className="stat-label">Less Returns</div>
          </div>
        </div>
      </div>

      <div className="hero-mockup-area" aria-hidden="true">
        <div style={{ position: 'relative' }}>
          <PhoneMockup />
          <div className="floating-card fc-left">
            <div className="fc-label">Recommended Size</div>
            <div className="fc-value success">Medium - Perfect Fit ✓</div>
          </div>
          <div className="floating-card fc-right">
            <div className="fc-label">AI Confidence</div>
            <div className="fc-value purple">92% Match</div>
          </div>
          <div className="floating-card fc-bottom-left">
            <div className="fc-label">Style Advice</div>
            <div className="fc-value">&ldquo;Pairs well with denim&rdquo;</div>
          </div>
        </div>
      </div>
    </section>
  )
}
