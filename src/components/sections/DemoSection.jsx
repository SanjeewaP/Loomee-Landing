import { Play, CheckCircle2 } from 'lucide-react'
import { trackEvent } from '../../utils/analytics'

export default function DemoSection() {
  const features = [
    'Full body analysis from a single photo',
    'Accurate size recommendations with confidence scores',
    'Virtual try-on preview before you buy',
    'Personalised style and outfit suggestions',
  ]

  return (
    <section className="demo-section" id="demo">
      <div className="container">
        <div className="demo-container">
          <div className="demo-content" data-scroll-reveal="blur-up">
            <div className="section-eyebrow">Live Demo</div>
            <h2>Watch Loomeé in Action</h2>
            <p>
              See exactly how Loomeé works — from uploading a photo to getting
              your size, fit report, and virtual try-on. All in under a minute.
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
              href="https://youtu.be/pjU_Xq-G6bU?si=tN2zmgS7_zat8k7m"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-large"
              onClick={() => trackEvent('demo_video_click', { location: 'demo' })}
            >
              Watch the Demo <Play size={18} />
            </a>
          </div>

          <div className="demo-visual" data-scroll-reveal="blur-up" style={{ '--reveal-delay': '150ms' }}>
            <a
              href="https://youtu.be/pjU_Xq-G6bU?si=tN2zmgS7_zat8k7m"
              target="_blank"
              rel="noopener noreferrer"
              className="demo-video-thumb"
              aria-label="Watch Loomeé demo on YouTube"
              onClick={() => trackEvent('demo_video_click', { location: 'demo_thumbnail' })}
            >
              <img
                src={`https://img.youtube.com/vi/pjU_Xq-G6bU/maxresdefault.jpg`}
                alt="Loomeé demo video thumbnail"
                className="demo-thumb-img"
              />
              <div className="demo-play-overlay" aria-hidden="true">
                <Play size={40} fill="white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
