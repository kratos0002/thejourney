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

export interface FeedbackItem {
  id: string;
  user_id: string;
  feedback_type: "word_suggestion" | "word_improvement" | "general";
  feedback_text: string;
  word_slug: string | null;
  user_context: Record<string, unknown>;
  status: "new" | "reviewing" | "planned" | "completed" | "closed";
  admin_response: string | null;
  internal_notes: string | null;
  created_at: string;
  updated_at: string;
}

export async function getFeedbackSubmissions(filters?: {
  type?: string;
  status?: string;
}): Promise<FeedbackItem[]> {
  await requireAdmin();
  const supabase = createAdminSupabase();

  let query = supabase
    .from("feedback_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  if (filters?.type && filters.type !== "all") {
    query = query.eq("feedback_type", filters.type as "word_suggestion" | "word_improvement" | "general");
  }
  if (filters?.status && filters.status !== "all") {
    query = query.eq("status", filters.status as "new" | "reviewing" | "planned" | "completed" | "closed");
  }

  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return (data || []) as unknown as FeedbackItem[];
}

export async function getNewFeedbackCount(): Promise<number> {
  await requireAdmin();
  const supabase = createAdminSupabase();

  const { count, error } = await supabase
    .from("feedback_submissions")
    .select("id", { count: "exact", head: true })
    .eq("status", "new");

  if (error) throw new Error(error.message);
  return count || 0;
}

export async function updateFeedbackStatus(
  id: string,
  status: string
): Promise<{ error?: string }> {
  await requireAdmin();
  const supabase = createAdminSupabase();

  const { error } = await supabase
    .from("feedback_submissions")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) return { error: error.message };
  return {};
}

export async function updateFeedbackNotes(
  id: string,
  notes: string
): Promise<{ error?: string }> {
  await requireAdmin();
  const supabase = createAdminSupabase();

  const { error } = await supabase
    .from("feedback_submissions")
    .update({ internal_notes: notes, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) return { error: error.message };
  return {};
}

export async function respondToFeedback(
  id: string,
  response: string,
  status: string
): Promise<{ error?: string }> {
  await requireAdmin();
  const supabase = createAdminSupabase();

  // Get the feedback to find the user
  const { data: feedback } = await supabase
    .from("feedback_submissions")
    .select("user_id, feedback_type, feedback_text")
    .eq("id", id)
    .single();

  if (!feedback) return { error: "Feedback not found" };

  // Update the feedback with response
  const { error: updateError } = await supabase
    .from("feedback_submissions")
    .update({
      admin_response: response,
      status,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (updateError) return { error: updateError.message };

  // Create a targeted notification for the user
  const { error: notifError } = await supabase
    .from("notifications")
    .insert({
      title: "Your feedback was reviewed",
      message: response,
      notification_type: "feedback_response",
      target_user_id: feedback.user_id,
      feedback_id: id,
      is_active: true,
    });

  if (notifError) return { error: notifError.message };

  return {};
}
