"use client";

import { useState, useTransition } from "react";
import { toggleFeatureFlag, toggleAdminOnly, createFeatureFlag, deleteFeatureFlag, type FeatureFlag } from "../actions-flags";

export default function FeatureFlagsTab({ initialFlags }: { initialFlags: FeatureFlag[] }) {
  const [flags, setFlags] = useState(initialFlags);
  const [isPending, startTransition] = useTransition();
  const [newKey, setNewKey] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleToggle = (flag: FeatureFlag) => {
    const newValue = !flag.is_enabled;
    setFlags(prev => prev.map(f => f.id === flag.id ? { ...f, is_enabled: newValue } : f));
    startTransition(async () => {
      const { error } = await toggleFeatureFlag(flag.id, newValue);
      if (error) {
        setFlags(prev => prev.map(f => f.id === flag.id ? { ...f, is_enabled: !newValue } : f));
      }
    });
  };

  const handleToggleAdminOnly = (flag: FeatureFlag) => {
    const newValue = !flag.admin_only;
    setFlags(prev => prev.map(f => f.id === flag.id ? { ...f, admin_only: newValue } : f));
    startTransition(async () => {
      const { error } = await toggleAdminOnly(flag.id, newValue);
      if (error) {
        console.error("Failed to toggle admin_only:", error);
        alert(`Failed to update: ${error}`);
        setFlags(prev => prev.map(f => f.id === flag.id ? { ...f, admin_only: !newValue } : f));
      }
    });
  };

  const handleCreate = () => {
    if (!newKey.trim()) return;
    startTransition(async () => {
      const { error } = await createFeatureFlag({ flagKey: newKey.trim(), description: newDesc.trim() || undefined });
      if (!error) {
        setFlags(prev => [...prev, {
          id: crypto.randomUUID(),
          flag_key: newKey.trim(),
          is_enabled: false,
          admin_only: true,
          description: newDesc.trim() || null,
          updated_at: new Date().toISOString(),
        }]);
        setNewKey("");
        setNewDesc("");
        setShowForm(false);
      }
    });
  };

  const handleDelete = (flag: FeatureFlag) => {
    if (!confirm(`Delete flag "${flag.flag_key}"?`)) return;
    setFlags(prev => prev.filter(f => f.id !== flag.id));
    startTransition(async () => {
      await deleteFeatureFlag(flag.id);
    });
  };

  return (
    <div className="space-y-4">
      {flags.length === 0 && (
        <p className="text-gray-500 text-sm">No feature flags configured.</p>
      )}

      {flags.map(flag => (
        <div key={flag.id} className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <code className="text-sm font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-800">
                  {flag.flag_key}
                </code>
                <span className={`text-xs px-2 py-0.5 rounded-full ${flag.is_enabled ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                  {flag.is_enabled ? "Enabled" : "Disabled"}
                </span>
              </div>
              {flag.description && (
                <p className="text-sm text-gray-500 mt-1">{flag.description}</p>
              )}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleToggle(flag)}
                disabled={isPending}
                className={`relative w-11 h-6 rounded-full transition-colors ${flag.is_enabled ? "bg-blue-600" : "bg-gray-300"} ${isPending ? "opacity-50" : "cursor-pointer"}`}
              >
                <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${flag.is_enabled ? "translate-x-5" : ""}`} />
              </button>
              <button
                onClick={() => handleDelete(flag)}
                className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                title="Delete flag"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </button>
            </div>
          </div>
          {/* Audience toggle - only show when enabled */}
          {flag.is_enabled && (
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-500">
                Audience: <span className="font-medium text-gray-700">{flag.admin_only ? "Admin only" : "Everyone"}</span>
              </span>
              <button
                onClick={() => handleToggleAdminOnly(flag)}
                disabled={isPending}
                className={`text-xs px-2 py-1 rounded transition-colors cursor-pointer ${
                  flag.admin_only
                    ? "bg-amber-100 text-amber-700 hover:bg-amber-200"
                    : "bg-green-100 text-green-700 hover:bg-green-200"
                } ${isPending ? "opacity-50" : ""}`}
              >
                {flag.admin_only ? "Enable for everyone" : "Restrict to admin"}
              </button>
            </div>
          )}
        </div>
      ))}

      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
        >
          + Add Flag
        </button>
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
          <input
            type="text"
            value={newKey}
            onChange={e => setNewKey(e.target.value.replace(/[^a-z0-9_]/g, ""))}
            placeholder="flag_key (lowercase, underscores)"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            value={newDesc}
            onChange={e => setNewDesc(e.target.value)}
            placeholder="Description (optional)"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex gap-2">
            <button
              onClick={handleCreate}
              disabled={!newKey.trim() || isPending}
              className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
            >
              Create
            </button>
            <button
              onClick={() => { setShowForm(false); setNewKey(""); setNewDesc(""); }}
              className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
