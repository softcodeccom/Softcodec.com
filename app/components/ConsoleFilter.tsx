'use client';

import { useEffect } from 'react';

export default function ConsoleFilter() {
  useEffect(() => {
    const originalWarn = console.warn;
    const originalError = console.error;

    console.warn = (...args) => {
      if (typeof args[0] === 'string' && (
        args[0].includes('THREE.THREE.Clock') || 
        args[0].includes('THREE.Clock') ||
        args[0].includes('deprecated')
      )) {
        return;
      }
      originalWarn(...args);
    };

    // Sometimes THREE logs to console.error for deprecations in certain builds
    console.error = (...args) => {
       if (typeof args[0] === 'string' && (
         args[0].includes('THREE.THREE.Clock') || 
         args[0].includes('THREE.Clock')
       )) {
         return;
       }
       originalError(...args);
    };

    return () => {
      console.warn = originalWarn;
      console.error = originalError;
    };
  }, []);

  return null;
}
