"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function CharacterFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function updateFilter(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.delete("page"); // al cambiar filtro, vuelve a página 1
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="mb-6 flex flex-wrap gap-3">
      <select
        defaultValue={searchParams.get("status") ?? ""}
        onChange={(e) => updateFilter("status", e.target.value)}
        className="rounded-md border border-slate-300 px-3 py-1.5 text-sm"
      >
        <option value="">Todos los estados</option>
        <option value="alive">Vivo</option>
        <option value="dead">Muerto</option>
        <option value="unknown">Desconocido</option>
      </select>

      <select
        defaultValue={searchParams.get("gender") ?? ""}
        onChange={(e) => updateFilter("gender", e.target.value)}
        className="rounded-md border border-slate-300 px-3 py-1.5 text-sm"
      >
        <option value="">Todos los géneros</option>
        <option value="female">Femenino</option>
        <option value="male">Masculino</option>
        <option value="genderless">Sin género</option>
        <option value="unknown">Desconocido</option>
      </select>
    </div>
  );
}