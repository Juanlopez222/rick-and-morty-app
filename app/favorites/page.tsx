"use client";

import { useEffect, useState } from "react";
import { useFavorites } from "@/hooks/useFavorites";
import { getCharacterById } from "@/services/characters";
import { getEpisodeById } from "@/services/episodes";
import CharacterCard from "@/components/ui/CharacterCard";
import EpisodeCard from "@/components/ui/EpisodeCard";
import { Character } from "@/types/character";
import { Episode } from "@/types/episode";

export default function FavoritesPage() {
  const { favorites, loaded } = useFavorites();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!loaded) return;

    async function loadFavoriteDetails() {
      const charIds = favorites.filter((f) => f.type === "character").map((f) => f.id);
      const epIds = favorites.filter((f) => f.type === "episode").map((f) => f.id);

      const [charResults, epResults] = await Promise.all([
        Promise.all(charIds.map((id) => getCharacterById(String(id)).catch(() => null))),
        Promise.all(epIds.map((id) => getEpisodeById(String(id)).catch(() => null))),
      ]);

      setCharacters(charResults.filter((c): c is Character => c !== null));
      setEpisodes(epResults.filter((e): e is Episode => e !== null));
      setLoadingData(false);
    }

    loadFavoriteDetails();
  }, [loaded, favorites]);

  if (!loaded || loadingData) {
    return <p className="py-12 text-center text-slate-500">Cargando favoritos...</p>;
  }

  const isEmpty = characters.length === 0 && episodes.length === 0;

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Mis Favoritos</h1>

      {isEmpty && (
        <p className="py-12 text-center text-slate-500">
          Aún no tienes favoritos. Explora{" "}
          <a href="/characters" className="text-green-600 hover:underline">
            personajes
          </a>{" "}
          o{" "}
          <a href="/episodes" className="text-green-600 hover:underline">
            episodios
          </a>{" "}
          y agrégalos.
        </p>
      )}

      {characters.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-3 text-lg font-semibold">Personajes</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {characters.map((c) => (
              <CharacterCard key={c.id} character={c} />
            ))}
          </div>
        </section>
      )}

      {episodes.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-semibold">Episodios</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {episodes.map((ep) => (
              <EpisodeCard
                key={ep.id}
                id={ep.id}
                name={ep.name}
                air_date={ep.air_date}
                episode={ep.episode}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}