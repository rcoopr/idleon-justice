import { useScrollPosition } from './use-scroll-position';

export function useToTop() {
  const scrollY = useScrollPosition();
  return scrollY > 120;
}
