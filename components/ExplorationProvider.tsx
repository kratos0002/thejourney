"use client";

import { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "@/lib/supabase/client";
import { trackEvent, identifyUser, resetUser } from "@/lib/analytics";
import { configureRevenueCat, checkPremiumStatus } from "@/lib/revenuecat";
import type { User } from "@supabase/supabase-js";

const GATE_THRESHOLD = 5;
const PREMIUM_THRESHOLD = 20;
const STORAGE_KEY = "journey-explored";

interface ExplorationContextType {
  user: User | null;
  authReady: boolean;
  exploredSlugs: Set<string>;
  exploredCount: number;
  markExplored: (slug: string) => void;
  shouldShowGate: boolean;
  isPremium: boolean;
  shouldShowPremiumGate: boolean;
  dismissPremiumGate: () => void;
  completePurchase: () => void;
  signInWithEmail: (email: string) => Promise<{ error: string | null }>;
  verifyOtp: (email: string, token: string) => Promise<{ error: string | null }>;
}

const ExplorationContext = createContext<ExplorationContextType>({
  user: null,
  authReady: false,
  exploredSlugs: new Set(),
  exploredCount: 0,
  markExplored: () => {},
  shouldShowGate: false,
  isPremium: false,
  shouldShowPremiumGate: false,
  dismissPremiumGate: () => {},
  completePurchase: () => {},
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
  const [authReady, setAuthReady] = useState(false);
  const [exploredSlugs, setExploredSlugs] = useState<Set<string>>(new Set());
  const [shouldShowGate, setShouldShowGate] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [premiumChecked, setPremiumChecked] = useState(false);
  const [premiumGateDismissed, setPremiumGateDismissed] = useState(false);
  const initializedRef = useRef(false);
  const userRef = useRef<User | null>(null);
  const isPremiumRef = useRef(false);
  const syncingRef = useRef(false);

  // Derive shouldShowPremiumGate from actual state
  const shouldShowPremiumGate =
    user !== null &&
    premiumChecked &&
    !isPremium &&
    exploredSlugs.size >= PREMIUM_THRESHOLD &&
    !premiumGateDismissed;

  // Keep refs in sync
  useEffect(() => { userRef.current = user; }, [user]);
  useEffect(() => { isPremiumRef.current = isPremium; }, [isPremium]);

  // Load initial state via onAuthStateChange
  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    // Load localStorage immediately (shows data while DB syncs)
    setExploredSlugs(new Set(getLocalSlugs()));

    const handleSession = async (session: { user: User } | null) => {
      setAuthReady(true);
      if (session?.user) {
        setUser(session.user);
        identifyUser(session.user.id, session.user.email ?? undefined);
        setShouldShowGate(false);
        await syncFromDatabase(session.user.id);
        initRevenueCat(session.user.id);
      } else {
        setUser(null);
        setIsPremium(false);
        resetUser();
        setExploredSlugs(new Set(getLocalSlugs()));
      }
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        handleSession(session);
      }
    );

    // Fallback: explicitly check session in case onAuthStateChange doesn't fire
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user && !userRef.current) {
        handleSession(session);
      } else if (!session) {
        setAuthReady(true);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Non-blocking RevenueCat initialization
  const initRevenueCat = (userId: string) => {
    configureRevenueCat(userId)
      .then(() => checkPremiumStatus())
      .then((premium) => {
        setIsPremium(premium);
        setPremiumChecked(true);
      })
      .catch((e) => {
        console.warn("[Journey] RevenueCat init failed:", e);
        setPremiumChecked(true); // Still mark as checked so gate can show
      });
  };

  // Re-sync when tab becomes visible (handles cross-tab/device scenarios)
  useEffect(() => {
    const handleVisibility = async () => {
      if (document.visibilityState !== "visible") return;
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
        await syncFromDatabase(session.user.id);
        initRevenueCat(session.user.id);
      } else {
        setExploredSlugs(new Set(getLocalSlugs()));
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // Listen for cross-tab localStorage changes
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY) return;
      const updated = new Set(getLocalSlugs());
      setExploredSlugs(updated);
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Merge localStorage into DB, then load the union of both
  const syncFromDatabase = async (userId: string) => {
    if (syncingRef.current) return;
    syncingRef.current = true;

    try {
      const localSlugs = getLocalSlugs();

      // Push any local slugs to DB
      if (localSlugs.length > 0) {
        const rows = localSlugs.map((slug) => ({ user_id: userId, slug }));
        const { error: upsertErr } = await supabase.from("explored_words").upsert(rows, {
          onConflict: "user_id,slug",
          ignoreDuplicates: true,
        });
        if (upsertErr) console.warn("[Journey] Sync upsert failed:", upsertErr.message);
      }

      // Fetch all from DB
      const { data, error: selectErr } = await supabase
        .from("explored_words")
        .select("slug")
        .eq("user_id", userId);
      if (selectErr) console.warn("[Journey] Sync fetch failed:", selectErr.message);

      if (data) {
        const dbSlugs = data.map((row) => row.slug);
        const merged = new Set([...dbSlugs, ...localSlugs]);
        setExploredSlugs(merged);
        setLocalSlugs(merged);
      } else {
        setExploredSlugs(new Set(localSlugs));
      }
    } finally {
      syncingRef.current = false;
    }
  };

  const markExplored = useCallback((slug: string) => {
    setExploredSlugs((prev) => {
      if (prev.has(slug)) return prev;

      const next = new Set(prev);
      next.add(slug);

      // Always persist to localStorage as durable backup
      setLocalSlugs(next);
      trackEvent("word_explored", { slug, total: next.size });

      const currentUser = userRef.current;
      // Anonymous: check sign-in gate threshold
      if (!currentUser && next.size >= GATE_THRESHOLD) {
        setShouldShowGate(true);
        trackEvent("gate_shown", { explored_count: next.size });
      }
      // Signed in but not premium: track premium gate threshold crossing
      if (currentUser && !isPremiumRef.current && next.size === PREMIUM_THRESHOLD) {
        trackEvent("premium_gate_shown", { explored_count: next.size });
      }
      // Reset dismissed state so gate reappears on new word exploration
      if (currentUser && !isPremiumRef.current && next.size >= PREMIUM_THRESHOLD) {
        setPremiumGateDismissed(false);
      }

      return next;
    });

    // DB write outside the state updater
    const currentUser = userRef.current;
    if (currentUser) {
      supabase.from("explored_words").upsert(
        { user_id: currentUser.id, slug },
        { onConflict: "user_id,slug", ignoreDuplicates: true }
      ).then(({ error }) => {
        if (error) console.warn("[Journey] Failed to sync exploration:", error.message);
      });
    }
  }, []);

  const dismissPremiumGate = useCallback(() => {
    setPremiumGateDismissed(true);
  }, []);

  const completePurchase = useCallback(() => {
    setIsPremium(true);
    setPremiumGateDismissed(true);
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
        authReady,
        exploredSlugs,
        exploredCount: exploredSlugs.size,
        markExplored,
        shouldShowGate,
        isPremium,
        shouldShowPremiumGate,
        dismissPremiumGate,
        completePurchase,
        signInWithEmail,
        verifyOtp,
      }}
    >
      {children}
    </ExplorationContext.Provider>
  );
}
