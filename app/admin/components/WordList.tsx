"use client";

import { useState } from "react";
import DeleteButton from "./DeleteButton";

interface WordRow {
  slug: string;
  word: string;
  romanization: string;
  language: string;
  updated_at: string;
}

export default function WordList({ words }: { words: WordRow[] }) {
  const [search, setSearch] = useState("");

  const filtered = words.filter(w =>
    w.slug.includes(search.toLowerCase()) ||
    w.romanization.toLowerCase().includes(search.toLowerCase()) ||
    w.language.toLowerCase().includes(search.toLowerCase()) ||
    w.word.includes(search)
  );

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search words..."
          className="w-full max-w-sm border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Word</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Romanization</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Language</th>
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
