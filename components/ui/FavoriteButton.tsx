"use client";

import { useFavorites } from "@/hooks/useFavorites";

export default function FavoriteButton({
  id,
  type,
}: {
  id: number;
  type: "character" | "episode";
}) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(id, type);

  return (
    <button
      onClick={() => toggleFavorite(id, type)}
      className={`rounded-md border px-4 py-2 text-sm font-semibold transition ${
        active
          ? "border-green-500 bg-green-500 text-white"
          : "border-slate-300 text-slate-700 hover:border-green-500 hover:text-green-600"
      }`}
    >
      {active ? "★ En favoritos" : "☆ Agregar a favoritos"}
    </button>
  );
}