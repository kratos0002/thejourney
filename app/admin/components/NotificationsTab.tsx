"use client";

import { useState, useTransition } from "react";
import type { NotificationItem } from "../actions-notifications";
import {
  createNotification,
  toggleNotification,
  deleteNotification,
} from "../actions-notifications";

const TYPE_OPTIONS = [
  { value: "feature", label: "Feature", icon: "✨" },
  { value: "update", label: "Update", icon: "🔧" },
  { value: "bug_fix", label: "Bug Fix", icon: "🐛" },
  { value: "tip", label: "Tip", icon: "💡" },
  { value: "feedback_response", label: "Feedback Response", icon: "💬" },
];

export default function NotificationsTab({ initialNotifications }: { initialNotifications: NotificationItem[] }) {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [isPending, startTransition] = useTransition();

  // Form state
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [notifType, setNotifType] = useState("update");
  const [targetUserId, setTargetUserId] = useState("");
  const [expiresAt, setExpiresAt] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  const handleCreate = () => {
    if (!title.trim() || !message.trim()) {
      setFormError("Title and message are required");
      return;
    }
    setFormError(null);

    startTransition(async () => {
      const result = await createNotification({
        title: title.trim(),
        message: message.trim(),
        notificationType: notifType,
        targetUserId: targetUserId.trim() || undefined,
        expiresAt: expiresAt || undefined,
      });

      if (result.error) {
        setFormError(result.error);
      } else {
        // Add to list optimistically
        setNotifications(prev => [{
          id: crypto.randomUUID(),
          title: title.trim(),
          message: message.trim(),
          notification_type: notifType,
          target_user_id: targetUserId.trim() || null,
          feedback_id: null,
          is_active: true,
          created_at: new Date().toISOString(),
          expires_at: expiresAt || null,
        }, ...prev]);
        setTitle("");
        setMessage("");
        setTargetUserId("");
        setExpiresAt("");
      }
    });
  };

  const handleToggle = (id: string, currentActive: boolean) => {
    startTransition(async () => {
      const result = await toggleNotification(id, !currentActive);
      if (!result.error) {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, is_active: !currentActive } : n));
      }
    });
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this notification permanently?")) return;
    startTransition(async () => {
      const result = await deleteNotification(id);
      if (!result.error) {
        setNotifications(prev => prev.filter(n => n.id !== id));
      }
    });
  };

  return (
    <div className="space-y-8">
      {/* Create form */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Create Notification</h2>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Type</label>
              <select
                value={notifType}
                onChange={e => setNotifType(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                {TYPE_OPTIONS.map(t => (
                  <option key={t.value} value={t.value}>{t.icon} {t.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Target User ID (blank = all users)</label>
              <input
                value={targetUserId}
                onChange={e => setTargetUserId(e.target.value)}
                placeholder="Leave empty for broadcast"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-mono"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Title</label>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Notification title"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Message</label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Notification message..."
              rows={3}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm resize-none"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Expires At (optional)</label>
            <input
              type="datetime-local"
              value={expiresAt}
              onChange={e => setExpiresAt(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
          {formError && (
            <p className="text-red-600 text-xs">{formError}</p>
          )}
          <button
            onClick={handleCreate}
            disabled={isPending}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {isPending ? "Creating..." : "Create Notification"}
          </button>
        </div>
      </section>

      {/* Existing notifications */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          All Notifications ({notifications.length})
        </h2>
        {notifications.length === 0 && (
          <p className="text-gray-400 text-sm py-8 text-center">No notifications created yet.</p>
        )}
        <div className="space-y-2">
          {notifications.map(notif => {
            const typeInfo = TYPE_OPTIONS.find(t => t.value === notif.notification_type);
            return (
              <div
                key={notif.id}
                className={`bg-white border rounded-lg px-4 py-3 flex items-start gap-3 ${
                  notif.is_active ? "border-gray-200" : "border-gray-100 opacity-60"
                }`}
              >
                <span className="text-base mt-0.5">{typeInfo?.icon || "📢"}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900">{notif.title}</span>
                    {!notif.is_active && (
                      <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">inactive</span>
                    )}
                    {notif.target_user_id && (
                      <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">targeted</span>
                    )}
                    {!notif.target_user_id && (
                      <span className="text-[10px] bg-green-50 text-green-600 px-1.5 py-0.5 rounded">broadcast</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 truncate">{notif.message}</p>
                  <p className="text-[10px] text-gray-400 mt-1">
                    {new Date(notif.created_at).toLocaleString()}
                    {notif.expires_at && ` · Expires ${new Date(notif.expires_at).toLocaleDateString()}`}
                  </p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => handleToggle(notif.id, notif.is_active)}
                    disabled={isPending}
                    className="px-2 py-1 text-[10px] rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  >
                    {notif.is_active ? "Deactivate" : "Activate"}
                  </button>
                  <button
                    onClick={() => handleDelete(notif.id)}
                    disabled={isPending}
                    className="px-2 py-1 text-[10px] rounded border border-red-200 text-red-500 hover:bg-red-50 disabled:opacity-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
