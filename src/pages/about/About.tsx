import React from 'react';
import { AboutHeroSection } from './AboutHeroSection';
import { OurPurposeSection } from './OurPurposeSection';
import { OurHistorySection } from './OurHistorySection';
import { OurPillarsSection } from './OurPillarsSection';
import { QuoteSection } from './QuoteSection';

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
