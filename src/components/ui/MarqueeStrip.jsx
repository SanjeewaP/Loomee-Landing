export default function MarqueeStrip() {
  const items = [
    'AI-Powered Analysis', 'Virtual Try-On', 'Smart Sizing', 'Body Scanning',
    'Style Recommendations', 'Confidence Score', 'Real-Time Fit', 'Fashion AI',
    'Personalized Results', 'Clothing Overlay', 'Measurement Mapping', 'Trend Insights',
  ]
  const doubled = [...items, ...items]

  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}><span className="dot" />{item}</span>
        ))}
      </div>
    </div>
  )
}
