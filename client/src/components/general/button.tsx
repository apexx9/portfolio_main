import React from 'react';
import { ButtonProps } from '@/interfaces/components';




const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'medium', className = " ", onClick }) => {

    const variantClasses = {
        primary: "bg-white text-black hover:bg-purple-300 transition-colors duration-300",
        secondary: "bg-black text-white",
        tertiary: "bg-tertiary text-tertiary-foreground",
    };

    const sizeClasses = {
        small: "px-2 py-1",
        medium: "px-4 py-2 w-46 h-11.5 rounded-[46px]",
        large: "px-6 py-3",
    };

    const baseClasses = "rounded focus:outline-none focus:ring-2 focus:ring-offset-2";

    
    return (
        <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        onClick={onClick}
        >
            {children}
        </button>
    )
}


export default Button;