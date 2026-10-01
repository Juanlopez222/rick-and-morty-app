"use client";

import { useEffect, useState, useCallback } from "react";

export interface FavoriteItem {
  id: number;
  type: "character" | "episode";
}

const STORAGE_KEY = "rm-favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setFavorites(JSON.parse(stored));
    } catch {
      // localStorage no disponible o dato corrupto
    } finally {
      setLoaded(true);
    }
  }, []);

  const persist = useCallback((items: FavoriteItem[]) => {
    setFavorites(items);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, []);

  const isFavorite = useCallback(
    (id: number, type: FavoriteItem["type"]) =>
      favorites.some((f) => f.id === id && f.type === type),
    [favorites]
  );

  const toggleFavorite = useCallback(
    (id: number, type: FavoriteItem["type"]) => {
      const exists = favorites.some((f) => f.id === id && f.type === type);
      const updated = exists
        ? favorites.filter((f) => !(f.id === id && f.type === type))
        : [...favorites, { id, type }];
      persist(updated);
    },
    [favorites, persist]
  );

  return { favorites, isFavorite, toggleFavorite, loaded };
}