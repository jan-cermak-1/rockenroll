import { useEffect, useRef } from 'react';

/**
 * Hook to autofocus an element
 */
export function useAutofocus<T extends HTMLElement>(): React.RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return ref;
}

