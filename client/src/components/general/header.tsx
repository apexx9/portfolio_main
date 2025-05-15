import React from 'react';
import Link from 'next/link';
import { NavLink, Social } from '@/interfaces/components';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faXTwitter, faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavLinks: NavLink[] = [
    {
        id: 1,
        name: "Home",
        href: "/"
    },
    {
        id: 2,
        name: "Education",
        href: "/education"
    },
    {
        id: 3,
        name: "Experience",
        href: "/experience"
    },
    {
        id: 4,
        name: "Projects",
        href: "/projects"
    },
    {
        id: 5,
        name: "Blogs",
        href: "/blogs"
    }
];

const Socials: Social[] = [
    {
        id: 1,
        name: "Gmail",
        href: "mailto:aaronnartey001@gmail.com",
        icon: faEnvelope
    },
    {
        id: 2,
        name: "Github",
        href: "https://github.com/apexx9",
        icon: faGithub
    },
    {
        id: 3,
        name: "Linkedin",
        href: "https://linkedin.com/in/aaron",
        icon: faLinkedinIn
    },
    {
        id: 4,
        name: "Twitter",
        href: "https://twitter.com/aaron",
        icon: faXTwitter
    },
    {
        id: 5,
        name: "Instagram",
        href: "https://instagram.com/__aaro.nn",
        icon: faInstagram
    }
];

const Header = () => {
    return (
        <header className='w-full flex justify-center '>
            <div className='w-[788px] h-17.5 flex justify-between items-center drop-shadow-lg bg-neutral-800 rounded-[100px] px-8'>
                <nav className=''>
                    <ul className='flex items-center gap-8'>
                        {NavLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                    href={link.href}
                                    className='lowercase text-purple-300 text-xl font-medium hover:text-white transition-colors duration-200'
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                
                <div className='flex items-center gap-4'>
                    {Socials.map((social) => (
                        <a
                            key={social.id}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            className='text-purple-300 hover:text-white transition-colors duration-200'
                        >
                            {/* Replace with actual icon component or SVG */}
                            <span className='lowercase'>
                                <FontAwesomeIcon icon={social.icon} className='w-6 h-6' />
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;