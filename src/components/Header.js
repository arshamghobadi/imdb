'use client';
import MenuLtem from './MenuLtem';

import { HiInformationCircle, HiBars3, HiHome } from 'react-icons/hi2';
import Link from 'next/link';
import DarkMode from './DarkMode';
import { useState } from 'react';
import { Transition } from '@headlessui/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex items-center">
        <MenuLtem title="Home" address="/" Icon={HiHome} />

        <MenuLtem title="About" address="/About" Icon={HiInformationCircle} />
        <HiBars3
          className="w-7 h-7 cursor-pointer "
          title="menubar"
          address="/Menubar"
          onClick={() => setIsOpen(true)}
        />
      </div>

      <div
        className={`${isOpen && 'h-screen flex justify-center items-center'}`}
      >
        <Transition
          show={isOpen}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 opacity-75 "></div>
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <Transition.Child
              enter="transition ease-in-out duration-500 transform"
              enterFrom="-translate-y-full"
              enterTo="translate-y-0"
              leave="transition ease-in-out duration-500 transform"
              leaveFrom="translate-y-0"
              leaveTo="-translate-y-full"
            >
              <div className="bg-white w-full  h-screen rounded-lg p-8 ">
                <div className="flex justify-end">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>
                </div>
                <h1 className="text-2xl font-bold mb-4">
                  This is a Curtain Div
                </h1>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vulputate massa nulla, vitae hendrerit est rhoncus in. Nulla
                  facilisi. Phasellus hendrerit velit vitae lacus varius, vel
                  fringilla est bibendum. Quisque eu risus lectus. Duis euismod
                  nunc a nunc pharetra posuere. Aenean laoreet ante et felis
                  eleifend tincidunt. Proin ultricies, mauris eu convallis
                  ultrices, nisl arcu tincidunt leo, nec faucibus erat erat ac
                  risus. Etiam eu arcu nulla. Sed hendrerit vitae leo ac
                  finibus. Donec vel dui justo. Sed vestibulum, lorem id
                  lobortis dictum, velit velit maximus eros, eu maximus augue
                  dolor ac metus.
                </p>
              </div>
            </Transition.Child>
          </div>
        </Transition>
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
