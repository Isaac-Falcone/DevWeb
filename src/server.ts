import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      
      // Intercept Stripe API Routes
      if (url.pathname === '/api/checkout' && request.method === 'POST') {
        const stripe = new Stripe(process.env['STRIPE_SECRET_KEY'] || 'sk_test_mock', {
          apiVersion: '2026-08-26.dahlia' as any,
        });
        const body = await request.json();
        const authHeader = request.headers.get('Authorization') || 'Bearer anon';
        
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: [{
            price_data: { currency: 'brl', product_data: { name: 'Curso DevWeb Completo' }, unit_amount: 19700 },
            quantity: 1,
          }],
          mode: 'payment',
          success_url: `${url.origin}/?success=true`,
          cancel_url: `${url.origin}/?canceled=true`,
          client_reference_id: authHeader.replace('Bearer ', ''),
        });
        
        return new Response(JSON.stringify({ url: session.url }), {
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      const finalResponse = await normalizeCatastrophicSsrResponse(response);
      
      const headers = new Headers(finalResponse.headers);
      headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
      headers.set("X-Frame-Options", "DENY");
      headers.set("X-Content-Type-Options", "nosniff");
      headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
      headers.set("Content-Security-Policy", "default-src 'self' 'unsafe-inline' 'unsafe-eval' https: wss: data: blob:;");
      
      return new Response(finalResponse.body, {
        status: finalResponse.status,
        statusText: finalResponse.statusText,
        headers,
      });
    } catch (error: any) {
      console.error(error);
      return new Response(JSON.stringify({ error: error.message || 'Server Error' }), {
        status: 500,
        headers: { "content-type": "application/json" },
      });
    }
  },
};
