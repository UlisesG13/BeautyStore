import React, { memo, useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/utils/cn';

/**
 * Reusable Modal component with backdrop and animations
 */
function Modal({
    isOpen,
    onClose,
    children,
    className = '',
    showCloseButton = true,
    closeOnBackdrop = true
}) {
    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={closeOnBackdrop ? onClose : undefined}
                aria-hidden="true"
            />

            {/* Modal Content */}
            <div
                className={cn(
                    'relative bg-white rounded-3xl shadow-2xl max-h-[90vh] overflow-hidden animate-[fadeIn_0.3s_ease-out]',
                    className
                )}
                onClick={(e) => e.stopPropagation()}
            >
                {showCloseButton && (
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500"
                        aria-label="Cerrar modal"
                    >
                        <X size={24} />
                    </button>
                )}

                {children}
            </div>
        </div>
    );
}

export default memo(Modal);
