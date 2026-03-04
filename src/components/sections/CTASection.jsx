import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { revealSoft } from '../../utils/animations'
import WaitlistForm from './WaitlistForm'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="cta-section" id="cta" ref={ref}>
      <div className="container">
        <motion.div
          className="cta-container"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={revealSoft}
        >
          <h2>Ready to find your perfect fit?</h2>
          <p>
            Join Loomeé and shop online with confidence. No more wrong sizes,
            no more returns — just clothes that fit you.
          </p>
          <WaitlistForm />
          <a href="#features" className="btn-glass cta-explore-btn">
            Explore Features
          </a>
        </motion.div>
      </div>
    </section>
  )
}
