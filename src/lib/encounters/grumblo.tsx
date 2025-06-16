import { Chest, Coin, Dismissal, MentalHealth, Pop } from '../../components/ui/icons/resource';
import { Or } from '../../components/ui/or';
import { slugs } from './slugs';
import type { Encounter } from './types';

export const grumblo: Encounter = {
  slug: slugs.grumblo,
  name: 'Grumblo',
  icon: '/encounters/Justice_npc12.png',
  interactions: [
    {
      id: 1,
      text: 'Me like coin. Me collect coin! You give me X coin, I give you random gift!',
      approve: {
        coin: -1,
        special: (
          <span>
            2 <Pop /> <Or /> 3x <Pop /> <Or /> 1 <MentalHealth /> <Or /> 1 <Chest /> <Or /> 1{' '}
            <Dismissal />
          </span>
        ),
      },
      reject: {},
      advice: {
        approve: true,
        always: true,
      },
    },
    {
      id: 2,
      text: 'Me like coin. Me collect coin! You give me X coin, I give you random DOUBLE gift!',
      approve: {
        coin: -3,
        special: (
          <span>
            4x <Pop /> <Or /> 2 <Chest />
          </span>
        ),
      },
      reject: {},
      advice: {
        approve: true,
        always: false,
        notes: (
          <span>
            Only approve when you have many <Coin /> to spare, or ending your run
          </span>
        ),
      },
    },
  ],
};
