import React, { useState, useEffect, useCallback } from 'react';
import { CHAPTER_INFO } from '@/config/chapter';
import { useIsMobile, usePrefersReducedMotion } from '@/hooks/useMediaQuery';

/**
 * About Us Section Component
 *
 * Homepage about section with description, gear logo, and photo carousel.
 * Red background with white text.
 * Photo carousel auto-rotates and supports swipe gestures on mobile.
 */
export const AboutUsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();

  // Chapter photos from various events
  const photos = [
    { id: 1, src: '/images/Retreat_2025_1.JPG', alt: 'Theta Tau chapter retreat 2025' },
    { id: 2, src: '/images/RushSpr2025.png', alt: 'Rush Spring 2025' },
    { id: 3, src: '/images/Regionals_Spr_2023.png', alt: 'Regionals Spring 2023' },
    { id: 4, src: '/images/EtaGamma_Contact.png', alt: 'Eta Gamma Chapter members' },
    { id: 5, src: '/images/Retreat_2025_2.jpg', alt: 'Theta Tau retreat 2025' },
    { id: 6, src: '/images/BH1.png', alt: 'Brotherhood event' },
  ];

  const photosToShow = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(photos.length / photosToShow);

  // Get visible photos based on current index
  const getVisiblePhotos = useCallback(() => {
    const start = currentIndex * photosToShow;
    const end = start + photosToShow;
    return photos.slice(start, end);
  }, [currentIndex, photosToShow]);

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
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
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
    <section className="relative w-full bg-thetaTauRed py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Title and Description Text */}
          <div>
            <h2 className="text-thetaTauGold font-primary font-bold text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-12">
              ABOUT US
            </h2>
            <div className="text-white space-y-6">
              <p className="text-base md:text-lg leading-relaxed">
                {CHAPTER_INFO.description.long}
              </p>
              <p className="text-base md:text-lg leading-relaxed font-medium">
                {CHAPTER_INFO.description.mission}
              </p>
            </div>
          </div>

          {/* Right Column: Gear Logo (Hidden on mobile) */}
          <div className="hidden lg:flex justify-center items-center">
            <img
              src="/images/TT-Gear-RGW-Test.svg"
              alt="Theta Tau Gear Logo"
              className="w-96 h-96 object-contain"
            />
          </div>
        </div>

        {/* Photo Carousel */}
        <div
          className="relative mt-12 lg:mt-16 px-6 md:px-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {/* Photos Grid - Swipeable on mobile */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {getVisiblePhotos().map((photo) => (
              <div
                key={photo.id}
                className="aspect-square bg-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={goToPrev}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 lg:-translate-x-24 bg-white bg-opacity-80 hover:bg-opacity-100 text-thetaTauRed p-4 rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-thetaTauGold"
            aria-label="Previous photo"
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
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 lg:translate-x-24 bg-white bg-opacity-80 hover:bg-opacity-100 text-thetaTauRed p-4 rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-thetaTauGold"
            aria-label="Next photo"
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
              className={`min-w-[44px] min-h-[44px] rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-thetaTauGold focus:ring-offset-2 focus:ring-offset-thetaTauRed flex items-center justify-center ${
                index === currentIndex
                  ? 'bg-thetaTauGold'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-100'
              }`}
              aria-label={`Go to photo ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            >
              <span className={`block rounded-full transition-all ${
                index === currentIndex
                  ? 'w-4 h-4 bg-thetaTauRed'
                  : 'w-3 h-3 bg-white'
              }`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
