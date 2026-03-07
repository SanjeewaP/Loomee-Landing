import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function FAQSection() {
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
      a: 'Our AI delivers recommendations with confidence scores ranging from 85% to 95%. The system compares your unique measurements against specific garment sizing data not generic size charts for the most accurate fit prediction possible.',
    },
    {
      q: 'What is the virtual try-on feature?',
      a: 'The virtual try-on uses Replicate API to generate AI-powered images showing how clothing items would look on your body. Combined with our body analysis, you get a realistic preview of fit and style before making a purchase.',
    },
    {
      q: 'Does Loomeé work with any clothing brand?',
      a: "Yes! You can explore our built-in catalog or upload any clothing image. Our AI examines key visual details like color, style, and fabric type to generate recommendations, no matter the brand.",
    },
    {
      q: 'What platforms is Loomeé available on?',
      a: 'Loomeé is built as a cross-platform Flutter mobile app available on both iOS and Android. The backend API is cloud-hosted on Render with 99.9% uptime, ensuring a seamless experience on any device.',
    },
  ]

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header" data-scroll-reveal>
          <div className="section-eyebrow">FAQ</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about Loomeé and how it works.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            const headingId = `faq-heading-${i}`
            const panelId = `faq-panel-${i}`

            return (
              <div
                key={i}
                className={`faq-item ${isOpen ? 'open' : ''}`}
                data-scroll-reveal
                style={{ '--reveal-delay': `${i * 50}ms` }}
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
                {isOpen && (
                  <div
                    id={panelId}
                    className="faq-answer"
                    role="region"
                    aria-labelledby={headingId}
                  >
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
