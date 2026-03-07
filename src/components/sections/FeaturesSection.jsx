import { Scan, Ruler, Palette, Eye, Brain, RefreshCw } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: <Scan size={22} />,
      title: 'AI Body Analysis',
      desc: 'Advanced computer vision powered by Google Gemini 2.5 Flash analyzes your body measurements and proportions from uploaded photos.',
    },
    {
      icon: <Ruler size={22} />,
      title: 'Smart Size Recommendations',
      desc: 'Get precise size suggestions by comparing your unique body data against garment dimensions, including fit, stretch, and style.',
    },
    {
      icon: <Palette size={22} />,
      title: 'Style Intelligence',
      desc: 'AI-driven fashion recommendations suggest complementary pieces, colors, and outfit combinations tailored to your preferences.',
    },
    {
      icon: <Eye size={22} />,
      title: 'Virtual Try-On Preview',
      desc: "See how clothing looks on you with AI-generated overlays using Replicate's advanced image generation models.",
    },
    {
      icon: <Brain size={22} />,
      title: 'Confidence Scoring',
      desc: 'Every recommendation comes with a confidence score (85-95%) so you know exactly how reliable the fit analysis is.',
    },
    {
      icon: <RefreshCw size={22} />,
      title: 'Try-On History',
      desc: 'Save and revisit all your virtual try-ons. Compare different outfits and track your style evolution over time.',
    },
  ]

  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header" data-scroll-reveal>
          <div className="section-eyebrow">Features</div>
          <h2 className="section-title">Empower Your Wardrobe with AI</h2>
          <p className="section-subtitle">
            Experience the future of fashion technology with intelligent analysis,
            real-time recommendations, and virtual try-on capabilities.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, i) => (
            <div
              key={i}
              className="feature-card"
              data-scroll-reveal
              style={{ '--reveal-delay': `${i * 70}ms` }}
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
