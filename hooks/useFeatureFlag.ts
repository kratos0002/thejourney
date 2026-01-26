"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { useExploration } from "@/components/ExplorationProvider";

export function useFeatureFlag(flagKey: string): boolean {
  const [enabled, setEnabled] = useState(false);
  const { user } = useExploration();

  useEffect(() => {
    async function checkFlag() {
      // Fetch the flag
      const { data } = await supabase
        .from("feature_flags")
        .select("is_enabled, admin_only")
        .eq("flag_key", flagKey)
        .single();

      if (!data) {
        setEnabled(false);
        return;
      }

      // If flag is not enabled at all, return false
      if (!data.is_enabled) {
        setEnabled(false);
        return;
      }

      // If flag is admin_only, check via server
      if (data.admin_only) {
        try {
          const res = await fetch("/api/admin-check");
          const { isAdmin } = await res.json();
          setEnabled(isAdmin);
        } catch {
          setEnabled(false);
        }
        return;
      }

      // Flag is enabled for everyone
      setEnabled(true);
    }

    checkFlag();
  }, [flagKey, user]);

  return enabled;
}
