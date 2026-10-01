import { Episode } from "@/types/episode";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeGrid({ episodes }: { episodes: Episode[] }) {
  if (episodes.length === 0) {
    return (
      <p className="py-12 text-center text-slate-500">
        No se encontraron episodios con estos filtros.
      </p>
    );
  }

  return (
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
  );
}