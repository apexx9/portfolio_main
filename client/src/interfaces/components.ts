import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

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
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export interface Social{
    id: number;
    icon: IconDefinition;
    name: string;
    href?: string;
}
