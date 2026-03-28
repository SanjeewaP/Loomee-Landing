import { useState, useEffect, useCallback } from 'react'
import NavigateContext from './context/NavigateContext'
import useScrollReveal from './hooks/useScrollReveal'
import useHeroParallax from './hooks/useHeroParallax'
import useSmoothScroll from './hooks/useSmoothScroll'
import './App.css'

/* Layout */
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CookieBanner from './components/layout/CookieBanner'

/* Sections */
import HeroSection from './components/sections/HeroSection'
import MarqueeStrip from './components/ui/MarqueeStrip'
import ScrollProgress from './components/ui/ScrollProgress'
import CursorGlow from './components/ui/CursorGlow'
import DarkModeToggle from './components/ui/DarkModeToggle'
import FeaturesSection from './components/sections/FeaturesSection'
import HowItWorks from './components/sections/HowItWorks'
import DemoSection from './components/sections/DemoSection'
import TechSection from './components/sections/TechSection'
import WhySection from './components/sections/WhySection'
import FAQSection from './components/sections/FAQSection'
import CTASection from './components/sections/CTASection'

/* Pages */
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import CookiePolicyPage from './pages/CookiePolicyPage'

export default function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname)
  useScrollReveal(pathname)
  useHeroParallax()
  useSmoothScroll()

  // Keep state in sync with browser back/forward buttons
  useEffect(() => {
    const onPop = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  // Client-side navigation: push to history and update React state
  const navigate = useCallback((path) => {
    // Split path and hash (e.g. "/#features" → pathname "/", hash "features")
    const [base, hash] = path.split('#')
    const targetPath = base || '/'
    window.history.pushState(null, '', path)
    setPathname(targetPath)
    if (hash) {
      // Allow React to render the target page before scrolling to the anchor
      requestAnimationFrame(() => {
        const el = document.getElementById(hash)
        if (el) {
          el.scrollIntoView()
        }
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [])

  const renderPage = () => {
    if (pathname === '/privacy') return <PrivacyPolicyPage />
    if (pathname === '/terms') return <TermsOfServicePage />
    if (pathname === '/cookies') return <CookiePolicyPage />
    return (
      <>
        <div className="noise-overlay" aria-hidden="true" />
        <CursorGlow />
        <ScrollProgress />
        <DarkModeToggle />
        <Navbar />
        <main id="main-content">
          <HeroSection />
          <MarqueeStrip />
          <FeaturesSection />
          <HowItWorks />
          <DemoSection />
          <TechSection />
          <WhySection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </>
    )
  }

  return (
    <NavigateContext.Provider value={navigate}>
      {renderPage()}
      <CookieBanner />
    </NavigateContext.Provider>
  )
}
