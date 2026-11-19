import { NextResponse } from "next/server";

/**
 * Receives the site's native forms (volunteer, corporate inquiry, Network inquiry,
 * scholarship notify) and forwards them as JSON to FORMS_WEBHOOK_URL.
 * Point the webhook at a HubSpot workflow, Zapier/Make, or any endpoint that emails the team.
 */
const ALLOWED = new Set(["volunteer", "corporate-inquiry", "noc-inquiry", "scholars-notify", "advertising-inquiry"]);
const MAX_FIELD = 5000;

export async function POST(req: Request) {
  let body: { form?: string; page?: string; data?: Record<string, unknown> };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const form = String(body.form || "");
  if (!ALLOWED.has(form)) return NextResponse.json({ error: "Unknown form" }, { status: 400 });

  const data: Record<string, string> = {};
  for (const [k, v] of Object.entries(body.data || {})) {
    if (k === "company_website") continue;
    data[k.slice(0, 64)] = String(v ?? "").slice(0, MAX_FIELD);
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 422 });
  }

  const payload = { form, page: String(body.page || "").slice(0, 200), submittedAt: new Date().toISOString(), data };
  const hook = process.env.FORMS_WEBHOOK_URL;
  if (!hook) {
    // Never tell a visitor their message was sent when it went nowhere.
    console.error("[forms] FORMS_WEBHOOK_URL is not set; submission not delivered", payload);
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json({ error: "form delivery isn't set up yet" }, { status: 503 });
    }
    return NextResponse.json({ ok: true, delivered: false });
  }
  try {
    const res = await fetch(hook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[forms] delivery failed", err);
    return NextResponse.json({ error: "We couldn't deliver your message" }, { status: 502 });
  }
}
