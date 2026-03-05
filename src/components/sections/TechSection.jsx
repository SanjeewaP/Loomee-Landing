import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { reveal, stagger } from '../../utils/animations'
import {
  BrainCircuit,
  Palette,
  Zap,
  Leaf,
  Smartphone,
  Cloud,
  Rocket,
  Lock
} from "lucide-react"

export default function TechSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const techs = [
  { icon: <BrainCircuit size={22} />, name: 'Google Gemini', desc: 'AI vision & analysis' },
  { icon: <Palette size={22} />, name: 'Replicate', desc: 'Virtual try-on generation' },
  { icon: <Zap size={22} />, name: 'Node.js', desc: 'Backend API server' },
  { icon: <Leaf size={22} />, name: 'MongoDB Atlas', desc: 'Cloud database' },
  { icon: <Smartphone size={22} />, name: 'Flutter', desc: 'Cross-platform mobile' },
  { icon: <Cloud size={22} />, name: 'Cloudinary', desc: 'Image cloud storage' },
  { icon: <Rocket size={22} />, name: 'Render', desc: 'Production hosting' },
  { icon: <Lock size={22} />, name: 'JWT Auth', desc: 'Secure authentication' },
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
