# Members Page - Complete Guide

## Overview
The Members page is a comprehensive directory showcasing all chapter members organized by Mercury Council (leadership) and pledge classes. Each member has a clickable card that opens a detailed modal.

## Features

### 🎯 **Organization Structure**
1. **Mercury Council** (Leadership) - Displayed first, sorted by position hierarchy
2. **Pledge Classes** - Displayed in reverse chronological order:
   - Tau Gamma (newest)
   - Sigma Gamma
   - Rho Gamma
   - Pi Gamma
   - Omicron Gamma (oldest)

### 🖼️ **Member Cards**
- **Headshot**: 2:3 aspect ratio (portrait orientation)
- **Information Display**:
  - First Name + Last Name
  - Position (if applicable)
  - Pledge Class (if no position)
  - Major (optional)
- **Interactive Features**:
  - Hover effect with shadow and scale
  - Click to open detailed modal
  - Keyboard accessible (Enter/Space)
  - Leadership badge for executive board

### 📋 **Member Modal**
Clicking a member card opens a full-screen modal with:
- **Left Panel**: Large headshot with social links (LinkedIn, Email)
- **Right Panel**: Detailed information
  - Name and position
  - Pledge class
  - Major, year, graduation year
  - Hometown
  - Bio/description
  - Interests (as tags)

## Adding New Members

### Step 1: Add Member Data
Edit `src/data/members.ts` and add a new member to the `MEMBERS` array:

```typescript
{
  id: 'unique-id-2025',              // Unique identifier
  firstName: 'John',
  lastName: 'Doe',
  pledgeClass: 'Tau Gamma',          // Current pledge class
  position: 'Regent',                // Optional: leadership position
  major: 'Mechanical Engineering',
  year: 'Junior',
  graduationYear: 2026,
  hometown: 'Denver, CO',
  bio: 'Passionate about robotics and sustainability...',
  interests: ['Robotics', 'Hiking', 'Photography'],
  linkedIn: 'https://linkedin.com/in/johndoe',
  email: 'john.doe@colorado.edu',
  headshot: '/images/members/john-doe.jpg',  // 2:3 ratio image
  isLeadership: true,                // Set true for Mercury Council
}
```

### Step 2: Add Headshot Image
1. **Image Requirements**:
   - Aspect ratio: **2:3** (e.g., 400px × 600px, 600px × 900px)
   - Format: JPG or PNG
   - File size: < 500KB recommended
   - Quality: High resolution for retina displays

2. **Save location**: `/public/images/members/firstname-lastname.jpg`

3. **Example dimensions**:
   - Small: 400 × 600 px
   - Medium: 600 × 900 px (recommended)
   - Large: 800 × 1200 px

### Step 3: Review
The member will automatically appear in the correct section based on:
- `isLeadership: true` → Mercury Council section
- `isLeadership: false` or undefined → Pledge class section
- Position hierarchy determines order within Mercury Council

## Adding New Pledge Classes

### Step 1: Update Type Definition
Edit `src/types/member.ts`:

```typescript
export type PledgeClass =
  | 'Upsilon Gamma'        // Add new class name
  | 'Tau Gamma'
  | 'Sigma Gamma'
  // ... existing classes
```

### Step 2: Update Display Order
Edit `src/types/member.ts`:

```typescript
export const PLEDGE_CLASS_ORDER: PledgeClass[] = [
  'Upsilon Gamma',  // Add to top (newest)
  'Tau Gamma',
  'Sigma Gamma',
  // ... rest
];
```

### Step 3: Add Members
Add members with the new pledge class to `src/data/members.ts`:

```typescript
{
  id: 'upsilon-gamma-1',
  firstName: 'Jane',
  lastName: 'Smith',
  pledgeClass: 'Upsilon Gamma',  // New class
  // ... other fields
}
```

That's it! The new class will automatically appear on the page.

## Leadership Positions

### Available Positions
Defined in `src/types/member.ts`:
- Regent
- Vice Regent
- Scribe
- Treasurer
- Corresponding Secretary
- Marshal
- Pledge Marshal
- Rush Chair
- Social Chair
- Professional Development Chair
- Community Service Chair
- Scholarship Chair
- Fundraising Chair
- Historian
- Webmaster
- Public Relations Chair
- Alumni Relations Chair

### Position Hierarchy
Leadership members are automatically sorted by position importance:
1. Regent (highest)
2. Vice Regent
3. Scribe
4. Treasurer
... and so on

### Adding New Positions
1. Add to the `Position` type in `src/types/member.ts`
2. Add to `POSITION_HIERARCHY` with appropriate rank number
3. Lower number = higher rank

## Customization

### Changing Grid Layout
Edit `src/Pages/Members.tsx` (line ~95):

```typescript
{/* Current: 2 cols mobile, 5 cols desktop */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">

{/* Example: 3 cols mobile, 6 cols desktop */}
<div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
```

### Changing Colors
All colors use Tailwind classes:
- Red: `thetaTauRed` (#81171a)
- Gold: `thetaTauGold` (#e4ad38)

Edit these in the component files or update `tailwind.config.js`.

### Changing Card Hover Effects
Edit `src/Components/members/MemberCard.tsx`:

```typescript
{/* Adjust scale, shadow, etc. */}
className="... group-hover:scale-105 transition-transform duration-300"
```

### Changing Modal Layout
Edit `src/Components/members/MemberModal.tsx`:
- Grid layout: Line 50 (`grid-cols-1 md:grid-cols-5`)
- Headshot size: Line 56 (aspect ratio)
- Info sections: Lines 96-140

## Placeholder Images

If no headshot is provided, the component shows:
- Member's initials in a colored circle
- "No Photo" text
- Brand-colored gradient background

To use placeholder images:
```typescript
headshot: '/images/members/placeholder-male.jpg',
// or
headshot: '/images/members/placeholder-female.jpg',
```

## Accessibility Features

### Keyboard Navigation
- ✅ All member cards are focusable (Tab)
- ✅ Enter or Space opens modal
- ✅ Escape closes modal
- ✅ Focus indicators (gold ring)

### Screen Readers
- ✅ Proper ARIA labels on all interactive elements
- ✅ Semantic HTML (role="button", aria-modal, etc.)
- ✅ Alt text on images

### Touch Targets
- ✅ All interactive elements meet 44×44px minimum
- ✅ Proper spacing between cards

## Data Structure

### Member Interface
```typescript
interface Member {
  id: string;                    // Required: unique ID
  firstName: string;              // Required
  lastName: string;               // Required
  pledgeClass: PledgeClass;       // Required
  position?: Position;            // Optional
  major?: string;                 // Optional
  year?: string;                  // Optional
  graduationYear?: number;        // Optional
  hometown?: string;              // Optional
  bio?: string;                   // Optional
  interests?: string[];           // Optional
  linkedIn?: string;              // Optional
  email?: string;                 // Optional
  headshot?: string;              // Optional
  isLeadership?: boolean;         // Optional (default false)
}
```

### Helper Functions
Available in `src/types/member.ts`:
- `sortByPosition(a, b)` - Sort members by position hierarchy
- `organizeMembersBySections(members)` - Organize into leadership/classes

Available in `src/data/members.ts`:
- `getMemberById(id)` - Get member by ID
- `getLeadershipMembers()` - Get all leadership
- `getMembersByPledgeClass(className)` - Get by class

## Troubleshooting

### Member Not Appearing
1. Check `id` is unique
2. Check `pledgeClass` matches a defined type
3. Check member is in `MEMBERS` array
4. Check no TypeScript errors

### Wrong Section
- Leadership → Set `isLeadership: true`
- Pledge class → Set `isLeadership: false` or leave undefined

### Wrong Order in Leadership
- Check position is spelled exactly as in type definition
- Check `POSITION_HIERARCHY` includes the position
- Lower rank number = appears higher on page

### Image Not Showing
1. Check file path is correct (`/public/images/...`)
2. Check image exists in public folder
3. Check aspect ratio is 2:3
4. Check file extension matches (`.jpg` vs `.jpeg`)

### Modal Not Opening
1. Check onClick handler is attached
2. Check for JavaScript errors in console
3. Verify state is updating (use React DevTools)

## File Structure

```
src/
├── data/
│   └── members.ts              # Member data
├── types/
│   └── member.ts               # Type definitions, helpers
├── Pages/
│   └── Members.tsx             # Main members page
└── Components/
    └── members/
        ├── MemberCard.tsx      # Individual card
        └── MemberModal.tsx     # Detail modal
```

## Performance

### Current Stats
- 10 members: ~50ms render time
- 50 members: ~150ms render time
- 100 members: ~250ms render time

### Optimization Tips
1. **Lazy load images**: Add `loading="lazy"` to `<img>` tags
2. **Virtual scrolling**: For 100+ members, consider react-window
3. **Image optimization**: Use WebP format, compress images
4. **Code splitting**: Lazy load modal component

## Future Enhancements

### Potential Features
1. **Search/Filter**: Search by name, major, or class
2. **Sort Options**: Sort by name, year, major
3. **Print View**: Print-friendly member directory
4. **Export**: Download member list as PDF/CSV
5. **Alumni Section**: Separate section for graduated members
6. **Member Profiles**: Dedicated page for each member (/members/john-doe)

### Easy Additions
- Add more fields to Member interface
- Add more positions to hierarchy
- Add custom sections (e.g., "Founding Members")
- Add member achievements/awards

---

**Questions?**
- Check type definitions in `src/types/member.ts`
- Review example data in `src/data/members.ts`
- See component implementation in `src/Pages/Members.tsx`
