import sendgrid from "@sendgrid/mail";
import { NextResponse } from "next/server";

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;
    const data = await sendgrid.send({
      to: "info@findebme.com",
      from: "info@findebme.com",
      subject: `[Inquiry] : ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    if (data[0]?.statusCode === 202) {
      return NextResponse.json({ message: "Email sent successfully" });
    } else {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("SendGrid error:", error);
    return NextResponse.json({ error: "Error sending email" });
  }
}
