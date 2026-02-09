import React, { memo } from 'react';
import { Badge } from '@/components/ui';

/**
 * Product card component with image, name, price, and hover effects
 * Memoized to prevent re-renders when other products are filtered
 */
function ProductCard({ product, onClick }) {
    return (
        <article
            onClick={onClick}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-rose-50 hover:-translate-y-2 focus-within:ring-2 focus-within:ring-rose-500"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onClick()}
            aria-label={`Ver detalles de ${product.name}`}
        >
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                />

                <Badge
                    className="absolute top-3 right-3"
                    variant="default"
                >
                    {product.brand}
                </Badge>

                <div
                    className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    aria-hidden="true"
                >
                    <span className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        Ver Tonos
                    </span>
                </div>
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="font-bold text-lg text-gray-900 leading-tight">
                            {product.name}
                        </h3>
                        <p className="text-sm text-gray-500">{product.type}</p>
                    </div>
                    <span className="text-rose-600 font-bold bg-rose-50 px-2 py-1 rounded text-lg">
                        ${product.price}
                    </span>
                </div>
            </div>
        </article>
    );
}

export default memo(ProductCard);
