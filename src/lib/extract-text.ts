import { isValidElement } from 'react';

export function extractText(element: React.ReactNode): string {
  if (typeof element === 'string' || typeof element === 'number') {
    return String(element);
  }

  if (isValidElement(element)) {
    // @ts-expect-error won't fix this right now
    const children = element.props.children;
    if (children) {
      return extractText(children);
    }
  }

  if (Array.isArray(element)) {
    return element.map(extractText).join('');
  }

  return '';
}
