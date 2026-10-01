import { Character } from "@/types/character";
import CharacterCard from "./CharacterCard";

export default function CharacterGrid({ characters }: { characters: Character[] }) {
  if (characters.length === 0) {
    return (
      <p className="py-12 text-center text-slate-500">
        No se encontraron personajes con estos filtros.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {characters.map((c) => (
        <CharacterCard key={c.id} character={c} />
      ))}
    </div>
  );
}