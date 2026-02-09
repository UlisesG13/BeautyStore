import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    // Path aliases for cleaner imports
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },

    // Development server configuration
    server: {
        port: 5173,
        open: true,
        hmr: {
            overlay: true,
        },
    },

    // Build optimization
    build: {
        // Generate sourcemaps for production debugging
        sourcemap: false,

        // Minify options
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },

        // Chunk splitting for better caching
        rollupOptions: {
            output: {
                manualChunks: {
                    // Vendor chunk for React
                    vendor: ['react', 'react-dom'],
                    // Icons chunk (lucide-react can be large)
                    icons: ['lucide-react'],
                },
                // Asset file naming
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
            },
        },

        // Chunk size warning limit
        chunkSizeWarningLimit: 500,
    },

    // Optimize dependencies
    optimizeDeps: {
        include: ['react', 'react-dom', 'lucide-react'],
    },
});
