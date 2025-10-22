/**
 * Navigation and Route Constants
 *
 * All application routes and navigation structure.
 * Modify these to update site navigation.
 */

export interface NavRoute {
  path: string;
  label: string;
  description?: string;
  showInNav?: boolean; // Whether to display in main navigation
  icon?: string; // Optional icon class or name
}

// Main application routes
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  BROTHERHOOD: '/brotherhood',
  CONTACT: '/contact',
  COMM_SERVE: '/comm-serve',
  PROF_DEV: '/prof-dev',
  MERC: '/merc',
  RUSH: '/rush',
  SIGN_UP: '/sign-up',
} as const;

// Navigation items for header/navbar
export const NAV_ITEMS: NavRoute[] = [
  {
    path: ROUTES.HOME,
    label: 'Home',
    description: 'Return to homepage',
    showInNav: true,
  },
  {
    path: ROUTES.ABOUT,
    label: 'About Us',
    description: 'Learn about our chapter',
    showInNav: true,
  },
  {
    path: ROUTES.BROTHERHOOD,
    label: 'Brotherhood',
    description: 'Brotherhood events and activities',
    showInNav: true,
  },
  {
    path: ROUTES.COMM_SERVE,
    label: 'Community Service',
    description: 'Our community service initiatives',
    showInNav: true,
  },
  {
    path: ROUTES.PROF_DEV,
    label: 'Professional Development',
    description: 'Professional development programs',
    showInNav: true,
  },
  {
    path: ROUTES.MERC,
    label: 'Mercury Council',
    description: 'Meet our executive board',
    showInNav: true,
  },
  {
    path: ROUTES.RUSH,
    label: 'Rush',
    description: 'Join Theta Tau',
    showInNav: true,
  },
  {
    path: ROUTES.CONTACT,
    label: 'Contact',
    description: 'Get in touch with us',
    showInNav: true,
  },
];

// Footer navigation (may differ from main nav)
export const FOOTER_NAV = {
  quickLinks: [
    { path: ROUTES.ABOUT, label: 'About Us' },
    { path: ROUTES.RUSH, label: 'Rush' },
    { path: ROUTES.MERC, label: 'Mercury Council' },
    { path: ROUTES.CONTACT, label: 'Contact' },
  ],
  involvement: [
    { path: ROUTES.BROTHERHOOD, label: 'Brotherhood' },
    { path: ROUTES.COMM_SERVE, label: 'Community Service' },
    { path: ROUTES.PROF_DEV, label: 'Professional Development' },
  ],
};

// Home page navigation cards
export const HOME_CARDS = [
  {
    id: 'about',
    title: 'About Us',
    description: 'Learn about Theta Tau Eta Gamma Chapter',
    path: ROUTES.ABOUT,
    image: '/images/AboutUs.png',
    labelColor: 'gold',
  },
  {
    id: 'rush',
    title: 'Rush',
    description: 'Join our professional engineering fraternity',
    path: ROUTES.RUSH,
    image: '/images/Rush.png',
    labelColor: 'red',
  },
  {
    id: 'merc',
    title: 'Mercury Council',
    description: 'Meet our executive board members',
    path: ROUTES.MERC,
    image: '/images/Merc.png',
    labelColor: 'gold',
  },
  {
    id: 'contact',
    title: 'Contact',
    description: 'Get in touch with us',
    path: ROUTES.CONTACT,
    image: '/images/Contact.png',
    labelColor: 'red',
  },
];

// Breadcrumb helper
export const getBreadcrumbs = (pathname: string): Array<{ label: string; path: string }> => {
  const navItem = NAV_ITEMS.find(item => item.path === pathname);

  return [
    { label: 'Home', path: ROUTES.HOME },
    ...(navItem ? [{ label: navItem.label, path: navItem.path }] : []),
  ];
};
