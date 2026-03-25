import { Scan, Ruler, Palette, Eye, Brain, RefreshCw } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: <Scan size={22} />,
      title: 'Body Analysis',
      desc: 'Upload a full-body photo and Gemini 2.5 Flash reads your measurements automatically. No tape measure needed.',
    },
    {
      icon: <Ruler size={22} />,
      title: 'Size Recommendations',
      desc: 'We match your measurements to the actual garment dimensions, not a generic size chart, so the result is much more reliable.',
    },
    {
      icon: <Palette size={22} />,
      title: 'Style Suggestions',
      desc: 'Get outfit ideas that suit you. Loomeé suggests pieces, colours, and combinations based on what you already like.',
    },
    {
      icon: <Eye size={22} />,
      title: 'Virtual Try-On',
      desc: "See what a garment actually looks like on your body before you commit to buying it.",
    },
    {
      icon: <Brain size={22} />,
      title: 'Confidence Scores',
      desc: 'Every recommendation includes a score so you know how certain the fit analysis is, not just a vague guess.',
    },
    {
      icon: <RefreshCw size={22} />,
      title: 'Try-On History',
      desc: 'Save and revisit your past try-ons. Useful for comparing options or just going back to something you liked.',
    },
  ]

  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header" data-scroll-reveal>
          <div className="section-eyebrow">Features</div>
          <h2 className="section-title">Everything You Need for a Better Fit</h2>
          <p className="section-subtitle">
            Body analysis, size recommendations that actually work, and a virtual
            try-on. All in one app.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, i) => (
            <div
              key={i}
              className="feature-card"
              data-scroll-reveal="blur-up"
              style={{ '--reveal-delay': `${i * 100}ms` }}
            >
              <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
