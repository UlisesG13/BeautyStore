import React, { memo } from 'react';

/**
 * Hero section with welcome message and call to action
 */
function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-white mb-8">
            <div
                className="absolute inset-0 bg-gradient-to-r from-rose-100 to-transparent opacity-50"
                aria-hidden="true"
            />

            <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10 text-center">
                <span className="inline-block px-4 py-1 rounded-full bg-rose-100 text-rose-600 text-sm font-semibold tracking-wide mb-4 animate-bounce">
                    PEDIDOS ABIERTOS ✨
                </span>

                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                    Tu Belleza, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500">
                        Tu Elección.
                    </span>
                </h1>

                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                    Marcas exclusivas sobre pedido. Elige tus favoritos, checa los tonos y pide directamente por WhatsApp.
                </p>
            </div>
        </section>
    );
}

export default memo(HeroSection);
