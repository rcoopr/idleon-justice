import { useEffect, useRef } from 'react';
import { useSearchStore } from '../lib/hooks/use-search-store';
// import LoadingLoop from '../assets/LoadingLoop.svg?react';
import Close from '../assets/Close.svg?react';

export function SearchInput() {
  const ref = useRef<HTMLInputElement>(null);
  const { search, setSearch, clearSearch, clearSelectedEncounter } = useSearchStore();

  useEffect(() => {
    // @ts-expect-error window addEventListener is not generic
    const listener: EventListener = (evt: KeyboardEvent) => {
      const isAlpha = /^[a-zA-Z0-9]$/.test(evt.key);
      const isModified = evt.ctrlKey || evt.altKey || evt.metaKey;
      if (!ref.current || !isAlpha || isModified) return;

      const activeElement = document.activeElement;
      if (activeElement !== ref.current) {
        evt.preventDefault();

        ref.current.focus();
        ref.current.select();
      }
    };

    window.addEventListener('keydown', listener);

    return () => window.removeEventListener('keydown', listener);
  }, []);

  return (
    <>
      <div className="relative">
        <label htmlFor="search" className="sr-only">
          Search dialogue options
        </label>
        <input
          autoFocus
          id="search"
          ref={ref}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="min-w-sm flex justify-center px-6 py-2 border border-cosmic-400 text-cosmic-200 rounded-lg bg-nebula-200/5 backdrop-blur-xl focus:ring-2 ring-cosmic-300 ring-offset-4 ring-offset-nebula-900 focus:outline-none"
          placeholder="Search by name or by dialogue option..."
          aria-label="Search by name or dialogue options"
        />

        {search && (
          <button
            className="absolute right-0 top-0 bottom-0 m-2.25 opacity-70 text-cosmic-300"
            onClick={() => {
              clearSearch();
              clearSelectedEncounter();
            }}
          >
            <Close width={24} height={24} />
          </button>
        )}
      </div>
    </>
  );
}

// {/* {isSearching && (
//   <LoadingLoop
//     width={24}
//     height={24}
//     className="absolute right-6 top-0 m-2.25 mr-4.5 bottom-0 text-cosmic-300 pointer-events-none"
//     aria-label="Loading"
//   />
// )} */}
