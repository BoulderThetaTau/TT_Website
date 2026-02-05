import React from 'react';
import { COMPANY_INFO } from '../../constants/company';

/**
 * Our Pillars Section Component
 *
 * Displays the three core pillars of Theta Tau.
 * Three-column grid on desktop, single column on mobile.
 */
export const OurPillarsSection: React.FC = () => {
  const pillars = [
    {
      id: 'professional',
      icon: '/images/Icons/Professional_Development-Icon.png',
      ...COMPANY_INFO.pillars.professionalDevelopment
    },
    {
      id: 'brotherhood',
      icon: '/images/Icons/Brotherhood-Icon.png',
      ...COMPANY_INFO.pillars.brotherhood
    },
    {
      id: 'service',
      icon: '/images/Icons/Community-Service-Icon.png',
      ...COMPANY_INFO.pillars.communityService
    }
  ];

  return (
    <section className="relative w-full bg-thetaTauRed py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="font-primary font-bold text-white text-4xl md:text-5xl lg:text-6xl text-center mb-12 md:mb-16 lg:mb-20">
          OUR PILLARS
        </h2>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="flex flex-col items-center text-center text-white"
            >
              {/* Icon */}
              <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mb-6 flex items-center justify-center">
                <img
                  src={pillar.icon}
                  alt={`${pillar.title} icon`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-primary font-bold text-2xl md:text-3xl lg:text-4xl mb-4">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg leading-relaxed max-w-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
