import React from 'react';

/**
 * Quote Section Component
 *
 * Full-width section with background photo and overlay.
 * Displays inspirational quote with biblical reference.
 */
export const QuoteSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-thetaTauRed overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/quote-background.jpg"
          alt="Theta Tau brotherhood"
          className="w-full h-full object-cover"
        />
        {/* Dark red overlay */}
        <div className="absolute inset-0 bg-thetaTauRed opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-5xl mx-auto">
        <h2 className="font-primary text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 md:mb-8">
          Our one intention:
        </h2>
        <blockquote className="font-primary font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 md:mb-8">
          "Whatever thy hand findeth to do, do it with thy might"
        </blockquote>
        <cite className="font-primary text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl not-italic">
          - Ecclesiastes 9:10
        </cite>
      </div>
    </section>
  );
};
