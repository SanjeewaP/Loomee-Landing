# Loomée — AI Virtual Fitting Room Website

A modern, animated landing page for **Loomée**, an AI-powered virtual fitting room application.

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React 19 |
| **Build Tool** | Vite 6+ |
| **Animation** | Framer Motion 12 |
| **Icons** | Lucide React |
| **Styling** | Vanilla CSS (CSS variables, responsive) |
| **Typography** | Syne + Plus Jakarta Sans (Google Fonts) |
| **Deployment** | GitHub Pages with custom domain |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── public/
│   ├── loomee-icon.svg     # Favicon
│   └── CNAME               # Custom domain config
├── src/
│   ├── App.jsx             # All components (single-file architecture)
│   ├── App.css             # Component styles
│   ├── index.css           # Global styles & CSS variables
│   └── main.jsx            # Entry point
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
└── package.json
```

## Sections

1. **Hero** — Animated headline with phone mockup, floating cards, and stats
2. **Marquee** — Scrolling feature keywords strip
3. **Features** — 6-card grid showcasing core AI capabilities
4. **How It Works** — 3-step process with numbered timeline
5. **Demo Showcase** — Split layout with feature checklist and phone preview
6. **Technology** — 8-card grid of the tech stack
7. **Why Loomée** — 4 reasons with numbered cards
8. **Testimonials** — 3 user review cards
9. **FAQ** — Expandable accordion with smooth animations
10. **CTA** — Gradient call-to-action with download button
11. **Footer** — 4-column footer with social links

## Deployment

Build output goes to `docs/` for GitHub Pages:

```bash
npm run build
git add docs/ -f
git commit -m "Deploy website"
git push
```

## Color Palette

- **Primary**: Purple (#a855f7 → #6366f1 gradient)
- **Background**: Deep black (#06060a)
- **Text**: White/Gray scale
- **Accents**: Rose (#f43f5e), Green (#4ade80)

---

© 2026 Loomée. Built as a BSc final year project.
