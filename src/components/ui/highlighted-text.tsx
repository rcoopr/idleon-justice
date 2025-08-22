import type { JSX } from 'react';
import { isValidElement } from 'react';

export type HighlightedTextData = {
  type: 'highlighted-text';
  parts: string[];
  matches: string[];
  query: string;
};

export type HighlightOptions = {
  caseSensitive?: boolean;
  wholeWords?: boolean;
};

// Component to render highlighted content
export const HighlightedText = ({
  children,
  highlightClassName = 'bg-transparent underline underline-offset-2 text-cosmic-400 rounded font-medium',
}: {
  children: string | JSX.Element | HighlightedTextData;
  highlightClassName?: string;
}) => {
  // Handle HighlightedTextData
  if (
    typeof children === 'object' &&
    children !== null &&
    'type' in children &&
    children.type === 'highlighted-text'
  ) {
    const data = children as HighlightedTextData;
    const elements: (string | JSX.Element)[] = [];
    console.log({ elements });

    for (let i = 0; i < data.parts.length; i++) {
      // Add text part if it exists and is not empty
      if (data.parts[i]) {
        elements.push(data.parts[i]);
      }

      // Add highlighted match if it exists
      if (i < data.matches.length) {
        elements.push(
          <mark key={`highlight-${i}`} className={highlightClassName}>
            {data.matches[i]}
          </mark>
        );
      }
    }

    return <span>{elements}</span>;
  }

  // Handle plain strings
  if (typeof children === 'string') {
    return <span>{children}</span>;
  }

  // Handle JSX elements - return as-is
  if (isValidElement(children)) {
    return children;
  }

  // Fallback
  return <span>{String(children)}</span>;
};
