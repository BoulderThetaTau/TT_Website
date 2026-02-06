/**
 * Chapter Statistics Constants
 *
 * Key statistics about the Eta Gamma chapter.
 * Update these values as the chapter grows and evolves.
 */

export interface ChapterStat {
  id: string;
  value: string | number;
  label: string;
  description?: string;
}

export const CHAPTER_STATS: ChapterStat[] = [
  {
    id: 'members',
    value: 483,
    label: 'members',
    description: 'Active and alumni members of Eta Gamma chapter',
  },
  {
    id: 'majors',
    value: 15,
    label: 'different majors',
    description: 'Engineering and technical disciplines represented',
  },
  {
    id: 'gpa',
    value: '3.5+',
    label: 'average gpa',
    description: 'Chapter average GPA demonstrating academic excellence',
  },
];

// Helper function to get stat by ID
export const getStatById = (id: string): ChapterStat | undefined => {
  return CHAPTER_STATS.find(stat => stat.id === id);
};

// Helper function to format stat value for display
export const formatStatValue = (value: string | number): string => {
  if (typeof value === 'number') {
    return value.toLocaleString();
  }
  return value;
};
