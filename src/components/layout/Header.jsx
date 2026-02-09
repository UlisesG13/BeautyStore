import React, { memo } from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/constants/config';
import { getWhatsAppUrl } from '@/utils/whatsapp';

/**
 * Header component with logo and contact button
 */
function Header() {
    return (
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm border-b border-rose-100">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Sparkles className="text-rose-500 w-6 h-6 animate-pulse" aria-hidden="true" />
                    <span className="text-2xl font-bold tracking-tighter text-gray-800">
                        BEAUTY<span className="text-rose-500">STORE</span>
                    </span>
                </div>

                <a
                    href={getWhatsAppUrl(WHATSAPP_NUMBER)}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden md:flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    aria-label="Contacto por WhatsApp"
                >
                    <MessageCircle size={18} aria-hidden="true" />
                    <span>Contacto Directo</span>
                </a>
            </div>
        </header>
    );
}

export default memo(Header);
