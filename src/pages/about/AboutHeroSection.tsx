import React from 'react';

/**
 * About Hero Section Component
 *
 * Full-width hero section with background photo and overlay.
 * Displays "ABOUT US" title and chapter motto.
 */
export const AboutHeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-thetaTauRed overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-about.jpg"
          alt="Theta Tau members"
          className="w-full h-full object-cover"
        />
        {/* Dark red overlay */}
        <div className="absolute inset-0 bg-thetaTauRed opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-4xl mx-auto">
        <h1 className="font-primary font-bold text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-6">
          ABOUT US
        </h1>
        <p className="font-primary text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
          Dedicated to the service, betterment and brotherhood of humanity
        </p>
      </div>
    </section>
  );
};
