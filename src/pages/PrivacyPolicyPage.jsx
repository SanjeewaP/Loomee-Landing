import LegalPage from './LegalPage'

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p className="legal-updated">Last updated: 1 March 2026</p>

      <h2>1. Introduction</h2>
      <p>Loomeé VTO (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect data when you use our AI-powered virtual fitting room service available at loomeé.com and via our mobile application.</p>

      <h2>2. Information We Collect</h2>
      <p><strong>Account Information:</strong> When you register, we collect your name, email address, and password (stored in encrypted form).</p>

      <p><strong>Body Photos &amp; Measurements:</strong> To provide virtual try-on and size recommendations, we process photos you upload. These images are temporarily transmitted to Google Gemini AI for body analysis. We do not store raw photos permanently. All uploaded images are deleted from our servers within 24 hours of processing.</p>

      <p><strong>Usage Data:</strong> We collect anonymised data about how you interact with the app, including features used, session duration, and device type, to improve our service.</p>

      <p><strong>Communications:</strong> If you contact us by email, we retain those communications to respond to your enquiry.</p>

      <h2>3. How We Use Your Information</h2>
      <p>We use your data to provide personalised size recommendations and virtual try-on functionality; to improve and develop the Loomeé VTO service; to communicate service updates or respond to support requests; and to comply with legal obligations. We do not sell your personal data to third parties.</p>

      <h2>4. Third-Party Services</h2>
      <p><strong>Google Gemini AI:</strong> Body photos are processed via the Google Gemini API for real-time body analysis. Google&rsquo;s processing is governed by Google&rsquo;s Privacy Policy.</p>

      <p><strong>Render:</strong> Our backend infrastructure is hosted on Render. Data in transit is encrypted via TLS.</p>

      <p><strong>Analytics:</strong> We use anonymised analytics tools to understand aggregate usage patterns. No personally identifiable information is shared with analytics providers.</p>

      <h2>5. Data Retention</h2>
      <p>Account data is retained for as long as your account is active. Body photos are deleted within 24 hours of processing. Anonymised usage analytics are retained for up to 24 months. You may request deletion of your account and associated data at any time.</p>

      <h2>6. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data; withdraw consent at any time; and lodge a complaint with a data protection authority. To exercise any of these rights, contact us at loomeevto@gmail.com.</p>

      <h2>7. Security</h2>
      <p>We implement industry-standard security measures including TLS encryption, access controls, and regular security reviews. However, no method of transmission over the internet is 100% secure.</p>

      <h2>8. Children&rsquo;s Privacy</h2>
      <p>Loomeé VTO is not directed at children under the age of 13. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us immediately.</p>

      <h2>9. Changes to This Policy</h2>
      <p>We may update this Privacy Policy periodically. We will notify registered users of material changes by email. Continued use of the service after changes constitutes acceptance of the updated policy.</p>

      <h2>10. Contact</h2>
      <p>For any privacy-related enquiries, contact us at <a href="mailto:loomeevto@gmail.com">loomeevto@gmail.com</a>.</p>
    </LegalPage>
  )
}
