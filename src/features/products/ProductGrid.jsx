import React, { memo, useCallback } from 'react';
import ProductCard from './ProductCard';

/**
 * Grid of product cards
 */
function ProductGrid({ products, onProductClick }) {
    const handleProductClick = useCallback((product) => {
        onProductClick(product);
    }, [onProductClick]);

    return (
        <main className="max-w-6xl mx-auto px-4 pb-20">
            <div
                id="product-grid"
                role="tabpanel"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onClick={() => handleProductClick(product)}
                    />
                ))}
            </div>
        </main>
    );
}

export default memo(ProductGrid);
