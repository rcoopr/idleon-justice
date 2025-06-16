import { create } from 'zustand';

interface Store {
  caseNumber: number | null;
  setCase: (caseDispatch: number | null | ((prev: number | null) => number | null)) => void;
  incrementCase: () => void;
  decrementCase: () => void;
}

export const useCaseStore = create<Store>()((set) => {
  const dispatch = <T>(key: keyof Store, valueOrUpdater: T | ((prev: T) => T)) =>
    set((state) => ({
      [key]:
        typeof valueOrUpdater === 'function'
          ? (valueOrUpdater as (prev: T) => T)(state[key] as T)
          : valueOrUpdater,
    }));

  return {
    caseNumber: null,
    setCase: (caseDispatch) => dispatch('caseNumber', caseDispatch),
    incrementCase: () => set((state) => ({ caseNumber: (state.caseNumber ?? 0) + 1 })),
    decrementCase: () => set((state) => ({ caseNumber: (state.caseNumber ?? 0) - 1 })),
  };
});
