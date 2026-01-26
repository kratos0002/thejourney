import { NextResponse } from "next/server";
import { createServerSupabase } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();

  const adminEmail = process.env.ADMIN_EMAIL;
  const userEmail = user?.email;
  const isAdmin = userEmail === adminEmail;

  console.log(`[admin-check] user=${userEmail}, admin=${adminEmail}, isAdmin=${isAdmin}`);

  return NextResponse.json({ isAdmin });
}
