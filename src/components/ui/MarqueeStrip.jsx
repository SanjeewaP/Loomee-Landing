export default function MarqueeStrip() {
  const items = [
    'AI-Powered Analysis', 'Virtual Try-On', 'Smart Sizing', 'Body Scanning',
    'Style Recommendations', 'Confidence Score', 'Real-Time Fit', 'Fashion AI',
    'Personalized Results', 'Clothing Overlay', 'Measurement Mapping', 'Trend Insights',
  ]

  return (
    <div className="marquee-strip" data-scroll-reveal>
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i}><span className="dot" />{item}</span>
        ))}
      </div>
    </div>
  )
}
