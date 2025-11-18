import React from 'react';

/**
 * Our History Section Component
 *
 * Red background section with decorative box and historical text.
 * Two-column layout (box left, text right) on desktop, stacked on mobile.
 */
export const OurHistorySection: React.FC = () => {
  return (
    <section className="relative w-full bg-thetaTauRed py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Decorative Box (Hidden on mobile, shown first on desktop) */}
          <div className="order-2 lg:order-1">
            <div
              className="w-full h-64 lg:h-96 rounded-lg"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.3) 2px, transparent 2px)`,
                backgroundSize: '20px 20px'
              }}
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="text-white order-1 lg:order-2">
            <h2 className="font-primary font-bold text-4xl md:text-5xl lg:text-6xl mb-6 lg:mb-8">
              Our History
            </h2>
            <div className="space-y-6 text-base md:text-lg leading-relaxed">
              <p>
                The Eta Gamma chapter of Theta Tau was founded at the University of Colorado Boulder, bringing together passionate engineering students who shared a vision of brotherhood and professional excellence.
              </p>
              <p>
                Since our founding, we have grown into a thriving community of engineers from diverse backgrounds and disciplines. Our chapter has established a strong tradition of academic achievement, professional development, and community service.
              </p>
              <p>
                Today, the Eta Gamma chapter continues to uphold the values and traditions of Theta Tau while adapting to meet the needs of modern engineering students. We are proud of our legacy and excited about our future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
