"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

export function useFeatureFlag(flagKey: string): boolean {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    supabase
      .from("feature_flags")
      .select("is_enabled")
      .eq("flag_key", flagKey)
      .single()
      .then(({ data }) => {
        if (data) setEnabled(data.is_enabled);
      });
  }, [flagKey]);

  return enabled;
}
