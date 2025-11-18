import React, { useState, useEffect, useCallback } from 'react';
import { FEATURED_ALUMNI, AlumniProfile } from '../../data/alumni';
import { useIsMobile, usePrefersReducedMotion } from '../../hooks/useMediaQuery';

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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();

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

  // Touch handlers for swipe gestures (Netflix-style)
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.targetTouches[0];
    if (!touch) return;
    setTouchStart(touch.clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.targetTouches[0];
    if (!touch) return;
    setTouchEnd(touch.clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50; // Minimum distance for a swipe

    if (distance > minSwipeDistance) {
      // Swiped left - go to next
      goToNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right - go to previous
      goToPrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
    setIsPaused(false);
  };

  // Auto-rotate effect (disabled if user prefers reduced motion)
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const interval = setInterval(() => {
      goToNext();
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [goToNext, isPaused, prefersReducedMotion]);

  return (
    <section className="relative w-full bg-thetaTauGold py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-thetaTauRed font-primary font-bold text-4xl md:text-5xl lg:text-6xl text-center mb-12 md:mb-16">
          OUR ALUMNI
        </h2>

        {/* Carousel Container */}
        <div
          className="relative px-6 md:px-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {/* Alumni Cards Grid - Swipeable on mobile */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {getVisibleAlumni().map((alumni) => (
              <AlumniCard key={alumni.id} alumni={alumni} />
            ))}
          </div>

          {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
          <button
            onClick={goToPrev}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 lg:-translate-x-24 bg-white bg-opacity-80 hover:bg-opacity-100 text-thetaTauRed p-4 rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-thetaTauRed"
            aria-label="Previous slide"
          >
            <svg
              className="w-7 h-7"
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
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 lg:translate-x-24 bg-white bg-opacity-80 hover:bg-opacity-100 text-thetaTauRed p-4 rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-thetaTauRed"
            aria-label="Next slide"
          >
            <svg
              className="w-7 h-7"
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
        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`min-w-[44px] min-h-[44px] rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-thetaTauRed focus:ring-offset-2 focus:ring-offset-thetaTauGold flex items-center justify-center ${
                index === currentIndex
                  ? 'bg-thetaTauRed'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-100'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            >
              <span className={`block rounded-full transition-all ${
                index === currentIndex
                  ? 'w-4 h-4 bg-white'
                  : 'w-3 h-3 bg-thetaTauRed'
              }`} />
            </button>
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
        <h3 className="font-primary font-bold text-thetaTauRed text-xl md:text-2xl mb-3">
          {alumni.name}
        </h3>

        <p className="text-gray-700 text-sm md:text-base mb-2 leading-relaxed">
          Class of {alumni.graduationYear}
        </p>

        <p className="text-gray-800 font-medium text-sm md:text-base mb-6 leading-relaxed">
          {alumni.currentJob}
          {alumni.company && ` at ${alumni.company}`}
        </p>

        <blockquote className="text-gray-600 text-sm md:text-base italic border-l-4 border-thetaTauGold pl-4 leading-relaxed">
          "{alumni.quote}"
        </blockquote>
      </div>
    </div>
  );
};
