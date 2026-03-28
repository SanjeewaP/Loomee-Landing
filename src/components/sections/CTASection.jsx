import WaitlistForm from './WaitlistForm'

export default function CTASection() {
  return (
    <section className="cta-section" id="cta">
      <div className="container">
        <div className="cta-container">
          <h2>Ready to find your perfect fit?</h2>
          <p>
            Stop guessing your size. Join Loomeé and shop knowing exactly what
            will fit before you check out.
          </p>
          <WaitlistForm />
          <a href="#features" className="btn-glass cta-explore-btn">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  )
}
