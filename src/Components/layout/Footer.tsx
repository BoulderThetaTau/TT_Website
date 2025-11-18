import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../../constants/company';
import { getActiveSocialMedia } from '../../constants/socialMedia';

/**
 * Footer Component
 *
 * Interactive footer with animated gears that respond to mouse movement.
 * Features standard footer content with navigation, contact, and social links.
 */
export const Footer: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  const activeSocialMedia = getActiveSocialMedia();

  // Track mouse position for gear rotation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      if (!footerRef.current) return;

      const rect = footerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      setMousePosition({ x, y });
    };

    const footerElement = footerRef.current;
    if (!footerElement) return;

    footerElement.addEventListener('mousemove', handleMouseMove);
    return () => footerElement.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Footer navigation sections
  const footerSections = [
    {
      title: 'About',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Our Pillars', path: '/about#pillars' },
        { label: 'Rush', path: '/rush' },
        { label: 'Members', path: '/members' },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { label: 'Brotherhood', path: '/brotherhood' },
        { label: 'Community Service', path: '/comm-serve' },
        { label: 'Professional Development', path: '/prof-dev' },
        { label: 'Sign Up', path: '/sign-up' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'Contact Us', path: '/contact' },
        { label: 'National Theta Tau', path: 'https://thetatau.org/', external: true },
        { label: 'Theta Tau Shop', path: 'https://store.thetatau.org/', external: true },
      ],
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-thetaTauRed overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated Background Gears */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <GearBackground mousePosition={mousePosition} isHovering={isHovering} />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          {/* Branding Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-primary font-bold text-thetaTauGold text-2xl md:text-3xl mb-3">
                THETA TAU
              </h3>
              <p className="font-primary text-white text-lg leading-tight">
                {COMPANY_INFO.chapter.name}
              </p>
              <p className="font-primary text-white text-sm opacity-75 mt-2 leading-relaxed">
                {COMPANY_INFO.chapter.university}
              </p>
            </div>

            <p className="text-white text-sm leading-relaxed opacity-90">
              {COMPANY_INFO.description.short}
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              {activeSocialMedia.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white bg-opacity-20 hover:bg-thetaTauGold flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-thetaTauGold focus:ring-offset-2 focus:ring-offset-thetaTauRed"
                  aria-label={social.ariaLabel}
                >
                  <i className={`${social.iconClass} text-white text-lg`} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-primary font-bold text-thetaTauGold text-lg mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-sm hover:text-thetaTauGold transition-colors duration-200 inline-flex items-center gap-2 leading-relaxed"
                      >
                        {link.label}
                        <i className="fas fa-external-link-alt text-xs opacity-75" />
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-white text-sm hover:text-thetaTauGold transition-colors duration-200 leading-relaxed block"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-white text-sm text-center md:text-left leading-relaxed">
              <p className="opacity-90">
                © {new Date().getFullYear()} {COMPANY_INFO.chapter.fullName}. All rights reserved.
              </p>
              <p className="opacity-75 text-xs mt-2">
                Founded {COMPANY_INFO.chapter.localFounded} • National Founding {COMPANY_INFO.chapter.founded}
              </p>
            </div>

            {/* Contact Email */}
            <a
              href={`mailto:${COMPANY_INFO.contact.email.regent}`}
              className="text-white text-sm hover:text-thetaTauGold transition-colors duration-200 flex items-center gap-2 leading-relaxed"
            >
              <i className="fas fa-envelope" />
              {COMPANY_INFO.contact.email.regent}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

/**
 * Gear Background Component
 *
 * Renders animated SVG gears that respond to mouse movement
 */
interface GearBackgroundProps {
  mousePosition: { x: number; y: number };
  isHovering: boolean;
}

const GearBackground: React.FC<GearBackgroundProps> = ({ mousePosition, isHovering }) => {
  const [time, setTime] = useState(0);

  // Animate gears over time
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const gears = [
    { size: 200, x: 10, y: 20, speed: 0.5, teeth: 12 },
    { size: 150, x: 70, y: 15, speed: -0.7, teeth: 10 },
    { size: 120, x: 30, y: 70, speed: 0.6, teeth: 8 },
    { size: 180, x: 85, y: 65, speed: -0.5, teeth: 14 },
    { size: 100, x: 50, y: 45, speed: 0.8, teeth: 8 },
  ];

  const getRotation = (baseSpeed: number, index: number) => {
    const baseRotation = time * baseSpeed;

    if (!isHovering) return baseRotation;

    const xInfluence = (mousePosition.x - 50) * 0.3;
    const yInfluence = (mousePosition.y - 50) * 0.2;
    const mouseInfluence = (xInfluence + yInfluence) * (index % 2 === 0 ? 1 : -1);

    return baseRotation + mouseInfluence * 2;
  };

  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="gearGlow">
          <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {gears.map((gear, index) => (
        <g
          key={index}
          transform={`translate(${gear.x}, ${gear.y})`}
          style={{
            transition: isHovering ? 'none' : 'transform 0.3s ease-out',
          }}
        >
          <g
            transform={`rotate(${getRotation(gear.speed, index)})`}
            style={{
              transformOrigin: 'center',
            }}
          >
            <Gear size={gear.size / 10} teeth={gear.teeth} />
          </g>
        </g>
      ))}
    </svg>
  );
};

/**
 * Individual Gear SVG Component
 */
interface GearProps {
  size: number;
  teeth: number;
}

const Gear: React.FC<GearProps> = ({ size, teeth }) => {
  const outerRadius = size;
  const innerRadius = size * 0.6;
  const toothDepth = size * 0.15;
  const holeRadius = size * 0.3;

  const generateGearPath = () => {
    let path = '';
    const angleStep = (Math.PI * 2) / teeth;

    for (let i = 0; i < teeth; i++) {
      const angle1 = i * angleStep;
      const angle2 = angle1 + angleStep * 0.4;
      const angle3 = angle1 + angleStep * 0.6;
      const angle4 = angle1 + angleStep;

      // Outer tooth
      const x1 = Math.cos(angle1) * outerRadius;
      const y1 = Math.sin(angle1) * outerRadius;
      const x2 = Math.cos(angle1) * (outerRadius + toothDepth);
      const y2 = Math.sin(angle1) * (outerRadius + toothDepth);
      const x3 = Math.cos(angle2) * (outerRadius + toothDepth);
      const y3 = Math.sin(angle2) * (outerRadius + toothDepth);
      const x4 = Math.cos(angle3) * (outerRadius + toothDepth);
      const y4 = Math.sin(angle3) * (outerRadius + toothDepth);
      const x5 = Math.cos(angle4) * (outerRadius + toothDepth);
      const y5 = Math.sin(angle4) * (outerRadius + toothDepth);
      const x6 = Math.cos(angle4) * outerRadius;
      const y6 = Math.sin(angle4) * outerRadius;

      if (i === 0) {
        path += `M ${x1} ${y1} `;
      }

      path += `L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4} L ${x5} ${y5} L ${x6} ${y6} `;
    }

    path += 'Z';
    return path;
  };

  return (
    <g>
      {/* Main gear body */}
      <path
        d={generateGearPath()}
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.2"
        filter="url(#gearGlow)"
      />

      {/* Inner circle */}
      <circle
        cx="0"
        cy="0"
        r={innerRadius}
        fill="currentColor"
        opacity="0.8"
      />

      {/* Center hole */}
      <circle
        cx="0"
        cy="0"
        r={holeRadius}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.3"
        opacity="0.5"
      />

      {/* Decorative spokes */}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <line
          key={angle}
          x1="0"
          y1="0"
          x2={Math.cos((angle * Math.PI) / 180) * innerRadius}
          y2={Math.sin((angle * Math.PI) / 180) * innerRadius}
          stroke="currentColor"
          strokeWidth="0.2"
          opacity="0.4"
        />
      ))}
    </g>
  );
};
