/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            // Custom color palette (design tokens)
            colors: {
                // Brand colors
                brand: {
                    rose: {
                        50: '#fff1f2',
                        100: '#ffe4e6',
                        200: '#fecdd3',
                        300: '#fda4af',
                        400: '#fb7185',
                        500: '#f43f5e',
                        600: '#e11d48',
                        700: '#be123c',
                    },
                    // WhatsApp green
                    whatsapp: {
                        DEFAULT: '#25D366',
                        hover: '#128C7E',
                    },
                },
            },

            // Custom font family
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            },

            // Custom animations
            animation: {
                'fade-in': 'fadeIn 0.3s ease-out',
                'fade-in-slow': 'fadeIn 0.7s ease-out',
                'bounce-gentle': 'bounce 2s infinite',
            },

            // Custom shadows
            boxShadow: {
                'rose': '0 4px 14px 0 rgba(244, 63, 94, 0.25)',
                'green': '0 4px 14px 0 rgba(34, 197, 94, 0.25)',
            },

            // Custom border radius
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
            },

            // Custom spacing
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
            },
        },
    },

    plugins: [],
}
