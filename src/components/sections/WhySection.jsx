import { useRef } from 'react'
import useCardSpotlight from '../../hooks/useCardSpotlight'

export default function WhySection() {
  const gridRef = useRef(null)
  useCardSpotlight(gridRef)
  const reasons = [
    {
      title: 'No More Wrong Sizes',
      desc: 'We match your measurements to the actual garment, not a size guide. No more ordering two sizes just in case.',
    },
    {
      title: 'Your Photos Stay Private',
      desc: 'Images are stored with encryption and never shared or sold. We only use them to give you a fit result.',
    },
    {
      title: 'Real Results, Not Estimates',
      desc: 'Google Gemini 2.5 Flash gives each recommendation a real confidence score between 85% and 95%. Not a guess.',
    },
    {
      title: 'Works for Everyone',
      desc: "Casual shopper or total fashion nerd, Loomeé works the same way. Just show it what you want to wear.",
    },
  ]

  return (
    <section className="why-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Why Loomeé</div>
          <h2 className="section-title">Why Choose Loomeé?</h2>
          <p className="section-subtitle">
            Accurate, private, and actually useful. Here is what sets Loomeé apart.
          </p>
        </div>

        <div className="why-grid" ref={gridRef}>
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="why-card"
              data-spotlight
              style={{ '--reveal-delay': `${i * 120}ms` }}
            >
              <div className="why-card-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
