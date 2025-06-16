import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Store {
  expandGeneralStrategy: boolean;
  toggleGeneralStrategy: () => void;
  setExpandGeneralStrategy: (expandOrUpdater: boolean | ((prev: boolean) => boolean)) => void;
  expandDialogueOptions: boolean;
  toggleDialogueOptions: () => void;
  setExpandDialogueOptions: (expandOrUpdater: boolean | ((prev: boolean) => boolean)) => void;
}

export const useSettingsStore = create<Store>()(
  persist(
    (set) => {
      const dispatch = <T>(key: keyof Store, valueOrUpdater: T | ((prev: T) => T)) =>
        set((state) => ({
          [key]:
            typeof valueOrUpdater === 'function'
              ? (valueOrUpdater as (prev: T) => T)(state[key] as T)
              : valueOrUpdater,
        }));

      return {
        expandGeneralStrategy: false,
        toggleGeneralStrategy: () =>
          set((state) => ({ expandGeneralStrategy: !state.expandGeneralStrategy })),
        setExpandGeneralStrategy: (expandOrUpdater) =>
          dispatch('expandGeneralStrategy', expandOrUpdater),
        expandDialogueOptions: false,
        toggleDialogueOptions: () =>
          set((state) => ({ expandDialogueOptions: !state.expandDialogueOptions })),
        setExpandDialogueOptions: (expandOrUpdater) =>
          dispatch('expandDialogueOptions', expandOrUpdater),
      };
    },
    {
      name: 'global-store-preferences',
    }
  )
);
