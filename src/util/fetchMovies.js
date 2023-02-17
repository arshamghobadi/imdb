const API_KEY = process.env.API_KEY;
const base_url = process.env.BASE_URL;
export default async function fetchMovies() {
  const res = await fetch(
    `${base_url}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  const data = await res.json();
  const results = data.results;
  return results;
}
