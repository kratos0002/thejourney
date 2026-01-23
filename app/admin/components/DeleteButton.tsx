"use client";

import { useState, useTransition } from "react";
import { deleteWord } from "../actions";

export default function DeleteButton({ slug }: { slug: string }) {
  const [confirming, setConfirming] = useState(false);
  const [isPending, startTransition] = useTransition();

  if (confirming) {
    return (
      <span className="flex items-center gap-1">
        <button
          onClick={() => {
            startTransition(async () => { void await deleteWord(slug); });
          }}
          disabled={isPending}
          className="text-xs text-red-600 hover:text-red-700 font-medium"
        >
          {isPending ? "..." : "Confirm"}
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="text-xs text-gray-400 hover:text-gray-600"
        >
          Cancel
        </button>
      </span>
    );
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      className="text-xs text-red-400 hover:text-red-600"
    >
      Delete
    </button>
  );
}
