import { twJoin } from 'tailwind-merge';
import HalfArrow from '../../../assets/HalfArrow.svg?react';

export function Expand({ expanded }: { expanded: boolean }) {
  return (
    <div className="flex flex-col gap-0.75 h-6 w-6 justify-center">
      <HalfArrow
        width={24}
        height={7}
        className={twJoin(
          'transition-transform duration-300',
          expanded ? '-scale-y-100' : 'scale-y-100'
        )}
        aria-hidden
      />
      <HalfArrow
        width={24}
        height={7}
        className={twJoin(
          'transition-transform duration-300',
          expanded ? 'scale-y-100' : '-scale-y-100'
        )}
        aria-hidden
      />
    </div>
  );
}
