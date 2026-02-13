import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey) {
      return Response.json(
        { error: "RESEND_API_KEY fehlt (Vercel Environment Variables)" },
        { status: 500 }
      );
    }

    if (!toEmail) {
      return Response.json(
        { error: "CONTACT_TO_EMAIL fehlt (Vercel Environment Variables)" },
        { status: 500 }
      );
    }

    const { name, email, message } = (await req.json()) as Payload;

    if (!email || !message) {
      return Response.json(
        { error: "email und message sind Pflichtfelder" },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const subject = `Kontaktformular: ${name ? name : "Unbekannt"}`;

    const { data, error } = await resend.emails.send({
      from: "Kontaktformular <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject,
      text: `Name: ${name ?? "-"}\nEmail: ${email}\n\nNachricht:\n${message}`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ ok: true, data });
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
