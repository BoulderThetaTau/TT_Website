/**
 * Company/Chapter Information Constants
 *
 * All contact information, addresses, and chapter details.
 * Update these values when chapter information changes.
 */

export const COMPANY_INFO = {
  // Chapter Information
  chapter: {
    name: 'Eta Gamma Chapter',
    fullName: 'Theta Tau - Eta Gamma Chapter',
    fraternity: 'Theta Tau',
    university: 'University of Colorado Boulder',
    founded: '1904', // National founding (University of Minnesota)
    localFounded: '1997', // Eta Gamma Chapter founded Spring 1997
    description: 'The oldest, largest, and foremost Fraternity for Engineers',
  },

  // Contact Information
  contact: {
    // Primary emails
    email: {
      regent: 'regent@etagamma.org',
      vice: 'vice@etagamma.org',
      central: 'central.office@thetatau.org',
      general: 'contact@etagamma.org', // If you have a general contact email
    },

    // Phone numbers
    phone: {
      central: '(512) 472-1904',
      // Add chapter phone if available
    },

    // Physical address
    address: {
      street: '1111 Engineering Dr',
      city: 'Boulder',
      state: 'CO',
      zip: '80309',
      country: 'USA',
      fullAddress: '1111 Engineering Dr, Boulder, CO 80309',
    },
  },

  // Social Media - will be deprecated in favor of socialMedia.ts
  // Keeping here for backward compatibility
  social: {
    instagram: 'https://www.instagram.com/thetatau_etagamma/',
    linkedin: 'https://www.linkedin.com/company/theta-tau-eta-gamma-chapter/',
    facebook: '', // Add if available
    twitter: '', // Add if available
  },

  // Chapter Description (from THETA_TAU_BRANDING.md)
  description: {
    short: 'The oldest, largest, and foremost Fraternity for Engineers at CU Boulder.',
    long: 'Theta Tau is the oldest, largest, and foremost Fraternity for Engineers. Since its founding at the University of Minnesota in 1904, over 40,000 brothers have been initiated over the years. With over 200 undergraduate chapters and colonies at the top ABET accredited schools, The Eta Gamma chapter of the Theta Tau fraternity was established in the Spring of 1997. We are based at the University of Colorado - Boulder creating a diverse home for all engineers.',
    mission: 'Everyone knows that going to a nationally proclaimed engineering school isn\'t going to be easy. That\'s where members of Theta Tau can bond together and help each other along every step of the way while developing lifelong kinships along the path.',
  },

  // Core Pillars (from THETA_TAU_BRANDING.md)
  pillars: {
    brotherhood: {
      title: 'Brotherhood',
      description: 'Many ties aspire to create a close knit brotherhood among brothers, both at the undergraduate and graduate levels. Through our various social, intramural and more, Theta Tau has created many strong, long-lasting friendships.',
    },
    professionalDevelopment: {
      title: 'Professional Development',
      description: 'Members have the ability to showcase their achievements through our various development and networking opportunities to create connections with industry professionals as a University. CU Boulders Engineering Department is outstanding.',
    },
    communityService: {
      title: 'Community Service',
      description: 'Theta Tau frequently hosts group participation in various events. We enjoy participating in events such as relay events and other local events. We love creating partnerships with Habitat for Humanity!',
    },
  },

  // Hours/Availability (if applicable)
  hours: {
    office: 'By Appointment Only',
    // Add meeting times if public
  },
} as const;

// Helper function to format address for display
export const getFormattedAddress = (): string => {
  const { street, city, state, zip } = COMPANY_INFO.contact.address;
  return `${street}, ${city}, ${state} ${zip}`;
};

// Helper function to get mailto link
export const getMailtoLink = (emailKey: keyof typeof COMPANY_INFO.contact.email): string => {
  return `mailto:${COMPANY_INFO.contact.email[emailKey]}`;
};

// Helper function to format phone for tel: link
export const getTelLink = (phoneKey: keyof typeof COMPANY_INFO.contact.phone): string => {
  const phone = COMPANY_INFO.contact.phone[phoneKey];
  return `tel:${phone?.replace(/[^0-9]/g, '')}`;
};
