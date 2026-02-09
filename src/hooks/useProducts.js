import { useState, useMemo } from 'react';

/**
 * Hook for filtering products by category
 * @param {Array} products - Array of product objects
 * @param {string} initialFilter - Initial filter value (default: 'todos')
 * @returns {Object} { filter, setFilter, filteredProducts }
 */
export function useProducts(products, initialFilter = 'todos') {
    const [filter, setFilter] = useState(initialFilter);

    const filteredProducts = useMemo(() => {
        if (filter === 'todos') {
            return products;
        }
        return products.filter(product => product.category === filter);
    }, [products, filter]);

    return {
        filter,
        setFilter,
        filteredProducts
    };
}
