import React, { memo } from 'react';
import { cn } from '@/utils/cn';

const variants = {
    primary: 'bg-rose-500 text-white hover:bg-rose-600 shadow-lg shadow-rose-200',
    secondary: 'bg-white text-gray-600 hover:bg-rose-50 border border-rose-100',
    whatsapp: 'bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-200',
    ghost: 'bg-white/80 p-2 hover:bg-gray-100'
};

const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2 text-base',
    lg: 'px-6 py-4 text-lg',
    icon: 'p-2'
};

/**
 * Reusable Button component with variants
 */
function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    rounded = 'full',
    ...props
}) {
    return (
        <button
            className={cn(
                'font-medium transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2',
                `rounded-${rounded}`,
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}

export default memo(Button);
