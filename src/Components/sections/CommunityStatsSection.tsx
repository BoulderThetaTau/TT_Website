import React from 'react';
import { CHAPTER_STATS, formatStatValue } from '../../constants/stats';

/**
 * Community Stats Section Component
 *
 * Displays chapter statistics on gold background.
 * Shows members, majors, and GPA stats horizontally.
 */
export const CommunityStatsSection: React.FC = () => {
  return (
    <section className="relative w-full bg-thetaTauGold py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-thetaTauRed font-primary font-bold text-4xl md:text-5xl lg:text-6xl text-center mb-12 md:mb-16">
          OUR COMMUNITY
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12">
          {CHAPTER_STATS.map((stat) => (
            <div key={stat.id} className="text-center">
              {/* Stat Value */}
              <div className="text-white font-primary font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 leading-tight">
                {formatStatValue(stat.value)}
              </div>

              {/* Stat Label */}
              <div className="text-white font-primary text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
