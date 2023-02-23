'use client';
import { useState } from 'react';
import { Transition } from '@headlessui/react';

export default function CurtainDiv() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex justify-center items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsOpen(true)}
      >
        Open Curtain
      </button>

      <Transition
        show={isOpen}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 opacity-75"></div>
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <Transition.Child
            enter="transition ease-in-out duration-500 transform"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition ease-in-out duration-500 transform"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <div className="bg-white w-full h-screen rounded-lg p-8">
              <div className="flex justify-end">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
              <h1 className="text-2xl font-bold mb-4">This is a Curtain Div</h1>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vulputate massa nulla, vitae hendrerit est rhoncus in. Nulla
                facilisi. Phasellus hendrerit velit vitae lacus varius, vel
                fringilla est bibendum. Quisque eu risus lectus. Duis euismod
                nunc a nunc pharetra posuere. Aenean laoreet ante et felis
                eleifend tincidunt. Proin ultricies, mauris eu convallis
                ultrices, nisl arcu tincidunt leo, nec faucibus erat erat ac
                risus. Etiam eu arcu nulla. Sed hendrerit vitae leo ac finibus.
                Donec vel dui justo. Sed vestibulum, lorem id lobortis dictum,
                velit velit maximus eros, eu maximus augue dolor ac metus.
              </p>
            </div>
          </Transition.Child>
        </div>
      </Transition>
    </div>
  );
}
