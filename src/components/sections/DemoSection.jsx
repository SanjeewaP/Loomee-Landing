import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { reveal, stagger } from '../../utils/animations'
import { trackEvent } from '../../utils/analytics'
import PhoneMockup from '../ui/PhoneMockup'

export default function DemoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    'Real-time AI clothing analysis with Gemini 2.5 Flash',
    'Personalized size recommendations with 85–95% accuracy',
    'Virtual try-on image generation via Replicate API',
    'Complete outfit and style recommendations',
    'Secure cloud storage for your body data',
  ]

  return (
    <section className="demo-section" id="demo" ref={ref}>
      <div className="container">
        <motion.div
          className="demo-container"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.div className="demo-content" variants={reveal}>
            <div className="section-eyebrow">Live Demo</div>
            <h2>See Loomeé in Action</h2>
            <p>
             Upload a photo, pick a garment, and watch our AI deliver instant fit analysis, smart size suggestions, and a virtual try-on preview, all in under five seconds.
            </p>

            <ul className="demo-features-list">
              {features.map((f, i) => (
                <li key={i} className="demo-feature-item">
                  <div className="check-icon" aria-hidden="true"><CheckCircle2 size={14} /></div>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#cta"
              className="btn-primary btn-large"
              onClick={() => trackEvent('cta_click', { location: 'demo' })}
            >
              Try It Now <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div className="demo-visual" variants={reveal} aria-hidden="true">
            <PhoneMockup />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
