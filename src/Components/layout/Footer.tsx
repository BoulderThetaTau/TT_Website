import React from 'react';
import { Link } from 'react-router-dom';
import { CHAPTER_INFO, getActiveSocialMedia } from '@/config/chapter';

/**
 * Footer Component
 *
 * Standard footer with navigation, contact, and social links.
 */
export const Footer: React.FC = () => {
  const activeSocialMedia = getActiveSocialMedia();

  // Footer navigation sections
  interface FooterLink {
    label: string;
    path: string;
    external?: boolean;
  }

  interface FooterSection {
    title: string;
    links: FooterLink[];
  }

  const footerSections: FooterSection[] = [
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
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'National Theta Tau', path: 'https://thetatau.org/', external: true },
        { label: 'Theta Tau Shop', path: 'https://store.thetatau.org/', external: true },
      ],
    },
  ];

  return (
    <footer className="relative w-full bg-thetaTauRed overflow-hidden">
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
                {CHAPTER_INFO.chapter.name}
              </p>
              <p className="font-primary text-white text-sm opacity-75 mt-2 leading-relaxed">
                {CHAPTER_INFO.chapter.university}
              </p>
            </div>

            <p className="text-white text-sm leading-relaxed opacity-90">
              {CHAPTER_INFO.description.short}
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
                © {new Date().getFullYear()} {CHAPTER_INFO.chapter.fullName}. All rights reserved.
              </p>
              <p className="opacity-75 text-xs mt-2">
                Founded {CHAPTER_INFO.chapter.localFounded} • National Founding {CHAPTER_INFO.chapter.founded}
              </p>
            </div>

            {/* Contact Email */}
            <a
              href={`mailto:${CHAPTER_INFO.contact.email.regent}`}
              className="text-white text-sm hover:text-thetaTauGold transition-colors duration-200 flex items-center gap-2 leading-relaxed"
            >
              <i className="fas fa-envelope" />
              {CHAPTER_INFO.contact.email.regent}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
