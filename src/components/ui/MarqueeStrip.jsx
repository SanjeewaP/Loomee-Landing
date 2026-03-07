export default function MarqueeStrip() {
  const items = [
    'AI-Powered Analysis', 'Virtual Try-On', 'Smart Sizing', 'Body Scanning',
    'Style Recommendations', 'Confidence Score', 'Real-Time Fit', 'Fashion AI',
    'Personalized Results', 'Clothing Overlay', 'Measurement Mapping', 'Trend Insights',
  ]

  return (
    <div className="marquee-strip" data-scroll-reveal aria-label="Feature highlights">
      <div className="marquee-track" aria-hidden="true">
        {[...items, ...items].map((item, i) => (
          <span key={i}><span className="dot" aria-hidden="true" />{item}</span>
        ))}
      </div>
    </div>
  )
}
