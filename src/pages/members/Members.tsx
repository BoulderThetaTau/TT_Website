import React, { useState } from 'react';
import { Member } from '@/types/member';
import { organizeMembersBySections } from '@/types/member';
import { MEMBERS } from '@/data/members';
import { MemberCard } from './MemberCard';
import { MemberModal } from './MemberModal';

/**
 * Members Page
 *
 * Displays all chapter members organized by:
 * 1. Mercury Council (Leadership) at the top
 * 2. Pledge classes in chronological order (newest to oldest)
 *
 * Features:
 * - Click on any member to view detailed modal
 * - Responsive grid layout
 * - Easy to expand with new pledge classes
 */
export const Members: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sections = organizeMembersBySections(MEMBERS);

  const handleMemberClick = (member: Member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing selected member to allow exit animation
    setTimeout(() => setSelectedMember(null), 300);
  };

  return (
    <main className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-thetaTauRed py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="font-primary font-bold text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-6">
            OUR MEMBERS
          </h1>
          <p className="font-primary text-white text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            Meet the engineers, leaders, and innovators who make up the Eta Gamma chapter of Theta Tau
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold">{MEMBERS.length}</div>
              <div className="text-sm opacity-75 mt-1">Active Members</div>
            </div>
            <div className="w-px h-12 bg-white opacity-30" />
            <div className="text-center">
              <div className="text-4xl font-bold">
                {MEMBERS.filter(m => m.isLeadership).length}
              </div>
              <div className="text-sm opacity-75 mt-1">Leadership</div>
            </div>
            <div className="w-px h-12 bg-white opacity-30" />
            <div className="text-center">
              <div className="text-4xl font-bold">5</div>
              <div className="text-sm opacity-75 mt-1">Pledge Classes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Sections */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        {sections.map((section, sectionIndex) => (
          <section
            key={section.title}
            className={sectionIndex > 0 ? 'mt-20 md:mt-24' : ''}
          >
            {/* Section Header */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="font-primary font-bold text-thetaTauRed text-3xl md:text-4xl lg:text-5xl">
                  {section.title}
                </h2>
                <div className="flex-1 h-1 bg-gradient-to-r from-thetaTauGold to-transparent" />
              </div>
              {section.description && (
                <p className="font-primary text-gray-600 text-lg leading-relaxed">
                  {section.description}
                </p>
              )}
            </div>

            {/* Member Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
              {section.members.map((member) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  onClick={() => handleMemberClick(member)}
                />
              ))}
            </div>
          </section>
        ))}

        {/* Empty State (if no members) */}
        {sections.length === 0 && (
          <div className="text-center py-20">
            <i className="fas fa-users text-gray-300 text-6xl mb-6" />
            <h3 className="font-primary font-bold text-2xl text-gray-400 mb-3">
              No Members Yet
            </h3>
            <p className="text-gray-500">
              Add members to the data file to see them here.
            </p>
          </div>
        )}
      </div>

      {/* Member Detail Modal */}
      <MemberModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
};
