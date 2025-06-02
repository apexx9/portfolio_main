import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

/* Button Component */
export interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "tertiary";
    size?: "small" | "medium" | "large";
    className?: string;
    onClick?: () => void
}

/* Header */
export interface NavLink{
    id: number;
    name: string;
    href: string;
}

/* Socials */
export interface Social{
    id: number;
    icon: IconDefinition;
    name: string;
    href?: string;
}

/* Hero */
export interface devType{
    first_name:string;
    last_name: string;
    nickname: string;
}