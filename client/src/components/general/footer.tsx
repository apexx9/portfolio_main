import React from 'react';
import { Socials } from '@/libs/url';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <footer className='mx-[184px] h-36.5 flex flex-col justify-between'>
            <div className='upper bg-neutral-900 h-22.5 rounded-[100px] flex items-center justify-between px-17.5'>
                <p className='text-neutral-500 text-[26px]'>Follow me</p>
                <div className='socials flex items-center gap-4'>
                    {
                        Socials.map((social) => (
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
                        ))
                    }
                </div>
            </div>
            <div className='lower px-17.5 flex items-center'>
               &copy; apexx9 {currentYear}
            </div>
        </footer>
    )
}


export default Footer;