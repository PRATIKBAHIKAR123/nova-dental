'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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
    <div className="banter-loader">
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
</div>
</div>
);
