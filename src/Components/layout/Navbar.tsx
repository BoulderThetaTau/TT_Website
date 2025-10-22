import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useToggle } from '../../hooks/useToggle';
import { NAV_ITEMS } from '../../constants/navigation';

/**
 * Navbar Component
 *
 * Sticky navigation bar with hamburger menu that opens a slide-in sidebar.
 * Features red gradient sidebar with white navigation links.
 */
export const Navbar: React.FC = () => {
  const [isMenuOpen, toggleMenu, , closeMenu] = useToggle(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location, closeMenu]);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Filter navigation items to only show specific pages
  const mainNavItems = NAV_ITEMS.filter(item =>
    ['Home', 'About Us', 'Mercury Council', 'Rush', 'Contact'].includes(item.label)
  );

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-16">
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-thetaTauGold transition-colors ${
                isScrolled ? 'text-thetaTauRed hover:text-thetaTauGold' : 'text-white hover:text-thetaTauGold'
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1.5">
                <span
                  className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
              <span className="ml-2 text-sm font-medium">MENU</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Slide-in Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-gradient-to-b from-thetaTauRed via-red-800 to-red-900 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={closeMenu}
              className="text-white hover:text-thetaTauGold transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-thetaTauGold rounded-md"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              {mainNavItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block text-white text-2xl font-bold hover:text-thetaTauGold transition-colors duration-200 py-2 ${
                      location.pathname === item.path ? 'text-thetaTauGold' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer Section (Optional) */}
          <div className="p-6 border-t border-red-700">
            <p className="text-white text-sm opacity-75">
              Theta Tau Eta Gamma Chapter
            </p>
            <p className="text-white text-xs opacity-50 mt-1">
              University of Colorado Boulder
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
