import React from 'react';
import { ContactHeroSection } from '../Components/sections/ContactHeroSection';
import { ContactInfoSection } from '../Components/sections/ContactInfoSection';

/**
 * Contact Page
 *
 * Main contact page for Theta Tau Eta Gamma chapter.
 * Displays chapter and national contact information with image gallery.
 */
export const Contact: React.FC = () => {
  return (
    <main className="w-full">
      <ContactHeroSection />
      <ContactInfoSection />
    </main>
  );
};
