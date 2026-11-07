import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string;
    email?: string;
    company?: string;
    message?: string;
  };

  if (!body.name?.trim() || !body.email?.includes("@") || !body.message?.trim()) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
