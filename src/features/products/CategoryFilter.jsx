import React, { memo } from 'react';
import { cn } from '@/utils/cn';
import { CATEGORIES } from '@/constants/config';

/**
 * Category filter buttons
 */
function CategoryFilter({ activeFilter, onFilterChange }) {
    return (
        <div
            className="max-w-6xl mx-auto px-4 mb-10 flex justify-center gap-3 flex-wrap"
            role="tablist"
            aria-label="Filtrar productos por categoría"
        >
            {CATEGORIES.map((category) => (
                <button
                    key={category}
                    onClick={() => onFilterChange(category)}
                    role="tab"
                    aria-selected={activeFilter === category}
                    aria-controls="product-grid"
                    className={cn(
                        'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2',
                        activeFilter === category
                            ? 'bg-rose-500 text-white shadow-lg shadow-rose-200 scale-105'
                            : 'bg-white text-gray-600 hover:bg-rose-50 border border-rose-100'
                    )}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default memo(CategoryFilter);
