"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState, FormEvent } from "react";

export default function EpisodeFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [name, setName] = useState(searchParams.get("name") ?? "");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (name) {
      params.set("name", name);
    } else {
      params.delete("name");
    }
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex max-w-sm gap-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Buscar episodio por nombre..."
        className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm"
      />
      <button
        type="submit"
        className="rounded-md bg-green-500 px-4 py-1.5 text-sm font-semibold text-slate-900 hover:bg-green-400"
      >
        Buscar
      </button>
    </form>
  );
}