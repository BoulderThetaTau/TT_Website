import React from 'react';

/**
 * Contact Hero Section Component
 *
 * Full-width hero section for the Contact page with background image overlay.
 * Displays "CONTACT" title with Theta Tau branding.
 */
export const ContactHeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[65vh] bg-thetaTauRed overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Contact_Head.png"
          alt="Contact background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-4xl mx-auto">
        <h1 className="font-primary font-bold text-white text-6xl sm:text-7xl md:text-8xl lg:text-[100px] leading-none">
          CONTACT
        </h1>
      </div>
    </section>
  );
};
