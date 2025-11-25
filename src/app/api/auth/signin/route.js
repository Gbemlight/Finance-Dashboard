import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body || {};

    if (!email) {
      return NextResponse.json({ success: false, message: "Email required" }, { status: 400 });
    }

    // For now just acknowledge receiving the email (you can extend this to log to DB)
    // IMPORTANT: Do NOT send/store raw passwords here in production. This endpoint receives
    // only the email after successful client-side authentication.
    return NextResponse.json({ success: true, received: { email } }, { status: 200 });
  } catch (err) {
    const message = err?.message || String(err);
    return NextResponse.json({ success: false, message }, { status: 400 });
  }
}
