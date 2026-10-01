import { Suspense } from "react";
import { getCharacters } from "@/services/characters";
import CharacterGrid from "@/components/ui/CharacterGrid";
import CharacterFilters from "@/components/ui/CharacterFilters";
import Pagination from "@/components/ui/Pagination";

interface PageProps {
  searchParams: Promise<{
    page?: string;
    name?: string;
    status?: string;
    gender?: string;
  }>;
}

export default async function CharactersPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const page = params.page ?? "1";

  const data = await getCharacters({
    page,
    name: params.name,
    status: params.status,
    gender: params.gender,
  });

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Personajes</h1>

      <Suspense>
        <CharacterFilters />
      </Suspense>

      <CharacterGrid characters={data.results} />

      <Suspense>
        <Pagination currentPage={Number(page)} totalPages={data.info.pages} />
      </Suspense>
    </div>
  );
}