import React, { memo } from 'react';
import { COMPANY } from '@/constants/config';

/**
 * Footer component with copyright information
 */
function Footer() {
    return (
        <footer className="bg-white border-t border-rose-100 py-8 text-center">
            <p className="text-gray-500 font-light">
                {COMPANY.copyright}
            </p>
        </footer>
    );
}

export default memo(Footer);
