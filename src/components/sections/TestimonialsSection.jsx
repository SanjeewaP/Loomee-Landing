import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'
import { reveal, staggerMed } from '../../utils/animations'

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
      text: "\"As someone who struggles with inconsistent sizing across brands, Loomeé's per-garment analysis is a game-changer. Love the confidence scores.\"",
      name: 'Priya M.',
      role: 'Style Blogger',
      initials: 'PM',
    },
  ]

  return (
    <section className="testimonials-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={reveal}
        >
          <div className="section-eyebrow">Testimonials</div>
          <h2 className="section-title">What People Are Saying</h2>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerMed}
        >
          {testimonials.map((t, i) => (
            <motion.article key={i} className="testimonial-card" variants={reveal}>
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
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
