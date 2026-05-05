import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, reason } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const html = `
      <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #1e293b;">
        <div style="background: linear-gradient(135deg, #7c3aed, #2563eb); padding: 32px 24px; border-radius: 12px 12px 0 0;">
          <h1 style="margin: 0; color: #fff; font-size: 22px; font-weight: 700;">New Demo Request</h1>
          <p style="margin: 6px 0 0; color: rgba(255,255,255,0.75); font-size: 13px;">CUVR Spatial Systems — Hospital Demo Form</p>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px; padding: 28px 24px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #64748b; width: 140px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #1e293b; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #64748b;">Work Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #1e293b; font-weight: 500;">
                <a href="mailto:${email}" style="color: #7c3aed;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #64748b;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #1e293b; font-weight: 500;">${phone || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #64748b;">Hospital / Dept</td>
              <td style="padding: 10px 0; font-size: 14px; color: #1e293b; font-weight: 500;">${reason}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #ede9fe; border-radius: 8px; border-left: 3px solid #7c3aed;">
            <p style="margin: 0; font-size: 12px; color: #5b21b6; font-weight: 600;">Action Required</p>
            <p style="margin: 4px 0 0; font-size: 13px; color: #6d28d9;">
              Reply to this email or contact <a href="mailto:${email}" style="color: #7c3aed;">${email}</a> to schedule their demo.
            </p>
          </div>
          <p style="margin: 20px 0 0; font-size: 11px; color: #94a3b8; text-align: center;">Sent via CUVR Booking System · cuvr.ae</p>
        </div>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "CUVR Booking <onboarding@resend.dev>",
        to: ["nikhil.louis@cuvr.ae"],
        reply_to: email,
        subject: `New Demo Request — ${name}`,
        html,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Booking API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
