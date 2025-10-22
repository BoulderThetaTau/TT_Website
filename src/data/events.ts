/**
 * Events Data
 *
 * Community service and professional development events.
 * Add new events as they are scheduled and mark past events as completed.
 */

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string; // ISO format: YYYY-MM-DD
  time?: string; // e.g., "6:00 PM - 8:00 PM"
  location?: string;
  category: 'community-service' | 'professional-development' | 'brotherhood' | 'social' | 'rush';
  image?: string;
  attendees?: number;
  isCompleted?: boolean;
  registrationUrl?: string;
}

// Community Service Events
export const COMMUNITY_SERVICE_EVENTS: Event[] = [
  {
    id: 'cs-2024-fall-campus-cleanup',
    title: 'Campus Cleanup Day',
    description:
      'Join us for a campus-wide cleanup initiative. We will be cleaning up litter and beautifying our campus while giving back to the CU Boulder community.',
    date: '2024-10-15',
    time: '9:00 AM - 12:00 PM',
    location: 'Meet at Engineering Center',
    category: 'community-service',
    attendees: 25,
    isCompleted: true,
  },
  {
    id: 'cs-2024-fall-food-bank',
    title: 'Community Food Bank Volunteer Day',
    description:
      'Volunteer at the local food bank to help sort donations and prepare meal packages for families in need.',
    date: '2024-11-03',
    time: '2:00 PM - 5:00 PM',
    location: 'Boulder Community Food Bank',
    category: 'community-service',
    attendees: 18,
    isCompleted: true,
  },
  {
    id: 'cs-2025-spring-stem-outreach',
    title: 'STEM Outreach at Local Elementary School',
    description:
      'Inspire the next generation of engineers by teaching elementary school students about science and engineering through hands-on activities and demonstrations.',
    date: '2025-03-15',
    time: '1:00 PM - 3:30 PM',
    location: 'Boulder Elementary School',
    category: 'community-service',
    isCompleted: false,
  },
  // Add more community service events here
];

// Professional Development Events
export const PROFESSIONAL_DEVELOPMENT_EVENTS: Event[] = [
  {
    id: 'pd-2024-fall-resume-workshop',
    title: 'Resume & LinkedIn Workshop',
    description:
      'Learn how to craft a compelling engineering resume and optimize your LinkedIn profile. Get feedback from industry professionals and career advisors.',
    date: '2024-09-20',
    time: '6:00 PM - 8:00 PM',
    location: 'Engineering Center, Room 245',
    category: 'professional-development',
    attendees: 35,
    isCompleted: true,
  },
  {
    id: 'pd-2024-fall-mock-interviews',
    title: 'Technical Interview Prep',
    description:
      'Practice technical interviews with alumni and industry professionals. Receive personalized feedback on your problem-solving and communication skills.',
    date: '2024-10-10',
    time: '5:00 PM - 7:30 PM',
    location: 'Virtual (Zoom)',
    category: 'professional-development',
    attendees: 28,
    isCompleted: true,
  },
  {
    id: 'pd-2024-fall-industry-panel',
    title: 'Industry Panel: Careers in Tech',
    description:
      'Hear from engineering professionals working at top tech companies. Learn about career paths, industry trends, and get your questions answered.',
    date: '2024-11-15',
    time: '6:30 PM - 8:30 PM',
    location: 'Engineering Center Auditorium',
    category: 'professional-development',
    attendees: 45,
    isCompleted: true,
  },
  {
    id: 'pd-2025-spring-startup-pitch',
    title: 'Startup Pitch Competition',
    description:
      'Develop your entrepreneurial skills by pitching engineering startup ideas. Win prizes and get feedback from venture capitalists and successful entrepreneurs.',
    date: '2025-04-05',
    time: '4:00 PM - 7:00 PM',
    location: 'CU Innovation Center',
    category: 'professional-development',
    isCompleted: false,
  },
  // Add more professional development events here
];

// All events combined
export const ALL_EVENTS: Event[] = [
  ...COMMUNITY_SERVICE_EVENTS,
  ...PROFESSIONAL_DEVELOPMENT_EVENTS,
];

// Helper functions
export const getEventsByCategory = (category: Event['category']): Event[] => {
  return ALL_EVENTS.filter(event => event.category === category);
};

export const getUpcomingEvents = (): Event[] => {
  const today = new Date().toISOString().split('T')[0] ?? '';
  return ALL_EVENTS.filter(event => !event.isCompleted && event.date >= today).sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
};

export const getPastEvents = (): Event[] => {
  const today = new Date().toISOString().split('T')[0] ?? '';
  return ALL_EVENTS.filter(event => event.isCompleted || event.date < today).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getEventById = (id: string): Event | undefined => {
  return ALL_EVENTS.find(event => event.id === id);
};

// Format date for display
export const formatEventDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
