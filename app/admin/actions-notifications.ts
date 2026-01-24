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

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  notification_type: string;
  target_user_id: string | null;
  feedback_id: string | null;
  is_active: boolean;
  created_at: string;
  expires_at: string | null;
}

export async function getNotifications(): Promise<NotificationItem[]> {
  await requireAdmin();
  const supabase = createAdminSupabase();

  const { data, error } = await supabase
    .from("notifications")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return (data || []) as unknown as NotificationItem[];
}

export async function createNotification(input: {
  title: string;
  message: string;
  notificationType: string;
  targetUserId?: string;
  expiresAt?: string;
}): Promise<{ error?: string }> {
  await requireAdmin();
  const supabase = createAdminSupabase();

  const { error } = await supabase.from("notifications").insert({
    title: input.title,
    message: input.message,
    notification_type: input.notificationType as "feature" | "update" | "tip" | "bug_fix" | "feedback_response",
    target_user_id: input.targetUserId || null,
    expires_at: input.expiresAt || null,
    is_active: true,
  });

  if (error) return { error: error.message };
  return {};
}

export async function toggleNotification(
  id: string,
  isActive: boolean
): Promise<{ error?: string }> {
  await requireAdmin();
  const supabase = createAdminSupabase();

  const { error } = await supabase
    .from("notifications")
    .update({ is_active: isActive })
    .eq("id", id);

  if (error) return { error: error.message };
  return {};
}

export async function deleteNotification(id: string): Promise<{ error?: string }> {
  await requireAdmin();
  const supabase = createAdminSupabase();

  const { error } = await supabase
    .from("notifications")
    .delete()
    .eq("id", id);

  if (error) return { error: error.message };
  return {};
}
