/**
 * Social Media Links and Configuration
 *
 * All social media platform links and icons.
 * Update these when social media accounts change.
 */

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
    active: false, // Set to true when URL is added
  },
  {
    platform: 'twitter',
    url: '', // Add URL when available
    iconClass: 'fab fa-twitter',
    ariaLabel: 'Follow us on Twitter',
    displayName: 'Twitter',
    active: false, // Set to true when URL is added
  },
  {
    platform: 'youtube',
    url: '', // Add URL if you have a YouTube channel
    iconClass: 'fab fa-youtube',
    ariaLabel: 'Subscribe to our YouTube channel',
    displayName: 'YouTube',
    active: false, // Set to true when URL is added
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
