import React from 'react';
import { Socials } from '@/libs/url';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "@/styles/custom.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <footer className='lg:mx-46 lg:h-36.5 h-28 w-[100vw] px-8.5 lg:w-[calc(100vw-368px)] flex flex-col justify-between overflow-x-hidden gap-4.5'>
            <div className='upper bg-neutral-900 h-22.5 rounded-[100px] flex items-center justify-between lg:px-17.5 px-5 gap-5'>
                <p className='text-neutral-500 text-[16px] lg:text-[26px]'>Follow me</p>
                <div className='socials flex items-center lg:gap-4 gap-2'>
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
            <div className='lower lg:px-17.5 px-8.5 flex items-center'>
               &copy; apexx9 {currentYear}
            </div>
        </footer>
    )
}


export default Footer;