"use client";

import { useState } from "react";
import type { Word } from "@/data/word-types";
import { suggestImprovements } from "../actions-ai";

export default function AISuggestions({ word }: { word: Word }) {
  const [suggestions, setSuggestions] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSuggest = async () => {
    setLoading(true);
    setError(null);
    setSuggestions(null);
    try {
      const result = await suggestImprovements(word);
      setSuggestions(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to get suggestions");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">AI Etymology Assistant</h2>
          <p className="text-xs text-gray-500 mt-0.5">Powered by Perplexity — checks accuracy, suggests improvements</p>
        </div>
        <button
          type="button"
          onClick={handleSuggest}
          disabled={loading}
          className="px-4 py-2 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Analyzing..." : "Suggest Improvements"}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
          {error}
        </div>
      )}

      {loading && (
        <div className="flex items-center gap-3 py-8 justify-center text-gray-400">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span className="text-sm">The etymologist is reviewing this entry...</span>
        </div>
      )}

      {suggestions && (
        <div className="prose prose-sm max-w-none border-t border-gray-100 pt-4 mt-4">
          <div className="whitespace-pre-wrap text-sm text-gray-700 leading-relaxed">
            {suggestions}
          </div>
        </div>
      )}
    </section>
  );
}
