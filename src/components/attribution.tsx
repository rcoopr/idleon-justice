import { useToTop } from '../lib/hooks/use-to-top';
import Github from '../assets/Github.svg?react';
import { twJoin } from 'tailwind-merge';

export function Attribution() {
  const hide = useToTop();

  return (
    <div
      className={twJoin(
        'fixed top-0 right-0 text-xs my-2 mx-4 text-nebula-400/80 flex flex-col items-end gap-1 transition-opacity duration-300 z-100',
        hide ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      )}
    >
      <div className="relative transition-colors duration-300 hover:text-cosmic-300">
        <a href="https://github.com/rcoopr" className="pr-10 no-underline! not-italic!">
          by rcoopr
          <Github width={32} height={32} className="absolute right-0 top-0.75" />
        </a>
      </div>
      <p className="pr-10">
        find me on the{' '}
        <a
          href="https://discord.gg/idleon"
          className="transition-colors duration-300 hover:text-emerald-300/90"
        >
          Idleon Discord
        </a>
      </p>
    </div>
  );
}
