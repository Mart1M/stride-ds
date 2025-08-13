/**
 * SSR utilities for React Aria components in Next.js
 */

import React from 'react';
import { useIsSSR } from 'react-aria';

/**
 * Hook to check if we're on the server or client
 * Useful for conditional rendering that depends on browser APIs
 */
export const useSSRSafeId = () => {
  const isSSR = useIsSSR();
  return isSSR;
};

/**
 * Component to conditionally render content only on the client
 * Useful for components that use browser-specific APIs
 */
export const ClientOnly: React.FC<{ 
  children: React.ReactNode;
  fallback?: React.ReactNode;
}> = ({ children, fallback = null }) => {
  const isSSR = useIsSSR();
  
  if (isSSR) {
    return <>{fallback}</>;
  }
  
  return <>{children}</>;
};

/**
 * Utility to safely access browser APIs
 */
export const safeWindow = () => {
  return typeof window !== 'undefined' ? window : undefined;
};

/**
 * Safe localStorage access
 */
export const safeLocalStorage = {
  getItem: (key: string): string | null => {
    if (typeof window === 'undefined') return null;
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem: (key: string, value: string): void => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(key, value);
    } catch {
      // Fail silently
    }
  },
  removeItem: (key: string): void => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.removeItem(key);
    } catch {
      // Fail silently
    }
  }
};