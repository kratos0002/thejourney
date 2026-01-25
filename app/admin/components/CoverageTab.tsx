"use client";

import { useState } from "react";
import { type CoverageAnalysis, WORD_SUGGESTIONS } from "@/lib/etymology-analyzer";

interface Props {
  coverage: {
    analysis: CoverageAnalysis;
    report: string;
    existingSlugs: string[];
  };
}

export default function CoverageTab({ coverage }: Props) {
  const { analysis, existingSlugs } = coverage;
  const [expandedFamily, setExpandedFamily] = useState<string | null>(null);

  const sortedFamilies = Object.entries(analysis.byLanguageFamily).sort(
    (a, b) => b[1] - a[1]
  );

  const allFamiliesFromSuggestions = Object.keys(WORD_SUGGESTIONS);

  return (
    <div className="space-y-8">
      {/* Stats Summary */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-3xl font-bold text-blue-600">{analysis.totalWords}</div>
          <div className="text-sm text-gray-500">Total Words</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-3xl font-bold text-green-600">{sortedFamilies.length}</div>
          <div className="text-sm text-gray-500">Language Families</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-3xl font-bold text-amber-600">{analysis.gaps.uncoveredFamilies.length}</div>
          <div className="text-sm text-gray-500">Uncovered Families</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-3xl font-bold text-purple-600">{Object.keys(analysis.byRoute).length}</div>
          <div className="text-sm text-gray-500">Unique Routes</div>
        </div>
      </div>

      {/* Gaps Section */}
      {analysis.gaps.uncoveredFamilies.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h3 className="font-semibold text-amber-800 mb-2">Uncovered Language Families</h3>
          <div className="flex flex-wrap gap-2">
            {analysis.gaps.uncoveredFamilies.map((family) => (
              <span
                key={family}
                className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-sm cursor-pointer hover:bg-amber-200"
                onClick={() => setExpandedFamily(expandedFamily === family ? null : family)}
              >
                {family}
              </span>
            ))}
          </div>
        </div>
      )}

      {analysis.gaps.underrepresentedFamilies.length > 0 && (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <h3 className="font-semibold text-orange-800 mb-2">Underrepresented (&lt;2 words)</h3>
          <div className="flex flex-wrap gap-2">
            {analysis.gaps.underrepresentedFamilies.map((family) => (
              <span
                key={family}
                className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-sm cursor-pointer hover:bg-orange-200"
                onClick={() => setExpandedFamily(expandedFamily === family ? null : family)}
              >
                {family}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Word Suggestions by Family */}
      <div className="bg-white rounded-lg shadow">
        <h3 className="font-semibold text-gray-800 p-4 border-b">Word Suggestions by Family</h3>
        <div className="divide-y">
          {allFamiliesFromSuggestions.map((family) => {
            const suggestions = WORD_SUGGESTIONS[family] || [];
            const isUncovered = analysis.gaps.uncoveredFamilies.includes(family);
            const isUnderrepresented = analysis.gaps.underrepresentedFamilies.includes(family);
            const currentCount = analysis.byLanguageFamily[family] || 0;

            return (
              <div key={family} className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{family}</span>
                    {isUncovered && (
                      <span className="px-1.5 py-0.5 bg-red-100 text-red-700 text-xs rounded">UNCOVERED</span>
                    )}
                    {isUnderrepresented && !isUncovered && (
                      <span className="px-1.5 py-0.5 bg-amber-100 text-amber-700 text-xs rounded">NEEDS MORE</span>
                    )}
                    {!isUncovered && !isUnderrepresented && (
                      <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-xs rounded">COVERED ({currentCount})</span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {suggestions.map((suggestion) => {
                    const exists = existingSlugs.includes(suggestion.word.toLowerCase());
                    return (
                      <div
                        key={suggestion.word}
                        className={`p-3 rounded border ${
                          exists
                            ? "bg-gray-50 border-gray-200 opacity-50"
                            : "bg-blue-50 border-blue-200"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{suggestion.word}</span>
                          {exists && (
                            <span className="text-xs text-gray-500">(exists)</span>
                          )}
                        </div>
                        <div className="text-xs text-gray-500">{suggestion.origin}</div>
                        <div className="text-sm text-gray-700 mt-1 line-clamp-2">
                          {suggestion.hook}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Coverage by Language Family */}
      <div className="bg-white rounded-lg shadow">
        <h3 className="font-semibold text-gray-800 p-4 border-b">Coverage by Language Family</h3>
        <div className="p-4 space-y-2">
          {sortedFamilies.map(([family, count]) => {
            const maxCount = sortedFamilies[0]?.[1] || 1;
            const percentage = (count / maxCount) * 100;
            return (
              <div key={family} className="flex items-center gap-3">
                <div className="w-32 text-sm font-medium text-gray-700">{family}</div>
                <div className="flex-1 h-6 bg-gray-100 rounded overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="w-8 text-sm text-gray-500">{count}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Routes */}
      <div className="bg-white rounded-lg shadow">
        <h3 className="font-semibold text-gray-800 p-4 border-b">Routes</h3>
        <div className="p-4 space-y-2 max-h-96 overflow-y-auto">
          {Object.entries(analysis.byRoute)
            .sort((a, b) => b[1].length - a[1].length)
            .map(([route, slugs]) => (
              <div key={route} className="flex items-start gap-3 text-sm">
                <div className="w-48 font-mono text-gray-600 flex-shrink-0">{route}</div>
                <div className="flex flex-wrap gap-1">
                  {slugs.map((slug) => (
                    <span key={slug} className="px-1.5 py-0.5 bg-gray-100 rounded text-xs">
                      {slug}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Existing Words */}
      <div className="bg-white rounded-lg shadow">
        <h3 className="font-semibold text-gray-800 p-4 border-b">
          Existing Words ({existingSlugs.length})
        </h3>
        <div className="p-4">
          <div className="flex flex-wrap gap-2">
            {existingSlugs.sort().map((slug) => (
              <a
                key={slug}
                href={`/admin/${slug}`}
                className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm text-gray-700"
              >
                {slug}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
