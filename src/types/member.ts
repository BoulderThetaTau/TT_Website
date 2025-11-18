/**
 * Member Types
 *
 * Type definitions for chapter members, positions, and pledge classes.
 */

export type PledgeClass =
  | 'Omicron Gamma'
  | 'Pi Gamma'
  | 'Rho Gamma'
  | 'Sigma Gamma'
  | 'Tau Gamma'
  | 'Future Class'; // Placeholder for easy expansion

export type Position =
  | 'Regent'
  | 'Vice Regent'
  | 'Scribe'
  | 'Treasurer'
  | 'Corresponding Secretary'
  | 'Marshal'
  | 'Pledge Marshal'
  | 'Rush Chair'
  | 'Social Chair'
  | 'Professional Development Chair'
  | 'Community Service Chair'
  | 'Scholarship Chair'
  | 'Fundraising Chair'
  | 'Historian'
  | 'Webmaster'
  | 'Public Relations Chair'
  | 'Alumni Relations Chair';

export interface Member {
  id: string;
  firstName: string;
  lastName: string;
  pledgeClass: PledgeClass;
  position?: Position;
  major?: string;
  year?: string; // e.g., "Junior", "Senior", "Sophomore"
  graduationYear?: number;
  hometown?: string;
  bio?: string;
  interests?: string[];
  linkedIn?: string;
  email?: string;
  headshot?: string; // Path to headshot image (2:3 ratio)
  isLeadership?: boolean; // Whether to show in leadership section
  roleNumber?: string; // Member's role/badge number (e.g., "460", "ΗΓ 460")
}

export interface MemberSection {
  title: string;
  description?: string;
  members: Member[];
}

/**
 * Position hierarchy for sorting leadership
 * Lower number = higher rank
 */
export const POSITION_HIERARCHY: Record<string, number> = {
  'Regent': 1,
  'Vice Regent': 2,
  'Scribe': 3,
  'Treasurer': 4,
  'Corresponding Secretary': 5,
  'Marshal': 6,
  'Pledge Marshal': 7,
  'Rush Chair': 8,
  'Social Chair': 9,
  'Professional Development Chair': 10,
  'Community Service Chair': 11,
  'Scholarship Chair': 12,
  'Fundraising Chair': 13,
  'Historian': 14,
  'Webmaster': 15,
  'Public Relations Chair': 16,
  'Alumni Relations Chair': 17,
};

/**
 * Pledge class order (newest to oldest)
 */
export const PLEDGE_CLASS_ORDER: PledgeClass[] = [
  'Tau Gamma',
  'Sigma Gamma',
  'Rho Gamma',
  'Pi Gamma',
  'Omicron Gamma',
];

/**
 * Helper function to sort members by position hierarchy
 */
export const sortByPosition = (a: Member, b: Member): number => {
  const aRank = a.position ? POSITION_HIERARCHY[a.position] || 999 : 999;
  const bRank = b.position ? POSITION_HIERARCHY[b.position] || 999 : 999;
  return aRank - bRank;
};

/**
 * Helper function to organize members into sections
 */
export const organizeMembersBySections = (members: Member[]): MemberSection[] => {
  // Separate leadership and general members
  const leadership = members.filter(m => m.isLeadership).sort(sortByPosition);
  const generalMembers = members.filter(m => !m.isLeadership);

  // Group general members by pledge class
  const membersByClass = new Map<PledgeClass, Member[]>();

  generalMembers.forEach(member => {
    const existing = membersByClass.get(member.pledgeClass) || [];
    membersByClass.set(member.pledgeClass, [...existing, member]);
  });

  // Create sections
  const sections: MemberSection[] = [];

  // Leadership section
  if (leadership.length > 0) {
    sections.push({
      title: 'Mercury Council',
      description: 'Our chapter leadership team',
      members: leadership,
    });
  }

  // Pledge class sections (in order)
  PLEDGE_CLASS_ORDER.forEach(pledgeClass => {
    const classMembers = membersByClass.get(pledgeClass);
    if (classMembers && classMembers.length > 0) {
      sections.push({
        title: pledgeClass,
        members: classMembers.sort((a, b) =>
          `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`)
        ),
      });
    }
  });

  return sections;
};
