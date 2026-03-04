import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { reveal, stagger } from '../../utils/animations'

export default function TechSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const techs = [
    { icon: '🧠', name: 'Google Gemini', desc: 'AI vision & analysis' },
    { icon: '🎨', name: 'Replicate', desc: 'Virtual try-on generation' },
    { icon: '⚡', name: 'Node.js', desc: 'Backend API server' },
    { icon: '🍃', name: 'MongoDB Atlas', desc: 'Cloud database' },
    { icon: '📱', name: 'Flutter', desc: 'Cross-platform mobile' },
    { icon: '☁️', name: 'Cloudinary', desc: 'Image cloud storage' },
    { icon: '🚀', name: 'Render', desc: 'Production hosting' },
    { icon: '🔐', name: 'JWT Auth', desc: 'Secure authentication' },
  ]

  return (
    <section className="tech-section" id="technology" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={reveal}
        >
          <div className="section-eyebrow">Technology</div>
          <h2 className="section-title">Built with Modern Tech</h2>
          <p className="section-subtitle">
            Loomeé combines cutting-edge AI models with robust cloud infrastructure
            to deliver a fast, secure, and reliable experience.
          </p>
        </motion.div>

        <motion.div
          className="tech-grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          {techs.map((tech, i) => (
            <motion.div key={i} className="tech-card" variants={reveal}>
              <div className="tech-card-icon" aria-hidden="true">{tech.icon}</div>
              <h4>{tech.name}</h4>
              <p>{tech.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
