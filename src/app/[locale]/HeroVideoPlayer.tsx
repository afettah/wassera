'use client';

import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

export default function HeroVideoPlayer() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleReady = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full max-w-[600px] h-auto aspect-square rounded-xl overflow-hidden mx-auto">
      {!isMounted ? (
        <div className="w-full h-full  rounded-xl" style={{ aspectRatio: '1 / 1' }}></div>
      ) : (
        <div className="relative w-full h-full">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center  rounded-xl">
              <svg className="animate-spin w-10 h-10 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
            </div>
          )}
          <ReactPlayer
            url="/kafd.mp4"
            playing
            loop
            muted
            width="100%"
            height="100%"
            className="absolute top-0 left-0 rounded-xl"
            onReady={handleReady}
          />
        </div>
      )}
    </div>
  );
}
