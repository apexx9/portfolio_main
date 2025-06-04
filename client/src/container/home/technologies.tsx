'use client'
import React, { useState, useEffect } from 'react';
import { Icon, IconifyIcon } from '@iconify-icon/react';
import { Nunito } from 'next/font/google';
import "@/styles/custom.css";

interface toolHeader {
    id: number;
    name: string;
    icon?: IconifyIcon | string;
    className?: string;
}

interface toolsType {
    id: number;
    header: string;
    content: toolHeader[];
}

const techTools: toolsType[] = [
    {
        id: 1,
        header: "Publications in Both Stores",
        content: [
            { id: 1, name: "App Store", icon: "mage:playstore" },
            { id: 2, name: "Play Store", icon: "mingcute:appstore-line" },
        ]
    },
    {
        id: 2,
        header: "Full-Stack Engineer Design",
        content: [
            { id: 1, name: "React Js", icon: "devicon:react" },
            { id: 2, name: "React Native", icon: "catppuccin:typescript-react" },
            { id: 3, name: "Next.Js", icon: "devicon:nextjs" },
            { id: 4, name: "Vite", icon: "devicon:vitejs" },
            { id: 5, name: "Zustand", icon: "devicon:zustand" },
            { id: 6, name: "Figma", icon: "devicon:figma" },
            { id: 7, name: "Jest", icon: "catppuccin:jest" },
        ]
    },
    {
        id: 3,
        header: "Languages",
        content: [
            { id: 1, name: "JavaScript", icon: "devicon:javascript" },
            { id: 2, name: "Typescript", icon: "devicon:typescript" },
            { id: 3, name: "Java", icon: "devicon:java" },
        ]
    },
    {
        id: 4,
        header: "DevOps",
        content: [
            { id: 1, name: "Github Actions", icon: "devicon-plain:githubactions" },
            { id: 2, name: "Docker", icon: "mdi:docker" },
        ]
    },
    {
        id: 5,
        header: "Backend",
        content: [
            { id: 1, name: "Spring Boot", icon: "simple-icons:springboot", className: "text-green-600" },
            { id: 2, name: "Node Js", icon: "la:node-js" },
            { id: 3, name: "Postman", icon: "devicon:postman" },
            { id: 4, name: "PostGREsql", icon: "devicon:postgresql" },
        ]
    },
]

const nunito = Nunito({
    variable: "--font-nunito",
    subsets: ["latin"],
    display: "swap",
})

const Technologies = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    useEffect(() => {
        if (isMobile) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => 
                    prevIndex === techTools.length - 1 ? 0 : prevIndex + 1
                );
            }, 3000);
            
            return () => clearInterval(interval);
        }
    }, [isMobile]);

    if (isMobile) {
        return (
            <div className='flex flex-col justify-between gap-20 min-h-[500px] mb-20'>
                <p className='text-4xl font-normal w-full px-4 py-8 text-gray-300'>
                    These are the Technologies I&apos;ve been using
                </p>
                
                <div className='flex justify-center items-center relative w-full px-4 mb-8 h-[300px]'>
                    {techTools.map((tools, index) => (
                        <div 
                            key={tools.id}
                            className={`absolute ${nunito.className} font-normal text-base flex flex-col text-left border border-gray-700 rounded-xl gap-3.5 h-fit w-fit py-6 px-8 transition-all duration-500 ${
                                index === currentIndex 
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-4 pointer-events-none'
                            }`}
                        >
                            <p className='text-lg font-semibold'>{tools.header}</p>
                            <ul className='flex flex-col gap-3.5'>
                                {tools.content.map((content) => (
                                    <li className='flex items-center gap-3.5' key={content.id}>
                                        <div className='bg-gray-700 rounded-full w-9 h-9 grid place-items-center'>
                                            {content.icon && (
                                                <Icon
                                                    icon={content.icon}
                                                    className={`w-5 h-5 m-auto pt-0.5 ${content.className}`}
                                                />
                                            )}
                                        </div>
                                        <p className=''>{content.name}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className='flex flex-col justify-between'>
            <p className='text-6xl font-normal w-[794px] h-[140px] mx-50 text-gray-300'>
                These are the Technologies I&apos;ve been using
            </p>
            <div className='grid grid-cols-5 gap-16 grid-rows-1 justify-evenly mx-17.5 h-fit mb-2'>
                {techTools.map((tools) => (
                    <div 
                        className={`${nunito.className} font-normal text-base flex flex-col w-75.5 text-left border border-gray-700 rounded-xl gap-3.5 h-fit py-6.5 px-8.5`} 
                        key={tools.id}
                    >
                        <p className=''>{tools.header}</p>
                        <ul className='flex flex-col gap-3.5'>
                            {tools.content.map((content) => (
                                <li className='flex items-center gap-3.5' key={content.id}>
                                    <div className='bg-gray-700 rounded-full w-9 h-9 grid place-items-center'>
                                        {content.icon && (
                                            <Icon
                                                icon={content.icon}
                                                className={`w-5 h-5 m-auto pt-0.5 ${content.className}`}
                                            />
                                        )}
                                    </div>
                                    <p className=''>{content.name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Technologies;