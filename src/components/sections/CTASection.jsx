import WaitlistForm from './WaitlistForm'

export default function CTASection() {
  return (
    <section className="cta-section" id="cta">
      <div className="container">
        <div className="cta-container" data-scroll-reveal>
          <h2>Ready to find your perfect fit?</h2>
          <p>
            Join Loomeé and shop online with confidence. No more wrong sizes,
            no more returns, just clothes that fit you.
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
