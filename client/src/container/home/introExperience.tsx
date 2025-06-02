'use client';

import React, { useRef, useState } from 'react';
import { Icon } from '@iconify-icon/react';
import "@/styles/custom.css";

interface StackType {
  id: number;
  name: string;
  background: string;
  icon: string; // changed from ReactNode for clarity
}

const stackList: StackType[] = [
  { id: 1, name: 'JavaScript', background: '#C3C99E', icon: 'devicon:javascript' },
  { id: 2, name: 'TypeScript', background: '#75afc7', icon: 'devicon:typescript' },
  { id: 3, name: 'SASS', background: '#d49790', icon: 'devicon:sass' },
  { id: 4, name: 'React', background: '#7D9CA5', icon: 'devicon:react' },
  { id: 5, name: 'Next.Js', background: '#C2C2C2', icon: 'devicon:nextjs' },
  { id: 6, name: 'Node.Js', background: '#6DA95C', icon: 'devicon:nodejs' },
  { id: 7, name: 'PostgreSQL', background: '#466e8f', icon: 'devicon:postgresql' },
  { id: 8, name: 'Java', background: '#c29978', icon: 'devicon:java' },
  { id: 9, name: 'Spring Boot', background: '#c2c9bd', icon: 'devicon:spring' }
];

const CARDS_PER_PAGE = 3;

const IntroExperience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);

  const totalPages = Math.ceil(stackList.length / CARDS_PER_PAGE);

  const scrollToPage = (pageIndex: number) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth * pageIndex;
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
      setActivePage(pageIndex);
    }
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const newPage = Math.round(scrollLeft / containerWidth);
      setActivePage(Math.min(Math.max(newPage, 0), totalPages - 1));
    }
  };

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center md:text-left mb-10">
        <p className="text-neutral-500 font-medium text-xl mb-2">2 years of</p>
        <h1 className="text-white font-bold text-5xl md:text-7xl mb-4">XP</h1>
        <p className="text-neutral-500 font-medium text-xl">
          with the most popular full-stack ecosystem
        </p>
      </div>

      <div
        ref={containerRef}
        className="flex overflow-x-scroll gap-4 snap-x snap-mandatory scroll-smooth scrollbar-hidden"
        onScroll={handleScroll}
      >
        {stackList.map((stack) => (
          <div
            key={stack.id}
            className="w-full md:w-1/3 h-64 rounded-[60px] flex items-center justify-left pl-12.5 snap-start transition-all duration-500 px-2 flex-shrink-0"
            style={{ backgroundColor: stack.background }}
          >
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold flex flex-col items-left justify-center gap-3"> <Icon
                                                              icon={stack.icon}
                                                              width={60}
                                                              height={60}
                                                             className={`m-auto pt-1`}
                                                          />
                                                          <p className="text-xl font-bold text-neutral-800">{stack.name}</p>
</div>
              
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToPage(i)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              activePage === i ? 'w-8 bg-white' : 'w-2 bg-gray-500'
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default IntroExperience;
