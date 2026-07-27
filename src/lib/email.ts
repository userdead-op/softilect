import nodemailer from "nodemailer";

type SendEmailParams = {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
};

function readEnv(name: string): string | undefined {
  const value = process.env[name];
  return value?.trim() || undefined;
}

export function getNotificationEmail(): string {
  return (
    readEnv("ADMIN_NOTIFICATION_EMAIL") ||
    readEnv("ADMIN_EMAIL") ||
    "za793984@gmail.com"
  );
}

function getFromAddress() {
  const email = readEnv("SMTP_FROM") ?? readEnv("SMTP_LOGIN");
  const name = readEnv("SMTP_FROM_NAME") ?? "Softilect";
  if (!email) return null;
  return { email, name };
}

export function isEmailConfigured(): boolean {
  const apiKey = readEnv("BREVO_API_KEY");
  const smtpKey = readEnv("SMTP_KEY");
  const login = readEnv("SMTP_LOGIN");
  const from = getFromAddress();
  if (!from) return false;
  // Prefer HTTP API key when present; otherwise SMTP login + key.
  if (apiKey?.startsWith("xkeysib-")) return true;
  if (smtpKey?.startsWith("xkeysib-")) return true;
  return Boolean(smtpKey && login);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendViaBrevoApi(params: SendEmailParams): Promise<void> {
  const apiKey = readEnv("BREVO_API_KEY") || readEnv("SMTP_KEY");
  const from = getFromAddress();
  if (!apiKey || !from) {
    throw new Error("Missing Brevo API key or SMTP_FROM.");
  }

  const recipients = (Array.isArray(params.to) ? params.to : [params.to]).filter(
    Boolean,
  );

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: from.name, email: from.email },
      to: recipients.map((email) => ({ email })),
      subject: params.subject,
      htmlContent: params.html,
      textContent: params.text,
      replyTo: params.replyTo ? { email: params.replyTo } : undefined,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("[email] Brevo API error:", response.status, detail);
    throw new Error(`Email delivery failed (${response.status}).`);
  }
}

async function sendViaSmtp(params: SendEmailParams): Promise<void> {
  const host = readEnv("SMTP_SERVER") || "smtp-relay.brevo.com";
  const port = parseInt(readEnv("SMTP_PORT") || "587", 10);
  const user = readEnv("SMTP_LOGIN");
  const pass = readEnv("SMTP_KEY");
  const from = getFromAddress();

  if (!user || !pass || !from) {
    throw new Error("Missing SMTP_LOGIN, SMTP_KEY, or SMTP_FROM.");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"${from.name}" <${from.email}>`,
    to: Array.isArray(params.to) ? params.to.join(", ") : params.to,
    subject: params.subject,
    html: params.html,
    text: params.text,
    replyTo: params.replyTo,
  });
}

export async function sendEmail(params: SendEmailParams): Promise<void> {
  const apiKey = readEnv("BREVO_API_KEY") || readEnv("SMTP_KEY") || "";
  // HTTP API only accepts xkeysib- API keys. xsmtpsib- must use SMTP relay.
  if (apiKey.startsWith("xkeysib-")) {
    await sendViaBrevoApi(params);
    return;
  }
  await sendViaSmtp(params);
}

export async function sendContactNotification(input: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  brief: string;
}): Promise<void> {
  const to = getNotificationEmail();
  const company = input.company?.trim() || "N/A";
  const subject = `Softilect project brief${input.company?.trim() ? ` · ${input.company.trim()}` : ""}`;

  const text = [
    "New contact form submission from Softilect.",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone}`,
    `Company: ${company}`,
    "",
    "Brief:",
    input.brief,
  ].join("\n");

  const html = `
    <div style="font-family:Georgia,serif;line-height:1.6;color:#101820;">
      <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#1f8a70;">Softilect contact</p>
      <h1 style="margin:0 0 20px;font-size:24px;">New project brief</h1>
      <p><strong>Name:</strong> ${escapeHtml(input.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(input.phone)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company)}</p>
      <p style="margin:24px 0 8px;"><strong>Brief</strong></p>
      <p style="white-space:pre-wrap;background:#f5f7f9;padding:16px;border:1px solid rgba(16,24,32,0.1);">${escapeHtml(input.brief)}</p>
    </div>
  `;

  await sendEmail({
    to,
    subject,
    html,
    text,
    replyTo: input.email,
  });
}
