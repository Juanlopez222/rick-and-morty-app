import Link from "next/link";

interface EpisodeCardProps {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

export default function EpisodeCard({ id, name, air_date, episode }: EpisodeCardProps) {
  return (
    <Link
      href={`/episodes/${id}`}
      className="block rounded-lg border border-slate-200 p-4 shadow-sm transition hover:shadow-md hover:border-green-400"
    >
      <span className="text-xs font-semibold text-green-600">{episode}</span>
      <h3 className="mt-1 font-semibold">{name}</h3>
      <p className="mt-1 text-sm text-slate-500">{air_date}</p>
    </Link>
  );
}