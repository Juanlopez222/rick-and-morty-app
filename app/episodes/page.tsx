import { Suspense } from "react";
import { getEpisodes } from "@/services/episodes";
import EpisodeGrid from "@/components/ui/EpisodeGrid";
import EpisodeFilters from "@/components/ui/EpisodeFilters";
import Pagination from "@/components/ui/Pagination";

interface PageProps {
  searchParams: Promise<{ page?: string; name?: string }>;
}

export default async function EpisodesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const page = params.page ?? "1";

  const data = await getEpisodes({ page, name: params.name });

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Episodios</h1>

      <Suspense>
        <EpisodeFilters />
      </Suspense>

      <EpisodeGrid episodes={data.results} />

      <Suspense>
        <Pagination currentPage={Number(page)} totalPages={data.info.pages} />
      </Suspense>
    </div>
  );
}