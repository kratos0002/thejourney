"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useExploration } from "./ExplorationProvider";
import { supabase } from "@/lib/supabase/client";

export type ThemeOption = "night-sky" | "parchment" | "system";
export type ResolvedTheme = "night-sky" | "parchment";

interface ThemeContextType {
  theme: ThemeOption;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: ThemeOption) => void;
  classroomMode: boolean;
  setClassroomMode: (enabled: boolean) => void;
  isLoading: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "night-sky",
  resolvedTheme: "night-sky",
  setTheme: () => {},
  classroomMode: false,
  setClassroomMode: () => {},
  isLoading: true,
});

export function useTheme() {
  return useContext(ThemeContext);
}

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "night-sky";
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "parchment"
    : "night-sky";
}

function resolveTheme(theme: ThemeOption): ResolvedTheme {
  if (theme === "system") {
    return getSystemTheme();
  }
  return theme;
}

function applyTheme(resolvedTheme: ResolvedTheme) {
  if (typeof document === "undefined") return;

  const html = document.documentElement;

  if (resolvedTheme === "parchment") {
    html.setAttribute("data-theme", "parchment");
  } else {
    html.removeAttribute("data-theme");
  }

  // Update meta theme-color for PWA
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute(
      "content",
      resolvedTheme === "parchment" ? "#f8f5ef" : "#0a0a14"
    );
  }
}

function applyClassroomMode(enabled: boolean) {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  if (enabled) {
    html.setAttribute("data-classroom", "true");
  } else {
    html.removeAttribute("data-classroom");
  }
}

interface Props {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const { user } = useExploration();
  const [theme, setThemeState] = useState<ThemeOption>("night-sky");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("night-sky");
  const [classroomMode, setClassroomModeState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load theme preference from database for logged-in users
  useEffect(() => {
    async function loadThemePreference() {
      if (!user) {
        // Not logged in - use default dark theme
        setThemeState("night-sky");
        setResolvedTheme("night-sky");
        applyTheme("night-sky");
        setClassroomModeState(false);
        applyClassroomMode(false);
        setIsLoading(false);
        return;
      }

      try {
        const { data } = await supabase
          .from("user_preferences")
          .select("theme, classroom_mode")
          .eq("user_id", user.id)
          .single();

        if (data?.theme) {
          const savedTheme = data.theme as ThemeOption;
          setThemeState(savedTheme);
          const resolved = resolveTheme(savedTheme);
          setResolvedTheme(resolved);
          applyTheme(resolved);
        } else {
          applyTheme("night-sky");
        }

        // Load classroom mode preference
        const savedClassroomMode = data?.classroom_mode ?? false;
        setClassroomModeState(savedClassroomMode);
        applyClassroomMode(savedClassroomMode);
      } catch {
        // No preference saved, use default
        applyTheme("night-sky");
        applyClassroomMode(false);
      }

      setIsLoading(false);
    }

    loadThemePreference();
  }, [user]);

  // Listen for system theme changes when using "system" preference
  useEffect(() => {
    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");

    const handleChange = () => {
      const resolved = getSystemTheme();
      setResolvedTheme(resolved);
      applyTheme(resolved);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const setTheme = useCallback(async (newTheme: ThemeOption) => {
    setThemeState(newTheme);
    const resolved = resolveTheme(newTheme);
    setResolvedTheme(resolved);
    applyTheme(resolved);

    // Save to database if logged in
    if (user) {
      try {
        await supabase
          .from("user_preferences")
          .upsert({
            user_id: user.id,
            theme: newTheme,
            updated_at: new Date().toISOString(),
          }, {
            onConflict: "user_id",
          });
      } catch (error) {
        console.error("Failed to save theme preference:", error);
      }
    }
  }, [user]);

  const setClassroomMode = useCallback(async (enabled: boolean) => {
    setClassroomModeState(enabled);
    applyClassroomMode(enabled);

    // Save to database if logged in
    if (user) {
      try {
        await supabase
          .from("user_preferences")
          .upsert({
            user_id: user.id,
            classroom_mode: enabled,
            updated_at: new Date().toISOString(),
          }, {
            onConflict: "user_id",
          });
      } catch (error) {
        console.error("Failed to save classroom mode preference:", error);
      }
    }
  }, [user]);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, classroomMode, setClassroomMode, isLoading }}>
      {children}
    </ThemeContext.Provider>
  );
}
