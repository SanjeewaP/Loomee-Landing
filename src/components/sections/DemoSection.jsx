import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { trackEvent } from '../../utils/analytics'
import PhoneMockup from '../ui/PhoneMockup'

export default function DemoSection() {
  const features = [
    'Real-time AI clothing analysis with Gemini 2.5 Flash',
    'Personalized size recommendations with 85-95% accuracy',
    'Virtual try-on image generation via Replicate API',
    'Complete outfit and style recommendations',
    'Secure cloud storage for your body data',
  ]

  return (
    <section className="demo-section" id="demo">
      <div className="container">
        <div className="demo-container" data-scroll-reveal>
          <div className="demo-content">
            <div className="section-eyebrow">Live Demo</div>
            <h2>See Loomeé in Action</h2>
            <p>
              Upload a photo, pick a garment, and watch our AI deliver instant fit
              analysis, smart size suggestions, and a virtual try-on preview, all
              in under five seconds.
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
          </div>

          <div className="demo-visual" aria-hidden="true">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
