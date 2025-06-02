import { NavLink } from "@/interfaces/components";
import { Social } from "@/interfaces/components";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faXTwitter, faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';



export const NavLinks: NavLink[] = [
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

export const Socials: Social[] = [
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
        href: "https://twitter.com/apexxxx_9",
        icon: faXTwitter
    },
    {
        id: 5,
        name: "Instagram",
        href: "https://instagram.com/__aaro.nn",
        icon: faInstagram
    }
];