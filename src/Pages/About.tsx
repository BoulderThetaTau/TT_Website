import React from 'react';
import { AboutHeroSection } from '../Components/sections/AboutHeroSection';
import { OurPurposeSection } from '../Components/sections/OurPurposeSection';
import { OurHistorySection } from '../Components/sections/OurHistorySection';
import { OurPillarsSection } from '../Components/sections/OurPillarsSection';
import { QuoteSection } from '../Components/sections/QuoteSection';

/**
 * About Page
 *
 * Comprehensive page about Theta Tau's purpose, history, and pillars.
 * Includes hero section, purpose, history, pillars, and inspirational quote.
 */
export const About: React.FC = () => {
  return (
    <main className="w-full">
      <AboutHeroSection />
      <OurPurposeSection />
      <OurHistorySection />
      <OurPillarsSection />
      <QuoteSection />
    </main>
  );
};
