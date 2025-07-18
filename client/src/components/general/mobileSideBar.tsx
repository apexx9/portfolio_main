'use client';
import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faXmark,
  faHome,
  faGraduationCap,
  faBriefcase,
  faCode,
  faBlog,
  faSearch,
  faFolderOpen
} from '@fortawesome/free-solid-svg-icons';
import { NavLinks, Socials } from '@/libs/url';
import Link from 'next/link';

interface MobileSideBarProps {
  onClose: () => void;
  isOpen: boolean;
}

const linkIcons = {
  'Home': faHome,
  'Education': faGraduationCap,
  'Experience': faBriefcase,
  'Projects': faCode,
  'Blogs': faBlog
};

const MobileSideBar = ({ onClose, isOpen }: MobileSideBarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  // Clean up animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!sidebarRef.current || !overlayRef.current) return;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      overlayRef.current.style.display = 'block';
      sidebarRef.current.style.display = 'flex';
      
      animationRef.current = requestAnimationFrame(() => {
        overlayRef.current?.classList.remove('opacity-0');
        overlayRef.current?.classList.add('opacity-100');
        sidebarRef.current?.classList.remove('translate-x-full');
        sidebarRef.current?.classList.add('translate-x-0');
      });
    } else {
      overlayRef.current?.classList.remove('opacity-100');
      overlayRef.current?.classList.add('opacity-0');
      sidebarRef.current?.classList.remove('translate-x-0');
      sidebarRef.current?.classList.add('translate-x-full');

      setTimeout(() => {
        if (!isOpen) {
          overlayRef.current!.style.display = 'none';
          sidebarRef.current!.style.display = 'none';
          document.body.style.overflow = '';
        }
      }, 300);
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className='fixed inset-0 bg-[rgba(12,12,13,0.8)] backdrop-blur-sm opacity-0 transition-opacity duration-300 ease-in-out hidden'
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className='fixed flex flex-col right-0 top-0 w-64 pt-7.5 h-full bg-[var(--background)] shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out lg:hidden border-l border-gray-800'
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-purple-400 hover:text-white transition-colors duration-200 p-2 z-50'
          aria-label='Close menu'
        >
          <FontAwesomeIcon icon={faXmark} className='w-6 h-6' />
        </button>
        
        {/* Content */}
        <div className='flex flex-col h-full w-full pt-16 pb-8 overflow-y-auto'>
          {/* Search Box */}
          <div className='px-6 mb-6'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search...'
                className='w-full bg-gray-800 text-[var(--foreground)] placeholder-gray-500 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700'
              />
              <FontAwesomeIcon 
                icon={faSearch} 
                className='absolute left-3 top-3 text-gray-500'
              />
            </div>
          </div>
          
          {/* Navigation Links */}
          <nav className='px-6'>
            <ul className='flex flex-col gap-2'>
              {NavLinks.map((link) => (
                <li key={link.id} className='w-full relative group'>
                  <span className='absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-purple-500 rounded-full transition-colors duration-200'></span>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 lowercase text-purple-400 hover:text-white text-lg font-medium transition-colors duration-200 py-3 px-4 group-hover:bg-gray-800 rounded-md"
                    onClick={onClose}
                  >
                    <FontAwesomeIcon 
                      icon={linkIcons[link.name as keyof typeof linkIcons]} 
                      className="w-5 h-5 text-purple-400 group-hover:text-white transition-colors duration-200" 
                    />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Projects Section */}
          <div className='mt-8 px-6'>
            <div className='flex items-center gap-3 text-purple-400 mb-4'>
              <FontAwesomeIcon icon={faFolderOpen} className='w-5 h-5' />
              <h3 className='text-lg font-medium'>Projects</h3>
            </div>
            <div className='space-y-2'>
              <div className='bg-gray-800 hover:bg-gray-700 rounded-lg p-3 transition-colors duration-200 border border-gray-700'>
                <p className='text-[var(--foreground)]'>Project 1</p>
                <p className='text-gray-500 text-sm'>Coming soon</p>
              </div>
              <div className='bg-gray-800 hover:bg-gray-700 rounded-lg p-3 transition-colors duration-200 border border-gray-700'>
                <p className='text-[var(--foreground)]'>Project 2</p>
                <p className='text-gray-500 text-sm'>Coming soon</p>
              </div>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className='socials flex items-center justify-center gap-6 mt-auto pt-8 pb-4'>
            {Socials.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-purple-400 hover:text-white transition-colors duration-200"
              >
                <FontAwesomeIcon icon={social.icon} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSideBar;