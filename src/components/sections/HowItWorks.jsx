import { Upload, Shirt, Wand2 } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: <Upload size={28} />,
      title: 'Upload Your Photo',
      desc: 'Take or upload a full-body photo. Loomeé securely processes your image to understand your body proportions and measurements.',
    },
    {
      num: '02',
      icon: <Shirt size={28} />,
      title: 'Browse & Select Clothing',
      desc: "Explore our clothing catalog or upload any garment image. Our AI instantly analyzes the clothing's style, color, fabric, and sizing.",
    },
    {
      num: '03',
      icon: <Wand2 size={28} />,
      title: 'Get AI-Powered Results',
      desc: 'Receive instant fit analysis, size recommendations with confidence scores, virtual try-on previews, and personalized style advice.',
    },
  ]

  return (
    <section className="how-section" id="how-it-works">
      <div className="container">
        <div className="section-header" data-scroll-reveal>
          <div className="section-eyebrow">How It Works</div>
          <h2 className="section-title">Three Steps to Your Perfect Fit</h2>
          <p className="section-subtitle">
            A simple, intuitive workflow powered by advanced AI and clean design.
          </p>
        </div>

        <ol className="how-steps">
          {steps.map((step, i) => (
            <li
              key={i}
              className="how-step"
              data-scroll-reveal
              style={{ '--reveal-delay': `${i * 70}ms` }}
            >
              <div className="how-step-number" aria-hidden="true">{step.num}</div>
              <div className="how-step-icon" aria-hidden="true">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
