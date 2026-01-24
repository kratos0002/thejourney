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
    description: input.description || null,
  });

  if (error) return { error: error.message };
  return {};
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
