import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); // set in .env

export async function POST(req: Request) {
  try {
    const { name, email, kind, message, budget } = await req.json();

    // minimal validation server-side
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const subject = `New contact: ${kind || "general"} — ${name}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Type: ${kind}`,
      budget ? `Budget: ${budget}` : null,
      "",
      message,
    ].filter(Boolean).join("\n");

    await resend.emails.send({
      from: "Portfolio <noreply@your-domain.com>",
      to: ["sunday7637@gmail.com"], // change this
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
