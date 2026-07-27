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

export async function POST(request: Request) {
  try {
    if (!isEmailConfigured()) {
      return NextResponse.json(
        { error: "Email is not configured on the server." },
        { status: 503 },
      );
    }

    const body = (await request.json()) as ContactBody;
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const company = String(body.company || "").trim();
    const brief = String(body.brief || "").trim();
    const website = String(body.website || "").trim();

    // Honeypot — bots fill this; humans leave it empty.
    if (website) {
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
