import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");
  const secret = process.env.REVALIDATE_SECRET;

  // Simple auth check - require secret in production
  if (secret && authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Next.js 16 requires a second argument for cache profile
  revalidateTag("words", "default");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
