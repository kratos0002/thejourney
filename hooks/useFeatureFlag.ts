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
          const res = await fetch("/api/admin-check", { cache: "no-store" });
          const { isAdmin } = await res.json();
          console.log(`[FeatureFlag] ${flagKey}: admin_only check, isAdmin=${isAdmin}`);
          setEnabled(isAdmin);
        } catch (e) {
          console.error(`[FeatureFlag] ${flagKey}: admin check failed`, e);
          setEnabled(false);
        }
        return;
      }

      console.log(`[FeatureFlag] ${flagKey}: admin_only=${data.admin_only}, enabling for everyone`);

      // Flag is enabled for everyone
      setEnabled(true);
    }

    checkFlag();
  }, [flagKey, user]);

  return enabled;
}
