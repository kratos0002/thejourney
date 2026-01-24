"use server";

import { createServerSupabase } from "@/lib/supabase/server";

interface SubmitFeedbackData {
  feedbackType: "word_suggestion" | "word_improvement" | "general";
  feedbackText: string;
  wordSlug?: string;
  userContext?: Record<string, unknown>;
}

export async function submitFeedback(data: SubmitFeedbackData): Promise<{ error?: string }> {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { error: "You must be signed in to submit feedback" };
  }

  if (data.feedbackText.length < 10) {
    return { error: "Feedback must be at least 10 characters" };
  }

  const { error } = await supabase.from("feedback_submissions").insert({
    user_id: user.id,
    feedback_type: data.feedbackType,
    feedback_text: data.feedbackText,
    word_slug: data.wordSlug || null,
    user_context: (data.userContext || {}) as import("@/lib/supabase/types").Json,
  });

  if (error) {
    return { error: error.message };
  }

  return {};
}

export interface UserNotification {
  id: string;
  title: string;
  message: string;
  notification_type: string;
  created_at: string;
}

export async function getUserNotifications(): Promise<UserNotification[]> {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return [];

  // Get dismissed notification IDs
  const { data: dismissals } = await supabase
    .from("user_notification_dismissals")
    .select("notification_id")
    .eq("user_id", user.id);

  const dismissedIds = (dismissals || []).map(d => d.notification_id);

  // Get active notifications for this user (targeted + broadcast)
  let query = supabase
    .from("notifications")
    .select("id, title, message, notification_type, created_at")
    .eq("is_active", true)
    .or(`target_user_id.is.null,target_user_id.eq.${user.id}`)
    .order("created_at", { ascending: false });

  if (dismissedIds.length > 0) {
    query = query.not("id", "in", `(${dismissedIds.join(",")})`);
  }

  const { data } = await query;
  return (data || []) as UserNotification[];
}

export async function getNotificationCount(): Promise<number> {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return 0;

  const { data: dismissals } = await supabase
    .from("user_notification_dismissals")
    .select("notification_id")
    .eq("user_id", user.id);

  const dismissedIds = (dismissals || []).map(d => d.notification_id);

  let query = supabase
    .from("notifications")
    .select("id", { count: "exact", head: true })
    .eq("is_active", true)
    .or(`target_user_id.is.null,target_user_id.eq.${user.id}`);

  if (dismissedIds.length > 0) {
    query = query.not("id", "in", `(${dismissedIds.join(",")})`);
  }

  const { count } = await query;
  return count || 0;
}

export async function dismissNotification(notificationId: string): Promise<{ error?: string }> {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { error: "Not authenticated" };
  }

  const { error } = await supabase.from("user_notification_dismissals").insert({
    user_id: user.id,
    notification_id: notificationId,
  });

  if (error) {
    return { error: error.message };
  }

  return {};
}
