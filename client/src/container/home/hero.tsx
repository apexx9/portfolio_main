import React from 'react';
import { DEVELOPER_DETAILS } from '@/constants/components';
import Button from '@/components/general/button';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section className='flex flex-col-reverse lg:flex-row justify-between items-center mx-auto px-6 lg:px-20 w-full max-w-7xl h-auto min-h-[80vh] lg:min-h-[65vh] gap-12 '>
      {/* Text Content */}
      <div className='flex flex-col justify-center items-start gap-8 w-full lg:w-1/2 text-center lg:text-left'>
        <h1 className='text-5xl md:text-6xl lg:text-7xl text-[var(--foreground)] leading-tight'>
          Hi, I'm <span className='text-purple-400'>{DEVELOPER_DETAILS.first_name}</span>
        </h1>
        
        <p className='text-lg md:text-xl lg:text-2xl font-normal text-gray-400 leading-relaxed'>
          During these <span className='font-semibold text-[var(--foreground)]'>2 years</span> as{' '}
          <span className='font-semibold text-[var(--foreground)]'>Full-Stack Software Engineer</span>,{' '}
          my role has extended beyond coding to effective communication with various departments,
          to define new features and spearheading the development of new apps.
        </p>
        
        <div className='flex flex-col gap-6 w-full'>
          <div className='flex items-center gap-4 text-gray-400'>
            <FontAwesomeIcon icon={faLocationDot} className='text-purple-400 text-lg' />
            <span className='font-medium text-[var(--foreground)]'>
              {DEVELOPER_DETAILS.location.city}, {DEVELOPER_DETAILS.location.country}
            </span>
          </div>
          
          <div className='flex flex-wrap flex-col lg:flex-row items-center gap-6'>
            <Button
              variant='primary'
              size='medium'
              className='px-8 py-3'
            >
              <a
                href="https://drive.google.com/file/d/1TvEO1RRwXqAvMWpAEt_wdWXyHNGZaC4s/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download CV"
              >
                Download CV
              </a>
            </Button>
            <Link
              href="/experience"
              className='text-base md:text-lg text-purple-400 hover:text-white transition-colors duration-300 border-b border-transparent hover:border-purple-400 pb-1'
            >
              See my experiences →
            </Link>
          </div>
        </div>
      </div>
      
      {/* Profile Image */}
      <div className='lg:flex flex-1 justify-center items-center w-full lg:w-1/2'>
        <div className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-400/50 hover:border-purple-400 transition-all duration-500 shadow-lg hover:shadow-purple-500/20'>
          <Image
            src="/profile.jpg" // Replace with your image path
            alt={`${DEVELOPER_DETAILS.first_name} profile picture`}
            fill
            className='object-cover hover:scale-105 transition-transform duration-500'
            priority
            quality={100}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero;