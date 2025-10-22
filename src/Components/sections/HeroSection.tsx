import React from 'react';

/**
 * Hero Section Component
 *
 * Homepage hero with mountains graphic and chapter title.
 * Features responsive design with cropped mountains on mobile.
 */
export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col items-center justify-start pt-20 overflow-hidden">
      {/* Title Section */}
      <div className="relative z-10 text-center px-4 py-8 md:py-12">
        <h1 className="font-primary font-bold">
          <span className="block text-thetaTauRed text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 md:mb-4">
            THETA TAU
          </span>
          <span className="block text-thetaTauGold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-3">
            ETA GAMMA CHAPTER
          </span>
          <span className="block text-black text-sm sm:text-base md:text-lg lg:text-xl tracking-wider">
            UNIVERSITY OF COLORADO BOULDER
          </span>
        </h1>
      </div>

      {/* Mountains Graphic */}
      <div className="relative w-full flex-1 flex items-end justify-center">
        <div className="w-full h-auto max-w-7xl">
          <img
            src="/images/Flatiron-Sunset-cropped.svg"
            alt="Colorado Flatirons with sunset"
            className="w-full h-auto object-contain object-center"
            style={{
              maxHeight: '60vh',
            }}
          />
        </div>
      </div>
    </section>
  );
};
