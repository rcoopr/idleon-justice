import type { JSX } from 'react';
import type { Interaction } from './encounters/types';
import type { Encounter } from './encounters/types';
import { extractText } from './extract-text';
import { type HighlightedTextData } from '../components/ui/highlighted-text';
import { createHighlightedText } from './create-highlighted-text';

export type SearchResult = {
  encounter: Encounter;
  interaction: Interaction;
  matchScore: number;
  highlightedText: string | JSX.Element | HighlightedTextData;
};

export type SearchOptions = {
  caseSensitive?: boolean;
  wholeWords?: boolean;
  maxResults?: number;
  minScore?: number;
};

export function createSearchService(encounters: Encounter[]) {
  // Calculate match score based on search relevance
  const calculateMatchScore = (text: string, query: string, options: SearchOptions): number => {
    const searchText = options.caseSensitive ? text : text.toLowerCase();
    const searchQuery = options.caseSensitive ? query : query.toLowerCase();

    if (options.wholeWords) {
      const regex = new RegExp(`\\b${searchQuery}\\b`, 'gi');
      const matches = searchText.match(regex);
      return matches ? matches.length : 0;
    }

    // Simple scoring: exact matches get higher scores
    if (searchText.includes(searchQuery)) {
      const exactMatches = searchText.split(searchQuery).length - 1;
      return exactMatches * (searchQuery.length / text.length);
    }

    return 0;
  };

  const searchInteractions = (query: string, options: SearchOptions = {}): SearchResult[] => {
    const { caseSensitive = false, wholeWords = false, maxResults = 50, minScore = 0.01 } = options;

    if (!query.trim()) return [];

    const results: SearchResult[] = [];

    for (const encounter of encounters) {
      for (const interaction of encounter.interactions) {
        const normalizedText = extractText(interaction.text);
        const matchScore = calculateMatchScore(normalizedText, query, {
          caseSensitive,
          wholeWords,
        });

        if (matchScore >= minScore) {
          results.push({
            encounter,
            interaction,
            matchScore,
            highlightedText: createHighlightedText(interaction.text, query, {
              caseSensitive,
              wholeWords,
            }),
          });
        }
      }
    }

    // Sort by relevance (highest score first)
    return results.sort((a, b) => b.matchScore - a.matchScore).slice(0, maxResults);
  };

  // Convenience methods
  const searchByEncounter = (encounterSlug: string, query: string): SearchResult[] => {
    const encounter = encounters.find((e) => e.slug === encounterSlug);
    if (!encounter) return [];

    return searchInteractions(query).filter((result) => result.encounter.slug === encounterSlug);
  };

  const getSearchSuggestions = (partialQuery: string): string[] => {
    if (partialQuery.length < 2) return [];

    const suggestions = new Set<string>();
    const words = partialQuery.toLowerCase().split(' ');
    const lastWord = words[words.length - 1];

    encounters.forEach((encounter) => {
      encounter.interactions.forEach((interaction) => {
        const text = extractText(interaction.text).toLowerCase();
        const textWords = text.split(/\s+/);

        textWords.forEach((word) => {
          if (word.startsWith(lastWord) && word.length > lastWord.length) {
            suggestions.add(word);
          }
        });
      });
    });

    return Array.from(suggestions).slice(0, 10);
  };

  return {
    searchInteractions,
    searchByEncounter,
    getSearchSuggestions,
    // Utility to get all unique words for advanced search features
    getAllWords: (): string[] => {
      const words = new Set<string>();
      encounters.forEach((encounter) => {
        encounter.interactions.forEach((interaction) => {
          const text = extractText(interaction.text);
          text.split(/\s+/).forEach((word) => {
            const cleanWord = word.replace(/[^\w]/g, '').toLowerCase();
            if (cleanWord.length > 2) words.add(cleanWord);
          });
        });
      });
      return Array.from(words).sort();
    },
  };
}
