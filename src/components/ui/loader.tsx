'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoaderProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800); // adjust based on animation time

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}


const Loader: React.FC = () => (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-white'>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/Images/heart.gif"
          alt="Loading..."
          width={100}
          height={100}
          className="w-24 h-24 md:w-32 md:h-32"
          priority
        />
        {/* <p className="mt-4 text-gray-600 font-medium text-lg">Loading...</p> */}
      </div>
    </div>
);
