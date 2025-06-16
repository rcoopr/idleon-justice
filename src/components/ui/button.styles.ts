import { twJoin } from 'tailwind-merge';

export const baseButtonStyles = (active?: boolean) =>
  twJoin(
    'appearance-none transition-all duration-300 backdrop-blur-md border flex flex-col items-center justify-center relative',
    'focus-visible:ring-2 ring-cosmic-300 ring-offset-4 ring-offset-nebula-900 focus:outline-none',
    active
      ? ' bg-cosmic-500/20 border-cosmic-400/30 hover:bg-cosmic-500/20'
      : 'bg-nebula-500/5 border-cosmic-300/20 hover:bg-cosmic-500/10'
  );
