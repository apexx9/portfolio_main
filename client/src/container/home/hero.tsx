import React from 'react';
import { DEVELOPER_NAME } from '@/constants/components';
import Button from '@/components/general/button';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='flex justify-between mx-[200px] w-[662px] h-[404px]'>
        <div className='flex flex-col justify-between'>
        <h1 className='font-medium text-7xl'>Hi, I&apos;m <text className='text-purple-300'>{DEVELOPER_NAME["first_name"]}</text></h1>
        <p className='text-2xl font-extralight w-[662px] h-[192px] text-neutral-500'> During these <text className='font-bold text-white'> 2 years </text> as <text className='font-bold text-white'>Full-Stack Software Engineer. </text>
            My role has extended beyond coding to effective communication with various departments,
            to define new features and spearheading the development of new apps.
        </p>
        <div className='flex items-center gap-7'>
            <Button
            variant='primary'
            size='medium'
            >
            <a
              href="https://drive.google.com/file/d/1TvEO1RRwXqAvMWpAEt_wdWXyHNGZaC4s/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={"my cv url"}
            >Download CV</a>
            </Button>
        <Link href={"/experience"} className='text-base md:text-lg text-purple-300 hover:text-white transition-colors duration-300'>
        See experiences
        </Link>
        </div>
        </div>
        <div className='hidden md:block flex-1'>
        <div className='relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-purple-300'>
          {/* Replace with your actual image */}
          <Image
            src="/" // Update with your image path
            alt={`${DEVELOPER_NAME["first_name"]} profile picture`}
            fill
            className='object-cover'
            priority
          />
        </div>
      </div>
        
    </section>
  )
}

export default Hero;

// please make sure you apply the other fonts to the various parts that need it