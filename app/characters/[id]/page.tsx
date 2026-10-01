import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCharacterById } from "@/services/characters";
import FavoriteButton from "@/components/ui/FavoriteButton";

const statusColor: Record<string, string> = {
  Alive: "bg-green-500",
  Dead: "bg-red-500",
  unknown: "bg-slate-400",
};

export default async function CharacterDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let character;
  try {
    character = await getCharacterById(id);
  } catch {
    notFound();
  }

  if (!character) notFound();

  return (
    <div>
      <Link href="/characters" className="text-sm text-green-600 hover:underline">
        ← Volver a Personajes
      </Link>

      <div className="mt-4 grid gap-6 md:grid-cols-[300px_1fr]">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg">
          <Image
            src={character.image}
            alt={character.name}
            fill
            className="object-cover"
            sizes="300px"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold">{character.name}</h1>

          <div className="mt-2 flex items-center gap-1.5 text-slate-600">
            <span
              className={`h-2.5 w-2.5 rounded-full ${statusColor[character.status] ?? "bg-slate-400"}`}
            />
            {character.status} — {character.species}
          </div>

          <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-slate-500">Género</dt>
              <dd className="font-medium">{character.gender}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Origen</dt>
              <dd className="font-medium">{character.origin.name}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Última ubicación</dt>
              <dd className="font-medium">{character.location.name}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Episodios</dt>
              <dd className="font-medium">{character.episode.length}</dd>
            </div>
          </dl>

          <div className="mt-6">
            <FavoriteButton id={character.id} type="character" />
          </div>
        </div>
      </div>
    </div>
  );
}