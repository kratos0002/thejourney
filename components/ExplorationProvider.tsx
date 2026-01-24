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

export function ExplorationProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [exploredSlugs, setExploredSlugs] = useState<Set<string>>(new Set());
  const [shouldShowGate, setShouldShowGate] = useState(false);
  const initializedRef = useRef(false);

  // Load initial state
  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    // Check existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
        loadFromDatabase(session.user.id);
      } else {
        loadFromLocalStorage();
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN" && session?.user) {
          setUser(session.user);
          await mergeLocalToDatabase(session.user.id);
          await loadFromDatabase(session.user.id);
          setShouldShowGate(false);
        } else if (event === "SIGNED_OUT") {
          setUser(null);
          setExploredSlugs(new Set());
          loadFromLocalStorage();
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const loadFromLocalStorage = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const slugs: string[] = JSON.parse(stored);
        setExploredSlugs(new Set(slugs));
      }
    } catch {}
  };

  const loadFromDatabase = async (userId: string) => {
    const { data } = await supabase
      .from("explored_words")
      .select("slug")
      .eq("user_id", userId);

    if (data) {
      setExploredSlugs(new Set(data.map((row) => row.slug)));
    }
  };

  const mergeLocalToDatabase = async (userId: string) => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return;

      const localSlugs: string[] = JSON.parse(stored);
      if (localSlugs.length === 0) return;

      const rows = localSlugs.map((slug) => ({
        user_id: userId,
        slug,
      }));

      await supabase.from("explored_words").upsert(rows, {
        onConflict: "user_id,slug",
        ignoreDuplicates: true,
      });

      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  const markExplored = useCallback((slug: string) => {
    setExploredSlugs((prev) => {
      if (prev.has(slug)) return prev;

      const next = new Set(prev);
      next.add(slug);

      if (user) {
        // Authenticated: persist to database
        supabase.from("explored_words").upsert(
          { user_id: user.id, slug },
          { onConflict: "user_id,slug", ignoreDuplicates: true }
        );
      } else {
        // Anonymous: persist to localStorage
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));

        // Check gate threshold
        if (next.size >= GATE_THRESHOLD) {
          setShouldShowGate(true);
        }
      }

      return next;
    });
  }, [user]);

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
