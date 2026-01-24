"use client";

import { useState } from "react";
import DeleteButton from "./DeleteButton";

interface WordRow {
  slug: string;
  word: string;
  romanization: string;
  language: string;
  source: "manual" | "ai" | null;
  updated_at: string;
}

type SourceFilter = "all" | "ai" | "manual";

export default function WordList({ words }: { words: WordRow[] }) {
  const [search, setSearch] = useState("");
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>("all");

  const aiCount = words.filter(w => w.source === "ai").length;

  const filtered = words.filter(w => {
    const matchesSearch =
      w.slug.includes(search.toLowerCase()) ||
      w.romanization.toLowerCase().includes(search.toLowerCase()) ||
      w.language.toLowerCase().includes(search.toLowerCase()) ||
      w.word.includes(search);

    const matchesSource =
      sourceFilter === "all" ||
      (sourceFilter === "ai" && w.source === "ai") ||
      (sourceFilter === "manual" && w.source !== "ai");

    return matchesSearch && matchesSource;
  });

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search words..."
          className="w-full max-w-sm border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setSourceFilter("all")}
            className={`px-2.5 py-1 text-xs rounded-md border transition-colors ${
              sourceFilter === "all"
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-600 border-gray-300 hover:border-gray-400"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSourceFilter("ai")}
            className={`px-2.5 py-1 text-xs rounded-md border transition-colors ${
              sourceFilter === "ai"
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white text-gray-600 border-gray-300 hover:border-gray-400"
            }`}
          >
            AI ({aiCount})
          </button>
          <button
            onClick={() => setSourceFilter("manual")}
            className={`px-2.5 py-1 text-xs rounded-md border transition-colors ${
              sourceFilter === "manual"
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-600 border-gray-300 hover:border-gray-400"
            }`}
          >
            Manual
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Word</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Romanization</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Language</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Source</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Updated</th>
              <th className="text-right px-4 py-3 font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map(word => (
              <tr key={word.slug} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">{word.word}</td>
                <td className="px-4 py-3">
                  <a href={`/admin/${word.slug}`} className="text-blue-600 hover:text-blue-700 hover:underline">
                    {word.romanization}
                  </a>
                </td>
                <td className="px-4 py-3 text-gray-600">{word.language}</td>
                <td className="px-4 py-3">
                  {word.source === "ai" ? (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-purple-50 text-purple-700 border border-purple-200">
                      AI
                    </span>
                  ) : (
                    <span className="text-xs text-gray-400">manual</span>
                  )}
                </td>
                <td className="px-4 py-3 text-gray-400 text-xs">
                  {new Date(word.updated_at).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <a
                      href={`/word/${word.slug}`}
                      target="_blank"
                      className="text-xs text-gray-400 hover:text-gray-600"
                    >
                      View
                    </a>
                    <a
                      href={`/admin/${word.slug}`}
                      className="text-xs text-blue-500 hover:text-blue-700"
                    >
                      Edit
                    </a>
                    <DeleteButton slug={word.slug} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="text-center py-8 text-gray-400 text-sm">No words found</p>
        )}
      </div>

      <p className="mt-3 text-xs text-gray-400">
        {filtered.length} of {words.length} words
      </p>
    </div>
  );
}
