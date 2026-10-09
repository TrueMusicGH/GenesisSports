import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Recipient — the site's Gmail. Override with CONTACT_TO if needed.
const TO = process.env.CONTACT_TO ?? "sb@genesissports.co.in";

function transporter() {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill this hidden field, humans don't.
  if (typeof body.company_website === "string" && body.company_website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const company = String(body.company ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const looking = String(body.looking ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name) return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  if (!EMAIL_RE.test(email))
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  if (!looking) return NextResponse.json({ error: "Please select an option." }, { status: 400 });
  if (message.length < 10)
    return NextResponse.json({ error: "Tell us a little more (min 10 characters)." }, { status: 400 });

  // Fail with a clear message if mail is not configured.
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    return NextResponse.json(
      { error: "Email is not configured yet. Please email us directly at sb@genesissports.co.in." },
      { status: 503 }
    );
  }

  const text = [
    `Name: ${name}`,
    `Company: ${company || "—"}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Looking for: ${looking}`,
    ``,
    message,
  ].join("\n");

  try {
    await transporter().sendMail({
      from: `"Genesis Sports Website" <${process.env.GMAIL_USER}>`,
      to: TO,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `New enquiry — ${looking} (${name})`,
      text,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact mail failed:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please email us directly at sb@genesissports.co.in." },
      { status: 500 }
    );
  }
}
