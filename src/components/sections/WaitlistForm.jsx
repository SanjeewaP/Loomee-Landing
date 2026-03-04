import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { trackEvent } from '../../utils/analytics'

export default function WaitlistForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  const validate = () => {
    if (!name.trim()) return 'Please enter your name.'
    if (!email.trim()) return 'Please enter your email address.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address.'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    const err = validate()
    if (err) {
      setStatus('error')
      setErrorMsg(err)
      return
    }

    setStatus('loading')
    const endpoint = import.meta.env.VITE_WAITLIST_ENDPOINT

    if (!endpoint) {
      // Local fallback in development only, to avoid silent production failures.
      if (!import.meta.env.DEV) {
        setStatus('error')
        setErrorMsg('Waitlist is temporarily unavailable. Please try again shortly.')
        trackEvent('waitlist_submit_error', { source: 'missing_endpoint' })
        return
      }

      try {
        const existing = JSON.parse(localStorage.getItem('loomee_waitlist') || '[]')
        existing.push({ name: name.trim(), email: email.trim(), date: new Date().toISOString() })
        localStorage.setItem('loomee_waitlist', JSON.stringify(existing))
        setStatus('success')
        trackEvent('waitlist_submit_success', { source: 'localStorage' })
      } catch {
        setStatus('error')
        setErrorMsg('Unable to save. Please try again.')
        trackEvent('waitlist_submit_error', { source: 'localStorage' })
      }
      return
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          source: 'loomee-website',
          page: typeof window !== 'undefined' ? window.location.href : '',
          submittedAt: new Date().toISOString(),
        }),
      })

      let payload = null
      try {
        payload = await res.json()
      } catch {
        payload = null
      }

      if (!res.ok || payload?.ok === false) {
        throw new Error(payload?.error || 'Server error')
      }

      setStatus('success')
      trackEvent('waitlist_submit_success', { source: 'endpoint' })
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
      trackEvent('waitlist_submit_error', { source: 'endpoint' })
    }
  }

  if (status === 'success') {
    return (
      <div className="waitlist-success" role="status" aria-live="polite">
        <CheckCircle2 size={36} aria-hidden="true" />
        <h3>You&rsquo;re on the list!</h3>
        <p>We&rsquo;ll notify you at <strong>{email}</strong> when Loomeé launches.</p>
      </div>
    )
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit} noValidate aria-label="Join the waitlist">
      <div className="waitlist-fields">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={e => { setName(e.target.value); if (status === 'error') setStatus('idle') }}
          disabled={status === 'loading'}
          autoComplete="name"
          aria-label="Your name"
          aria-required="true"
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={e => { setEmail(e.target.value); if (status === 'error') setStatus('idle') }}
          disabled={status === 'loading'}
          autoComplete="email"
          aria-label="Your email address"
          aria-required="true"
        />
      </div>
      {status === 'error' && errorMsg && (
        <p className="waitlist-error" role="alert">{errorMsg}</p>
      )}
      <button
        type="submit"
        className="btn-white"
        disabled={status === 'loading'}
      >
        {status === 'loading'
          ? 'Joining…'
          : <><span>Join the Waitlist</span> <ArrowRight size={16} aria-hidden="true" /></>
        }
      </button>
    </form>
  )
}
