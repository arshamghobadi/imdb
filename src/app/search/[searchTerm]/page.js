import Results from '@/components/Results';

export default async function page({ params }) {
  console.log(params);
  const res = await fetch(
    `${process.env.BASE_URL}/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US`
  );
  console.log(res);
  if (!res.ok) {
    throw new Error('Error fetching data');
  }
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No Results found</h1>
      )}
      {results && <Results results={results} />}
    </div>
  );
}
