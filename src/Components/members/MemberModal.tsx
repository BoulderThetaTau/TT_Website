import React, { useEffect } from 'react';
import { Member } from '../../types/member';

/**
 * MemberModal Component
 *
 * Modal displaying detailed information about a member.
 * Includes headshot, bio, interests, contact info, etc.
 */
interface MemberModalProps {
  member: Member | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MemberModal: React.FC<MemberModalProps> = ({ member, isOpen, onClose }) => {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !member) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-75 z-50 transition-opacity duration-300 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div
          className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-thetaTauRed hover:text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-thetaTauGold"
            aria-label="Close modal"
          >
            <i className="fas fa-times text-xl" />
          </button>

          {/* Modal Content */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {/* Left Column - Headshot */}
            <div className="md:col-span-2 bg-gradient-to-br from-thetaTauRed to-red-900 p-8 flex flex-col items-center justify-center rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
              <div className="w-full max-w-sm">
                {/* Headshot - 2:3 Ratio */}
                <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-2xl bg-white">
                  {member.headshot ? (
                    <img
                      src={member.headshot}
                      alt={`${member.firstName} ${member.lastName}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400 text-gray-700">
                      <div className="text-center">
                        <div className="text-8xl font-bold">
                          {member.firstName[0]}
                          {member.lastName[0]}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Contact Links */}
                <div className="flex gap-3 justify-center mt-6">
                  {member.linkedIn && (
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white hover:bg-thetaTauGold flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
                      aria-label="LinkedIn profile"
                    >
                      <i className="fab fa-linkedin text-thetaTauRed text-xl" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="w-12 h-12 rounded-full bg-white hover:bg-thetaTauGold flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
                      aria-label="Send email"
                    >
                      <i className="fas fa-envelope text-thetaTauRed text-xl" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="md:col-span-3 p-8 md:p-10">
              {/* Name & Title */}
              <div className="mb-6">
                <h2
                  id="modal-title"
                  className="font-primary font-bold text-3xl md:text-4xl text-thetaTauRed mb-2 leading-tight"
                >
                  {member.firstName} {member.lastName}
                </h2>
                {member.position && (
                  <p className="font-primary text-thetaTauGold text-xl font-semibold mb-2">
                    {member.position}
                  </p>
                )}
                <p className="font-primary text-gray-600 text-base">
                  {member.pledgeClass}
                </p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                {member.major && (
                  <InfoItem icon="fas fa-graduation-cap" label="Major" value={member.major} />
                )}
                {member.year && (
                  <InfoItem icon="fas fa-calendar" label="Year" value={member.year} />
                )}
                {member.graduationYear && (
                  <InfoItem
                    icon="fas fa-calendar-check"
                    label="Graduation"
                    value={member.graduationYear.toString()}
                  />
                )}
                {member.hometown && (
                  <InfoItem icon="fas fa-map-marker-alt" label="Hometown" value={member.hometown} />
                )}
              </div>

              {/* Bio */}
              {member.bio && (
                <div className="mb-6">
                  <h3 className="font-primary font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <i className="fas fa-user text-thetaTauGold" />
                    About
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              )}

              {/* Interests */}
              {member.interests && member.interests.length > 0 && (
                <div>
                  <h3 className="font-primary font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <i className="fas fa-heart text-thetaTauGold" />
                    Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {member.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-100 hover:bg-thetaTauGold hover:text-white text-gray-700 text-sm rounded-full transition-colors duration-200"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/**
 * InfoItem Component
 * Small component for displaying info with icon
 */
interface InfoItemProps {
  icon: string;
  label: string;
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="w-10 h-10 rounded-full bg-thetaTauRed bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-0.5">
      <i className={`${icon} text-thetaTauRed text-sm`} />
    </div>
    <div>
      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-0.5">
        {label}
      </p>
      <p className="text-base text-gray-900 font-medium leading-tight">
        {value}
      </p>
    </div>
  </div>
);
