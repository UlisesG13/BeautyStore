import React, { memo } from 'react';
import { cn } from '@/utils/cn';

const variants = {
    default: 'bg-white/90 text-gray-800',
    rose: 'bg-rose-50 text-rose-600',
    price: 'bg-rose-50 text-rose-600'
};

/**
 * Badge component for displaying labels, brands, or prices
 */
function Badge({
    children,
    variant = 'default',
    className = '',
    ...props
}) {
    return (
        <span
            className={cn(
                'inline-block px-3 py-1 rounded-full text-xs font-bold shadow-sm backdrop-blur',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}

export default memo(Badge);
