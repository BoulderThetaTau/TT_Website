import React from 'react';

/**
 * Hero Section Component
 *
 * Homepage hero with mountains graphic and chapter title.
 * Features responsive design with cropped mountains on mobile.
 */
export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden flex flex-col">
      {/* Title Section - White background area at top */}
      <div className="relative z-10 bg-white pt-12 md:pt-16 pb-8 md:pb-12 px-6 sm:px-8 flex-shrink-0">
        <h1 className="font-primary font-bold text-center">
          <span className="block text-thetaTauRed text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-4">
            THETA TAU
          </span>
          <span className="block text-thetaTauGold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-3">
            ETA GAMMA CHAPTER
          </span>
          <span className="block text-black text-base sm:text-lg md:text-xl lg:text-2xl tracking-widest">
            UNIVERSITY OF COLORADO BOULDER
          </span>
        </h1>
      </div>

      {/* Mountains Graphic - Takes up remaining space */}
      <div className="relative flex-1 w-full">
        <img
          src="/images/Flatiron-Sunset-cropped.svg"
          alt="Colorado Flatirons with sunset"
          className="absolute bottom-0 left-0 w-full h-full object-cover object-top"
        />
      </div>
    </section>
  );
};
