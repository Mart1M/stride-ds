/**
 * SSR utilities for React Aria components in Next.js
 */
import React from 'react';
/**
 * Hook to check if we're on the server or client
 * Useful for conditional rendering that depends on browser APIs
 */
export declare const useSSRSafeId: () => boolean;
/**
 * Component to conditionally render content only on the client
 * Useful for components that use browser-specific APIs
 */
export declare const ClientOnly: React.FC<{
    children: React.ReactNode;
    fallback?: React.ReactNode;
}>;
/**
 * Utility to safely access browser APIs
 */
export declare const safeWindow: () => (Window & typeof globalThis) | undefined;
/**
 * Safe localStorage access
 */
export declare const safeLocalStorage: {
    getItem: (key: string) => string | null;
    setItem: (key: string, value: string) => void;
    removeItem: (key: string) => void;
};
//# sourceMappingURL=ssr-utils.d.ts.map