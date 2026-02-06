import React from 'react';
import { HeroSection } from './HeroSection';
import { AboutUsSection } from './AboutUsSection';
import { CommunityStatsSection } from './CommunityStatsSection';
import { AlumniCarousel } from './AlumniCarousel';

/**
 * Home Page Component
 *
 * Main landing page for the Theta Tau Eta Gamma website.
 * Combines all homepage sections in sequence.
 */
export const Home: React.FC = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutUsSection />
      <CommunityStatsSection />
      <AlumniCarousel />
    </main>
  );
};
