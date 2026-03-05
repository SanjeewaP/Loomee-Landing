import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { reveal, stagger } from '../../utils/animations'

export default function WhySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const reasons = [
    {
      title: 'No More Wrong Sizes',
      desc: 'Our AI compares your exact measurements against garment sizing data, eliminating the guesswork from online shopping.',
    },
    {
      title: 'Privacy-First Design',
      desc: 'Your body photos are processed securely via Cloudinary with encrypted storage. We never sell or share your personal data.',
    },
    {
      title: 'Real AI, Real Results',
      desc: 'Powered by Google Gemini 2.5 Flash with 85–95% confidence scores, not generic sizing charts or rough estimates.',
    },
    {
      title: 'Built for Everyone',
      desc: "Whether you're a student shopping online or a fashion enthusiast exploring styles, Loomeé adapts to your needs.",
    },
  ]

  return (
    <section className="why-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={reveal}
        >
          <div className="section-eyebrow">Why Loomeé</div>
          <h2 className="section-title">Why Choose Loomeé?</h2>
          <p className="section-subtitle">
            A virtual fitting platform built to be accurate, private, and genuinely useful.
          </p>
        </motion.div>

        <motion.div
          className="why-grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          {reasons.map((reason, i) => (
            <motion.div key={i} className="why-card" variants={reveal}>
              <div className="why-card-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
