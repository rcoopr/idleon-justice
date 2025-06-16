import Up from '../assets/Up.svg?react';
import { AnchorLink } from './ui/anchor-link';
import { twMerge } from 'tailwind-merge';
import { baseButtonStyles } from './ui/button.styles';
import { useToTop } from '../lib/hooks/use-to-top';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export function ToTop() {
  const show = useToTop();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <AnchorLink
          className={twMerge(
            baseButtonStyles(),
            'fixed bottom-0.75 right-0.75 md:bottom-7 md:right-7 z-30 p-2 rounded-lg transition-all duration-300 text-nebula-200/50 backdrop-blur-xl',
            show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}
        >
          <Up width={24} height={24} />
        </AnchorLink>
      </TooltipTrigger>
      <TooltipContent side="left" avoidCollisions={false}>
        <p>Back to top</p>
      </TooltipContent>
    </Tooltip>
  );
}
