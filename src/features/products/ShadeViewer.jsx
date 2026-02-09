import React, { memo } from 'react';
import { X } from 'lucide-react';

/**
 * Full-screen shade viewer modal
 */
function ShadeViewer({ shade, product, onClose }) {
    if (!shade) return null;

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={`Visor de tono ${shade.name}`}
        >
            <div
                className="relative max-w-2xl w-full max-h-[85vh] animate-[fadeIn_0.3s_ease-out]"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white hover:text-rose-300 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 rounded-full"
                    aria-label="Cerrar visor"
                >
                    <X size={32} />
                </button>

                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                    <img
                        src={shade.image}
                        alt={shade.name}
                        className="w-full h-auto max-h-[70vh] object-contain"
                    />
                    <div className="p-6 text-center bg-gradient-to-r from-rose-50 via-pink-50 to-rose-50">
                        <h4 className="text-2xl font-bold text-gray-800 mb-2">
                            {shade.name}
                        </h4>
                        {product && (
                            <p className="text-rose-500 font-medium">
                                {product.name} • {product.brand}
                            </p>
                        )}
                    </div>
                </div>

                <p className="text-white/60 text-center mt-4 text-sm">
                    Toca fuera de la imagen para cerrar
                </p>
            </div>
        </div>
    );
}

export default memo(ShadeViewer);
