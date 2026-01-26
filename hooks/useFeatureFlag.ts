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

      // If flag is admin_only, check if current user is admin
      if (data.admin_only) {
        const isAdmin = user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;
        setEnabled(isAdmin);
        return;
      }

      // Flag is enabled for everyone
      setEnabled(true);
    }

    checkFlag();
  }, [flagKey, user]);

  return enabled;
}
