'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLinks, Socials } from '@/libs/url';
import { usePathname, useRouter } from 'next/navigation';
import MobileSideBar from './mobileSideBar';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  const handleClick = () => {
    router.push('/');
  };

  return (
    <header className="relative w-full flex flex-col lg:flex-row items-center justify-between py-6 px-8 lg:px-20 z-40">
      {/* Logo - Top center on mobile, left on desktop */}
      <div className="lg:absolute lg:left-8 mb-4 lg:mb-0">
        <h1
          className="text-purple-300 font-bold text-3xl select-none cursor-pointer"
          onClick={handleClick}
        >
          &lt;<span className="text-white">/</span>apexx9&gt;
        </h1>
      </div>

      {/* Desktop Navigation - Centered */}
      <div className="hidden lg:flex items-center justify-center gap-8 drop-shadow-lg bg-[rgba(33,31,35,0.35)] rounded-full px-8 py-6 backdrop-blur-sm mx-auto">
        <nav>
          <ul className="flex items-center gap-8">
            {NavLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="lowercase text-purple-300 text-xl font-medium hover:text-white transition-colors duration-200 relative group"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {Socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-purple-300 hover:text-white transition-colors duration-200"
            >
              <FontAwesomeIcon icon={social.icon} className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Button - Right aligned */}
      <div className="lg:hidden absolute right-8 top-6">
        <button 
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="text-purple-300 hover:text-white transition-colors duration-200 p-2"
          aria-label="Toggle menu"
          aria-expanded={showMobileMenu}
        >
          <FontAwesomeIcon 
            icon={faBars} 
            className="w-6 h-6" 
          />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <MobileSideBar 
        isOpen={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

export default Header;