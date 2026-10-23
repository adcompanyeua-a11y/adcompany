import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { z } from 'npm:zod@3'

const PIXEL_ID = '1401323918107108'

const BodySchema = z.object({
  event_name: z.enum(['Lead', 'Contact', 'PageView']).default('Lead'),
  email: z.string().email().max(255).optional(),
  phone: z.string().max(40).optional(),
  first_name: z.string().max(80).optional(),
  last_name: z.string().max(80).optional(),
  event_source_url: z.string().url().max(500).optional(),
  fbp: z.string().max(100).optional(),
  fbc: z.string().max(200).optional(),
  event_id: z.string().max(100).optional(),
})

async function sha256(value: string): Promise<string> {
  const data = new TextEncoder().encode(value.trim().toLowerCase())
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('')
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const token = Deno.env.get('META_CAPI_ACCESS_TOKEN')
  if (!token) {
    return new Response(JSON.stringify({ error: 'CAPI token not configured' }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  let body: z.infer<typeof BodySchema>
  try {
    const parsed = BodySchema.safeParse(await req.json())
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
    body = parsed.data
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const clientIp =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('cf-connecting-ip') || undefined
  const userAgent = req.headers.get('user-agent') || undefined

  const userData: Record<string, unknown> = {}
  if (body.email) userData.em = [await sha256(body.email)]
  if (body.phone) userData.ph = [await sha256(body.phone.replace(/\D/g, ''))]
  if (body.first_name) userData.fn = [await sha256(body.first_name)]
  if (body.last_name) userData.ln = [await sha256(body.last_name)]
  if (clientIp) userData.client_ip_address = clientIp
  if (userAgent) userData.client_user_agent = userAgent
  if (body.fbp) userData.fbp = body.fbp
  if (body.fbc) userData.fbc = body.fbc

  const event: Record<string, unknown> = {
    event_name: body.event_name,
    event_time: Math.floor(Date.now() / 1000),
    action_source: 'website',
    user_data: userData,
  }
  if (body.event_source_url) event.event_source_url = body.event_source_url
  if (body.event_id) event.event_id = body.event_id

  const metaRes = await fetch(
    `https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${token}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: [event] }),
    },
  )
  const metaJson = await metaRes.json().catch(() => ({}))

  if (!metaRes.ok) {
    return new Response(JSON.stringify({ error: 'Meta API error', detail: metaJson }), {
      status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  return new Response(JSON.stringify({ ok: true, result: metaJson }), {
    status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
})
