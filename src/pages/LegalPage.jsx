import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import useNavigate from '../hooks/useNavigate'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function LegalPage({ title, children }) {
  const navigate = useNavigate()
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main className="legal-page">
        <div className="container">
          <button className="legal-back" onClick={() => navigate('/')}>
            <ArrowRight size={14} style={{ transform: 'rotate(180deg)' }} aria-hidden="true" />
            Back to Home
          </button>
          <h1 className="legal-title">{title}</h1>
          <div className="legal-body">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  )
}
