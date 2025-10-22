/**
 * Featured Alumni Data
 *
 * Profiles of notable Eta Gamma alumni.
 * Replace with actual alumni information and photos.
 */

export interface AlumniProfile {
  id: string;
  name: string;
  graduationYear: number;
  currentJob: string;
  company?: string;
  quote: string;
  photo?: string; // Path to alumni photo
  pledgeClass?: string;
}

export const FEATURED_ALUMNI: AlumniProfile[] = [
  {
    id: 'alumni-1',
    name: 'Sarah Johnson',
    graduationYear: 2018,
    currentJob: 'Senior Software Engineer',
    company: 'Google',
    quote: 'Theta Tau gave me the confidence and network to pursue my dreams in tech. The brotherhood bonds formed here last a lifetime.',
    photo: '', // Add photo path when available
    pledgeClass: 'Alpha Gamma',
  },
  {
    id: 'alumni-2',
    name: 'Michael Chen',
    graduationYear: 2019,
    currentJob: 'Aerospace Engineer',
    company: 'SpaceX',
    quote: 'The professional development opportunities and mentorship I received at Eta Gamma were instrumental in launching my career.',
    photo: '', // Add photo path when available
    pledgeClass: 'Beta Gamma',
  },
  {
    id: 'alumni-3',
    name: 'Emily Rodriguez',
    graduationYear: 2020,
    currentJob: 'Mechanical Design Lead',
    company: 'Tesla',
    quote: 'Theta Tau taught me that engineering is about more than technical skills—it\'s about building community and giving back.',
    photo: '', // Add photo path when available
    pledgeClass: 'Gamma Gamma',
  },
  {
    id: 'alumni-4',
    name: 'David Kim',
    graduationYear: 2017,
    currentJob: 'Structural Engineer',
    company: 'AECOM',
    quote: 'The friendships and professional connections I made in Theta Tau continue to support me in my career today.',
    photo: '', // Add photo path when available
    pledgeClass: 'Zeta Beta',
  },
  {
    id: 'alumni-5',
    name: 'Jessica Martinez',
    graduationYear: 2021,
    currentJob: 'Electrical Engineer',
    company: 'Lockheed Martin',
    quote: 'Theta Tau challenged me to grow as both an engineer and a leader. I\'m proud to be part of this legacy.',
    photo: '', // Add photo path when available
    pledgeClass: 'Delta Gamma',
  },
  {
    id: 'alumni-6',
    name: 'Ryan Thompson',
    graduationYear: 2016,
    currentJob: 'Project Manager',
    company: 'Amazon',
    quote: 'The leadership skills and teamwork I developed in Theta Tau have been essential to my success in the tech industry.',
    photo: '', // Add photo path when available
    pledgeClass: 'Epsilon Beta',
  },
];

// Helper functions
export const getAlumniById = (id: string): AlumniProfile | undefined => {
  return FEATURED_ALUMNI.find(alumni => alumni.id === id);
};

export const getAlumniByYear = (year: number): AlumniProfile[] => {
  return FEATURED_ALUMNI.filter(alumni => alumni.graduationYear === year);
};

export const getRandomAlumni = (count: number = 3): AlumniProfile[] => {
  const shuffled = [...FEATURED_ALUMNI].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
