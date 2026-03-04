import LegalPage from './LegalPage'

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy">
      <p className="legal-updated">Last updated: 2 March 2026</p>

      <p>This Cookie Policy explains how Loomee (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) uses cookies and similar technologies when you use our website and related services (the &ldquo;Service&rdquo;).</p>

      <h2>1. What Are Cookies?</h2>
      <p>Cookies are small text files stored on your device when you visit a website. They help websites work properly, remember your preferences, and provide anonymised analytics.</p>

      <h2>2. Why We Use Cookies</h2>
      <p>We use cookies to:</p>
      <ul>
        <li>keep the Service secure and functioning;</li>
        <li>remember your settings and preferences;</li>
        <li>understand and improve Service performance and user experience.</li>
      </ul>

      <h2>3. Cookies We Use</h2>

      <h3>Strictly Necessary Cookies</h3>
      <p>These cookies are required for core functionality and security. The Service may not work correctly without them.</p>
      <div className="cookie-table">
        <div className="cookie-row cookie-row-header"><span>Name</span><span>Purpose</span><span>Duration</span></div>
        <div className="cookie-row"><span>loomee_session</span><span>Maintains your login session</span><span>Session</span></div>
        <div className="cookie-row"><span>loomee_csrf</span><span>Helps prevent cross-site request forgery attacks</span><span>Session</span></div>
        <div className="cookie-row"><span>loomee_cookie_consent</span><span>Stores your cookie consent preferences</span><span>12 months</span></div>
      </div>

      <h3>Functional Cookies</h3>
      <p>These cookies remember choices you make to personalise your experience.</p>
      <div className="cookie-table">
        <div className="cookie-row cookie-row-header"><span>Name</span><span>Purpose</span><span>Duration</span></div>
        <div className="cookie-row"><span>loomee_prefs</span><span>Stores UI preferences (e.g., language, region)</span><span>6 months</span></div>
        <div className="cookie-row"><span>loomee_fit_cache</span><span>Caches your fit profile for faster loading</span><span>30 days</span></div>
      </div>

      <h3>Analytics Cookies</h3>
      <p>These cookies help us measure usage and improve the Service. We configure analytics to reduce identification risk where possible.</p>
      <div className="cookie-table">
        <div className="cookie-row cookie-row-header"><span>Name</span><span>Purpose</span><span>Duration</span></div>
        <div className="cookie-row"><span>loomee_analytics</span><span>Tracks anonymised page views and feature usage</span><span>12 months</span></div>
        <div className="cookie-row"><span>loomee_perf</span><span>Monitors performance and error rates</span><span>90 days</span></div>
      </div>

      <h2>4. Third-Party Cookies</h2>
      <p>We use Google services for analytics and AI-related processing features. Google may set and access cookies through these services in line with Google&rsquo;s own policies. We do not control third-party cookies directly.</p>
      <p>For more information, see Google Privacy &amp; Terms.</p>

      <h2>5. Your Cookie Choices</h2>
      <p>Where required by law, we request your consent before setting non-essential cookies (such as functional and analytics cookies). You can:</p>
      <ul>
        <li>accept or reject non-essential cookies via our cookie banner/settings (where available);</li>
        <li>change browser settings to block or delete cookies;</li>
        <li>withdraw consent at any time by deleting cookies and revisiting the Service.</li>
      </ul>
      <p>Please note: disabling strictly necessary cookies may impact core Service functionality.</p>

      <h2>6. Browser Controls</h2>
      <p>Most browsers allow you to:</p>
      <ul>
        <li>view stored cookies;</li>
        <li>block all cookies or specific cookies;</li>
        <li>delete cookies on exit or manually.</li>
      </ul>
      <p>Check your browser&rsquo;s help pages for exact steps.</p>

      <h2>7. Changes to This Policy</h2>
      <p>We may update this Cookie Policy from time to time. Any updates will be posted on this page with a revised &ldquo;Last updated&rdquo; date.</p>

      <h2>8. Contact</h2>
      <p>For questions about our use of cookies, contact: <a href="mailto:loomeevto@gmail.com">loomeevto@gmail.com</a></p>
    </LegalPage>
  )
}
