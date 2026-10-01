import { apiFetch } from "@/lib/api";
import { Episode, EpisodesResponse } from "@/types/episode";

interface EpisodeFilters {
  page?: string;
  name?: string;
  episode?: string; // código, ej. "S01E01"
}

export async function getEpisodes(
  filters: EpisodeFilters
): Promise<EpisodesResponse> {
  const params = new URLSearchParams();

  if (filters.page) params.set("page", filters.page);
  if (filters.name) params.set("name", filters.name);
  if (filters.episode) params.set("episode", filters.episode);

  try {
    return await apiFetch<EpisodesResponse>(`/episode?${params.toString()}`);
  } catch {
    return { info: { count: 0, pages: 0, next: null, prev: null }, results: [] };
  }
}

export async function getEpisodeById(id: string): Promise<Episode> {
  return apiFetch<Episode>(`/episode/${id}`);
}