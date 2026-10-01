import { apiFetch } from "@/lib/api";
import { Character, CharactersResponse } from "@/types/character";

interface CharacterFilters {
  page?: string;
  name?: string;
  status?: string;
  gender?: string;
  species?: string;
}

export async function getCharacters(
  filters: CharacterFilters
): Promise<CharactersResponse> {
  const params = new URLSearchParams();

  if (filters.page) params.set("page", filters.page);
  if (filters.name) params.set("name", filters.name);
  if (filters.status) params.set("status", filters.status);
  if (filters.gender) params.set("gender", filters.gender);
  if (filters.species) params.set("species", filters.species);

  try {
    return await apiFetch<CharactersResponse>(`/character?${params.toString()}`);
  } catch {
    // La API responde 404 cuando no hay resultados con esos filtros
    return { info: { count: 0, pages: 0, next: null, prev: null }, results: [] };
  }
}

export async function getCharacterById(id: string): Promise<Character> {
  return apiFetch<Character>(`/character/${id}`);
}