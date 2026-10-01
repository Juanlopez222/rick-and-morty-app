import Link from "next/link";
import { notFound } from "next/navigation";
import { getEpisodeById } from "@/services/episodes";
import FavoriteButton from "@/components/ui/FavoriteButton";

export default async function EpisodeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let episode;
  try {
    episode = await getEpisodeById(id);
  } catch {
    notFound();
  }

  if (!episode) notFound();

  return (
    <div>
      <Link href="/episodes" className="text-sm text-green-600 hover:underline">
        ← Volver a Episodios
      </Link>

      <div className="mt-4 max-w-2xl">
        <span className="text-sm font-semibold text-green-600">{episode.episode}</span>
        <h1 className="mt-1 text-3xl font-bold">{episode.name}</h1>
        <p className="mt-2 text-slate-600">Emitido: {episode.air_date}</p>
        <p className="mt-1 text-slate-600">
          Personajes en este episodio: {episode.characters.length}
        </p>

        <div className="mt-6">
          <FavoriteButton id={episode.id} type="episode" />
        </div>
      </div>
    </div>
  );
}