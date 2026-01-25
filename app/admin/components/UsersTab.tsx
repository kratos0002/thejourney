"use client";

import { useState } from "react";
import type { UserWithStats } from "../actions-users";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function timeAgo(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
  return formatDate(dateString);
}

interface Stats {
  totalUsers: number;
  newUsersThisWeek: number;
  newUsersToday: number;
  totalExplorations: number;
}

export default function UsersTab({
  users,
  stats,
}: {
  users: UserWithStats[];
  stats: Stats;
}) {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">{stats.totalUsers}</div>
          <div className="text-sm text-gray-500">Total Users</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-green-600">{stats.newUsersToday}</div>
          <div className="text-sm text-gray-500">New Today</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-blue-600">{stats.newUsersThisWeek}</div>
          <div className="text-sm text-gray-500">New This Week</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-amber-600">{stats.totalExplorations}</div>
          <div className="text-sm text-gray-500">Total Explorations</div>
        </div>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Signed Up
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Active
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Words Explored
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-gray-500">
                  {search ? "No users match your search" : "No users yet"}
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <span className="text-sm text-gray-900">{user.email || "—"}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-gray-600" title={formatDate(user.created_at)}>
                      {timeAgo(user.created_at)}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-gray-600">
                      {user.last_sign_in_at ? timeAgo(user.last_sign_in_at) : "—"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className={`text-sm font-medium ${user.words_explored > 0 ? "text-amber-600" : "text-gray-400"}`}>
                      {user.words_explored}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        Showing {filteredUsers.length} of {users.length} users
      </div>
    </div>
  );
}
