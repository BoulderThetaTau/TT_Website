/**
 * Rush FAQ Data
 *
 * Frequently asked questions about rushing Theta Tau.
 * Update as needed when rush process or requirements change.
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'general' | 'requirements' | 'process' | 'membership';
}

export const RUSH_FAQ: FAQItem[] = [
  {
    id: 'what-is-theta-tau',
    question: 'What is Theta Tau?',
    answer:
      'Theta Tau is a professional engineering fraternity founded in 1904. We are the premier co-ed professional engineering fraternity at the University of Colorado Boulder, dedicated to developing and maintaining a high standard of professional interest among our members while uniting them in a strong bond of fraternal fellowship.',
    category: 'general',
  },
  {
    id: 'who-can-rush',
    question: 'Who can rush Theta Tau?',
    answer:
      'Any student enrolled in an engineering or technical program at CU Boulder is eligible to rush. We welcome students of all years, genders, and backgrounds who are passionate about engineering and professional development.',
    category: 'requirements',
  },
  {
    id: 'what-is-rush',
    question: 'What is rush?',
    answer:
      'Rush is the recruitment period where prospective members (rushees) get to know our chapter and brotherhood. It typically includes social events, professional development workshops, community service opportunities, and informational sessions about our fraternity.',
    category: 'process',
  },
  {
    id: 'time-commitment',
    question: 'What is the time commitment?',
    answer:
      'During the rush/pledge period, expect to commit 5-10 hours per week for meetings, events, and activities. As an active member, the commitment is typically 3-5 hours per week, though this varies based on your level of involvement and any leadership positions you may hold.',
    category: 'requirements',
  },
  {
    id: 'costs',
    question: 'Are there any costs or dues?',
    answer:
      'Yes, there are membership dues that cover chapter operations, national fraternity fees, events, and brotherhood activities. Specific cost information is provided during rush information sessions. We also offer payment plans and work with members to make membership accessible.',
    category: 'requirements',
  },
  {
    id: 'benefits',
    question: 'What are the benefits of joining?',
    answer:
      'Members gain access to professional networking opportunities, leadership development, community service projects, social events, study resources, and a supportive brotherhood of fellow engineers. Our alumni network provides valuable connections for internships and career opportunities.',
    category: 'membership',
  },
  {
    id: 'gpa-requirement',
    question: 'Is there a GPA requirement?',
    answer:
      'Yes, we require a minimum GPA to rush and maintain active membership. Specific requirements are shared during rush. We believe in supporting academic excellence and provide study groups and academic resources to help members succeed.',
    category: 'requirements',
  },
  {
    id: 'when-is-rush',
    question: 'When does rush happen?',
    answer:
      'We typically hold rush at the beginning of each fall and spring semester. Check our website or social media for exact dates and event schedules. Rush week usually includes multiple events over 1-2 weeks.',
    category: 'process',
  },
  {
    id: 'pledge-process',
    question: 'What is the pledge process like?',
    answer:
      'The pledge process is designed to educate new members about Theta Tau\'s history, values, and brotherhood while building lasting friendships. It includes educational sessions, team-building activities, professional development workshops, and community service. We do not haze.',
    category: 'process',
  },
  {
    id: 'difference-social-fraternity',
    question: 'How is this different from a social fraternity?',
    answer:
      'While we have social events and a strong brotherhood, our primary focus is professional development in engineering. We emphasize career preparation, networking, technical skills, and industry connections alongside the social and brotherhood aspects.',
    category: 'general',
  },
];

// Helper functions
export const getFAQByCategory = (category: FAQItem['category']): FAQItem[] => {
  return RUSH_FAQ.filter(faq => faq.category === category);
};

export const getFAQById = (id: string): FAQItem | undefined => {
  return RUSH_FAQ.find(faq => faq.id === id);
};

export const getAllCategories = (): Array<FAQItem['category']> => {
  const categories = new Set(RUSH_FAQ.map(faq => faq.category).filter(Boolean));
  return Array.from(categories) as Array<FAQItem['category']>;
};
