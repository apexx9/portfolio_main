import React from 'react';

interface stackType{
    id: number;
    name: string;
    background: string;
    icon: string;
}
// Javascript, typescript, sass, react, next.js, node.js, postgresql, java, spring boot
const stackList : stackType[] = [
    {
        id:1,
        name: "JavaScript",
        background: "#C3C99E",
        icon: "#"
    },
    {
        id:2,
        name: "typescript",
        background: "#1ABCFE",
        icon: "#"
    },
    {
        id:3,
        name: "SASS",
        background: "#FF7262",
        icon: "#"
    },
    {
        id:4,
        name: "React",
        background: "#7D9CA5",
        icon: "#"
    },
    {
        id:5,
        name: "Next.Js",
        background: "#C2C2C2",
        icon: "#"
    },
    {
        id: 6,
        name: "Node.Js",
        background: "#",
        icon: "#"
    },
    {
        id:7,
        name: "PostGREsql",
        background: "#",
        icon: "#"
    },
    {
        id:8,
        name: "Java",
        background: "#",
        icon: "#"
    },
    {
        id:9,
        name: "Spring Boot",
        background: "#",
        icon: "#"
    }
]

const IntroExperience = () => {
    return (
      <section className='container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12'>
        {/* Left Section - XP Text */}
        <div className='text-center md:text-left'>
          <p className='text-gray-400 font-medium text-xl mb-2'>2 years of</p>
          <h1 className='text-white font-bold text-6xl md:text-7xl mb-4'>XP</h1>
          <p className='text-gray-400 font-medium text-xl'>
            with the most popular full-stack ecosystem
          </p>
        </div>
  
        {/* Right Section - Tech Stack */}
        <div className='w-full md:w-[60%]'>
          <div className='flex gap-6 overflow-x-auto pb-4 scrollbar-hide'>
            {stackList.map((stack) => (
              <div
                key={stack.id}
                className='flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-3xl flex flex-col items-center justify-center p-4 shadow-lg transition-transform hover:scale-105'
                style={{ backgroundColor: stack.background }}
              >
                {/* Replace with actual icon component when you have icons */}
                <div className='w-102 h-69 rounded-full mb-2 flex items-center justify-center'>
                  {stack.icon && (
                    <img 
                      src={stack.icon} 
                      alt={stack.name} 
                      className='w-8 h-8 object-contain'
                    />
                  )}
                </div>
                <span className='text-white font-medium text-sm md:text-base text-center'>
                  {stack.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default IntroExperience;