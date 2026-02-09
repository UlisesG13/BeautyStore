import React, { memo } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { WHATSAPP_NUMBER } from '@/constants/config';

/**
 * Floating WhatsApp button for quick contact
 */
function WhatsAppButton() {
    return (
        <a
            href={getWhatsAppUrl(WHATSAPP_NUMBER)}
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all z-40 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle size={28} aria-hidden="true" />
        </a>
    );
}

export default memo(WhatsAppButton);
