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
            <div className="logo-icon">L</div>
            Loomeé
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
              <div className="logo-icon">L</div>
              Loomeé
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
            <a href="#">Blog</a>
            <a href="#">Changelog</a>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Loomeé. All rights reserved.</p>
          <div className="footer-socials">
            <a href="https://github.com/ShaneRowell/LoomeeApp" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href="#" className="footer-social-link" aria-label="Twitter">
              <Twitter size={16} />
            </a>
            <a href="#" className="footer-social-link" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="footer-social-link" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ====================================
   APP ROOT
   ==================================== */
export default function App() {
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
