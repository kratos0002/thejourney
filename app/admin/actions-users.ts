"use server";

import { createServerSupabase } from "@/lib/supabase/server";
import { createAdminSupabase } from "@/lib/supabase/admin";

async function requireAdmin() {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    throw new Error("Unauthorized");
  }
  return user;
}

export interface UserWithStats {
  id: string;
  email: string | undefined;
  created_at: string;
  last_sign_in_at: string | null;
  words_explored: number;
}

export async function getUsers(): Promise<UserWithStats[]> {
  await requireAdmin();
  const supabase = createAdminSupabase();

  // Get all users from auth
  const { data: authData, error: authError } = await supabase.auth.admin.listUsers({
    page: 1,
    perPage: 1000,
  });

  if (authError) throw new Error(authError.message);

  // Get exploration counts per user
  const { data: explorationData } = await supabase
    .from("explored_words")
    .select("user_id");

  // Count explorations per user
  const explorationCounts: Record<string, number> = {};
  if (explorationData) {
    for (const row of explorationData) {
      explorationCounts[row.user_id] = (explorationCounts[row.user_id] || 0) + 1;
    }
  }

  // Combine data
  const users: UserWithStats[] = authData.users.map((user) => ({
    id: user.id,
    email: user.email,
    created_at: user.created_at,
    last_sign_in_at: user.last_sign_in_at ?? null,
    words_explored: explorationCounts[user.id] || 0,
  }));

  // Sort by most recent signup first
  users.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

  return users;
}

export async function getUserStats() {
  await requireAdmin();
  const supabase = createAdminSupabase();

  const { data: authData } = await supabase.auth.admin.listUsers({
    page: 1,
    perPage: 1000,
  });

  const totalUsers = authData?.users.length || 0;

  // Users who signed up in the last 7 days
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  const newUsersThisWeek = authData?.users.filter(
    (u) => new Date(u.created_at) > weekAgo
  ).length || 0;

  // Users who signed up today
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const newUsersToday = authData?.users.filter(
    (u) => new Date(u.created_at) > today
  ).length || 0;

  // Get total explorations
  const { count: totalExplorations } = await supabase
    .from("explored_words")
    .select("*", { count: "exact", head: true });

  return {
    totalUsers,
    newUsersThisWeek,
    newUsersToday,
    totalExplorations: totalExplorations || 0,
  };
}
