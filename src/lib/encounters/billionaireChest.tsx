import { Chest, Coin, Dismissal } from '../../components/ui/icons/resource';
import { Or } from '../../components/ui/or';
import { slugs } from './slugs';
import type { Encounter } from './types';

export const billionaireChest: Encounter = {
  slug: slugs.billionaireChest,
  name: 'Billionaire Chester',
  icon: '/encounters/Justice_npc16.png',
  interactions: [
    {
      id: 1,
      text: "Well well well aren't you lucky! It is I, BILLIONAIRE Chester! Unlike my cousin, I care not for retirement, and I need nothing from you! In fact, would you be interested in a FREE gift? It's a juicy one!",
      approve: {
        special: (
          <span>
            2-3 <Chest /> <Or /> 2 <Dismissal /> <Or /> 1 <Coin />
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
