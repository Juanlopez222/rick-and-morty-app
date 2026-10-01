import Link from "next/link";
import Searchbox from "./Searchbox";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-green-400">
            Rick & Morty
          </Link>
        </div>

        <nav className="flex gap-4 text-sm font-medium">
          <Link href="/characters" className="hover:text-green-400">
            Personajes
          </Link>
          <Link href="/episodes" className="hover:text-green-400">
            Episodios
          </Link>
          <Link href="/favorites" className="hover:text-green-400">
            Favoritos
          </Link>
        </nav>

        <Searchbox />
      </div>
    </header>
  );
}