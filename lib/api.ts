const BASE_URL = "https://rickandmortyapi.com/api";

export async function apiFetch<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  if (!res.ok) {
    throw new Error(`Error ${res.status} al consultar ${endpoint}`);
  }
  return res.json();
}

export { BASE_URL };