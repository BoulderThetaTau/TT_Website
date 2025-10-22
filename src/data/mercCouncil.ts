/**
 * Mercury Council (Executive Board) Data
 *
 * Officer profiles for the current Mercury Council.
 * Update this file when new officers are elected.
 */

export interface MercuryOfficer {
  id: string;
  name: string;
  title: string;
  pledgeClass: string;
  image: string;
  description: string;
  email?: string; // Optional: officer-specific email
  order: number; // Display order
}

export const MERCURY_COUNCIL: MercuryOfficer[] = [
  {
    id: 'regent',
    name: 'Liam Masias',
    title: 'Regent / President',
    pledgeClass: 'Eta Gamma 415 X! Omicron Gamma Pledge Class',
    image: '/images/Merc/Regent.png',
    description:
      "Liam Masias is pursuing two degrees in Computer Science and Electrical & Computer Engineering, along with minors in Business and Spanish. Passionate about the interface of hardware and software, he is fascinated by the systems that drive today's technological world. Liam grew up in the Denver Metro area before moving to Boulder in 2023 after achieving his Associate's Degree from the Community College of Denver. He finds a strong sense of community in Theta Tau, connecting with others who are committed to persevere through the rigors of their fields. As Regent, Liam is excited to build on the success of past leadership, working alongside the Executive Council to foster collaboration, strengthen relationships with other organizations, and expand the Chapter's reach across the broader community.",
    email: 'regent@etagamma.org',
    order: 1,
  },
  {
    id: 'vice-regent',
    name: 'Victoria Davis',
    title: 'Vice Regent / Vice President',
    pledgeClass: 'Eta Gamma 414 Y! TT! Omicron Gamma Pledge Class',
    image: '/images/Merc/Vice.png',
    description:
      "Victoria is a sophomore majoring in Computer Science with a minor in Computer Engineering. Outside of school, she enjoys working as a learning assistant, exploring her hometown of Pittsburgh, PA, spending time outdoors, and trying new things. Her favorite part of Theta Tau is always knowing somebody in the engineering center. As Vice Regent, Victoria is excited to oversee event planning and help make others' ideas come to life.",
    email: 'vice@etagamma.org',
    order: 2,
  },
  {
    id: 'scribe',
    name: 'Madison Petrucelli',
    title: 'Scribe',
    pledgeClass: 'Eta Gamma 458 V! Omicron Gamma Pledge Class',
    image: '/images/Merc/Scribe.png',
    description:
      'Madison Petruccelli is a sophomore majoring in Mechanical Engineering with a minor in Economics. When she is not in the classroom she enjoys playing soccer, skiing, hiking and any other kind of outdoor adventure. She is excited to be more involved in Theta Tau this semester as scribe and enjoys how many ski bum engineers she has met since she joined.',
    order: 3,
  },
  {
    id: 'treasurer',
    name: 'Abby Rugg',
    title: 'Treasurer',
    pledgeClass: 'Eta Gamma 408 Z! Omicron Gamma Pledge Class',
    image: '/images/Merc/Treasurer.png',
    description:
      "Abigail is a sophomore majoring in Architectural Engineering with minors in Business and Engineering Management, combining her interests in creative design, leadership, and problem-solving. Outside of academics, Abby enjoys snowboarding, line dancing, traveling, axe throwing, cooking and managing finances. She values her time in Theta Tau for the incredible people she's met and the fun events the chapter organizes. As Treasurer, Abby is dedicated to supporting the chapter's success and keeping things running smoothly. She's proud to contribute to the welcoming and inspiring community that makes Theta Tau such a special part of her college experience.",
    order: 4,
  },
  {
    id: 'marshal',
    name: 'Jerry Vanim-Botting',
    title: 'Marshal',
    pledgeClass: 'Eta Gamma 448 W! Rho Gamma Pledge Class',
    image: '/images/Merc/Marshal.png',
    description:
      'Jerry Vanim-Botting is a junior majoring in Electrical Engineering with minors in Energy and Engineering Management, with which he hopes to build a career modernizing grid infrastructure and integrating renewable energy sources. In his free time, he enjoys live music, yoga, and skiing. Jerry, as a transfer student, was ecstatic to find the community he did within Theta Tau and believes strongly in the organization. As Marshal, Jerry hopes to inspire a renewed focus within the chapter on supporting the health and wellness of its members, be the first line of backup for all members in distress, and serve as a fair and impartial mediator for intra-fraternal conflict.',
    order: 5,
  },
  {
    id: 'corresponding-secretary',
    name: 'Lola Feilke',
    title: 'Corresponding Secretary',
    pledgeClass: 'Eta Gamma 422 R! Pi Gamma Pledge Class',
    image: '/images/Merc/CorrSec.png',
    description:
      "Lola Feilke is currently a sophomore majoring in Aerospace Engineering with a minor in Leadership Studies through the Presidents Leadership Class at CU. In her free time, she enjoys skiing, watching Formula 1, and grabbing pizookies with her brothers after chapter. Lola values the friendships and supportive community she's found in Theta Tau and is excited to give back as Corresponding Secretary. In her role, she looks forward to strengthening connections between alumni and current members as well as creating meaningful opportunities for engagement across the broader Theta Tau community.",
    order: 6,
  },
  {
    id: 'inner-guard',
    name: 'Julian Werder',
    title: 'Inner Guard',
    pledgeClass: 'Eta Gamma 417 T! UU! Omicron Gamma Pledge Class',
    image: '/images/Merc/InnerGuard.png',
    description:
      'Julian is a sophomore in Electrical and Computer Engineering with minors in Quantum Engineering and Computer Science. He enjoys skiing, F1 racing, and working on cars. As the Outer Guard, Julian is dedicated to creating a welcoming environment for the incoming Sigma Gamma pledge class. He hopes to inspire others and contribute to the lasting legacy of Theta Tau.',
    order: 7,
  },
  {
    id: 'outer-guard',
    name: 'Cam Mars',
    title: 'Outer Guard',
    pledgeClass: 'Eta Gamma 444 U! Rho Gamma Pledge Class',
    image: '/images/Merc/OuterGuard.png',
    description:
      "Cam is currently a sophomore pursuing a dual degree in Computer Science and pure Mathematics at the University of Colorado Boulder. He grew up in the Southern Denver Metro Area alongside a younger brother and sister, as well as two dogs and a cat. When he's not doing math or coding, Cam loves lifting weights, skiing, mogging, anime, manga, basketball and reading. As the Outer Guard, Cam is excited to welcome the Tau Gamma pledge class to Theta Tau and to create an environment that fosters fellowship, strength and brotherhood for the future members of Theta Tau.",
    order: 8,
  },
];

// Helper function to get officer by ID
export const getOfficerById = (id: string): MercuryOfficer | undefined => {
  return MERCURY_COUNCIL.find(officer => officer.id === id);
};

// Helper function to get officer by title
export const getOfficerByTitle = (title: string): MercuryOfficer | undefined => {
  return MERCURY_COUNCIL.find(officer => officer.title.toLowerCase() === title.toLowerCase());
};

// Get officers sorted by display order
export const getOrderedOfficers = (): MercuryOfficer[] => {
  return [...MERCURY_COUNCIL].sort((a, b) => a.order - b.order);
};
