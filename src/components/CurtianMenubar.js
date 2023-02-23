'use client';
export default function CurtianMenubar({ handleCloseCurtain, data, data1 }) {
  return (
    <>
      {console.log(data)}
      {console.log(data1)}
      <div className="fixed w-screen h-screen top-0 left-0 bg-gray-500 z-50 animate-curtain-slow">
        <div className="h-screen w-full bg-gray-500 ">
          <button
            onClick={handleCloseCurtain}
            className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 "
          >
            Close
          </button>

          <p className="text-center mt-10 text-2xl font-bold text-gray-900">
            linkss
          </p>
        </div>
      </div>
    </>
  );
}
