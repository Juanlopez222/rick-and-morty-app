"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function goToPage(page: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    router.push(`${pathname}?${params.toString()}`);
  }

  if (totalPages <= 1) return null;

  return (
    <div className="mt-6 flex items-center justify-center gap-4">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
        className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium disabled:opacity-40"
      >
        Anterior
      </button>
      <span className="text-sm text-slate-600">
        Página {currentPage} de {totalPages}
      </span>
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium disabled:opacity-40"
      >
        Siguiente
      </button>
    </div>
  );
}