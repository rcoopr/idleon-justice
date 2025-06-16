import { type JSX } from 'react';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { encounters } from '../encounters';
import { type Interaction } from '../encounters/types';
import { type Encounter } from '../encounters/types';
import { createSearchService } from '../search-service';
import type { HighlightedTextData } from '../../components/ui/highlighted-text';

// Domain types for the search store
export type SearchState = {
  search: string;
  searchOptions: SearchOptions;
  selectedEncounter: Encounter | null;
};

export type SearchOptions = {
  caseSensitive?: boolean;
  wholeWords?: boolean;
  maxResults?: number;
  minScore?: number;
};

export type FilteredEncounter = Encounter & {
  matchingInteractions: (Interaction & {
    matchScore: number;
    highlightedText: string | JSX.Element | HighlightedTextData;
  })[];
  totalMatches: number;
  bestMatchScore: number;
};

export type SearchActions = {
  setSearch: (term: string) => void;
  setSearchOptions: (options: Partial<SearchOptions>) => void;
  clearSearch: () => void;
  setSelectedEncounter: (
    encounter: Encounter | null | ((prev: Encounter | null) => Encounter | null)
  ) => void; // New action
  clearSelectedEncounter: () => void; // New action
};

export type SearchStore = SearchState &
  SearchActions & {
    filteredEncounters: FilteredEncounter[];
    hasActiveSearch: boolean;
    searchResultsCount: number;
    hasEncounterFilter: boolean; // New computed property
  };

export type UseSearchStore = ReturnType<typeof createSearchStore>;

// Create the search store with performance optimizations
function createSearchStore(encounters: Encounter[]) {
  const searchService = createSearchService(encounters);

  // Memoization cache for search results
  const searchCache = new Map<string, FilteredEncounter[]>();

  const filterEncounters = (search: string, options: SearchOptions): FilteredEncounter[] => {
    if (!search.trim()) {
      return encounters.map((encounter) => ({
        ...encounter,
        matchingInteractions: [],
        totalMatches: 0,
        bestMatchScore: 0,
      }));
    }

    const cacheKey = `${search}-${JSON.stringify(options)}`;

    // Check cache first
    if (searchCache.has(cacheKey)) {
      return searchCache.get(cacheKey)!;
    }

    const searchResults = searchService.searchInteractions(search, options);
    const encounterMap = new Map<string, FilteredEncounter>();

    // Initialize filtered encounters
    encounters.forEach((encounter) => {
      encounterMap.set(encounter.slug, {
        ...encounter,
        matchingInteractions: [],
        totalMatches: 0,
        bestMatchScore: 0,
      });
    });

    // Populate with search results
    searchResults.forEach((result) => {
      const filteredEncounter = encounterMap.get(result.encounter.slug)!;

      filteredEncounter.matchingInteractions.push({
        ...result.interaction,
        matchScore: result.matchScore,
        highlightedText: result.highlightedText,
      });

      filteredEncounter.totalMatches++;
      filteredEncounter.bestMatchScore = Math.max(
        filteredEncounter.bestMatchScore,
        result.matchScore
      );
    });

    // Convert to array and sort by relevance
    const filtered = Array.from(encounterMap.values())
      .filter((encounter) => encounter.totalMatches > 0)
      .sort((a, b) => b.bestMatchScore - a.bestMatchScore);

    // Cache results (with size limit)
    if (searchCache.size > 100) {
      const firstKey = searchCache.keys().next().value!;
      searchCache.delete(firstKey);
    }
    searchCache.set(cacheKey, filtered);

    return filtered;
  };

  return create<SearchStore>()(
    devtools(
      (set, get) => ({
        // Initial state
        search: '',
        searchOptions: {
          caseSensitive: false,
          wholeWords: false,
          maxResults: 50,
          minScore: 0.01,
        },
        selectedEncounter: null,
        filteredEncounters: encounters.map((encounter) => ({
          ...encounter,
          matchingInteractions: [],
          totalMatches: 0,
          bestMatchScore: 0,
        })),

        // Computed values
        get hasActiveSearch() {
          return get().search.trim().length > 0;
        },

        get hasEncounterFilter() {
          return get().selectedEncounter !== null;
        },

        get searchResultsCount() {
          return get().filteredEncounters.reduce(
            (total, encounter) => total + encounter.totalMatches,
            0
          );
        },

        // Actions
        setSearch: (term: string) => {
          const currentState = get();
          const filtered = filterEncounters(term, currentState.searchOptions);
          set({ search: term, filteredEncounters: filtered });
        },

        setSearchOptions: (newOptions: Partial<SearchOptions>) => {
          const state = get();
          const updatedOptions = { ...state.searchOptions, ...newOptions };

          set({
            searchOptions: updatedOptions,
            filteredEncounters: filterEncounters(state.search, updatedOptions),
          });
        },

        setSelectedEncounter: (
          encounter: Encounter | null | ((prev: Encounter | null) => Encounter | null)
        ) => {
          const state = get();

          const newSelectedEncounter =
            typeof encounter === 'function' ? encounter(state.selectedEncounter) : encounter;

          // Re-run search with encounter filter
          const filtered = filterEncounters(state.search, state.searchOptions);

          set({
            selectedEncounter: newSelectedEncounter,
            filteredEncounters: filtered,
          });
        },

        clearSelectedEncounter: () => {
          const state = get();

          // Re-run search without encounter filter
          const filtered = filterEncounters(state.search, state.searchOptions);

          set({
            selectedEncounter: null,
            filteredEncounters: filtered,
          });
        },

        clearSearch: () => {
          searchCache.clear();
          const state = get();

          // When clearing search, respect encounter filter if active
          const encountersToShow = state.selectedEncounter
            ? encounters.filter((e) => e.slug === state.selectedEncounter?.slug)
            : encounters;

          set({
            search: '',
            filteredEncounters: encountersToShow.map((encounter) => ({
              ...encounter,
              matchingInteractions: [],
              totalMatches: 0,
              bestMatchScore: 0,
            })),
          });
        },
      }),
      {
        name: 'encounter-search-store',
      }
    )
  );
}

export const useSearchStore = createSearchStore(encounters);
