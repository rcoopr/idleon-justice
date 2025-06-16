import { useSearchStore } from '../../lib/hooks/use-search-store';

export function AnchorLink({
  to,
  children,
  onClick,
  ...props
}: { to?: string; children: React.ReactNode } & React.ComponentProps<'a'>) {
  const { selectedEncounter, clearSelectedEncounter } = useSearchStore();

  return (
    <a
      {...props}
      href={`#${to || ''}`}
      onClick={(e) => {
        onClick?.(e);

        if (to !== selectedEncounter?.slug) {
          clearSelectedEncounter();
        }
      }}
    >
      {children}
    </a>
  );
}
