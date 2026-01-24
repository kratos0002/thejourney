"use client";

import { useState } from "react";
import { suggestNewWords, generateWordData, createWordFromAI } from "../actions-ai";

interface WordSuggestion {
  word: string;
  romanization: string;
  language: string;
  hook: string;
  summary: string;
}

export default function WordSuggestions({ existingSlugs }: { existingSlugs: string[] }) {
  const [suggestions, setSuggestions] = useState<WordSuggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSuggest = async () => {
    setLoading(true);
    setError(null);
    setSuggestions([]);
    setSuccess(null);
    try {
      const result = await suggestNewWords(existingSlugs);
      // Parse the JSON response — strip markdown fences if present
      const cleaned = result.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();
      const parsed = JSON.parse(cleaned) as WordSuggestion[];
      setSuggestions(parsed);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to get suggestions");
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = async (suggestion: WordSuggestion, index: number) => {
    setGenerating(index);
    setError(null);
    setSuccess(null);
    try {
      const jsonResult = await generateWordData(suggestion.romanization, suggestion.language, suggestion.hook);
      // Strip markdown fences if present
      const cleaned = jsonResult.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();
      const result = await createWordFromAI(cleaned);
      if (result.error) {
        setError(`Failed to create "${suggestion.romanization}": ${result.error}`);
      } else {
        setSuccess(`"${suggestion.romanization}" added successfully!`);
        setSuggestions(prev => prev.filter((_, i) => i !== index));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate word data");
    } finally {
      setGenerating(null);
    }
  };

  return (
    <section className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">AI Word Suggestions</h2>
          <p className="text-xs text-gray-500 mt-0.5">Get 5 new word ideas from the etymologist</p>
        </div>
        <button
          onClick={handleSuggest}
          disabled={loading || generating !== null}
          className="px-4 py-2 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Thinking..." : "Suggest New Words"}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm mb-4">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md text-sm mb-4">
          {success}
        </div>
      )}

      {loading && (
        <div className="flex items-center gap-3 py-8 justify-center text-gray-400">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span className="text-sm">The etymologist is researching fascinating words...</span>
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="space-y-3">
          {suggestions.map((s, i) => (
            <div key={i} className="border border-gray-100 rounded-lg p-4 bg-gray-50 flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-semibold text-gray-900">{s.word}</span>
                  <span className="text-sm text-gray-600">{s.romanization}</span>
                  <span className="text-xs text-gray-400 bg-gray-200 px-1.5 py-0.5 rounded">{s.language}</span>
                </div>
                <p className="text-sm text-purple-700 font-medium mb-1">{s.hook}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{s.summary}</p>
              </div>
              <button
                onClick={() => handleGenerate(s, i)}
                disabled={generating !== null}
                className="shrink-0 px-3 py-1.5 text-xs bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {generating === i ? "Generating..." : "Add"}
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
