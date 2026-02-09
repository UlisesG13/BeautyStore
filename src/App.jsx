import React, { useState, useEffect, useCallback } from 'react';

// Layout components
import { Header, Footer, HeroSection } from '@/components/layout';

// Feature components
import { CategoryFilter, ProductGrid, ProductModal, ShadeViewer } from '@/features/products';
import { WhatsAppButton } from '@/features/contact';

// Hooks
import { useProducts } from '@/hooks/useProducts';
import { useModal } from '@/hooks/useModal';

// Data
import { products } from '@/data/products';

/**
 * Main BeautyStore landing page component
 */
export default function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    // Product filtering
    const { filter, setFilter, filteredProducts } = useProducts(products);

    // Modal state management
    const productModal = useModal();
    const shadeModal = useModal();

    // Fade in on mount
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Handlers with useCallback to prevent unnecessary re-renders
    const handleProductClick = useCallback((product) => {
        productModal.open(product);
    }, [productModal]);

    const handleShadeClick = useCallback((shade) => {
        shadeModal.open(shade);
    }, [shadeModal]);

    const handleProductModalClose = useCallback(() => {
        productModal.close();
    }, [productModal]);

    const handleShadeModalClose = useCallback(() => {
        shadeModal.close();
    }, [shadeModal]);

    return (
        <div
            className={`min-h-screen bg-rose-50 font-sans selection:bg-rose-200 selection:text-rose-900 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
        >
            <Header />

            <HeroSection />

            <CategoryFilter
                activeFilter={filter}
                onFilterChange={setFilter}
            />

            <ProductGrid
                products={filteredProducts}
                onProductClick={handleProductClick}
            />

            <ProductModal
                product={productModal.content}
                onClose={handleProductModalClose}
                onShadeClick={handleShadeClick}
            />

            <ShadeViewer
                shade={shadeModal.content}
                product={productModal.content}
                onClose={handleShadeModalClose}
            />

            <WhatsAppButton />

            <Footer />
        </div>
    );
}
