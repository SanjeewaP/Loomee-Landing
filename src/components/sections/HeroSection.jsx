import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { reveal, stagger, ease } from '../../utils/animations'
import { trackEvent } from '../../utils/analytics'
import CountUp from '../ui/CountUp'
import PhoneMockup from '../ui/PhoneMockup'

export default function HeroSection() {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], [0, 140])
  const gridY = useTransform(scrollY, [0, 600], [0, 80])
  const mockupY = useTransform(scrollY, [0, 600], [0, -36])

  return (
    <section className="hero" id="hero">
      <motion.div className="hero-bg-gradient" style={{ y: bgY }} aria-hidden="true" />
      <motion.div className="hero-grid-lines" style={{ y: gridY }} aria-hidden="true" />

      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div variants={reveal} className="hero-badge">
          <span className="badge-dot" aria-hidden="true" />
          Powered by Gemini and Replicate
        </motion.div>

        <motion.h1 variants={reveal}>
          Your style,
          <br />
          <span className="highlight">perfectly fitted.</span>
        </motion.h1>

        <motion.p variants={reveal} className="hero-description">
          Loomeé is an AI-powered virtual fitting room that lets you try on clothes
          digitally with real-time body analysis, personalized size recommendations,
          and intelligent style insights.
        </motion.p>

        <motion.div variants={reveal} className="hero-buttons">
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
        </motion.div>

        <motion.div variants={reveal} className="hero-stats" aria-label="Key statistics">
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
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-mockup-area"
        style={{ y: mockupY }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.4 }}
        aria-hidden="true"
      >
        <div style={{ position: 'relative' }}>
          <PhoneMockup />
          <motion.div
            className="floating-card fc-left"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="fc-label">Recommended Size</div>
            <div className="fc-value success">Medium — Perfect Fit ✓</div>
          </motion.div>
          <motion.div
            className="floating-card fc-right"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <div className="fc-label">AI Confidence</div>
            <div className="fc-value purple">92% Match</div>
          </motion.div>
          <motion.div
            className="floating-card fc-bottom-left"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <div className="fc-label">Style Advice</div>
            <div className="fc-value">&ldquo;Pairs well with denim&rdquo;</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
