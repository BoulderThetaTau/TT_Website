/**
 * Chapter Members Data
 *
 * Add new members to this file as they join.
 * Each member should have a unique ID and required fields.
 *
 * IMPORTANT: Replace placeholder data with actual member information.
 */

import { Member } from '../types/member';

export const MEMBERS: Member[] = [
  // ==========================================
  // MERCURY COUNCIL (Leadership)
  // ==========================================
  {
    id: 'regent-2024',
    firstName: 'John',
    lastName: 'Doe',
    pledgeClass: 'Rho Gamma',
    position: 'Regent',
    major: 'Mechanical Engineering',
    year: 'Senior',
    graduationYear: 2025,
    hometown: 'Denver, CO',
    bio: 'As Regent, I oversee chapter operations and ensure we uphold the values of Theta Tau. I\'m passionate about fostering brotherhood and professional development.',
    interests: ['Robotics', 'Rock Climbing', 'Photography'],
    linkedIn: 'https://linkedin.com/in/johndoe',
    email: 'regent@etagamma.org',
    headshot: '/images/members/placeholder-male.jpg',
    isLeadership: true,
  },
  {
    id: 'vice-regent-2024',
    firstName: 'Jane',
    lastName: 'Smith',
    pledgeClass: 'Sigma Gamma',
    position: 'Vice Regent',
    major: 'Electrical Engineering',
    year: 'Junior',
    graduationYear: 2026,
    hometown: 'Boulder, CO',
    bio: 'I support the Regent and help coordinate our chapter\'s activities. My goal is to create meaningful connections within our brotherhood.',
    interests: ['Circuit Design', 'Hiking', 'Chess'],
    linkedIn: 'https://linkedin.com/in/janesmith',
    email: 'vice@etagamma.org',
    headshot: '/images/members/placeholder-female.jpg',
    isLeadership: true,
  },
  {
    id: 'scribe-2024',
    firstName: 'Alex',
    lastName: 'Johnson',
    pledgeClass: 'Tau Gamma',
    position: 'Scribe',
    major: 'Computer Science',
    year: 'Sophomore',
    graduationYear: 2027,
    hometown: 'Colorado Springs, CO',
    bio: 'Responsible for keeping accurate records of chapter meetings and communications.',
    interests: ['Web Development', 'Gaming', 'Running'],
    headshot: '/images/members/placeholder-male.jpg',
    isLeadership: true,
  },

  // ==========================================
  // TAU GAMMA (Newest Class)
  // ==========================================
  {
    id: 'tau-gamma-1',
    firstName: 'Michael',
    lastName: 'Chen',
    pledgeClass: 'Tau Gamma',
    major: 'Aerospace Engineering',
    year: 'Sophomore',
    graduationYear: 2027,
    hometown: 'Fort Collins, CO',
    bio: 'Excited to be part of Theta Tau! I\'m interested in propulsion systems and spacecraft design.',
    interests: ['Model Rocketry', 'Basketball', 'Guitar'],
    headshot: '/images/members/placeholder-male.jpg',
  },
  {
    id: 'tau-gamma-2',
    firstName: 'Sarah',
    lastName: 'Williams',
    pledgeClass: 'Tau Gamma',
    major: 'Chemical Engineering',
    year: 'Sophomore',
    graduationYear: 2027,
    hometown: 'Aurora, CO',
    bio: 'Passionate about sustainable energy and green chemistry.',
    interests: ['Sustainability', 'Yoga', 'Cooking'],
    headshot: '/images/members/placeholder-female.jpg',
  },

  // ==========================================
  // SIGMA GAMMA
  // ==========================================
  {
    id: 'sigma-gamma-1',
    firstName: 'David',
    lastName: 'Martinez',
    pledgeClass: 'Sigma Gamma',
    major: 'Civil Engineering',
    year: 'Junior',
    graduationYear: 2026,
    hometown: 'Pueblo, CO',
    bio: 'Interested in structural design and urban planning.',
    interests: ['Architecture', 'Soccer', 'Travel'],
    headshot: '/images/members/placeholder-male.jpg',
  },
  {
    id: 'sigma-gamma-2',
    firstName: 'Emily',
    lastName: 'Davis',
    pledgeClass: 'Sigma Gamma',
    major: 'Biomedical Engineering',
    year: 'Junior',
    graduationYear: 2026,
    hometown: 'Littleton, CO',
    bio: 'Focused on medical device design and improving healthcare technology.',
    interests: ['Biotech', 'Skiing', 'Piano'],
    headshot: '/images/members/placeholder-female.jpg',
  },

  // ==========================================
  // RHO GAMMA
  // ==========================================
  {
    id: 'rho-gamma-1',
    firstName: 'Christopher',
    lastName: 'Brown',
    pledgeClass: 'Rho Gamma',
    major: 'Environmental Engineering',
    year: 'Senior',
    graduationYear: 2025,
    hometown: 'Loveland, CO',
    bio: 'Working on water resource management and environmental sustainability projects.',
    interests: ['Environmental Policy', 'Mountain Biking', 'Photography'],
    headshot: '/images/members/placeholder-male.jpg',
  },

  // ==========================================
  // PI GAMMA
  // ==========================================
  {
    id: 'pi-gamma-1',
    firstName: 'Jessica',
    lastName: 'Taylor',
    pledgeClass: 'Pi Gamma',
    major: 'Engineering Physics',
    year: 'Senior',
    graduationYear: 2025,
    hometown: 'Grand Junction, CO',
    bio: 'Researching quantum computing and advanced materials.',
    interests: ['Physics', 'Climbing', 'Reading'],
    headshot: '/images/members/placeholder-female.jpg',
  },

  // ==========================================
  // OMICRON GAMMA
  // ==========================================
  {
    id: 'omicron-gamma-1',
    firstName: 'Andrew',
    lastName: 'Wilson',
    pledgeClass: 'Omicron Gamma',
    major: 'Mechanical Engineering',
    year: 'Graduated',
    graduationYear: 2024,
    hometown: 'Boulder, CO',
    bio: 'Alumni member now working in the aerospace industry.',
    interests: ['Engineering Design', 'Mentorship', 'Golf'],
    headshot: '/images/members/placeholder-male.jpg',
  },
];

/**
 * Helper function to get a member by ID
 */
export const getMemberById = (id: string): Member | undefined => {
  return MEMBERS.find(member => member.id === id);
};

/**
 * Helper function to get all leadership members
 */
export const getLeadershipMembers = (): Member[] => {
  return MEMBERS.filter(member => member.isLeadership);
};

/**
 * Helper function to get members by pledge class
 */
export const getMembersByPledgeClass = (pledgeClass: string): Member[] => {
  return MEMBERS.filter(member => member.pledgeClass === pledgeClass);
};
