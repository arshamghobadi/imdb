import Image from 'next/image';

export default async function page({ params }) {
  const movieId = params.id;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();
  return (
    <div className=" w-full">
      <div
        className="p-4 flex flex-col md:pt-8  lg:flex-row 
            items-center content-center max-w-6xl mx-auto md:space-x-6"
      >
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={600}
          height={500}
          alt={movie.title}
          className={
            'sm:rounded-t-lg  group-hover:opacity-80 transition-opacity duration-200'
          }
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
        <div className="p-3">
          <h2 className="text-lg mb-3 font-semibold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">{movie.overview}</p>
          <p>
            <span className="mr-3 font-semibold">Release Date :</span>
            {movie.release_date || movie.first_air_date}
          </p>

          <p>
            <span className="mr-3 font-semibold">Rating :</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
