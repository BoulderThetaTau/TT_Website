import React from 'react';
import { Member } from '@/types/member';

/**
 * MemberCard Component
 *
 * Displays a member's headshot, name, and position.
 * Headshot maintains 2:3 aspect ratio.
 * Clickable to open detailed modal.
 */
interface MemberCardProps {
  member: Member;
  onClick: () => void;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member, onClick }) => {
  return (
    <div
      className="group cursor-pointer focus:outline-none focus:ring-2 focus:ring-thetaTauGold focus:ring-offset-4 rounded-lg"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View details for ${member.firstName} ${member.lastName}${
        member.position ? `, ${member.position}` : ''
      }`}
    >
      {/* Headshot Container - 2:3 Ratio */}
      <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg bg-gray-200 shadow-md group-hover:shadow-xl transition-all duration-300">
        {member.headshot ? (
          <img
            src={member.headshot}
            alt={`${member.firstName} ${member.lastName}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          // Placeholder if no headshot
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-thetaTauRed to-red-900 text-white">
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">
                {member.firstName[0]}
                {member.lastName[0]}
              </div>
              <div className="text-sm opacity-75">No Photo</div>
            </div>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-thetaTauRed bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 px-4 py-2 rounded-full">
            Click for details
          </div>
        </div>

        {/* Leadership Badge (if applicable) */}
        {member.isLeadership && member.position && (
          <div className="absolute top-3 right-3 bg-thetaTauGold text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Leadership
          </div>
        )}
      </div>

      {/* Member Info */}
      <div className="mt-4 text-center">
        {/* Name */}
        <h3 className="font-primary font-bold text-lg md:text-xl text-gray-900 group-hover:text-thetaTauRed transition-colors duration-200">
          {member.firstName} {member.lastName}
        </h3>

        {/* Position */}
        {member.position && (
          <p className="font-primary text-thetaTauGold text-sm md:text-base font-semibold mt-1">
            {member.position}
          </p>
        )}

        {/* Pledge Class (if not leadership or if no position) */}
        {!member.position && (
          <p className="font-primary text-gray-600 text-sm mt-1">
            {member.pledgeClass}
          </p>
        )}

        {/* Major */}
        {member.major && (
          <p className="font-primary text-gray-500 text-xs md:text-sm mt-1 leading-relaxed">
            {member.major}
          </p>
        )}
      </div>
    </div>
  );
};
