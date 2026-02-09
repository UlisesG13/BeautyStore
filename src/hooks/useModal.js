import { useState, useCallback } from 'react';

/**
 * Hook for managing modal state
 * @param {any} initialValue - Initial value for the modal content
 * @returns {Object} { isOpen, content, open, close }
 */
export function useModal(initialValue = null) {
    const [content, setContent] = useState(initialValue);

    const open = useCallback((newContent) => {
        setContent(newContent);
    }, []);

    const close = useCallback(() => {
        setContent(null);
    }, []);

    return {
        isOpen: content !== null,
        content,
        open,
        close
    };
}
