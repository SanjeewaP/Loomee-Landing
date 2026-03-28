import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: 'How does Loomeé read my measurements?',
      a: 'It uses Google Gemini 2.5 Flash to analyse your photo. The model picks out key reference points on your body and works out your proportions, including chest, waist, hips, and height, from a single image.',
    },
    {
      q: 'Are my photos and personal data safe?',
      a: 'Yes. Photos are stored on Cloudinary with encrypted URLs, and all account data sits in an encrypted MongoDB Atlas database. We use JWT authentication and we do not sell or share anything. Ever.',
    },
    {
      q: 'How accurate are the size recommendations?',
      a: 'Each recommendation comes with a confidence score between 85% and 95%. We compare your measurements to the actual garment dimensions, not a generic size chart, so the results are a lot more reliable than most.',
    },
    {
      q: 'What is the virtual try-on?',
      a: 'It generates an image of the garment on your body using Replicate. Combined with the fit analysis, you get a realistic sense of how something will look and fit before you decide to buy it.',
    },
    {
      q: 'Does it work with any brand?',
      a: "Yes. Browse our catalog or upload a photo of any garment from any brand. Loomeé reads the colour, cut, fabric, and style to give you a recommendation.",
    },
    {
      q: 'What platforms is Loomeé on?',
      a: 'It is a Flutter app, so it runs on both iOS and Android. The backend is hosted on Render and stays up reliably, so you can use it whenever you need it.',
    },
  ]

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">FAQ</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Got a question? Here are the ones we hear most often.
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
                className="faq-item"
                data-open={isOpen || undefined}
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
