import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — The Journey",
  description: "How The Journey handles your data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-abyss px-6 py-16 sm:py-24">
      <article className="max-w-xl mx-auto">
        <Link
          href="/"
          className="text-fog/40 hover:text-fog/70 text-sm font-body transition-colors"
        >
          &larr; Back
        </Link>

        <h1 className="font-display text-3xl sm:text-4xl text-moonlight/90 font-light mt-8 mb-10">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-mist/60 font-body text-sm leading-relaxed">
          <section>
            <h2 className="text-moonlight/70 font-display text-lg mb-3">What we collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-moonlight/70">Email address</strong> — used solely for authentication (magic link sign-in). We never share it or send marketing emails.</li>
              <li><strong className="text-moonlight/70">Exploration progress</strong> — which words you&apos;ve visited, stored so your progress syncs across devices.</li>
              <li><strong className="text-moonlight/70">Feedback submissions</strong> — text you voluntarily send us through the feedback form.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-moonlight/70 font-display text-lg mb-3">What we don&apos;t collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>No personal profiles or demographic data</li>
              <li>No third-party trackers or advertising</li>
              <li>No cookies beyond authentication</li>
            </ul>
          </section>

          <section>
            <h2 className="text-moonlight/70 font-display text-lg mb-3">Analytics</h2>
            <p>
              We use Vercel Analytics to understand page views and performance metrics.
              This is privacy-friendly, cookieless, and does not track individual users.
            </p>
          </section>

          <section>
            <h2 className="text-moonlight/70 font-display text-lg mb-3">Data storage</h2>
            <p>
              Your data is stored securely in Supabase (PostgreSQL) with row-level security policies.
              Authentication is handled via Supabase Auth with one-time email codes.
            </p>
          </section>

          <section>
            <h2 className="text-moonlight/70 font-display text-lg mb-3">Data deletion</h2>
            <p>
              You can request deletion of your account and all associated data by contacting us.
              Anonymous exploration data (stored in your browser&apos;s localStorage) can be cleared by you at any time.
            </p>
          </section>

          <section>
            <h2 className="text-moonlight/70 font-display text-lg mb-3">Contact</h2>
            <p>
              Questions about your data? Reach out via the feedback form in the app.
            </p>
          </section>
        </div>

        <p className="mt-12 text-fog/25 text-xs font-body">
          Last updated: January 2026
        </p>
      </article>
    </main>
  );
}
