import { createServer } from 'node:http'

const PORT = Number(process.env.PORT || 8787)
const APP_NAME = process.env.WAITLIST_APP_NAME || 'Loomee'
const RESEND_API_KEY = process.env.RESEND_API_KEY || ''
const WAITLIST_FROM_EMAIL = process.env.WAITLIST_FROM_EMAIL || ''
const WAITLIST_AUTOREPLY_FROM_EMAIL = process.env.WAITLIST_AUTOREPLY_FROM_EMAIL || WAITLIST_FROM_EMAIL
const WAITLIST_NOTIFY_TO = splitCsv(process.env.WAITLIST_NOTIFY_TO || '')
const WAITLIST_ALLOWED_ORIGINS = splitCsv(process.env.WAITLIST_ALLOWED_ORIGINS || '')
const WAITLIST_SEND_AUTOREPLY = String(process.env.WAITLIST_SEND_AUTOREPLY || 'true') === 'true'

function splitCsv(value) {
  return value
    .split(',')
    .map(part => part.trim())
    .filter(Boolean)
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function getAllowedOrigin(origin) {
  if (WAITLIST_ALLOWED_ORIGINS.length === 0) return '*'
  if (!origin) return WAITLIST_ALLOWED_ORIGINS[0]
  if (WAITLIST_ALLOWED_ORIGINS.includes(origin)) return origin
  return null
}

function buildCorsHeaders(origin) {
  const allowedOrigin = getAllowedOrigin(origin)
  return {
    allowedOrigin,
    headers: {
      'Access-Control-Allow-Origin': allowedOrigin || 'null',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      Vary: 'Origin',
    },
  }
}

function sendJson(res, statusCode, body, extraHeaders = {}) {
  const payload = JSON.stringify(body)
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload),
    ...extraHeaders,
  })
  res.end(payload)
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let raw = ''

    req.on('data', chunk => {
      raw += chunk
      if (raw.length > 1_000_000) {
        reject(new Error('Payload too large'))
        req.destroy()
      }
    })
    req.on('end', () => resolve(raw))
    req.on('error', reject)
  })
}

async function sendWithResend({ from, to, subject, html, text }) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      text,
    }),
  })

  if (!response.ok) {
    const details = await response.text()
    throw new Error(`Resend request failed (${response.status}): ${details}`)
  }
}

const server = createServer(async (req, res) => {
  const { headers, method } = req
  const requestUrl = new URL(req.url || '/', `http://${headers.host || 'localhost'}`)
  const path = requestUrl.pathname

  if (path === '/health' && method === 'GET') {
    sendJson(res, 200, { ok: true, service: 'waitlist-api' })
    return
  }

  if (path === '/' && method === 'GET') {
    sendJson(res, 200, { ok: true, message: 'Use POST /api/waitlist' })
    return
  }

  if (path !== '/api/waitlist') {
    sendJson(res, 404, { ok: false, error: 'Not found.' })
    return
  }

  const { allowedOrigin, headers: corsHeaders } = buildCorsHeaders(headers.origin)

  if (!allowedOrigin) {
    sendJson(res, 403, { ok: false, error: 'Origin not allowed.' }, corsHeaders)
    return
  }

  if (method === 'OPTIONS') {
    res.writeHead(204, corsHeaders)
    res.end()
    return
  }

  if (method !== 'POST') {
    sendJson(res, 405, { ok: false, error: 'Method not allowed.' }, corsHeaders)
    return
  }

  if (!RESEND_API_KEY || !WAITLIST_FROM_EMAIL || WAITLIST_NOTIFY_TO.length === 0) {
    sendJson(
      res,
      500,
      {
        ok: false,
        error: 'Server is missing required email configuration.',
      },
      corsHeaders,
    )
    return
  }

  try {
    const rawBody = await readRequestBody(req)
    let body = {}
    if (rawBody) {
      try {
        body = JSON.parse(rawBody)
      } catch {
        sendJson(res, 400, { ok: false, error: 'Invalid JSON body.' }, corsHeaders)
        return
      }
    }

    // Honeypot field to reduce bot signups.
    if (body.website) {
      sendJson(res, 200, { ok: true }, corsHeaders)
      return
    }

    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim()
    const source = String(body.source || 'website').trim()
    const page = String(body.page || '').trim()
    const submittedAt = String(body.submittedAt || new Date().toISOString()).trim()

    if (!name || name.length > 120) {
      sendJson(res, 400, { ok: false, error: 'Please provide a valid name.' }, corsHeaders)
      return
    }

    if (!email || !isValidEmail(email) || email.length > 254) {
      sendJson(res, 400, { ok: false, error: 'Please provide a valid email address.' }, corsHeaders)
      return
    }

    const escapedName = escapeHtml(name)
    const escapedEmail = escapeHtml(email)
    const escapedSource = escapeHtml(source)
    const escapedPage = escapeHtml(page || '-')
    const escapedDate = escapeHtml(submittedAt)

    await sendWithResend({
      from: WAITLIST_FROM_EMAIL,
      to: WAITLIST_NOTIFY_TO,
      subject: `New ${APP_NAME} waitlist signup: ${name}`,
      html: `
        <h2>New ${APP_NAME} waitlist signup</h2>
        <p><strong>Name:</strong> ${escapedName}</p>
        <p><strong>Email:</strong> ${escapedEmail}</p>
        <p><strong>Source:</strong> ${escapedSource}</p>
        <p><strong>Page:</strong> ${escapedPage}</p>
        <p><strong>Submitted:</strong> ${escapedDate}</p>
      `,
      text: [
        `New ${APP_NAME} waitlist signup`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Source: ${source}`,
        `Page: ${page || '-'}`,
        `Submitted: ${submittedAt}`,
      ].join('\n'),
    })

    if (WAITLIST_SEND_AUTOREPLY) {
      try {
        await sendWithResend({
          from: WAITLIST_AUTOREPLY_FROM_EMAIL,
          to: [email],
          subject: `You're on the ${APP_NAME} waitlist`,
          html: `
            <p>Hi ${escapedName},</p>
            <p>Thanks for joining the ${APP_NAME} waitlist. We will email you as soon as the app is ready.</p>
            <p>- ${APP_NAME} Team</p>
          `,
          text: `Hi ${name}, thanks for joining the ${APP_NAME} waitlist. We will email you when the app is ready.`,
        })
      } catch (autoReplyError) {
        // Do not fail signup if optional auto-reply cannot be sent.
        console.error('[waitlist-api] Auto-reply failed.', autoReplyError)
      }
    }

    sendJson(res, 200, { ok: true }, corsHeaders)
  } catch (error) {
    console.error('[waitlist-api] Failed to process waitlist request.', error)
    sendJson(res, 500, { ok: false, error: 'Unable to process signup right now.' }, corsHeaders)
  }
})

server.listen(PORT, () => {
  console.log(`[waitlist-api] Listening on http://localhost:${PORT}/api/waitlist`)
})
