import { useEffect, useLayoutEffect, useRef } from 'react';
import { useSearchStore } from '../lib/hooks/use-search-store';
import Close from '../assets/Close.svg?react';
import RightArrow from '../assets/RightArrow.svg?react';
import { Button } from './ui/button';
import { useCaseStore } from '../lib/hooks/use-case-store';
import { useScrollPosition } from '../lib/hooks/use-scroll-position';
import { twJoin } from 'tailwind-merge';

export function SearchInput() {
  const ref = useRef<HTMLInputElement>(null);
  const { search, setSearch, clearSearch, clearSelectedEncounter } = useSearchStore();
  const { caseNumber, setCase, incrementCase } = useCaseStore();

  useLayoutEffect(() => {
    if (search) {
      const firstEncounter = document.querySelector<HTMLUListElement>('main > div > ul');
      if (!firstEncounter) return;
      window.scrollTo({ top: firstEncounter.offsetTop - 86, behavior: 'smooth' });
    }
  }, [search]);

  const scrollToResults = () => {
    const firstEncounter = document.querySelector<HTMLUListElement>('main > div > ul');
    if (!firstEncounter) return;
    window.scrollTo({ top: firstEncounter.offsetTop - 86, behavior: 'smooth' });
  };

  useEffect(() => {
    // @ts-expect-error window addEventListener is not generic
    const listener: EventListener = (evt: KeyboardEvent) => {
      const isAlpha = /^[a-zA-Z0-9]$/.test(evt.key);
      const isModified = evt.ctrlKey || evt.altKey || evt.metaKey;
      if (!ref.current || !isAlpha || isModified) return;

      const activeElement = document.activeElement;
      if (activeElement !== ref.current && activeElement?.tagName !== 'INPUT') {
        evt.preventDefault();

        ref.current.focus();

        if (ref.current.value) {
          ref.current.select();
        } else {
          setSearch(evt.key);
        }
      }
    };

    window.addEventListener('keydown', listener);

    return () => window.removeEventListener('keydown', listener);
  }, [setSearch]);

  const nextCaseAction = () => {
    scrollToResults();
    incrementCase();
    setSearch('');
  };

  const scrollY = useScrollPosition();

  return (
    <div
      className={twJoin(
        'w-screen flex justify-center sticky top-0 z-100 -mt-6',
        scrollY > 152 && 'bg-nebula-900/20 backdrop-blur-xl border-b-2 border-nebula-900'
      )}
    >
      <div className="w-full relative sm:w-sm py-3 flex flex-col items-center gap-3 z-100">
        <label htmlFor="search" className="sr-only">
          Search dialogue options
        </label>
        <input
          autoFocus
          id="search"
          ref={ref}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full flex justify-center pl-6 pr-10 py-2 border border-cosmic-400 text-cosmic-200 rounded-lg bg-nebula-200/5 backdrop-blur-xl focus:ring-2 ring-cosmic-300 ring-offset-4 ring-offset-nebula-900 focus:outline-none text-ellipsis whitespace-nowrap"
          placeholder="Search by name or by dialogue option..."
          aria-label="Search by name or dialogue options"
        />

        {search && (
          <button
            className="absolute right-0 top-3 m-2.25 opacity-70 text-cosmic-300"
            onClick={() => {
              clearSearch();
              clearSelectedEncounter();
            }}
          >
            <Close width={24} height={24} />
          </button>
        )}

        <div className="flex gap-2 items-center">
          <div className="relative">
            <input
              autoFocus
              id="case-number"
              type="number"
              min={1}
              max={1000}
              value={caseNumber || ''}
              onChange={(e) => {
                const value = e.target.value;
                if (value === '') {
                  setCase(null);
                } else {
                  const caseNum = parseInt(value, 10);
                  if (!isNaN(caseNum)) {
                    setCase(caseNum);
                  }
                }
              }}
              className="no-spinner w-30 min-w-0 pl-13 text-center flex justify-center pr-0.5 pb-[2.5px] pt-[1.5px] border border-cosmic-400 text-cosmic-200 rounded-lg bg-nebula-200/5 backdrop-blur-xl focus:ring-2 ring-cosmic-400 ring-offset-nebula-900 focus:outline-none"
              aria-label="Case Number"
            />
            <label
              htmlFor="case-number"
              className="font-bold italic uppercase text-sm text-center absolute left-0 top-0 bottom-0 pt-[4.5px] w-13 text-cosmic-300 bg-cosmic-500/20 rounded-l-lg border-r border-cosmic-400"
            >
              Case
            </label>
          </div>

          <Button
            onClick={nextCaseAction}
            className="group py-1 px-3 text-sm uppercase font-bold text-cosmic-800 hover:text-cosmic-900 bg-cosmic-400 border-cosmic-300/70 hover:bg-cosmic-500 hover:border-cosmic-400/70 active:bg-cosmic-500 active:border-cosmic-200/70"
          >
            <div className="flex items-center gap-1 engraved w-max">
              Next Case{' '}
              <RightArrow
                className="transition-transform ease-in-out group-hover:translate-x-1"
                width={16}
                height={16}
              />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
