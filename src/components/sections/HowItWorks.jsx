import { Upload, Shirt, Wand2 } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: <Upload size={28} />,
      title: 'Upload Your Photo',
      desc: 'Snap a full-body photo or pick one from your camera roll. That is all we need to get started.',
    },
    {
      num: '02',
      icon: <Shirt size={28} />,
      title: 'Pick Something to Wear',
      desc: 'Browse our catalog or drop in any garment image you like. Loomeé reads the style, fit, and sizing on its own.',
    },
    {
      num: '03',
      icon: <Wand2 size={28} />,
      title: 'See Your Results',
      desc: 'Get your size, see the outfit on you, and find out exactly how it fits. All in a few seconds.',
    },
  ]

  return (
    <section className="how-section" id="how-it-works">
      <div className="container">
        <div className="section-header" data-scroll-reveal>
          <div className="section-eyebrow">How It Works</div>
          <h2 className="section-title">Three Steps to Your Perfect Fit</h2>
          <p className="section-subtitle">
            It is quick, and it works. No technical setup, no complicated steps.
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
