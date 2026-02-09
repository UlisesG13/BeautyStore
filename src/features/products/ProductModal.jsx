import React, { memo, useCallback } from 'react';
import { MessageCircle, Heart, Sparkles } from 'lucide-react';
import { Modal } from '@/components/ui';
import { openWhatsAppForProduct } from '@/utils/whatsapp';
import { WHATSAPP_NUMBER } from '@/constants/config';

/**
 * Modal for displaying product details and available shades
 */
function ProductModal({ product, onClose, onShadeClick }) {
    const handleWhatsAppClick = useCallback(() => {
        openWhatsAppForProduct(WHATSAPP_NUMBER, product);
    }, [product]);

    if (!product) return null;

    return (
        <Modal
            isOpen={!!product}
            onClose={onClose}
            className="w-full max-w-4xl flex flex-col md:flex-row"
        >
            {/* Product Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 p-8 overflow-y-auto max-h-[60vh] md:max-h-none">
                {/* Header */}
                <div className="mb-6">
                    <span className="text-rose-500 font-bold tracking-widest text-xs uppercase mb-2 block">
                        {product.brand} — {product.category}
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {product.name}
                    </h2>
                    <p className="text-2xl font-light text-gray-600">
                        ${product.price} MXN
                    </p>
                </div>

                {/* Description */}
                <div className="mb-6">
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {product.description}
                    </p>
                </div>

                {/* Shades */}
                <div className="mb-8">
                    <h3 className="flex items-center gap-2 font-bold text-gray-800 mb-4 text-lg">
                        <Heart size={20} className="text-rose-500 fill-current" aria-hidden="true" />
                        Tonos Disponibles
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {product.shades.map((shade, index) => (
                            <ShadeCard
                                key={index}
                                shade={shade}
                                onClick={() => onShadeClick(shade)}
                            />
                        ))}
                    </div>

                    <p className="text-xs text-gray-500 mt-4 italic text-center">
                        ✨ Pregunta disponibilidad exacta al momento de ordenar
                    </p>
                </div>

                {/* WhatsApp Button */}
                <button
                    onClick={handleWhatsAppClick}
                    className="w-full py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                    <MessageCircle size={24} aria-hidden="true" />
                    Pedir por WhatsApp
                </button>
            </div>
        </Modal>
    );
}

/**
 * Individual shade card component
 */
const ShadeCard = memo(function ShadeCard({ shade, onClick }) {
    return (
        <div
            onClick={onClick}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-rose-300 active:scale-95 focus-within:ring-2 focus-within:ring-rose-500"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onClick()}
            aria-label={`Ver tono ${shade.name}`}
        >
            <div className="aspect-square overflow-hidden">
                <img
                    src={shade.image}
                    alt={shade.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                />
            </div>

            <div
                className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
            >
                <Sparkles size={14} className="text-rose-500" />
            </div>

            <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
                aria-hidden="true"
            >
                <span className="text-white font-semibold text-sm px-3 py-1 bg-rose-500/80 rounded-full backdrop-blur-sm">
                    Click para ver
                </span>
            </div>

            <div className="p-3 text-center bg-gradient-to-r from-rose-50 to-pink-50">
                <span className="text-gray-700 font-medium text-sm">{shade.name}</span>
            </div>
        </div>
    );
});

export default memo(ProductModal);
