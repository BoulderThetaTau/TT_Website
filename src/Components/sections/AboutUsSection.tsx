import React from 'react';
import { COMPANY_INFO } from '../../constants/company';

/**
 * About Us Section Component
 *
 * Homepage about section with description, gear logo, and photo placeholders.
 * Red background with white text.
 */
export const AboutUsSection: React.FC = () => {
  return (
    <section className="relative w-full bg-thetaTauRed py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-thetaTauGold font-primary font-bold text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-12">
          ABOUT US
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column: Description Text */}
          <div className="text-white space-y-4">
            <p className="text-base md:text-lg leading-relaxed">
              {COMPANY_INFO.description.long}
            </p>
            <p className="text-base md:text-lg leading-relaxed font-medium">
              {COMPANY_INFO.description.mission}
            </p>
          </div>

          {/* Right Column: Gear Logo (Hidden on mobile) */}
          <div className="hidden lg:flex justify-center items-center">
            <img
              src="/images/TT-Gear-RGW.svg"
              alt="Theta Tau Gear Logo"
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>

        {/* Photo Placeholders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 lg:mt-16">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="aspect-square bg-gray-300 rounded-lg overflow-hidden"
            >
              {/* Placeholder for images - will be replaced with actual photos */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <span className="text-sm">Photo {index}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
