# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Official website for the Eta Gamma chapter of Theta Tau engineering fraternity at the University of Colorado Boulder. Built with React + TypeScript, styled with Tailwind CSS, and hosted on Firebase.

## Development Commands

### Core Commands
- `npm start` - Start development server at http://localhost:3000
- `npm run build` - Create production build in `build/` folder
- `npm test` - Run test suite in interactive watch mode
- `npm run emulators:start` - Start Firebase hosting emulator on port 5033

### Tailwind CSS Development
**CRITICAL**: When working with Tailwind styles, run this in a separate terminal:
```bash
npx tailwindcss -i ./src/App.css -o ./src/output.css --watch
```
Without this watch command running, Tailwind CSS changes will NOT be reflected in the browser.

### Deployment
Firebase hosting is configured in `firebase.json`:
```bash
npm run build                    # Build production bundle
firebase deploy --only hosting   # Deploy to Firebase (requires authentication)
```

## Architecture

### TypeScript Migration in Progress
The codebase has been largely migrated from JavaScript to TypeScript:
- **New pattern**: `src/Pages/*.tsx` + `src/Components/sections/*.tsx` (TypeScript)
- **Legacy files remaining**: Only 4 JavaScript files still in use:
  - `src/Components/pages/Contact.jsx` (uses gallery.jsx)
  - `src/Components/pages/Rush.jsx` (uses RushOver.jsx)
  - `src/Components/pages/RushOver.jsx`
  - `src/Components/modules/gallery.jsx`
- **Always use TypeScript** (`.tsx`) for new components with proper type annotations
- Main app file: `src/App.tsx` (TypeScript)

**TypeScript Configuration** (`tsconfig.json`):
- Strict mode enabled with comprehensive type checking
- Path aliases configured for clean imports (see below)
- Supports both TypeScript and JavaScript during migration (`allowJs: true`)

**Path Aliases** (tsconfig.json:13-23):
Use these import aliases instead of relative paths:
```typescript
import { Member } from '@/types/member';           // instead of '../../../types/member'
import { Navbar } from '@/Components/layout/Navbar';
import { Home } from '@/Pages/Home';
import { useCustomHook } from '@/hooks/useCustomHook';
import { STATS } from '@/constants/stats';
import { members } from '@/data/members';
```

Available aliases:
- `@/*` → `src/*`
- `@/Components/*` → `src/Components/*`
- `@/Pages/*` → `src/Pages/*`
- `@/hooks/*` → `src/hooks/*`
- `@/utils/*` → `src/utils/*`
- `@/constants/*` → `src/constants/*`
- `@/types/*` → `src/types/*`
- `@/data/*` → `src/data/*`
- `@/assets/*` → `src/assets/*`

### Project Structure
```
src/
├── App.tsx                    # Main app with routing + route configuration
├── index.tsx                  # React app entry point
├── Firebase.js                # Firebase config (uses .env variables)
├── Pages/                     # Page components (TypeScript)
├── Components/
│   ├── layout/                # Navbar, Footer, ScrollToTop
│   ├── sections/              # Reusable page sections (HeroSection, AboutUsSection, etc.)
│   ├── members/               # MemberCard, MemberModal
│   ├── common/                # InDevelopment placeholder
│   ├── pages/                 # Legacy JavaScript pages (Contact, Rush)
│   └── modules/               # Gallery module
├── types/                     # TypeScript type definitions
│   └── member.ts              # Member types + sorting utilities
├── data/                      # Static data (members, alumni, events, FAQ, leadership)
├── constants/                 # App constants (navigation, social media, stats, theme)
├── hooks/                     # Custom React hooks
├── utils/                     # Utility functions
├── assets/                    # Static assets
├── output.css                 # Generated Tailwind output (AUTO-GENERATED - DO NOT EDIT)
└── fonts.css                  # Font definitions
```

### Routing Architecture
App uses React Router v6 (`src/App.tsx:33-43`):
```
/               → Home
/about          → About
/members        → Members page (leadership + pledge classes)
/brotherhood    → Brotherhood (In Development)
/contact        → Contact
/comm-serve     → Community Service (In Development)
/prof-dev       → Professional Development (In Development)
/merc           → Legacy route (redirects to /members)
/rush           → Rush information
```

Pages marked "(In Development)" use the `InDevelopment` component which displays a professional placeholder page.

## Styling System

### Tailwind Configuration
Custom theme defined in `tailwind.config.js` with:

**Brand Colors** (from THETA_TAU_BRANDING.md):
- `thetaTauGold`: #e4ad38 (RGB: 228, 173, 56)
- `thetaTauRed`: #81171a (RGB: 129, 23, 26)

**Typography**:
- Primary font family: Avenir Next (with fallbacks)
- Usage: Titles (Bold), Subtitles (Bold 200pt Kerning), Body (Regular)

**Custom Animations** (tailwind.config.js:22-56):
- `fadeIn`, `slideIn`, `slideInFromLeft`, `slideInFromRight`, `scaleIn`, `pulse`
- All animations respect `prefers-reduced-motion` for accessibility

**Custom Utilities**:
- Extended spacing: `128` (32rem), `144` (36rem)
- Border radius: `4xl` (2rem)
- Box shadows: `glow-gold`, `glow-red`
- Z-index: `60`, `70`, `80`, `90`, `100`

### Component Styling Pattern
- **Preferred**: Tailwind utility classes (all new components)
- **Legacy**: A few remaining component-specific CSS files in `/Components/pagesCSS/` for old JavaScript components
- **Never edit**: `src/output.css` (auto-generated by Tailwind)

## Firebase Integration

### Environment Variables
Create a `.env` file in the project root with these variables (see `src/Firebase.js`):
```bash
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### Hosting Configuration
- Build directory: `build/`
- SPA routing: All routes rewrite to `/index.html` (configured in `firebase.json`)
- Emulator runs on port 5033 (`npm run emulators:start`)
- Analytics enabled via `getAnalytics()` in `src/Firebase.js`

## Key Components & Features

### Layout Components
- **Navbar** (`Components/layout/Navbar.tsx`): Responsive navigation with mobile hamburger menu
- **Footer** (`Components/layout/Footer.tsx`): Interactive footer with animated SVG gears
  - Gears rotate based on mouse position (`mousemove` events) + time-based auto-rotation
  - Respects `prefers-reduced-motion` for accessibility
- **ScrollToTop** (`Components/layout/ScrollToTop.tsx`): Scrolls to top on route changes

### Member System Components
- **Members Page** (`Pages/Members.tsx`): Main members directory displaying leadership + pledge classes
- **MemberCard** (`Components/members/MemberCard.tsx`): Individual member card with 2:3 ratio headshot
- **MemberModal** (`Components/members/MemberModal.tsx`): Detailed member info modal (bio, major, LinkedIn, etc.)

### Reusable Patterns
- **InDevelopment** (`Components/common/InDevelopment.tsx`): Professional placeholder for pages under construction (used by Brotherhood, Community Service, Professional Development pages)
- **HeroSection** (`Components/sections/HeroSection.tsx`): Reusable hero component with background image support
- **Page Sections**: Modular sections in `Components/sections/` (AboutUsSection, AlumniCarousel, OurHistorySection, OurPillarsSection, QuoteSection, etc.)

### Legacy JavaScript Components
4 files remain as JavaScript (to be migrated):
- `Components/pages/Contact.jsx` - Contact page
- `Components/pages/Rush.jsx` - Rush information
- `Components/pages/RushOver.jsx` - Rush completion message
- `Components/modules/gallery.jsx` - Image gallery module

## Development Patterns

### Creating New Pages
1. Create page component in `src/Pages/*.tsx` (TypeScript)
2. Create section components in `src/Components/sections/*.tsx`
3. Add route in `src/App.tsx`
4. Use Tailwind utilities for styling
5. Reference brand colors: `text-thetaTauGold`, `bg-thetaTauRed`

### Branding Requirements
All new components must follow brand guidelines in `THETA_TAU_BRANDING.md`:

**Brand Colors** (use Tailwind classes):
- Gold: `text-thetaTauGold` or `bg-thetaTauGold` (#e4ad38)
- Red: `text-thetaTauRed` or `bg-thetaTauRed` (#81171a)

**Typography**:
- Font family: Avenir Next (configured as `font-primary` or `font-sans` in Tailwind)
- Titles: Avenir Next Bold
- Body: Avenir Next Regular

**Three Pillars** (core values to emphasize):
1. Brotherhood
2. Professional Development
3. Community Service

## Data Management

### Member Data Architecture
The app uses a **type-safe, centralized data system** for managing member information:

**Data Flow**:
1. Raw member data lives in `src/data/members.ts` (TypeScript array of Member objects)
2. Type definitions in `src/types/member.ts` enforce data structure at compile time
3. Helper functions organize members by leadership/pledge class for display
4. Members page (`src/Pages/Members.tsx`) consumes organized data

**Key Files**:
- `src/types/member.ts` - Defines `Member`, `Position`, `PledgeClass` types + sorting utilities
- `src/data/members.ts` - All current member information (single source of truth)
- `src/data/mercCouncil.ts` - Leadership council data (Mercury Council)
- `src/data/alumni.ts` - Alumni information

**Member Type Structure**:
```typescript
interface Member {
  id: string;
  firstName: string;
  lastName: string;
  pledgeClass: PledgeClass;    // 'Tau Gamma', 'Sigma Gamma', etc.
  position?: Position;          // Leadership role if applicable
  headshot?: string;            // Path to 2:3 ratio image
  isLeadership?: boolean;       // Display in leadership section
  roleNumber?: string;          // Badge number (e.g., "ΗΓ 460")
  // ... plus bio, major, year, graduationYear, hometown, interests, linkedIn, email
}
```

**Position Hierarchy** (`POSITION_HIERARCHY` constant in `src/types/member.ts`):
Regent → Vice Regent → Scribe → Treasurer → Corresponding Secretary → Marshal → Inner Guard → Outer Guard → Pledgemaster → Committee Chairs

**Pledge Classes** (newest to oldest): Tau Gamma → Sigma Gamma → Rho Gamma → Pi Gamma → Omicron Gamma

**Helper Functions** (exported from `src/types/member.ts`):
- `sortByPosition(a, b)`: Sort members by leadership hierarchy
- `organizeMembersBySections(members)`: Group into leadership + pledge class sections

**Adding/Updating Members**:
1. Add/edit member object in `src/data/members.ts`
2. Ensure headshot image (2:3 ratio) is in `/public/images/Merc/`
3. TypeScript will enforce type safety automatically

### Other Data Files
- `src/data/events.ts`: Event information and calendar
- `src/data/rushFAQ.ts`: Rush FAQ content
- `src/constants/navigation.ts`: Navigation menu structure
- `src/constants/stats.ts`: Chapter statistics (member count, community service hours, etc.)
- `src/constants/socialMedia.ts`: Social media links
- `src/constants/company.ts`: Company/organization partnerships

## File Conventions & Standards

### Code Files
- **TypeScript pages**: `.tsx` extension in `src/Pages/`
- **TypeScript components**: `.tsx` extension in `src/Components/`
- **Legacy JavaScript**: `.jsx` files in `src/Components/pages/` (4 files remaining)
- **Component naming**: PascalCase (e.g., `MemberCard.tsx`)
- **Type definitions**: `src/types/*.ts`
- **Data files**: `src/data/*.ts` (TypeScript for type safety)
- **Constants**: `src/constants/*.ts`

### Images & Assets
- **Location**: `/public/images/` with subdirectories
- **Member headshots**: `/public/images/Merc/` directory
  - **CRITICAL**: Must maintain 2:3 aspect ratio (e.g., 400x600px)
  - Inconsistent ratios will break the MemberCard layout
- **Format**: JPG or PNG preferred for photos
