import { twMerge } from 'tailwind-merge';
import type { Outcome } from '../../../lib/encounters/types';

const icons: Record<Exclude<keyof Outcome, 'special'>, { src: string; title: string }> = {
  mentalHealth: {
    src: '/icons/Justice_MentalHealth.png',
    title: 'Mental Health',
  },
  coin: {
    src: '/icons/Justice_CourtCoins.png',
    title: 'Coins',
  },
  popularity: {
    src: '/icons/Justice_Popularity.png',
    title: 'Popularity',
  },
  dismissal: {
    src: '/icons/Justice_Dismissal.png',
    title: 'Dismissal',
  },
  chest: {
    src: '/icons/32px-Monument_Chest.png',
    title: 'Chest',
  },
};

function Resource({
  resource,
  className,
  ...props
}: {
  resource: Exclude<keyof Outcome, 'special'>;
} & React.ComponentProps<'img'>) {
  const { src, title } = icons[resource];

  return (
    <img
      {...props}
      className={twMerge('w-auto align-middle inline mx-0.5 -translate-y-px', className)}
      src={src}
      alt={resource}
      title={title}
    />
  );
}

export function MentalHealth({ className }: { className?: string }) {
  return <Resource resource="mentalHealth" data-resource={'mentalHealth'} className={className} />;
}
export function Coin({ className }: { className?: string }) {
  return <Resource resource="coin" data-resource={'coin'} className={className} />;
}
export function Pop({ className }: { className?: string }) {
  return <Resource resource="popularity" data-resource={'popularity'} className={className} />;
}
export function Dismissal({ className }: { className?: string }) {
  return <Resource resource="dismissal" data-resource={'dismissal'} className={className} />;
}
export function Chest({ className }: { className?: string }) {
  return (
    <Resource resource="chest" data-resource={'chest'} className={twMerge('-my-1.5', className)} />
  );
}
