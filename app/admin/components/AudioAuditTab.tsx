"use client";

import { useState, useTransition, useCallback, useEffect } from "react";
import {
  getWordsForAudit,
  getAudioAuditStats,
  updateAudioVerification,
  bulkMarkStatus,
  type WordAudioInfo,
  type AudioAuditStats,
  type AudioStatus,
} from "../actions-audio";

const STATUS_COLORS: Record<AudioStatus, string> = {
  pending: "bg-gray-100 text-gray-600",
  verified: "bg-green-100 text-green-700",
  incorrect: "bg-red-100 text-red-700",
  needs_review: "bg-amber-100 text-amber-700",
};

const STATUS_LABELS: Record<AudioStatus, string> = {
  pending: "Pending",
  verified: "Verified",
  incorrect: "Incorrect",
  needs_review: "Needs Review",
};

interface Props {
  initialStats: AudioAuditStats;
  initialWords: WordAudioInfo[];
}

export default function AudioAuditTab({ initialStats, initialWords }: Props) {
  const [stats, setStats] = useState(initialStats);
  const [words, setWords] = useState(initialWords);
  const [filter, setFilter] = useState<AudioStatus | "all">("all");
  const [isPending, startTransition] = useTransition();
  const [playingKey, setPlayingKey] = useState<string | null>(null);
  const [expandedWord, setExpandedWord] = useState<string | null>(null);

  // Refresh data when filter changes
  useEffect(() => {
    startTransition(async () => {
      const [newStats, newWords] = await Promise.all([
        getAudioAuditStats(),
        getWordsForAudit(filter),
      ]);
      setStats(newStats);
      setWords(newWords);
    });
  }, [filter]);

  const handlePlay = useCallback((wordSlug: string, soundIndex: number, sound: { text?: string; lang?: string; label: string }) => {
    const key = `${wordSlug}:${soundIndex}`;

    if (typeof window === "undefined" || !window.speechSynthesis) {
      alert("Speech synthesis not supported in this browser");
      return;
    }

    window.speechSynthesis.cancel();
    setPlayingKey(key);

    if (sound.text) {
      const utterance = new SpeechSynthesisUtterance(sound.text);
      if (sound.lang) {
        utterance.lang = sound.lang;
      }
      utterance.rate = 0.8;
      utterance.onend = () => setPlayingKey(null);
      utterance.onerror = () => setPlayingKey(null);
      window.speechSynthesis.speak(utterance);
    } else {
      // No text to speak
      setTimeout(() => setPlayingKey(null), 1000);
    }
  }, []);

  const handleStatusChange = useCallback((
    wordSlug: string,
    soundIndex: number,
    soundLabel: string,
    newStatus: AudioStatus
  ) => {
    // Optimistic update
    setWords(prev => prev.map(w => {
      if (w.slug !== wordSlug) return w;
      return {
        ...w,
        sounds: w.sounds.map(s => {
          if (s.index !== soundIndex) return s;
          return {
            ...s,
            verification: {
              ...s.verification,
              id: s.verification?.id || "",
              word_slug: wordSlug,
              sound_index: soundIndex,
              sound_label: soundLabel,
              status: newStatus,
              audio_url: s.verification?.audio_url || null,
              notes: s.verification?.notes || null,
              verified_by: s.verification?.verified_by || null,
              updated_at: new Date().toISOString(),
            },
          };
        }),
      };
    }));

    startTransition(async () => {
      const { error } = await updateAudioVerification(wordSlug, soundIndex, soundLabel, newStatus);
      if (error) {
        alert(`Failed to update: ${error}`);
        // Refresh to get correct state
        const newWords = await getWordsForAudit(filter);
        setWords(newWords);
      }
      const newStats = await getAudioAuditStats();
      setStats(newStats);
    });
  }, [filter]);

  const handleBulkMark = useCallback((wordSlug: string, status: AudioStatus) => {
    startTransition(async () => {
      const { error } = await bulkMarkStatus(wordSlug, status);
      if (error) {
        alert(`Failed to bulk update: ${error}`);
      }
      const [newStats, newWords] = await Promise.all([
        getAudioAuditStats(),
        getWordsForAudit(filter),
      ]);
      setStats(newStats);
      setWords(newWords);
    });
  }, [filter]);

  return (
    <div className="space-y-6">
      {/* Stats Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-gray-800">{stats.totalWords}</p>
          <p className="text-xs text-gray-500">Words</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-gray-800">{stats.totalSounds}</p>
          <p className="text-xs text-gray-500">Total Sounds</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-green-700">{stats.verified}</p>
          <p className="text-xs text-green-600">Verified</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-red-700">{stats.incorrect}</p>
          <p className="text-xs text-red-600">Incorrect</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-amber-700">{stats.needs_review}</p>
          <p className="text-xs text-amber-600">Needs Review</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span>Audit Progress</span>
          <span>{stats.totalSounds > 0 ? Math.round(((stats.verified + stats.incorrect + stats.needs_review) / stats.totalSounds) * 100) : 0}%</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden flex">
          <div
            className="bg-green-500 transition-all"
            style={{ width: `${stats.totalSounds > 0 ? (stats.verified / stats.totalSounds) * 100 : 0}%` }}
          />
          <div
            className="bg-red-500 transition-all"
            style={{ width: `${stats.totalSounds > 0 ? (stats.incorrect / stats.totalSounds) * 100 : 0}%` }}
          />
          <div
            className="bg-amber-500 transition-all"
            style={{ width: `${stats.totalSounds > 0 ? (stats.needs_review / stats.totalSounds) * 100 : 0}%` }}
          />
        </div>
        <div className="flex gap-4 mt-2 text-xs">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500" /> Verified</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500" /> Incorrect</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500" /> Needs Review</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-300" /> Pending</span>
        </div>
      </div>

      {/* Filter */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Filter:</span>
        <div className="flex gap-1">
          {(["all", "pending", "incorrect", "needs_review", "verified"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 text-xs rounded-lg transition-colors cursor-pointer ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {f === "all" ? "All" : STATUS_LABELS[f]}
            </button>
          ))}
        </div>
        {isPending && (
          <span className="text-xs text-gray-400 ml-2">Loading...</span>
        )}
      </div>

      {/* Words List */}
      <div className="space-y-3">
        {words.length === 0 && (
          <p className="text-gray-500 text-sm text-center py-8">
            {filter === "all" ? "No words with sounds found" : `No words with ${STATUS_LABELS[filter as AudioStatus].toLowerCase()} sounds`}
          </p>
        )}

        {words.map((word) => (
          <div key={word.slug} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            {/* Word Header */}
            <div
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
              onClick={() => setExpandedWord(expandedWord === word.slug ? null : word.slug)}
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-lg text-gray-800">{word.word}</span>
                <code className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-600">{word.slug}</code>
                <span className="text-xs text-gray-400">{word.language}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">{word.sounds.length} sounds</span>
                <div className="flex gap-1">
                  {word.sounds.map((s) => {
                    const status = s.verification?.status || "pending";
                    return (
                      <span
                        key={s.index}
                        className={`w-2 h-2 rounded-full ${
                          status === "verified" ? "bg-green-500" :
                          status === "incorrect" ? "bg-red-500" :
                          status === "needs_review" ? "bg-amber-500" :
                          "bg-gray-300"
                        }`}
                        title={`${s.label}: ${STATUS_LABELS[status]}`}
                      />
                    );
                  })}
                </div>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${expandedWord === word.slug ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Expanded Sounds */}
            {expandedWord === word.slug && (
              <div className="border-t border-gray-100 p-4 space-y-3 bg-gray-50">
                {/* Bulk Actions */}
                <div className="flex items-center gap-2 pb-3 border-b border-gray-200">
                  <span className="text-xs text-gray-500">Mark all as:</span>
                  {(["verified", "incorrect", "needs_review"] as const).map((status) => (
                    <button
                      key={status}
                      onClick={() => handleBulkMark(word.slug, status)}
                      className={`px-2 py-1 text-xs rounded transition-colors cursor-pointer ${STATUS_COLORS[status]} hover:opacity-80`}
                    >
                      {STATUS_LABELS[status]}
                    </button>
                  ))}
                </div>

                {word.sounds.map((sound) => {
                  const key = `${word.slug}:${sound.index}`;
                  const isPlaying = playingKey === key;
                  const status = sound.verification?.status || "pending";

                  return (
                    <div key={sound.index} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-100">
                      {/* Play Button */}
                      <button
                        onClick={() => handlePlay(word.slug, sound.index, sound)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                          isPlaying
                            ? "bg-blue-100 text-blue-600"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                        title="Play pronunciation"
                      >
                        {isPlaying ? (
                          <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                            <rect x="6" y="4" width="4" height="16" />
                            <rect x="14" y="4" width="4" height="16" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <polygon points="5,3 19,12 5,21" />
                          </svg>
                        )}
                      </button>

                      {/* Sound Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-800">{sound.label}</span>
                          {sound.lang && (
                            <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-500">{sound.lang}</code>
                          )}
                        </div>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm font-mono text-gray-600">{sound.ipa}</span>
                          {sound.text && (
                            <span className="text-sm text-gray-400">{sound.text}</span>
                          )}
                        </div>
                      </div>

                      {/* Status Dropdown */}
                      <select
                        value={status}
                        onChange={(e) => handleStatusChange(word.slug, sound.index, sound.label, e.target.value as AudioStatus)}
                        className={`px-3 py-1.5 text-xs rounded-lg border-0 cursor-pointer ${STATUS_COLORS[status]}`}
                      >
                        <option value="pending">Pending</option>
                        <option value="verified">Verified</option>
                        <option value="incorrect">Incorrect</option>
                        <option value="needs_review">Needs Review</option>
                      </select>
                    </div>
                  );
                })}

                {/* TTS Warning */}
                <p className="text-xs text-amber-600 bg-amber-50 rounded p-2 flex items-start gap-2">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>Audio uses browser TTS which may not accurately represent historical pronunciations. Mark as &quot;Incorrect&quot; if pronunciation sounds wrong.</span>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
