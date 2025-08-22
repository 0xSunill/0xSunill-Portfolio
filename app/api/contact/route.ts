// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";        // <- important
export const dynamic = "force-dynamic"; // ok for API

export async function POST(req: Request) {
  try {
    const { name, email, kind, message, budget } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY missing");
      return NextResponse.json({ ok: false, error: "Email service not configured" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const subject = `New contact: ${kind || "general"} — ${name}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Type: ${kind}`,
      budget ? `Budget: ${budget}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const from = process.env.MAIL_FROM || "onboarding@resend.dev";   // use this in dev
    const to = process.env.MAIL_TO || "sunilre6776@gmail.com";

    const { data, error } = await resend.emails.send({
      from,
      to,                   // can be string or string[]
      replyTo: email,
      subject,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (e) {
    console.error("Contact route error:", e);
    return NextResponse.json({ ok: false, error: "Unexpected server error" }, { status: 500 });
  }
}
