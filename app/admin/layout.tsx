import { redirect } from "next/navigation";
import { createServerSupabase } from "@/lib/supabase/server";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/admin" className="text-lg font-semibold text-gray-900">
            Journey Admin
          </a>
          <a href="/" className="text-sm text-gray-500 hover:text-gray-700">
            ← Back to site
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">{user.email}</span>
          <a
            href="/admin/new"
            className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            + Add Word
          </a>
        </div>
      </nav>
      <main className="max-w-5xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
}
