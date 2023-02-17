import React from 'react';
import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <nav className="flex justify-center dark:bg-gray-600 bg-amber-300 lg:text-lg p-4 space-x-4">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </nav>
  );
}
