"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Words", href: "/admin" },
  { label: "Coverage", href: "/admin/coverage" },
  { label: "Feedback", href: "/admin/feedback" },
  { label: "Notifications", href: "/admin/notifications" },
  { label: "Flags", href: "/admin/flags" },
];

export default function AdminNav({ feedbackCount }: { feedbackCount?: number }) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/admin") {
      return pathname === "/admin" || pathname.startsWith("/admin/new") || (pathname.startsWith("/admin/") && !pathname.startsWith("/admin/feedback") && !pathname.startsWith("/admin/notifications") && !pathname.startsWith("/admin/flags") && !pathname.startsWith("/admin/coverage"));
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="border-b border-gray-200 bg-white px-6">
      <nav className="flex gap-6">
        {tabs.map(tab => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
              isActive(tab.href)
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
            {tab.label === "Feedback" && feedbackCount !== undefined && feedbackCount > 0 && (
              <span className="ml-1.5 inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold bg-red-500 text-white rounded-full">
                {feedbackCount}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}
