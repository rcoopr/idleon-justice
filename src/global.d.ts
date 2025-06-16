import 'react';

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      math: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        xmlns: string;
      };
      mi: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      mo: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      mn: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      mrow: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        displaystyle?: 'true' | 'false';
      };
      msup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      msub: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      mfrac: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      mspace: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
