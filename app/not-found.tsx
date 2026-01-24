import Link from "next/link";

export default function NotFound() {
  return (
    <main className="fixed inset-0 flex flex-col items-center justify-center bg-abyss px-6">
      <div className="text-center max-w-sm">
        <p className="text-amber-glow/60 text-xs font-body tracking-[0.2em] uppercase mb-4">
          Lost in translation
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-moonlight/80 font-light mb-4">
          404
        </h1>
        <p className="text-mist/40 font-body text-sm leading-relaxed mb-10">
          This word hasn&apos;t been discovered yet. Perhaps it&apos;s still on its journey.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 text-sm text-amber-glow font-body border border-amber-glow/30 rounded-lg hover:bg-amber-glow/10 hover:border-amber-glow/50 transition-all duration-300"
        >
          Return to the beginning
        </Link>
      </div>
    </main>
  );
}
