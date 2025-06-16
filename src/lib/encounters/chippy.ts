import { slugs } from './slugs';
import type { Encounter } from './types';

export const chippy: Encounter = {
  slug: slugs.chippy,
  name: 'Chippy',
  icon: '/encounters/Justice_npc10.png',
  interactions: [
    {
      id: 1,
      text: 'Eat me eat me eat me!',
      approve: {
        popularity: 1,
      },
      reject: {
        popularity: -1,
      },
      advice: {
        approve: true,
        always: true,
      },
    },
  ],
};
