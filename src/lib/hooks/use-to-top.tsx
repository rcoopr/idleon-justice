import { useEffect, useState } from 'react';

export function useToTop() {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const listener = () => {
      setShowToTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', listener);

    // Check initial position
    listener();

    return () => window.removeEventListener('scroll', listener);
  }, []);

  return showToTop;
}
