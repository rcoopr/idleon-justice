import { useEffect, useState } from 'react';

export const useMathMLSupported = (): boolean => {
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    try {
      const math = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'math');
      const mi = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mi');
      mi.textContent = 'x';
      math.appendChild(mi);

      // Test if it renders properly
      document.body.appendChild(math);
      const bbox = math.getBoundingClientRect();
      const supported = bbox.height > 0 && bbox.width > 0;
      document.body.removeChild(math);

      setIsSupported(supported);
    } catch {
      setIsSupported(false);
    }
  }, []);

  return isSupported;
};
