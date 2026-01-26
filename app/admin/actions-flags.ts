"use server";

import { createServerSupabase } from "@/lib/supabase/server";
import { createAdminSupabase } from "@/lib/supabase/admin";

async function requireAdmin() {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    throw new Error("Unauthorized");
  }
}

export interface FeatureFlag {
  id: string;
  flag_key: string;
  is_enabled: boolean;
  admin_only: boolean;
  description: string | null;
  updated_at: string;
}

export async function getFeatureFlags(): Promise<FeatureFlag[]> {
  await requireAdmin();
  const supabase = createAdminSupabase();

  const { data, error } = await supabase
    .from("feature_flags")
    .select("*")
    .order("flag_key");

  if (error) throw new Error(error.message);
  return (data || []) as unknown as FeatureFlag[];
}

export async function toggleFeatureFlag(
  id: string,
  isEnabled: boolean
): Promise<{ error?: string }> {
  await requireAdmin();
  const supabase = createAdminSupabase();

  const { error } = await supabase
    .from("feature_flags")
    .update({ is_enabled: isEnabled, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) return { error: error.message };
  return {};
}

export async function createFeatureFlag(input: {
  flagKey: string;
  description?: string;
}): Promise<{ error?: string }> {
  await requireAdmin();
  const supabase = createAdminSupabase();

  const { error } = await supabase.from("feature_flags").insert({
    flag_key: input.flagKey,
    is_enabled: false,
    admin_only: true,
    description: input.description || null,
  });

  if (error) return { error: error.message };
  return {};
}

export async function toggleAdminOnly(
  id: string,
  adminOnly: boolean
): Promise<{ error?: string }> {
  try {
    await requireAdmin();
    const supabase = createAdminSupabase();

    const { error } = await supabase
      .from("feature_flags")
      .update({ admin_only: adminOnly, updated_at: new Date().toISOString() })
      .eq("id", id);

    if (error) {
      console.error("toggleAdminOnly error:", error);
      return { error: error.message };
    }
    return {};
  } catch (e) {
    console.error("toggleAdminOnly exception:", e);
    return { error: e instanceof Error ? e.message : "Unknown error" };
  }
}

export async function deleteFeatureFlag(id: string): Promise<{ error?: string }> {
  await requireAdmin();
  const supabase = createAdminSupabase();

  const { error } = await supabase
    .from("feature_flags")
    .delete()
    .eq("id", id);

  if (error) return { error: error.message };
  return {};
}
