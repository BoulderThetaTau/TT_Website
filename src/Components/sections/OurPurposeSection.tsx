import React from 'react';

/**
 * Our Purpose Section Component
 *
 * Red background section with text content and decorative boxes.
 * Two-column layout on desktop, stacked on mobile.
 */
export const OurPurposeSection: React.FC = () => {
  return (
    <section className="relative w-full bg-thetaTauRed py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white">
            <h2 className="font-primary font-bold text-4xl md:text-5xl lg:text-6xl mb-6 lg:mb-8">
              Our Purpose
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                Founded on the principles of Brotherhood, Professionalism, and Service, Theta Tau is a co-ed professional engineering fraternity with a mission to develop and maintain a high standard of professional interest among its members.
              </p>
              <p>
                We strive to unite engineering students and alumni through a bond of brotherhood that fosters personal and professional development. Our members are committed to creating a diverse community that shares the common goal of engineering excellence.
              </p>
              <p>
                Through our three pillars, we provide opportunities for professional development, social engagement, and community impact, preparing our members to become leaders in the engineering profession and beyond.
              </p>
            </div>
          </div>

          {/* Right Column - Decorative Boxes */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Dotted White Pattern Box */}
            <div
              className="w-full h-64 lg:h-80 rounded-lg"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.3) 2px, transparent 2px)`,
                backgroundSize: '20px 20px'
              }}
            />
            {/* Gold Solid Box */}
            <div className="w-full h-48 lg:h-64 bg-thetaTauGold rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};
