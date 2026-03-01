import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion'
import {
  Camera, Sparkles, ShoppingBag, ArrowRight, Menu, X, Plus,
  Scan, Ruler, Shirt, Brain, Palette, Shield, Zap, Heart,
  Star, ChevronRight, Github, Twitter, Instagram, Mail,
  Smartphone, Upload, Wand2, TrendingUp, Eye, RefreshCw,
  CheckCircle2, ArrowUpRight, Layers, Cpu, Cloud, Database
} from 'lucide-react'
import './App.css'

/* ====================================
   ANIMATION VARIANTS
   ==================================== */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

/* ====================================
   CUSTOM CURSOR
   ==================================== */

/* ====================================
   NAVBAR
   ==================================== */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Technology', href: '#technology' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="navbar-inner">
          <a href="#" className="navbar-logo">
            <img src="/Logo.png" alt="Loomeé logo" className="logo-icon" />
            Loomeé VTO
          </a>

          <div className="navbar-links">
            {links.map(link => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </div>

          <div className="navbar-actions">
            <a href="#demo" className="btn-ghost">See Demo</a>
            <a href="#cta" className="btn-primary">
              Get Started <ArrowRight size={16} />
            </a>
            <button className="mobile-menu-btn" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className="mobile-close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={28} />
            </button>
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.15 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#cta"
              className="btn-primary btn-large"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Get Started <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/* ====================================
   MARQUEE STRIP
   ==================================== */
function MarqueeStrip() {
  const items = [
    'AI-Powered Analysis', 'Virtual Try-On', 'Smart Sizing', 'Body Scanning',
    'Style Recommendations', 'Confidence Score', 'Real-Time Fit', 'Fashion AI',
    'Personalized Results', 'Clothing Overlay', 'Measurement Mapping', 'Trend Insights',
  ]
  const doubled = [...items, ...items]

  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}><span className="dot" />{item}</span>
        ))}
      </div>
    </div>
  )
}

/* ====================================
   HERO SECTION
   ==================================== */
function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-gradient" />
      <div className="hero-grid-lines" />

      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="hero-badge">
          <span className="badge-dot" />
          Powered by Google Gemini AI
        </motion.div>

        <motion.h1 variants={fadeUp}>
          Your style,
          <br />
          <span className="highlight">perfectly fitted.</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="hero-description">
          Loomeé is an AI-powered virtual fitting room that lets you try on clothes
          digitally — with real-time body analysis, personalized size recommendations,
          and intelligent style insights.
        </motion.p>

        <motion.div variants={fadeUp} className="hero-buttons">
          <a href="#cta" className="btn-primary btn-large">
            Try Loomeé Free <ArrowRight size={18} />
          </a>
          <a href="#how-it-works" className="btn-outline">
            See How It Works
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="hero-stats">
          <div className="hero-stat">
            <div className="stat-value">95%</div>
            <div className="stat-label">AI Confidence</div>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <div className="stat-value">{"<"}5s</div>
            <div className="stat-label">Analysis Time</div>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <div className="stat-value">40%</div>
            <div className="stat-label">Less Returns</div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-mockup-area"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div style={{ position: 'relative' }}>
          <PhoneMockup />
          <motion.div
            className="floating-card fc-left"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="fc-label">Recommended Size</div>
            <div className="fc-value success">Medium — Perfect Fit ✓</div>
          </motion.div>
          <motion.div
            className="floating-card fc-right"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <div className="fc-label">AI Confidence</div>
            <div className="fc-value purple">92% Match</div>
          </motion.div>
          <motion.div
            className="floating-card fc-bottom-left"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <div className="fc-label">Style Advice</div>
            <div className="fc-value">"Pairs well with denim"</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

/* ====================================
   PHONE MOCKUP COMPONENT
   ==================================== */
function PhoneMockup({ small = false }) {
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
            <div className="phone-outfit-silhouette" />
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

/* ====================================
   FEATURES SECTION
   ==================================== */
function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: <Scan size={22} />,
      title: 'AI Body Analysis',
      desc: 'Advanced computer vision powered by Google Gemini 2.5 Flash analyzes your body measurements and proportions from uploaded photos.',
    },
    {
      icon: <Ruler size={22} />,
      title: 'Smart Size Recommendations',
      desc: 'Get precise size suggestions by comparing your unique body data against garment dimensions — including fit, stretch, and style.',
    },
    {
      icon: <Palette size={22} />,
      title: 'Style Intelligence',
      desc: 'AI-driven fashion recommendations suggest complementary pieces, colors, and outfit combinations tailored to your preferences.',
    },
    {
      icon: <Eye size={22} />,
      title: 'Virtual Try-On Preview',
      desc: 'See how clothing looks on you with AI-generated overlays using Replicate\'s advanced image generation models.',
    },
    {
      icon: <Brain size={22} />,
      title: 'Confidence Scoring',
      desc: 'Every recommendation comes with a confidence score (85-95%) so you know exactly how reliable the fit analysis is.',
    },
    {
      icon: <RefreshCw size={22} />,
      title: 'Try-On History',
      desc: 'Save and revisit all your virtual try-ons. Compare different outfits and track your style evolution over time.',
    },
  ]

  return (
    <section className="features-section" id="features" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <div className="section-eyebrow">Features</div>
          <h2 className="section-title">Empower Your Wardrobe with AI</h2>
          <p className="section-subtitle">
            Experience the future of fashion technology with intelligent analysis,
            real-time recommendations, and virtual try-on capabilities.
          </p>
        </motion.div>

        <motion.div
          className="features-grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {features.map((feature, i) => (
            <motion.div key={i} className="feature-card" variants={fadeUp}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ====================================
   HOW IT WORKS
   ==================================== */
function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      num: '01',
      icon: <Upload size={28} />,
      title: 'Upload Your Photo',
      desc: 'Take or upload a full-body photo. Loomeé securely processes your image to understand your body proportions and measurements.',
    },
    {
      num: '02',
      icon: <Shirt size={28} />,
      title: 'Browse & Select Clothing',
      desc: 'Explore our clothing catalog or upload any garment image. Our AI instantly analyzes the clothing\'s style, color, fabric, and sizing.',
    },
    {
      num: '03',
      icon: <Wand2 size={28} />,
      title: 'Get AI-Powered Results',
      desc: 'Receive instant fit analysis, size recommendations with confidence scores, virtual try-on previews, and personalized style advice.',
    },
  ]

  return (
    <section className="how-section" id="how-it-works" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <div className="section-eyebrow">How It Works</div>
          <h2 className="section-title">Three Steps to Your Perfect Fit</h2>
          <p className="section-subtitle">
            A simple, intuitive workflow powered by advanced AI and clean design.
          </p>
        </motion.div>

        <motion.div
          className="how-steps"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {steps.map((step, i) => (
            <motion.div key={i} className="how-step" variants={fadeUp}>
              <div className="how-step-number">{step.num}</div>
              <div className="how-step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ====================================
   DEMO / SHOWCASE SECTION
   ==================================== */
function DemoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    'Real-time AI clothing analysis with Gemini 2.5 Flash',
    'Personalized size recommendations with 85–95% accuracy',
    'Virtual try-on image generation via Replicate API',
    'Complete outfit and style recommendations',
    'Secure cloud storage for your body data',
  ]

  return (
    <section className="demo-section" id="demo" ref={ref}>
      <div className="container">
        <motion.div
          className="demo-container"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeIn}
        >
          <motion.div className="demo-content" variants={slideLeft}>
            <div className="section-eyebrow">Live Demo</div>
            <h2>See Loomeé in Action</h2>
            <p>
              Upload a photo, pick a garment, and watch our AI deliver instant fit
              analysis, smart size suggestions, and a virtual try-on preview — all
              in under five seconds.
            </p>

            <div className="demo-features-list">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="demo-feature-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  <div className="check-icon"><CheckCircle2 size={14} /></div>
                  {f}
                </motion.div>
              ))}
            </div>

            <a href="#cta" className="btn-primary btn-large">
              Try It Now <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div className="demo-visual" variants={slideRight}>
            <PhoneMockup small />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ====================================
   TECH STACK SECTION
   ==================================== */
function TechSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const techs = [
    { icon: '🧠', name: 'Google Gemini', desc: 'AI vision & analysis' },
    { icon: '🎨', name: 'Replicate', desc: 'Virtual try-on generation' },
    { icon: '⚡', name: 'Node.js', desc: 'Backend API server' },
    { icon: '🍃', name: 'MongoDB Atlas', desc: 'Cloud database' },
    { icon: '📱', name: 'Flutter', desc: 'Cross-platform mobile' },
    { icon: '☁️', name: 'Cloudinary', desc: 'Image cloud storage' },
    { icon: '🚀', name: 'Render', desc: 'Production hosting' },
    { icon: '🔐', name: 'JWT Auth', desc: 'Secure authentication' },
  ]

  return (
    <section className="tech-section" id="technology" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <div className="section-eyebrow">Technology</div>
          <h2 className="section-title">Built with Modern Tech</h2>
          <p className="section-subtitle">
            Loomeé combines cutting-edge AI models with robust cloud infrastructure
            to deliver a fast, secure, and reliable experience.
          </p>
        </motion.div>

        <motion.div
          className="tech-grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {techs.map((tech, i) => (
            <motion.div key={i} className="tech-card" variants={fadeUp}>
              <div className="tech-card-icon">{tech.icon}</div>
              <h4>{tech.name}</h4>
              <p>{tech.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ====================================
   WHY CHOOSE SECTION
   ==================================== */
function WhySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const reasons = [
    {
      title: 'No More Wrong Sizes',
      desc: 'Our AI compares your exact measurements against garment sizing data, eliminating the guesswork from online shopping.',
    },
    {
      title: 'Privacy-First Design',
      desc: 'Your body photos are processed securely via Cloudinary with encrypted storage. We never sell or share your personal data.',
    },
    {
      title: 'Real AI, Real Results',
      desc: 'Powered by Google Gemini 2.5 Flash with 85–95% confidence scores — not generic sizing charts or rough estimates.',
    },
    {
      title: 'Built for Everyone',
      desc: 'Whether you\'re a student shopping online or a fashion enthusiast exploring styles, Loomeé adapts to your needs.',
    },
  ]

  return (
    <section className="why-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <div className="section-eyebrow">Why Loomeé</div>
          <h2 className="section-title">Why Choose Loomeé?</h2>
          <p className="section-subtitle">
            A virtual fitting platform built to be accurate, private, and genuinely useful.
          </p>
        </motion.div>

        <motion.div
          className="why-grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {reasons.map((reason, i) => (
            <motion.div key={i} className="why-card" variants={fadeUp}>
              <div className="why-card-number">{String(i + 1).padStart(2, '0')}</div>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ====================================
   TESTIMONIALS
   ==================================== */
function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    {
      text: '"Loomeé completely changed how I shop online. I used to return half my orders — now I know exactly what size to pick before I buy."',
      name: 'Sarah K.',
      role: 'Fashion Enthusiast',
      initials: 'SK',
    },
    {
      text: '"The AI analysis is surprisingly accurate. It flagged that a jacket would be tight at the shoulders, and it was right. Saved me a return."',
      name: 'Marcus D.',
      role: 'Online Shopper',
      initials: 'MD',
    },
    {
      text: '"As someone who struggles with inconsistent sizing across brands, Loomeé\'s per-garment analysis is a game-changer. Love the confidence scores."',
      name: 'Priya M.',
      role: 'Style Blogger',
      initials: 'PM',
    },
  ]

  return (
    <section className="testimonials-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <div className="section-eyebrow">Testimonials</div>
          <h2 className="section-title">What People Are Saying</h2>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {testimonials.map((t, i) => (
            <motion.div key={i} className="testimonial-card" variants={fadeUp}>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, j) => <Star key={j} className="star" size={16} fill="#C4963A" />)}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div className="testimonial-info">
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ====================================
   FAQ SECTION
   ==================================== */
function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: 'How does Loomeé analyze my body measurements?',
      a: 'Loomeé uses Google Gemini 2.5 Flash, an advanced AI vision model, to analyze your uploaded body photos. The AI detects key body points and calculates proportions including chest, waist, hips, and height measurements with high accuracy.',
    },
    {
      q: 'Is my personal data and body photos safe?',
      a: 'Absolutely. Your images are stored securely on Cloudinary with encrypted URLs. Authentication uses JWT tokens, and our MongoDB Atlas database employs industry-standard encryption. We never sell or share your personal data.',
    },
    {
      q: 'How accurate are the size recommendations?',
      a: 'Our AI delivers recommendations with confidence scores ranging from 85% to 95%. The system compares your unique measurements against specific garment sizing data — not generic size charts — for the most accurate fit prediction possible.',
    },
    {
      q: 'What is the virtual try-on feature?',
      a: 'The virtual try-on uses Replicate API to generate AI-powered images showing how clothing items would look on your body. Combined with our body analysis, you get a realistic preview of fit and style before making a purchase.',
    },
    {
      q: 'Does Loomeé work with any clothing brand?',
      a: 'Yes! You can browse our built-in catalog or upload any clothing image. Our AI analyzes the garment\'s visual properties — color, style, fabric type — and provides recommendations regardless of the brand.',
    },
    {
      q: 'What platforms is Loomeé available on?',
      a: 'Loomeé is built as a cross-platform Flutter mobile app available on both iOS and Android. The backend API is cloud-hosted on Render with 99.9% uptime, ensuring a seamless experience on any device.',
    },
  ]

  return (
    <section className="faq-section" id="faq" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <div className="section-eyebrow">FAQ</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about Loomeé and how it works.
          </p>
        </motion.div>

        <motion.div
          className="faq-list"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className={`faq-item ${openIndex === i ? 'open' : ''}`}
              variants={fadeUp}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                <span className="faq-icon"><Plus size={18} /></span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ====================================
   CTA SECTION
   ==================================== */
function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="cta-section" id="cta" ref={ref}>
      <div className="container">
        <motion.div
          className="cta-container"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={scaleIn}
        >
          <h2>Ready to find your perfect fit?</h2>
          <p>
            Join Loomeé and shop online with confidence. No more wrong sizes,
            no more returns — just clothes that fit you.
          </p>
          <div className="cta-buttons">
            <div className="btn-coming-soon">
              <span className="coming-soon-dot" />
              App Coming Soon
            </div>
            <a href="#features" className="btn-glass">
              Explore Features
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ====================================
   FOOTER
   ==================================== */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="navbar-logo">
              <img src="/logo-icon.svg" alt="Loomeé logo" className="logo-icon" />
              Loomeé VTO
            </a>
            <p>
              AI-powered virtual fitting room that helps you shop online with
              confidence. Built with Google Gemini, Flutter, and love.
            </p>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#technology">Technology</a>
            <a href="#demo">Live Demo</a>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <a href="#faq">FAQ</a>
            <a href="#">API Docs</a>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <a href="#/privacy">Privacy Policy</a>
            <a href="#/terms">Terms of Service</a>
            <a href="#/cookies">Cookie Policy</a>
            <a href="mailto:loomeevto@gmail.com">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Loomeé. All rights reserved CS-123.</p>
          <div className="footer-socials">
            <a href="https://github.com/ShaneRowell/LoomeeApp" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/company/loomeevto/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://www.instagram.com/loomeevto/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="mailto:loomeevto@gmail.com" className="footer-social-link" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ====================================
   LEGAL PAGE WRAPPER
   ==================================== */
function LegalPage({ title, children }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <div className="noise-overlay" />
      <Navbar />
      <main className="legal-page">
        <div className="container">
          <a href="#" className="legal-back"><ArrowRight size={14} style={{ transform: 'rotate(180deg)' }} /> Back to Home</a>
          <h1 className="legal-title">{title}</h1>
          <div className="legal-body">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  )
}

/* ====================================
   PRIVACY POLICY PAGE
   ==================================== */
function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p className="legal-updated">Last updated: 1 March 2026</p>

      <h2>1. Introduction</h2>
      <p>Loomeé VTO ("we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect data when you use our AI-powered virtual fitting room service available at loomeé.com and via our mobile application.</p>

      <h2>2. Information We Collect</h2>
      <p><strong>Account Information:</strong> When you register, we collect your name, email address, and password (stored in encrypted form).</p>
      <p><strong>Body Photos & Measurements:</strong> To provide virtual try-on and size recommendations, we process photos you upload. These images are temporarily transmitted to Google Gemini AI for body analysis. We do not store your raw photos permanently — they are deleted from our servers within 24 hours of processing.</p>
      <p><strong>Usage Data:</strong> We collect anonymised data about how you interact with the app, including features used, session duration, and device type, to improve our service.</p>
      <p><strong>Communications:</strong> If you contact us by email, we retain those communications to respond to your enquiry.</p>

      <h2>3. How We Use Your Information</h2>
      <p>We use your data to provide personalised size recommendations and virtual try-on functionality; to improve and develop the Loomeé VTO service; to communicate service updates or respond to support requests; and to comply with legal obligations. We do not sell your personal data to third parties.</p>

      <h2>4. Third-Party Services</h2>
      <p><strong>Google Gemini AI:</strong> Body photos are processed via the Google Gemini API for real-time body analysis. Google's processing is governed by Google's Privacy Policy.</p>
      <p><strong>Render:</strong> Our backend infrastructure is hosted on Render. Data in transit is encrypted via TLS.</p>
      <p><strong>Analytics:</strong> We use anonymised analytics tools to understand aggregate usage patterns. No personally identifiable information is shared with analytics providers.</p>

      <h2>5. Data Retention</h2>
      <p>Account data is retained for as long as your account is active. Body photos are deleted within 24 hours of processing. Anonymised usage analytics are retained for up to 24 months. You may request deletion of your account and associated data at any time.</p>

      <h2>6. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data; withdraw consent at any time; and lodge a complaint with a data protection authority. To exercise any of these rights, contact us at loomeevto@gmail.com.</p>

      <h2>7. Security</h2>
      <p>We implement industry-standard security measures including TLS encryption, access controls, and regular security reviews. However, no method of transmission over the internet is 100% secure.</p>

      <h2>8. Children's Privacy</h2>
      <p>Loomeé VTO is not directed at children under the age of 13. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us immediately.</p>

      <h2>9. Changes to This Policy</h2>
      <p>We may update this Privacy Policy periodically. We will notify registered users of material changes by email. Continued use of the service after changes constitutes acceptance of the updated policy.</p>

      <h2>10. Contact</h2>
      <p>For any privacy-related enquiries, contact us at <a href="mailto:loomeevto@gmail.com">loomeevto@gmail.com</a>.</p>
    </LegalPage>
  )
}

/* ====================================
   TERMS OF SERVICE PAGE
   ==================================== */
function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service">
      <p className="legal-updated">Last updated: 1 March 2026</p>

      <h2>1. Acceptance of Terms</h2>
      <p>By accessing or using Loomeé VTO ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.</p>

      <h2>2. Description of Service</h2>
      <p>Loomeé VTO is an AI-powered virtual fitting room application that analyses user-submitted body photos to generate personalised size recommendations and virtual outfit previews. The Service is powered by Google Gemini AI and is available on iOS, Android, and via our website.</p>

      <h2>3. Eligibility</h2>
      <p>You must be at least 13 years of age to use this Service. By using Loomeé VTO, you represent that you meet this age requirement. Users under 18 should have parental or guardian consent.</p>

      <h2>4. User Accounts</h2>
      <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to notify us immediately of any unauthorised use of your account at loomeevto@gmail.com.</p>

      <h2>5. Acceptable Use</h2>
      <p>You agree not to use the Service to upload content that is unlawful, harmful, or violates the rights of others; attempt to reverse-engineer, hack, or disrupt the Service; use automated scripts or bots to access the Service; or misrepresent your identity or affiliation.</p>

      <h2>6. AI Recommendations Disclaimer</h2>
      <p>Size recommendations and virtual try-on previews generated by Loomeé VTO are provided for guidance only and are based on AI analysis of user-submitted photos. Results may vary depending on photo quality, lighting, and individual body characteristics. We do not guarantee the accuracy of any recommendation. Final purchasing decisions remain the sole responsibility of the user.</p>

      <h2>7. Intellectual Property</h2>
      <p>All content, branding, software, and technology comprising the Loomeé VTO Service are the exclusive property of Loomeé VTO and are protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>

      <h2>8. Limitation of Liability</h2>
      <p>To the fullest extent permitted by law, Loomeé VTO shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Service. Our total liability to you for any claims arising from these Terms shall not exceed the amount you paid us in the 12 months preceding the claim.</p>

      <h2>9. Termination</h2>
      <p>We reserve the right to suspend or terminate your access to the Service at our discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.</p>

      <h2>10. Governing Law</h2>
      <p>These Terms are governed by applicable law. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the relevant courts.</p>

      <h2>11. Changes to Terms</h2>
      <p>We may modify these Terms at any time. We will provide notice of significant changes. Your continued use of the Service following notice of changes constitutes acceptance of the updated Terms.</p>

      <h2>12. Contact</h2>
      <p>For questions about these Terms, contact us at <a href="mailto:loomeevto@gmail.com">loomeevto@gmail.com</a>.</p>
    </LegalPage>
  )
}

/* ====================================
   COOKIE POLICY PAGE
   ==================================== */
function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy">
      <p className="legal-updated">Last updated: 1 March 2026</p>

      <h2>1. What Are Cookies</h2>
      <p>Cookies are small text files placed on your device when you visit a website. They allow the site to remember your preferences, improve your experience, and collect anonymised analytics data. You can control cookies through your browser settings at any time.</p>

      <h2>2. Cookies We Use</h2>

      <h3>Essential Cookies</h3>
      <p>These cookies are required for the Service to function and cannot be disabled.</p>
      <div className="cookie-table">
        <div className="cookie-row cookie-row-header"><span>Name</span><span>Purpose</span><span>Duration</span></div>
        <div className="cookie-row"><span>loomee_session</span><span>Maintains your login session</span><span>Session</span></div>
        <div className="cookie-row"><span>loomee_csrf</span><span>Prevents cross-site request forgery</span><span>Session</span></div>
        <div className="cookie-row"><span>loomee_cookie_consent</span><span>Stores your cookie preference</span><span>1 year</span></div>
      </div>

      <h3>Functional Cookies</h3>
      <p>These cookies remember your preferences to personalise your experience.</p>
      <div className="cookie-table">
        <div className="cookie-row cookie-row-header"><span>Name</span><span>Purpose</span><span>Duration</span></div>
        <div className="cookie-row"><span>loomee_prefs</span><span>Stores UI preferences (e.g. language, region)</span><span>6 months</span></div>
        <div className="cookie-row"><span>loomee_fit_cache</span><span>Caches your fit profile for faster load times</span><span>30 days</span></div>
      </div>

      <h3>Analytics Cookies</h3>
      <p>These cookies help us understand how users interact with the Service so we can improve it. All data is anonymised.</p>
      <div className="cookie-table">
        <div className="cookie-row cookie-row-header"><span>Name</span><span>Purpose</span><span>Duration</span></div>
        <div className="cookie-row"><span>loomee_analytics</span><span>Tracks anonymised page views and feature usage</span><span>12 months</span></div>
        <div className="cookie-row"><span>loomee_perf</span><span>Monitors app performance and error rates</span><span>90 days</span></div>
      </div>

      <h2>3. Third-Party Cookies</h2>
      <p>We use Google services for AI processing and analytics. Google may set cookies in accordance with their own Cookie Policy. We do not control Google's cookies and recommend reviewing Google's Privacy & Terms for full details.</p>

      <h2>4. Managing Cookies</h2>
      <p>You can manage or delete cookies at any time through your browser settings. Please note that disabling essential cookies may affect the functionality of the Service. To withdraw your cookie consent at any time, clear your browser cookies and refresh the page — the consent banner will reappear.</p>

      <h2>5. Changes to This Policy</h2>
      <p>We may update this Cookie Policy from time to time. Any changes will be reflected on this page with an updated date.</p>

      <h2>6. Contact</h2>
      <p>For cookie-related enquiries, contact us at <a href="mailto:loomeevto@gmail.com">loomeevto@gmail.com</a>.</p>
    </LegalPage>
  )
}

/* ====================================
   COOKIE BANNER
   ==================================== */
function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('loomee_cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('loomee_cookie_consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('loomee_cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-content">
        <div className="cookie-banner-text">
          <strong>We use cookies 🍪</strong>
          <p>We use essential, functional, and analytics cookies to improve your experience and understand how Loomeé VTO is used. See our <a href="#/cookies">Cookie Policy</a> for details.</p>
        </div>
        <div className="cookie-banner-actions">
          <button className="cookie-btn cookie-btn-decline" onClick={decline}>Decline</button>
          <button className="cookie-btn cookie-btn-accept" onClick={accept}>Accept All</button>
        </div>
      </div>
    </div>
  )
}

/* ====================================
   APP ROOT
   ==================================== */
export default function App() {
  const [route, setRoute] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const renderPage = () => {
    if (route === '#/privacy') return <PrivacyPolicyPage />
    if (route === '#/terms') return <TermsOfServicePage />
    if (route === '#/cookies') return <CookiePolicyPage />
    return (
      <>
        <div className="noise-overlay" />
        <Navbar />
        <HeroSection />
        <MarqueeStrip />
        <FeaturesSection />
        <HowItWorks />
        <DemoSection />
        <TechSection />
        <WhySection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </>
    )
  }

  return (
    <>
      {renderPage()}
      <CookieBanner />
    </>
  )
}
