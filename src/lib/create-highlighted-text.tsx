import { type HighlightedTextData, type HighlightOptions } from '../components/ui/highlighted-text';

export const createHighlightedText = (
  content: string,
  query: string,
  options: HighlightOptions = {}
): HighlightedTextData | string => {
  const highlightData = createHighlightDataFromText(content, query, options);
  return highlightData || content;
};

export const createHighlightDataFromText = (
  text: string,
  query: string,
  options: HighlightOptions
): HighlightedTextData | null => {
  if (!query.trim() || !text) {
    return null;
  }

  const { caseSensitive = false, wholeWords = false } = options;
  const flags = caseSensitive ? 'g' : 'gi';
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = wholeWords ? `\\b${escapedQuery}\\b` : escapedQuery;

  try {
    const regex = new RegExp(pattern, flags);
    const matches: string[] = [];
    const parts: string[] = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      // Add text before this match
      parts.push(text.slice(lastIndex, match.index));
      // Store the match
      matches.push(match[0]);
      lastIndex = match.index + match[0].length;

      // Prevent infinite loop on zero-length matches
      if (match.index === regex.lastIndex) {
        regex.lastIndex++;
      }
    }

    // Add remaining text after last match
    parts.push(text.slice(lastIndex));

    // If no matches found, return null
    if (matches.length === 0) {
      return null;
    }

    return {
      type: 'highlighted-text',
      parts,
      matches,
      query,
    };
  } catch (error) {
    console.warn('Regex error in highlighting:', error);
    return null;
  }
};
