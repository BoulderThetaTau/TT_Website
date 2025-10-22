import React from 'react';
import { HeroSection } from '../Components/sections/HeroSection';
import { AboutUsSection } from '../Components/sections/AboutUsSection';
import { CommunityStatsSection } from '../Components/sections/CommunityStatsSection';
import { AlumniCarousel } from '../Components/sections/AlumniCarousel';

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
