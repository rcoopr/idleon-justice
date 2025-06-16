import { useEffect, useState } from 'react';

export function useScrollPosition() {
  const [showScrollPosition, setShowScrollPosition] = useState(0);

  useEffect(() => {
    const listener = () => {
      setShowScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', listener);

    // Check initial position
    listener();

    return () => window.removeEventListener('scroll', listener);
  }, []);

  return showScrollPosition;
}
