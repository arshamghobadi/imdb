import Results from '@/components/Results';
import { Inter } from '@next/font/google';
// import fetchMovies from '@/util/fetchMovies';
const API_KEY = process.env.API_KEY;
const base_url = process.env.BASE_URL;
const inter = Inter({ subsets: ['latin'] });

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(
    `${base_url}/${
      genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'
    }?api_key=${API_KEY}&language=en-US`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
