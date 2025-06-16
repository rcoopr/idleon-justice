import { twMerge } from 'tailwind-merge';
import { baseButtonStyles } from './button.styles';

export function Button({
  children,
  shine,
  active,
  className,
  ...props
}: {
  children: React.ReactNode;
  shine?: boolean;
  active?: boolean;
} & React.ComponentProps<'button'>) {
  return (
    <button
      className={twMerge(
        baseButtonStyles(active),
        shine && 'shine',
        shine && active && 'shine-cosmic',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
