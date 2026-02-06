/**
 * Chapter Information & Configuration
 *
 * Centralized source of truth for all chapter information including:
 * - Contact details
 * - Social media links
 * - Physical address
 * - Chapter description and pillars
 *
 * This file merges constants/company.ts and constants/socialMedia.ts
 */

// ============================================================================
// SOCIAL MEDIA CONFIGURATION
// ============================================================================

export interface SocialMediaLink {
  platform: string;
  url: string;
  iconClass?: string; // Font Awesome or other icon class
  ariaLabel: string;
  displayName: string;
  active: boolean; // Whether to display this link
}

export const SOCIAL_MEDIA: SocialMediaLink[] = [
  {
    platform: 'instagram',
    url: 'https://www.instagram.com/boulderthetau/',
    iconClass: 'fab fa-instagram',
    ariaLabel: 'Visit our Instagram page',
    displayName: 'Instagram (@boulderthetau)',
    active: true,
  },
  {
    platform: 'linkedin',
    url: 'https://www.linkedin.com/company/eta-gamma-chapter-of-theta-tau/',
    iconClass: 'fab fa-linkedin',
    ariaLabel: 'Visit our LinkedIn page',
    displayName: 'LinkedIn (Eta Gamma Chapter of Theta Tau)',
    active: true,
  },
  {
    platform: 'facebook',
    url: '', // Add URL when available
    iconClass: 'fab fa-facebook',
    ariaLabel: 'Visit our Facebook page',
    displayName: 'Facebook',
    active: false,
  },
  {
    platform: 'twitter',
    url: '', // Add URL when available
    iconClass: 'fab fa-twitter',
    ariaLabel: 'Follow us on Twitter',
    displayName: 'Twitter',
    active: false,
  },
  {
    platform: 'youtube',
    url: '', // Add URL if you have a YouTube channel
    iconClass: 'fab fa-youtube',
    ariaLabel: 'Subscribe to our YouTube channel',
    displayName: 'YouTube',
    active: false,
  },
];

// Get only active social media links
export const getActiveSocialMedia = (): SocialMediaLink[] => {
  return SOCIAL_MEDIA.filter(link => link.active && link.url);
};

// Get social media link by platform
export const getSocialMediaLink = (platform: string): SocialMediaLink | undefined => {
  return SOCIAL_MEDIA.find(link => link.platform.toLowerCase() === platform.toLowerCase());
};

// Social media metadata for SEO
export const SOCIAL_META = {
  defaultImage: '/images/ThetaTauLogo.png', // Default OG image
  twitterHandle: '', // Add if you have a Twitter account
  facebookAppId: '', // Add if you have a Facebook app
};

// ============================================================================
// CHAPTER INFORMATION
// ============================================================================

export const CHAPTER_INFO = {
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
      general: 'contact@etagamma.org',
    },

    // Phone numbers
    phone: {
      central: '(512) 472-1904',
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

  // Social Media URLs (simplified for backward compatibility)
  social: {
    instagram: 'https://www.instagram.com/boulderthetau/',
    linkedin: 'https://www.linkedin.com/company/eta-gamma-chapter-of-theta-tau/',
    facebook: '',
    twitter: '',
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

  // Hours/Availability
  hours: {
    office: 'By Appointment Only',
  },
} as const;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

// Helper function to format address for display
export const getFormattedAddress = (): string => {
  const { street, city, state, zip } = CHAPTER_INFO.contact.address;
  return `${street}, ${city}, ${state} ${zip}`;
};

// Helper function to get mailto link
export const getMailtoLink = (emailKey: keyof typeof CHAPTER_INFO.contact.email): string => {
  return `mailto:${CHAPTER_INFO.contact.email[emailKey]}`;
};

// Helper function to format phone for tel: link
export const getTelLink = (phoneKey: keyof typeof CHAPTER_INFO.contact.phone): string => {
  const phone = CHAPTER_INFO.contact.phone[phoneKey];
  return `tel:${phone?.replace(/[^0-9]/g, '')}`;
};

// Legacy export for backward compatibility
export const COMPANY_INFO = CHAPTER_INFO;
