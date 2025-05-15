import React from 'react';
import Hero from '@/container/home/hero';
import IntroExperience from '@/container/home/introExperience';
import Technologies from '@/container/home/technologies';

const Page = () => {
  return (
    <div className='page w-full h-full flex flex-col justify-around'>
      <Hero />
      <IntroExperience />

      <div className='flex flex-col self-center gap-20 items-center font-semibold text-7xl max-w-107.5 max-h-119.5'
      
      >
        <h1 className='text-purple-300'>Typescript</h1>
        <h1 className='text-purple-500'>React</h1>
        <h1 className='text-purple-700'>Spring Boot</h1>
      </div>
      <Technologies />
    </div>
  )
}

export default Page;