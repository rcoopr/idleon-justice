import type { JSX } from 'react';
import type { slugs } from './slugs';
import type { ScalableValue } from '../scaled-value';

export type Encounter = {
  slug: (typeof slugs)[keyof typeof slugs];
  name: string;
  icon: string;
  interactions: Interaction[];
  notes?: string | JSX.Element;
};
export type Outcome = {
  coin?: ScalableValue;
  popularity?: ScalableValue;
  mentalHealth?: number;
  dismissal?: number;
  chest?: number;
  special?: string | JSX.Element;
};
export type Interaction = {
  id: number;
  text: string;
  approve: Outcome;
  reject: Outcome;
  advice: {
    approve: boolean;
    always: boolean;
    notes?: string | JSX.Element;
  };
  notes?: string | JSX.Element;
  type?: 'summary';
  related?: boolean;
};
