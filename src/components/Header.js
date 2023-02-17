import React from 'react';
import MenuLtem from './MenuLtem';
import { HiHome } from 'react-icons/hi2';
import { HiInformationCircle } from 'react-icons/hi2';
import Link from 'next/link';
import DarkMode from './DarkMode';

export default function Header() {
  return (
    <header className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuLtem title="Home" address="/" Icon={HiHome} />

        <MenuLtem title="About" address="/About" Icon={HiInformationCircle} />
      </div>

      <div className="flex items-center space-x-4">
        <DarkMode />
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2  rounded-lg mr-2">
              IMDB
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </header>
  );
}
