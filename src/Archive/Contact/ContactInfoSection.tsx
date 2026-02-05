import React from 'react';
import { ContactGallery } from './ContactGallery';

/**
 * Contact Info Section Component
 *
 * Displays contact information for Eta Gamma Chapter and Theta Tau Nationals.
 * Includes email, phone, and address details with FontAwesome icons.
 */

interface ContactItemProps {
  icon: string;
  children: React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, children }) => (
  <div className="flex items-center gap-x-4 mt-4 pb-2 border-b border-thetaTauGold">
    <i
      className={`fa ${icon} fa-2x bg-thetaTauRed rounded-full flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 text-white shrink-0`}
      aria-hidden="true"
    />
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      {children}
    </div>
  </div>
);

export const ContactInfoSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Eta Gamma Chapter Section */}
        <div className="mb-12">
          <h2 className="font-primary font-semibold text-4xl md:text-5xl text-gray-700 mb-6">
            Eta Gamma Chapter
          </h2>

          <ContactItem icon="fa-envelope">
            <a
              href="mailto:regent@etagamma.org"
              className="text-thetaTauRed hover:text-thetaTauGold hover:underline transition-colors duration-200"
            >
              regent@etagamma.org
            </a>
          </ContactItem>

          <ContactItem icon="fa-map-marker">
            <p className="text-gray-800">
              1111 Engineering Dr, Boulder, CO 80309
            </p>
          </ContactItem>
        </div>

        {/* Nationals Section */}
        <div className="mb-12">
          <h2 className="font-primary font-semibold text-4xl md:text-5xl text-gray-700 mb-6">
            Nationals
          </h2>

          <ContactItem icon="fa-phone">
            <p className="text-gray-800">(512) 472-1904</p>
          </ContactItem>

          <ContactItem icon="fa-envelope">
            <a
              href="mailto:central.office@thetatau.org"
              className="text-thetaTauRed hover:text-thetaTauGold hover:underline transition-colors duration-200"
            >
              central.office@thetatau.org
            </a>
          </ContactItem>

          <div className="flex items-start gap-x-4 mt-4 border-b border-gray-300 pb-4">
            <h3 className="font-primary font-semibold text-xl md:text-2xl text-thetaTauRed shrink-0">
              Mailing Address:
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-800">
              2131 W. Republic Road #528, Springfield, MO 65807
            </p>
          </div>
        </div>

        {/* Gallery */}
        <ContactGallery />
      </div>
    </section>
  );
};
