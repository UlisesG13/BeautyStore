// WhatsApp utility functions

/**
 * Generate a WhatsApp URL with a pre-filled message
 * @param {string} phoneNumber - Phone number with country code (no + or spaces)
 * @param {string} message - Message to pre-fill
 * @returns {string} WhatsApp URL
 */
export function getWhatsAppUrl(phoneNumber, message = '') {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * Generate a WhatsApp message for a product inquiry
 * @param {Object} product - Product object with name and brand
 * @returns {string} Formatted message
 */
export function getProductInquiryMessage(product) {
    return `Hola! Me interesa pedir el ${product.name} de ${product.brand}. ¿Qué tonos tienes disponibles?`;
}

/**
 * Open WhatsApp with a product inquiry
 * @param {string} phoneNumber - Phone number
 * @param {Object} product - Product object
 */
export function openWhatsAppForProduct(phoneNumber, product) {
    const message = getProductInquiryMessage(product);
    const url = getWhatsAppUrl(phoneNumber, message);
    window.open(url, '_blank');
}
