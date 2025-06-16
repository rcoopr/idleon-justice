import { Pop } from '../../components/ui/icons/resource';
import { slugs } from './slugs';
import type { Encounter } from './types';

export const ghost: Encounter = {
  slug: slugs.ghost,
  name: 'Ghost',
  icon: '/encounters/Justice_npc11.png',
  interactions: [
    {
      id: 1,
      text: "Can you make it legal for me to scare people? I'll pay you handsomely, but I'll keep scaring 1 person every day, FOooOooOR EVER...",
      approve: {
        coin: 6,
        special: (
          <span>
            -1 <Pop /> every case
          </span>
        ),
      },
      reject: {
        popularity: 1,
      },
      advice: {
        approve: true,
        always: false,
        notes: 'Only approve this after case ~70',
      },
    },
    {
      id: 2,
      text: "I'm done scaring people... I thought it was funny for a while, but now I just feel bad. Can you reinstate the ban, make it illegal again? I'll pay you!",
      approve: {
        coin: 4,
      },
      reject: {},
      notes: 'Can only happen after approving the first interaction',
      advice: {
        approve: true,
        always: true,
      },
    },
  ],
};
