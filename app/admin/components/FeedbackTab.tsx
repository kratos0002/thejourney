"use client";

import { useState, useTransition } from "react";
import type { FeedbackItem } from "../actions-feedback";
import {
  updateFeedbackStatus,
  updateFeedbackNotes,
  respondToFeedback,
} from "../actions-feedback";

const TYPE_LABELS: Record<string, { label: string; icon: string; color: string }> = {
  word_suggestion: { label: "Word Suggestion", icon: "💡", color: "bg-purple-100 text-purple-700" },
  word_improvement: { label: "Word Issue", icon: "🐛", color: "bg-orange-100 text-orange-700" },
  general: { label: "General", icon: "💬", color: "bg-blue-100 text-blue-700" },
};

const STATUS_COLORS: Record<string, string> = {
  new: "bg-blue-100 text-blue-700",
  reviewing: "bg-yellow-100 text-yellow-700",
  planned: "bg-purple-100 text-purple-700",
  completed: "bg-green-100 text-green-700",
  closed: "bg-gray-100 text-gray-600",
};

const STATUSES = ["new", "reviewing", "planned", "completed", "closed"];

export default function FeedbackTab({ initialFeedback }: { initialFeedback: FeedbackItem[] }) {
  const [feedback, setFeedback] = useState(initialFeedback);
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const filtered = feedback.filter(f => {
    if (typeFilter !== "all" && f.feedback_type !== typeFilter) return false;
    if (statusFilter !== "all" && f.status !== statusFilter) return false;
    return true;
  });

  const handleStatusChange = (id: string, newStatus: string) => {
    startTransition(async () => {
      const result = await updateFeedbackStatus(id, newStatus);
      if (!result.error) {
        setFeedback(prev => prev.map(f => f.id === id ? { ...f, status: newStatus as FeedbackItem["status"] } : f));
      }
    });
  };

  const handleNotesBlur = (id: string, notes: string) => {
    startTransition(async () => {
      await updateFeedbackNotes(id, notes);
      setFeedback(prev => prev.map(f => f.id === id ? { ...f, internal_notes: notes } : f));
    });
  };

  return (
    <div>
      {/* Filters */}
      <div className="flex items-center gap-4 mb-6">
        <select
          value={typeFilter}
          onChange={e => setTypeFilter(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
        >
          <option value="all">All Types</option>
          <option value="word_suggestion">Word Suggestions</option>
          <option value="word_improvement">Word Issues</option>
          <option value="general">General</option>
        </select>
        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
        >
          <option value="all">All Status</option>
          {STATUSES.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <span className="text-sm text-gray-500">{filtered.length} submissions</span>
      </div>

      {/* Feedback list */}
      {filtered.length === 0 && (
        <p className="text-gray-400 text-sm py-8 text-center">No feedback submissions yet.</p>
      )}

      <div className="space-y-3">
        {filtered.map(item => (
          <FeedbackCard
            key={item.id}
            item={item}
            isExpanded={expandedId === item.id}
            onToggle={() => setExpandedId(expandedId === item.id ? null : item.id)}
            onStatusChange={handleStatusChange}
            onNotesBlur={handleNotesBlur}
            isPending={isPending}
            onFeedbackUpdate={(updated) => {
              setFeedback(prev => prev.map(f => f.id === updated.id ? updated : f));
            }}
          />
        ))}
      </div>
    </div>
  );
}

function FeedbackCard({
  item,
  isExpanded,
  onToggle,
  onStatusChange,
  onNotesBlur,
  isPending,
  onFeedbackUpdate,
}: {
  item: FeedbackItem;
  isExpanded: boolean;
  onToggle: () => void;
  onStatusChange: (id: string, status: string) => void;
  onNotesBlur: (id: string, notes: string) => void;
  isPending: boolean;
  onFeedbackUpdate: (item: FeedbackItem) => void;
}) {
  const [notes, setNotes] = useState(item.internal_notes || "");
  const [responseText, setResponseText] = useState("");
  const [responseStatus, setResponseStatus] = useState("completed");
  const [showResponse, setShowResponse] = useState(false);
  const [responding, startResponding] = useTransition();

  const typeInfo = TYPE_LABELS[item.feedback_type] || TYPE_LABELS.general;
  const context = item.user_context as Record<string, unknown>;

  const handleRespond = () => {
    if (!responseText.trim()) return;
    startResponding(async () => {
      const result = await respondToFeedback(item.id, responseText, responseStatus);
      if (!result.error) {
        onFeedbackUpdate({
          ...item,
          admin_response: responseText,
          status: responseStatus as FeedbackItem["status"],
        });
        setShowResponse(false);
        setResponseText("");
      }
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Header row */}
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center gap-3 text-left hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <span className="text-base">{typeInfo.icon}</span>
        <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${typeInfo.color}`}>
          {typeInfo.label}
        </span>
        <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${STATUS_COLORS[item.status]}`}>
          {item.status}
        </span>
        <span className="flex-1 text-sm text-gray-700 truncate">
          {item.feedback_text.slice(0, 80)}{item.feedback_text.length > 80 ? "..." : ""}
        </span>
        <span className="text-xs text-gray-400">
          {new Date(item.created_at).toLocaleDateString()}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expanded content */}
      {isExpanded && (
        <div className="px-4 pb-4 border-t border-gray-100 pt-3 space-y-4">
          {/* Full message */}
          <div>
            <h4 className="text-xs font-medium text-gray-500 mb-1">Message</h4>
            <p className="text-sm text-gray-800 whitespace-pre-wrap bg-gray-50 rounded p-3">
              {item.feedback_text}
            </p>
          </div>

          {/* Word slug if applicable */}
          {item.word_slug && (
            <div>
              <h4 className="text-xs font-medium text-gray-500 mb-1">Related Word</h4>
              <a
                href={`/admin/${item.word_slug}`}
                className="text-sm text-blue-600 hover:underline"
              >
                {item.word_slug}
              </a>
            </div>
          )}

          {/* User context */}
          {context && Object.keys(context).length > 0 && (
            <div>
              <h4 className="text-xs font-medium text-gray-500 mb-1">User Context</h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 bg-gray-50 rounded p-3">
                {Object.entries(context).map(([key, value]) => (
                  <div key={key}>
                    <span className="font-medium">{key}:</span> {String(value)}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Admin response (if already responded) */}
          {item.admin_response && (
            <div>
              <h4 className="text-xs font-medium text-gray-500 mb-1">Your Response (sent to user)</h4>
              <p className="text-sm text-green-800 bg-green-50 rounded p-3">
                {item.admin_response}
              </p>
            </div>
          )}

          {/* Internal notes */}
          <div>
            <h4 className="text-xs font-medium text-gray-500 mb-1">Internal Notes</h4>
            <textarea
              value={notes}
              onChange={e => setNotes(e.target.value)}
              onBlur={() => onNotesBlur(item.id, notes)}
              rows={2}
              placeholder="Private admin notes..."
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm resize-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Actions row */}
          <div className="flex items-center gap-3 pt-2">
            {/* Status buttons */}
            <div className="flex gap-1">
              {STATUSES.map(s => (
                <button
                  key={s}
                  onClick={() => onStatusChange(item.id, s)}
                  disabled={isPending || item.status === s}
                  className={`px-2 py-1 text-[10px] rounded font-medium transition-colors ${
                    item.status === s
                      ? STATUS_COLORS[s]
                      : "bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                  } disabled:cursor-not-allowed`}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="flex-1" />

            {/* Respond button */}
            {!item.admin_response && (
              <button
                onClick={() => setShowResponse(!showResponse)}
                className="px-3 py-1 text-xs bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Respond to User
              </button>
            )}
          </div>

          {/* Response form */}
          {showResponse && (
            <div className="border border-green-200 bg-green-50 rounded-lg p-3 space-y-2">
              <textarea
                value={responseText}
                onChange={e => setResponseText(e.target.value)}
                rows={3}
                placeholder="Your response (will be sent as a notification to the user)..."
                className="w-full border border-green-200 rounded-md px-3 py-2 text-sm resize-none focus:ring-1 focus:ring-green-500"
              />
              <div className="flex items-center gap-3">
                <select
                  value={responseStatus}
                  onChange={e => setResponseStatus(e.target.value)}
                  className="border border-gray-300 rounded-md px-2 py-1 text-xs"
                >
                  <option value="completed">Mark Completed</option>
                  <option value="planned">Mark Planned</option>
                  <option value="closed">Close</option>
                </select>
                <button
                  onClick={handleRespond}
                  disabled={responding || !responseText.trim()}
                  className="px-3 py-1 text-xs bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
                >
                  {responding ? "Sending..." : "Send Response"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
