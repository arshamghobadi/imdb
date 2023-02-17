'use client';

import { useEffect } from 'react';

export default function Error({ error, rest }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className=" text-center mt-10 ">
      <h1>somthing went wrong</h1>
      <button className=" bg-red-700 rounded-lg p-2" onClick={() => rest()}>
        Reload
      </button>
    </div>
  );
}
