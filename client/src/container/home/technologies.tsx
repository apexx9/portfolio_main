import React from 'react';

interface toolHeader {
    id: number;
    name: string;
    icon?: string;
}

interface toolsType{
    id: number;
    header: string;
    content: toolHeader[];
}



const techTools : toolsType [] = [
    {
        id:1,
        header: "Publications in Both Stores",
        content: [
            { id: 1, name: "App Store", icon: "#" },
            { id: 2, name: "Play Store", icon: "#" },
        ]
    },
    {
        id:2,
        header: "Full-Stack Engineer Design",
        content: [
            { id: 1, name: "React Js", icon: "#" },
            { id: 2, name: "React Native", icon: "#" },
            { id: 3, name: "Next.Js", icon: "#" },
            { id: 4, name: "Vite", icon: "#" },
            { id: 5, name: "Zustand", icon: "#" },
            { id: 6, name: "Figma", icon: "#" },
            { id: 7, name: "Jest", icon: "#" },
        ]
    },
    {
        id: 3,
        header: "Languages",
        content: [
            { id: 1, name: "JavaScript", icon: "#" },
            { id: 2, name: "Typescript", icon: "#" },
            { id: 3, name: "Java", icon: "#" },
        ]
    },
    {
        id: 4,
        header: "DevOps",
        content: [
            { id: 1, name: "Github Actions", icon: "#" },
            { id: 2, name: "Docker", icon: "#" },
        ]
    },
    {
        id: 5,
        header: "Backend",
        content: [
            { id: 1, name: "Spring Boot", icon: "#" },
            { id: 2, name: "PostGreSql", icon: "#" },
        ]
    },
]

const Technologies = () => {
  return (
    <div className='h-179'>
        <p className='text-6xl font-normal w-[794px] h-[140px] mx-50'>These are the Technologies I've been using</p>
        <div className='grid-cols-5 gap-16 grid-rows-1'>
            {
                techTools.map((tools)=>(
                    <div className='w-75.5 text-left' key={tools.id}>
                        <p className=''>{tools.header}</p>
                        <ul className=''>
                            {tools.content.map((content)=>(
                                <li className='' key={content.id}>
                                    {/* Icon here */}
                                    <p className=''>{content.name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Technologies;