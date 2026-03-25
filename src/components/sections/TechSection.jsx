import {
  BrainCircuit,
  Palette,
  Zap,
  Leaf,
  Smartphone,
  Cloud,
  Rocket,
  Lock,
} from 'lucide-react'

export default function TechSection() {
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
    <section className="tech-section" id="technology">
      <div className="container">
        <div className="section-header" data-scroll-reveal>
          <div className="section-eyebrow">Technology</div>
          <h2 className="section-title">Built on Tools We Trust</h2>
          <p className="section-subtitle">
            Fast AI, solid cloud infrastructure, and security that does not cut
            corners. Here is what powers Loomeé.
          </p>
        </div>

        <div className="tech-grid">
          {techs.map((tech, i) => (
            <div
              key={i}
              className="tech-card"
              data-scroll-reveal="blur-up"
              style={{ '--reveal-delay': `${i * 80}ms` }}
            >
              <div className="tech-card-icon" aria-hidden="true">{tech.icon}</div>
              <h4>{tech.name}</h4>
              <p>{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
