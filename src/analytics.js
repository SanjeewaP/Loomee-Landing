/**
 * Lightweight analytics helper.
 * Safely calls window.gtag (Google Analytics) or window.analytics (Segment-style)
 * if present. Never throws — the app must not crash if no provider is configured.
 *
 * Usage:
 *   import { trackEvent } from './analytics'
 *   trackEvent('cta_click', { location: 'hero' })
 */
export function trackEvent(name, props = {}) {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, props)
    } else if (typeof window.analytics?.track === 'function') {
      window.analytics.track(name, props)
    }
    // Debug output in development
    if (import.meta.env.DEV) {
      console.debug('[analytics]', name, props)
    }
  } catch {
    // Intentionally silent — analytics must never crash the app
  }
}
