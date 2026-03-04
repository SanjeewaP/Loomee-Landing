# Waitlist Backend Setup

This service exposes `POST /api/waitlist` and forwards waitlist submissions to email via Resend.

## 1. Required Environment Variables

- `RESEND_API_KEY`: API key from Resend dashboard
- `WAITLIST_FROM_EMAIL`: sender for owner notification email
- `WAITLIST_NOTIFY_TO`: comma-separated recipient emails for new signups
- `WAITLIST_ALLOWED_ORIGINS`: comma-separated allowed frontend origins

## 2. Optional Environment Variables

- `WAITLIST_AUTOREPLY_FROM_EMAIL`: sender for user confirmation email
- `WAITLIST_APP_NAME`: defaults to `Loomee`
- `WAITLIST_SEND_AUTOREPLY`: `true` or `false` (defaults to `true`)
- `PORT`: defaults to `8787`

## 3. Run Locally

```bash
RESEND_API_KEY=... \
WAITLIST_FROM_EMAIL="Loomee Waitlist <waitlist@yourdomain.com>" \
WAITLIST_NOTIFY_TO="founder@yourdomain.com" \
WAITLIST_ALLOWED_ORIGINS="http://localhost:5173" \
npm run waitlist:api
```

The API will run on `http://localhost:8787`:

- `GET /health` for health checks
- `POST /api/waitlist` for form submissions

## 4. Test Endpoint Locally

```bash
curl -i http://localhost:8787/api/waitlist \
  -H "Origin: http://localhost:5173" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com"}'
```

## 5. Deploy on Render (Recommended)

This repo includes `render.yaml` for one-click blueprint deployment.

1. Push code to GitHub.
2. In Render, choose **New +** -> **Blueprint**.
3. Select this repository.
4. Fill in secret env vars (`RESEND_API_KEY`, `WAITLIST_FROM_EMAIL`, etc.).
5. Deploy.

After deploy, your API URL will be:

`https://<render-service>.onrender.com/api/waitlist`

Set that URL as:

- GitHub Actions variable `VITE_WAITLIST_ENDPOINT` (for frontend build)
