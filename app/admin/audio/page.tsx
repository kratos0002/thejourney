import { redirect } from "next/navigation";
import { createServerSupabase } from "@/lib/supabase/server";
import AdminNav from "../components/AdminNav";
import AudioAuditTab from "../components/AudioAuditTab";
import { getAudioAuditStats, getWordsForAudit } from "../actions-audio";

export const dynamic = "force-dynamic";

export default async function AdminAudioPage() {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    redirect("/");
  }

  const [stats, words] = await Promise.all([
    getAudioAuditStats(),
    getWordsForAudit("all"),
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Audio Audit</h1>
          <p className="text-sm text-gray-500 mt-1">
            Verify pronunciation audio for all words. Listen and mark each sound as verified, incorrect, or needs review.
          </p>
        </div>
        <AudioAuditTab initialStats={stats} initialWords={words} />
      </div>
    </main>
  );
}
