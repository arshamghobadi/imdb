'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  console.log(genre);
  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`dark:hover:text-amber-600 hover:text-white font-semibold ${
          genre &&
          genre === param &&
          'underline underline-offset-8  decoration-8 decoration-amber-500 rounded-lg'
        } `}
      >
        {title}
      </Link>
    </div>
  );
}
