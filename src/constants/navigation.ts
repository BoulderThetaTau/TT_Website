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
  MEMBERS: '/members',
  MERC: '/merc', // Legacy route - redirects to /members
  RUSH: '/rush',
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
    path: ROUTES.MEMBERS,
    label: 'Members',
    description: 'Meet our chapter members',
    showInNav: true,
  },
  {
    path: ROUTES.RUSH,
    label: 'Rush',
    description: 'Join Theta Tau',
    showInNav: true,
  },
];

// Footer navigation (may differ from main nav)
export const FOOTER_NAV = {
  quickLinks: [
    { path: ROUTES.ABOUT, label: 'About Us' },
    { path: ROUTES.RUSH, label: 'Rush' },
    { path: ROUTES.MEMBERS, label: 'Members' },
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
    id: 'members',
    title: 'Members',
    description: 'Meet our chapter members',
    path: ROUTES.MEMBERS,
    image: '/images/Merc.png', // Can update image later
    labelColor: 'gold',
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
