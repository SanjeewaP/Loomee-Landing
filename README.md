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
| **Waitlist Email** | Node.js API + Resend |
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

# Run waitlist email API locally (expects env vars)
npm run waitlist:api
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
├── server/
│   └── waitlist-api.mjs    # POST /api/waitlist -> sends email via Resend
├── .env.example            # Frontend + waitlist API environment variables
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

### Waitlist Setup (Functional Email Submissions)

The form in `src/App.jsx` already posts to `VITE_WAITLIST_ENDPOINT`.  
To make it send real emails:

1. Create a Resend account and verify your sending domain.
2. Deploy `server/waitlist-api.mjs` as a Node service (Render recommended).
3. Set server env vars (see `.env.example`):
   - `RESEND_API_KEY`
   - `WAITLIST_FROM_EMAIL`
   - `WAITLIST_AUTOREPLY_FROM_EMAIL` (optional)
   - `WAITLIST_NOTIFY_TO`
   - `WAITLIST_ALLOWED_ORIGINS`
   - `WAITLIST_SEND_AUTOREPLY`
4. Expose the API URL as your frontend endpoint:
   - `VITE_WAITLIST_ENDPOINT=https://your-api-domain.com/api/waitlist`
5. In GitHub repo settings, add an Actions variable named `VITE_WAITLIST_ENDPOINT` so the Pages build includes it.
6. Optional: use `render.yaml` in this repo for one-click Render Blueprint deploy.

Local test flow:

1. Start the API service with env vars set:
   ```bash
   RESEND_API_KEY=... \
   WAITLIST_FROM_EMAIL="Loomee Waitlist <waitlist@yourdomain.com>" \
   WAITLIST_NOTIFY_TO="founder@yourdomain.com" \
   WAITLIST_ALLOWED_ORIGINS="http://localhost:5173" \
   npm run waitlist:api
   ```
2. In another terminal:
   ```bash
   VITE_WAITLIST_ENDPOINT="http://localhost:8787/api/waitlist" npm run dev
   ```

Quick health check:

```bash
curl http://localhost:8787/health
```

Detailed backend instructions:

- `server/README.md`

## Color Palette

- **Primary**: Purple (#a855f7 → #6366f1 gradient)
- **Background**: Deep black (#06060a)
- **Text**: White/Gray scale
- **Accents**: Rose (#f43f5e), Green (#4ade80)

---

© 2026 Loomée. Built as an SDGP project for group CS-123.
