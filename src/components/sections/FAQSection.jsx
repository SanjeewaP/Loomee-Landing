import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Plus } from 'lucide-react'
import { reveal, staggerMed, ease } from '../../utils/animations'

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: 'How does Loomeé analyze my body measurements?',
      a: 'Loomeé uses Google Gemini 2.5 Flash, an advanced AI vision model, to analyze your uploaded body photos. The AI detects key body points and calculates proportions including chest, waist, hips, and height measurements with high accuracy.',
    },
    {
      q: 'Is my personal data and body photos safe?',
      a: 'Absolutely. Your images are stored securely on Cloudinary with encrypted URLs. Authentication uses JWT tokens, and our MongoDB Atlas database employs industry-standard encryption. We never sell or share your personal data.',
    },
    {
      q: 'How accurate are the size recommendations?',
      a: 'Our AI delivers recommendations with confidence scores ranging from 85% to 95%. The system compares your unique measurements against specific garment sizing data — not generic size charts — for the most accurate fit prediction possible.',
    },
    {
      q: 'What is the virtual try-on feature?',
      a: 'The virtual try-on uses Replicate API to generate AI-powered images showing how clothing items would look on your body. Combined with our body analysis, you get a realistic preview of fit and style before making a purchase.',
    },
    {
      q: 'Does Loomeé work with any clothing brand?',
      a: "Yes! You can browse our built-in catalog or upload any clothing image. Our AI analyzes the garment's visual properties — color, style, fabric type — and provides recommendations regardless of the brand.",
    },
    {
      q: 'What platforms is Loomeé available on?',
      a: 'Loomeé is built as a cross-platform Flutter mobile app available on both iOS and Android. The backend API is cloud-hosted on Render with 99.9% uptime, ensuring a seamless experience on any device.',
    },
  ]

  return (
    <section className="faq-section" id="faq" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={reveal}
        >
          <div className="section-eyebrow">FAQ</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about Loomeé and how it works.
          </p>
        </motion.div>

        <motion.div
          className="faq-list"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerMed}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            const headingId = `faq-heading-${i}`
            const panelId = `faq-panel-${i}`

            return (
              <motion.div
                key={i}
                className={`faq-item ${isOpen ? 'open' : ''}`}
                variants={reveal}
              >
                <button
                  id={headingId}
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  {faq.q}
                  <span className="faq-icon" aria-hidden="true"><Plus size={18} /></span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      className="faq-answer"
                      role="region"
                      aria-labelledby={headingId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
