import Link from "next/link";
import Image from "next/image";
import { Character } from "@/types/character";

const statusColor: Record<string, string> = {
  Alive: "bg-green-500",
  Dead: "bg-red-500",
  unknown: "bg-slate-400",
};

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <Link
      href={`/characters/${character.id}`}
      className="group overflow-hidden rounded-lg border border-slate-200 shadow-sm transition hover:shadow-md"
    >
      <div className="relative aspect-square w-full">
        <Image
          src={character.image}
          alt={character.name}
          fill
          className="object-cover transition group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="p-3">
        <h3 className="truncate font-semibold">{character.name}</h3>
        <div className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
          <span
            className={`h-2 w-2 rounded-full ${statusColor[character.status] ?? "bg-slate-400"}`}
          />
          {character.status} — {character.species}
        </div>
      </div>
    </Link>
  );
}