import { Camera, Sparkles, Shirt, Heart, TrendingUp } from 'lucide-react'

export default function PhoneMockup() {
  return (
    <div className="phone-mockup">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="phone-screen-content">
          <div className="phone-screen-header">
            <h3>Loomeé</h3>
            <p>Virtual Try-On</p>
          </div>
          <div className="phone-outfit-preview">
            <svg
              className="phone-outfit-silhouette"
              width="73"
              height="163"
              viewBox="0 0 73 163"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <svg width="73" height="163" viewBox="0 0 73 163" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="37" cy="15" r="15" fill="#E0956C"/>
                <rect x="23" y="30" width="28" height="72" rx="4" fill="#E0956C"/>
                <rect x="47" y="31.67" width="15.4301" height="61.2903" rx="7.71504" transform="rotate(-9.96477 47 31.67)" fill="#E0956C"/>
                <rect x="12.2998" y="29" width="15.4301" height="61.2903" rx="7.71504" transform="rotate(11.5768 12.2998 29)" fill="#E0956C"/>
                <rect x="22.9957" y="91" width="15.4301" height="70.9876" rx="7.71504" transform="rotate(3.22672 22.9957 91)" fill="#E0956C"/>
                <rect x="35" y="91.8191" width="15.4301" height="70.9876" rx="7.71504" transform="rotate(-6.77038 35 91.8191)" fill="#E0956C"/>
                <rect x="11" y="30" width="52" height="14" rx="7" fill="#E0956C"/>
              </svg>
            </svg>
            <div className="phone-scan-line" />
            <div className="phone-ai-badge">
              <Sparkles size={10} style={{ marginRight: 4 }} />
              AI Analyzing Fit...
            </div>
          </div>
          <div className="phone-bottom-bar">
            <span><Camera size={14} color="var(--terracotta-400)" /></span>
            <span><Shirt size={14} color="var(--text-muted)" /></span>
            <span><Heart size={14} color="var(--text-muted)" /></span>
            <span><TrendingUp size={14} color="var(--text-muted)" /></span>
          </div>
        </div>
      </div>
    </div>
  )
}
