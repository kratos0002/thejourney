import { NextResponse } from "next/server";
import { createServerSupabase } from "@/lib/supabase/server";

export async function GET() {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();

  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return NextResponse.json({ isAdmin });
}
