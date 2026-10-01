export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-slate-50 py-6 text-center text-sm text-slate-500">
      <p>
        Proyecto académico — Datos de{" "}
        <a
          href="https://rickandmortyapi.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-green-600 hover:underline"
        >
          Rick and Morty API
        </a>
      </p>
    </footer>
  );
}