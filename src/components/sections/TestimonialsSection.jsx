import { useRef } from 'react'
import { Star } from 'lucide-react'
import useCardSpotlight from '../../hooks/useCardSpotlight'

export default function TestimonialsSection() {
  const gridRef = useRef(null)
  useCardSpotlight(gridRef)
  const testimonials = [
    {
      text: '"Loomeé completely changed how I shop online. I used to return half my orders. Now I know exactly what size to pick before I buy."',
      name: 'Sarah K.',
      role: 'Fashion Enthusiast',
      initials: 'SK',
    },
    {
      text: '"The AI analysis is surprisingly accurate. It flagged that a jacket would be tight at the shoulders, and it was right. Saved me a return."',
      name: 'Marcus D.',
      role: 'Online Shopper',
      initials: 'MD',
    },
    {
      text: '"As someone who struggles with inconsistent sizing across brands, Loomeé\'s per-garment analysis is a game-changer. Love the confidence scores."',
      name: 'Priya M.',
      role: 'Style Blogger',
      initials: 'PM',
    },
  ]

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header" data-scroll-reveal>
          <div className="section-eyebrow">Testimonials</div>
          <h2 className="section-title">What People Are Saying</h2>
        </div>

        <div className="testimonials-grid" ref={gridRef}>
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="testimonial-card"
              data-spotlight
              data-scroll-reveal="scale-rotate"
              style={{ '--reveal-delay': `${i * 120}ms` }}
            >
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="star" size={16} fill="#C4963A" aria-hidden="true" />
                ))}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" aria-hidden="true">{t.initials}</div>
                <div className="testimonial-info">
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
