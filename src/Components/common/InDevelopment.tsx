import React from 'react';

/**
 * InDevelopment Component
 *
 * Placeholder page for sections under construction.
 * Displays a professional "coming soon" message.
 */
interface InDevelopmentProps {
  pageName: string;
  description?: string;
  icon?: string;
}

export const InDevelopment: React.FC<InDevelopmentProps> = ({
  pageName,
  description = 'This page is currently under construction. Check back soon!',
  icon = 'fas fa-tools',
}) => {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full text-center">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-thetaTauRed to-red-900 flex items-center justify-center shadow-2xl">
            <i className={`${icon} text-5xl text-thetaTauGold`} />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-primary font-bold text-4xl md:text-5xl text-thetaTauRed mb-4">
          {pageName}
        </h1>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-thetaTauGold bg-opacity-20 rounded-full mb-6">
          <div className="w-2 h-2 bg-thetaTauGold rounded-full animate-pulse" />
          <span className="font-primary font-semibold text-sm text-thetaTauRed uppercase tracking-wide">
            In Development
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-lg mx-auto">
          {description}
        </p>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-thetaTauGold to-transparent w-full max-w-xs" />
        </div>

        {/* Call to Action */}
        <div className="space-y-4">
          <p className="text-gray-600 text-sm">
            In the meantime, feel free to explore other sections of our website.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-thetaTauRed hover:bg-red-900 text-white font-primary font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-thetaTauGold focus:ring-offset-2"
          >
            <i className="fas fa-home" />
            Return to Home
          </a>
        </div>

        {/* Decorative Gears */}
        <div className="mt-16 opacity-20">
          <svg
            className="w-full h-24"
            viewBox="0 0 200 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="25"
              r="15"
              stroke="currentColor"
              strokeWidth="2"
              className="text-thetaTauRed"
            />
            <circle
              cx="100"
              cy="25"
              r="20"
              stroke="currentColor"
              strokeWidth="2"
              className="text-thetaTauGold"
            />
            <circle
              cx="150"
              cy="25"
              r="15"
              stroke="currentColor"
              strokeWidth="2"
              className="text-thetaTauRed"
            />
          </svg>
        </div>
      </div>
    </main>
  );
};
