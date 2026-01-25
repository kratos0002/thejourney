"use client";

import { useState, useTransition } from "react";
import { syncAllWordsToDatabase } from "../actions";

export default function SyncWordsButton() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{
    inserted: number;
    errors: string[];
  } | null>(null);

  const handleSync = () => {
    startTransition(async () => {
      const res = await syncAllWordsToDatabase();
      setResult(res);
    });
  };

  return (
    <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium text-amber-900">Sync Local Words to Database</h3>
          <p className="text-sm text-amber-700">
            Push all 100 words from local data files to Supabase
          </p>
        </div>
        <button
          onClick={handleSync}
          disabled={isPending}
          className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Syncing..." : "Sync All Words"}
        </button>
      </div>
      {result && (
        <div className="mt-3 text-sm">
          <p className="text-green-700">
            Synced {result.inserted} words to database
          </p>
          {result.errors.length > 0 && (
            <div className="mt-2 text-red-600">
              <p>Errors:</p>
              <ul className="list-disc list-inside">
                {result.errors.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
