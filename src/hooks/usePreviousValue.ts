import { useEffect, useRef } from 'react';

/**
 * Hook to get previous value of a state
 */
export function usePreviousValue<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

