import { NextResponse } from "next/server";
import { isEmailConfigured, sendContactNotification } from "@/lib/email";
import { isValidPhone } from "@/lib/phone";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  brief?: string;
  website?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* Best-effort rate limit: 5 briefs per IP per 10 minutes, kept per Worker instance.
   For hard limits add a Cloudflare rate-limiting rule on /api/contact. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (rateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again in a few minutes." }, { status: 429 });
    }

    if (!isEmailConfigured()) {
      return NextResponse.json(
        { error: "Email is not configured on the server." },
        { status: 503 },
      );
    }

    const body = (await request.json()) as ContactBody;
    const name = String(body.name || "").replace(/[\r\n]+/g, " ").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const company = String(body.company || "").replace(/[\r\n]+/g, " ").trim();
    const brief = String(body.brief || "").trim();
    const website = String(body.website || "").trim();

    // Honeypot: bots fill this field, humans never see it. Forms sent in under 3 seconds are bots too.
    const elapsed = Number((body as { elapsed?: unknown }).elapsed);
    if (website || (Number.isFinite(elapsed) && elapsed < 3000)) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !phone || !brief) {
      return NextResponse.json(
        { error: "Name, email, phone, and project brief are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid phone number (7–15 digits; + and spaces allowed).",
        },
        { status: 400 },
      );
    }

    if (
      name.length > 120 ||
      email.length > 200 ||
      phone.length > 40 ||
      company.length > 160 ||
      brief.length > 8000
    ) {
      return NextResponse.json({ error: "Submission is too long." }, { status: 400 });
    }

    await sendContactNotification({ name, email, phone, company, brief });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      { error: "Could not send your brief. Please try again." },
      { status: 500 },
    );
  }
}
