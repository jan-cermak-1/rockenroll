import { useMemo } from 'react';

let counter = 0;

/**
 * Hook to generate unique ID
 */
export function useUniqId(prefix = 'soul'): string {
  return useMemo(() => {
    counter += 1;
    return `${prefix}-${counter}-${Date.now()}`;
  }, [prefix]);
}

