"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function Searchbox() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/characters?name=${encodeURIComponent(query.trim())}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-xs">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar personaje..."
        className="w-full rounded-l-md border border-slate-600 bg-slate-800 px-3 py-1.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-green-400"
      />
      <button
        type="submit"
        className="rounded-r-md bg-green-500 px-3 py-1.5 text-sm font-semibold text-slate-900 hover:bg-green-400"
      >
        Buscar
      </button>
    </form>
  );
}