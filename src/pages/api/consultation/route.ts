import { NextRequest, NextResponse } from "next/server";

// Stub endpoint. Wire this up to your CRM/email provider (or a Sanity
// "leads" dataset) before going live — currently just validates and logs.
export async function POST(req: NextRequest) {
  const data = await req.json();

  if (!data.name || !data.phone) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  console.log("New consultation request:", data);

  return NextResponse.json({ ok: true });
}
