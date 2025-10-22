import React, { useState, useEffect, useCallback } from 'react';
import { FEATURED_ALUMNI, AlumniProfile } from '../../data/alumni';
import { useIsMobile } from '../../hooks/useMediaQuery';

/**
 * Alumni Carousel Component
 *
 * Auto-rotating carousel showing featured alumni profiles.
 * Displays 3 cards on desktop, 1 on mobile.
 * Auto-rotates every 10 seconds.
 */
export const AlumniCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useIsMobile();

  const cardsToShow = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(FEATURED_ALUMNI.length / cardsToShow);

  // Get visible alumni based on current index
  const getVisibleAlumni = useCallback((): AlumniProfile[] => {
    const start = currentIndex * cardsToShow;
    const end = start + cardsToShow;
    return FEATURED_ALUMNI.slice(start, end);
  }, [currentIndex, cardsToShow]);

  // Navigate to next slide
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  // Navigate to previous slide
  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-rotate effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      goToNext();
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [goToNext, isPaused]);

  return (
    <section className="relative w-full bg-thetaTauGold py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-thetaTauRed font-primary font-bold text-4xl md:text-5xl lg:text-6xl text-center mb-12 md:mb-16">
          OUR ALUMNI
        </h2>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Alumni Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {getVisibleAlumni().map((alumni) => (
              <AlumniCard key={alumni.id} alumni={alumni} />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white bg-opacity-80 hover:bg-opacity-100 text-thetaTauRed p-3 rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-thetaTauRed"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white bg-opacity-80 hover:bg-opacity-100 text-thetaTauRed p-3 rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-thetaTauRed"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all focus:outline-none ${
                index === currentIndex
                  ? 'bg-thetaTauRed w-8'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-100'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Alumni Card Component
 *
 * Individual card displaying alumni information
 */
interface AlumniCardProps {
  alumni: AlumniProfile;
}

const AlumniCard: React.FC<AlumniCardProps> = ({ alumni }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      {/* Photo Placeholder */}
      <div className="aspect-square bg-gray-300 flex items-center justify-center">
        {alumni.photo ? (
          <img
            src={alumni.photo}
            alt={alumni.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-500">Photo</span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-primary font-bold text-thetaTauRed text-xl md:text-2xl mb-2">
          {alumni.name}
        </h3>

        <p className="text-gray-700 text-sm md:text-base mb-1">
          Class of {alumni.graduationYear}
        </p>

        <p className="text-gray-800 font-medium text-sm md:text-base mb-4">
          {alumni.currentJob}
          {alumni.company && ` at ${alumni.company}`}
        </p>

        <blockquote className="text-gray-600 text-sm md:text-base italic border-l-4 border-thetaTauGold pl-4">
          "{alumni.quote}"
        </blockquote>
      </div>
    </div>
  );
};
