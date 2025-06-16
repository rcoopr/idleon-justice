import { Chest, Coin, MentalHealth, Pop } from '../../components/ui/icons/resource';
import { Or } from '../../components/ui/or';
import { slugs } from './slugs';
import type { Encounter } from './types';

export const coolBird: Encounter = {
  slug: slugs.coolBird,
  name: 'Cool Bird',
  icon: '/encounters/Justice_npc9.png',
  interactions: [
    {
      id: 1,
      text: 'Sup. Heads you dope as heck, Tails you fail the vibe check. You wanna flip for it?',
      approve: {
        special: (
          <span>
            <Pop /> 2⨯ <Or /> -1.3⨯ <Pop />
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
      text: 'Sup. Heads you the man and get 2 mental health, Tails you crazy and lose 1 mental health. You wanna flip for it?',
      approve: {
        special: (
          <span>
            +2 <MentalHealth /> <Or /> -1 <MentalHealth />
          </span>
        ),
      },
      reject: {},
      advice: {
        approve: true,
        always: true,
        notes: (
          <span>
            Risky to take on 1 <MentalHealth />
          </span>
        ),
      },
    },
    {
      id: 3,
      text: 'Sup. Heads you win 2 Retirement Chests, Tails you lose 1 Retirement Chest. You wanna flip for it?',
      approve: {
        special: (
          <span>
            1 <Chest /> <Or /> 2 <Chest />
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
      id: 4,
      text: 'Sup. Heads you win a bunch of coins, Tails you lose some coins. You wanna flip for it?',
      approve: {
        special: (
          <span>
            3x <Coin /> <Or /> -1.95x <Coin />
          </span>
        ),
      },
      reject: {},
      advice: {
        approve: true,
        always: true,
      },
    },
  ],
};
