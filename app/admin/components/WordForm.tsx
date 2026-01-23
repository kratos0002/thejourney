"use client";

import { useState, useTransition } from "react";
import type { Word, JourneyStop, Sound, RelativeWord } from "@/data/word-types";

interface WordFormProps {
  word?: Word;
  action: (formData: FormData) => Promise<{ error: string } | void>;
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function WordForm({ word, action }: WordFormProps) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  // Basic fields
  const [slug, setSlug] = useState(word?.slug ?? "");
  const [wordText, setWordText] = useState(word?.word ?? "");
  const [romanization, setRomanization] = useState(word?.romanization ?? "");
  const [language, setLanguage] = useState(word?.language ?? "");
  const [hook, setHook] = useState(word?.hook ?? "");
  const [meaningNow, setMeaningNow] = useState(word?.meaningNow ?? "");

  // Array fields
  const [story, setStory] = useState<string[]>(word?.story ?? [""]);
  const [journey, setJourney] = useState<JourneyStop[]>(
    word?.journey ?? [{ location: "", period: "", form: "", context: "", coordinates: [0, 0] }]
  );
  const [sounds, setSounds] = useState<Sound[]>(
    word?.sounds ?? [{ label: "", ipa: "" }]
  );
  const [relatives, setRelatives] = useState<RelativeWord[]>(
    word?.relatives ?? [{ word: "", language: "", connection: "", available: false }]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData();
    formData.set("slug", slug);
    formData.set("word", wordText);
    formData.set("romanization", romanization);
    formData.set("language", language);
    formData.set("hook", hook);
    formData.set("meaningNow", meaningNow);
    formData.set("story", JSON.stringify(story.filter(s => s.trim())));
    formData.set("journey", JSON.stringify(journey.filter(j => j.location.trim())));
    formData.set("sounds", JSON.stringify(sounds.filter(s => s.label.trim())));
    formData.set("relatives", JSON.stringify(relatives.filter(r => r.word.trim())));

    startTransition(async () => {
      const result = await action(formData);
      if (result && "error" in result) {
        setError(result.error);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
          {error}
        </div>
      )}

      {/* Basic Info */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Info</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Word (original script)</label>
            <input
              value={wordText}
              onChange={e => setWordText(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Romanization</label>
            <input
              value={romanization}
              onChange={e => {
                setRomanization(e.target.value);
                if (!word) setSlug(slugify(e.target.value));
              }}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
            <input
              value={slug}
              onChange={e => setSlug(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-mono focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
            <input
              value={language}
              onChange={e => setLanguage(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Hook (1-2 sentences)</label>
            <input
              value={hook}
              onChange={e => setHook(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Story Paragraphs</h2>
          <button
            type="button"
            onClick={() => setStory([...story, ""])}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            + Add paragraph
          </button>
        </div>
        <div className="space-y-3">
          {story.map((para, i) => (
            <div key={i} className="flex gap-2">
              <textarea
                value={para}
                onChange={e => {
                  const updated = [...story];
                  updated[i] = e.target.value;
                  setStory(updated);
                }}
                rows={3}
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={`Paragraph ${i + 1}`}
              />
              {story.length > 1 && (
                <button
                  type="button"
                  onClick={() => setStory(story.filter((_, idx) => idx !== i))}
                  className="text-red-400 hover:text-red-600 px-2"
                >
                  &times;
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Journey Stops */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Journey Stops</h2>
          <button
            type="button"
            onClick={() => setJourney([...journey, { location: "", period: "", form: "", context: "", coordinates: [0, 0] }])}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            + Add stop
          </button>
        </div>
        <div className="space-y-4">
          {journey.map((stop, i) => (
            <div key={i} className="border border-gray-100 rounded-lg p-4 bg-gray-50">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-500">Stop {i + 1}</span>
                {journey.length > 1 && (
                  <button
                    type="button"
                    onClick={() => setJourney(journey.filter((_, idx) => idx !== i))}
                    className="text-xs text-red-400 hover:text-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  value={stop.location}
                  onChange={e => { const u = [...journey]; u[i] = { ...u[i], location: e.target.value }; setJourney(u); }}
                  placeholder="Location"
                  className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                />
                <input
                  value={stop.period}
                  onChange={e => { const u = [...journey]; u[i] = { ...u[i], period: e.target.value }; setJourney(u); }}
                  placeholder="Period (e.g. ~1400)"
                  className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                />
                <input
                  value={stop.form}
                  onChange={e => { const u = [...journey]; u[i] = { ...u[i], form: e.target.value }; setJourney(u); }}
                  placeholder="Word form"
                  className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                />
                <input
                  value={stop.script ?? ""}
                  onChange={e => { const u = [...journey]; u[i] = { ...u[i], script: e.target.value || undefined }; setJourney(u); }}
                  placeholder="Script (optional)"
                  className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                />
                <input
                  value={stop.context}
                  onChange={e => { const u = [...journey]; u[i] = { ...u[i], context: e.target.value }; setJourney(u); }}
                  placeholder="Context"
                  className="col-span-2 border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                />
                <input
                  value={stop.color ?? ""}
                  onChange={e => { const u = [...journey]; u[i] = { ...u[i], color: e.target.value || undefined }; setJourney(u); }}
                  placeholder="Color (optional, e.g. #8b5a2b)"
                  className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                />
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={stop.coordinates[0]}
                    onChange={e => { const u = [...journey]; u[i] = { ...u[i], coordinates: [parseFloat(e.target.value) || 0, u[i].coordinates[1]] }; setJourney(u); }}
                    placeholder="Longitude"
                    className="flex-1 border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                    step="any"
                  />
                  <input
                    type="number"
                    value={stop.coordinates[1]}
                    onChange={e => { const u = [...journey]; u[i] = { ...u[i], coordinates: [u[i].coordinates[0], parseFloat(e.target.value) || 0] }; setJourney(u); }}
                    placeholder="Latitude"
                    className="flex-1 border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                    step="any"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sounds */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Sounds</h2>
          <button
            type="button"
            onClick={() => setSounds([...sounds, { label: "", ipa: "" }])}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            + Add sound
          </button>
        </div>
        <div className="space-y-3">
          {sounds.map((sound, i) => (
            <div key={i} className="flex gap-2 items-start">
              <div className="grid grid-cols-4 gap-2 flex-1">
                <input
                  value={sound.label}
                  onChange={e => { const u = [...sounds]; u[i] = { ...u[i], label: e.target.value }; setSounds(u); }}
                  placeholder="Label (e.g. Original Arabic)"
                  className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                />
                <input
                  value={sound.ipa}
                  onChange={e => { const u = [...sounds]; u[i] = { ...u[i], ipa: e.target.value }; setSounds(u); }}
                  placeholder="IPA (e.g. /ˈqah.wa/)"
                  className="border border-gray-300 rounded-md px-3 py-1.5 text-sm font-mono"
                />
                <input
                  value={sound.text ?? ""}
                  onChange={e => { const u = [...sounds]; u[i] = { ...u[i], text: e.target.value || undefined }; setSounds(u); }}
                  placeholder="Text (optional)"
                  className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                />
                <input
                  value={sound.lang ?? ""}
                  onChange={e => { const u = [...sounds]; u[i] = { ...u[i], lang: e.target.value || undefined }; setSounds(u); }}
                  placeholder="Lang code (e.g. ar)"
                  className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                />
              </div>
              {sounds.length > 1 && (
                <button
                  type="button"
                  onClick={() => setSounds(sounds.filter((_, idx) => idx !== i))}
                  className="text-red-400 hover:text-red-600 px-2 mt-1"
                >
                  &times;
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Relatives */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Related Words</h2>
          <button
            type="button"
            onClick={() => setRelatives([...relatives, { word: "", language: "", connection: "", available: false }])}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            + Add relative
          </button>
        </div>
        <div className="space-y-3">
          {relatives.map((rel, i) => (
            <div key={i} className="flex gap-2 items-start">
              <div className="grid grid-cols-4 gap-2 flex-1">
                <input
                  value={rel.word}
                  onChange={e => { const u = [...relatives]; u[i] = { ...u[i], word: e.target.value }; setRelatives(u); }}
                  placeholder="Word"
                  className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                />
                <input
                  value={rel.language}
                  onChange={e => { const u = [...relatives]; u[i] = { ...u[i], language: e.target.value }; setRelatives(u); }}
                  placeholder="Language"
                  className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                />
                <input
                  value={rel.connection}
                  onChange={e => { const u = [...relatives]; u[i] = { ...u[i], connection: e.target.value }; setRelatives(u); }}
                  placeholder="Connection"
                  className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                />
                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-1.5 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      checked={rel.available}
                      onChange={e => { const u = [...relatives]; u[i] = { ...u[i], available: e.target.checked }; setRelatives(u); }}
                      className="rounded"
                    />
                    Available
                  </label>
                  {rel.available && (
                    <input
                      value={rel.slug ?? ""}
                      onChange={e => { const u = [...relatives]; u[i] = { ...u[i], slug: e.target.value || undefined }; setRelatives(u); }}
                      placeholder="Slug"
                      className="flex-1 border border-gray-300 rounded-md px-2 py-1 text-xs font-mono"
                    />
                  )}
                </div>
              </div>
              {relatives.length > 1 && (
                <button
                  type="button"
                  onClick={() => setRelatives(relatives.filter((_, idx) => idx !== i))}
                  className="text-red-400 hover:text-red-600 px-2 mt-1"
                >
                  &times;
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Meaning Now */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Meaning Today</h2>
        <textarea
          value={meaningNow}
          onChange={e => setMeaningNow(e.target.value)}
          rows={6}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="What this word means today..."
          required
        />
      </section>

      {/* Submit */}
      <div className="flex items-center justify-end gap-3">
        <a href="/admin" className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900">
          Cancel
        </a>
        <button
          type="submit"
          disabled={isPending}
          className="px-6 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {isPending ? "Saving..." : word ? "Update Word" : "Create Word"}
        </button>
      </div>
    </form>
  );
}
