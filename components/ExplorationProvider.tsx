"use client";

import { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

const GATE_THRESHOLD = 5;
const STORAGE_KEY = "journey-explored";

interface ExplorationContextType {
  user: User | null;
  exploredSlugs: Set<string>;
  exploredCount: number;
  markExplored: (slug: string) => void;
  shouldShowGate: boolean;
  signInWithEmail: (email: string) => Promise<{ error: string | null }>;
  verifyOtp: (email: string, token: string) => Promise<{ error: string | null }>;
}

const ExplorationContext = createContext<ExplorationContextType>({
  user: null,
  exploredSlugs: new Set(),
  exploredCount: 0,
  markExplored: () => {},
  shouldShowGate: false,
  signInWithEmail: async () => ({ error: null }),
  verifyOtp: async () => ({ error: null }),
});

export function useExploration() {
  return useContext(ExplorationContext);
}

// Helper: read localStorage slugs
function getLocalSlugs(): string[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return [];
}

// Helper: write slugs to localStorage
function setLocalSlugs(slugs: Set<string>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...slugs]));
  } catch {}
}

export function ExplorationProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [exploredSlugs, setExploredSlugs] = useState<Set<string>>(new Set());
  const [shouldShowGate, setShouldShowGate] = useState(false);
  const initializedRef = useRef(false);
  const userRef = useRef<User | null>(null);

  // Keep userRef in sync
  useEffect(() => { userRef.current = user; }, [user]);

  // Load initial state
  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
        syncFromDatabase(session.user.id);
      } else {
        // Anonymous: load from localStorage only
        setExploredSlugs(new Set(getLocalSlugs()));
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN" && session?.user) {
          setUser(session.user);
          await syncFromDatabase(session.user.id);
          setShouldShowGate(false);
        } else if (event === "SIGNED_OUT") {
          setUser(null);
          setExploredSlugs(new Set(getLocalSlugs()));
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  // Merge localStorage into DB, then load the union of both
  const syncFromDatabase = async (userId: string) => {
    const localSlugs = getLocalSlugs();

    // Push any local slugs to DB
    if (localSlugs.length > 0) {
      const rows = localSlugs.map((slug) => ({ user_id: userId, slug }));
      await supabase.from("explored_words").upsert(rows, {
        onConflict: "user_id,slug",
        ignoreDuplicates: true,
      });
    }

    // Fetch all from DB
    const { data } = await supabase
      .from("explored_words")
      .select("slug")
      .eq("user_id", userId);

    if (data) {
      const dbSlugs = data.map((row) => row.slug);
      // Union of DB + local (in case DB write partially failed)
      const merged = new Set([...dbSlugs, ...localSlugs]);
      setExploredSlugs(merged);
      // Update localStorage to match the full set
      setLocalSlugs(merged);
    } else {
      // DB fetch failed — fall back to localStorage
      setExploredSlugs(new Set(localSlugs));
    }
  };

  const markExplored = useCallback((slug: string) => {
    setExploredSlugs((prev) => {
      if (prev.has(slug)) return prev;

      const next = new Set(prev);
      next.add(slug);

      // Always persist to localStorage as durable backup
      setLocalSlugs(next);

      const currentUser = userRef.current;
      if (currentUser) {
        // Also persist to database
        supabase.from("explored_words").upsert(
          { user_id: currentUser.id, slug },
          { onConflict: "user_id,slug", ignoreDuplicates: true }
        );
      } else {
        // Anonymous: check gate threshold
        if (next.size >= GATE_THRESHOLD) {
          setShouldShowGate(true);
        }
      }

      return next;
    });
  }, []);

  const signInWithEmail = useCallback(async (email: string) => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    return { error: error?.message || null };
  }, []);

  const verifyOtp = useCallback(async (email: string, token: string) => {
    const { error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: "email",
    });
    return { error: error?.message || null };
  }, []);

  return (
    <ExplorationContext.Provider
      value={{
        user,
        exploredSlugs,
        exploredCount: exploredSlugs.size,
        markExplored,
        shouldShowGate,
        signInWithEmail,
        verifyOtp,
      }}
    >
      {children}
    </ExplorationContext.Provider>
  );
}
