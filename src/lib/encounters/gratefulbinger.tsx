import type { Encounter } from './types';
import {
  GratefulbingerAppearanceChance,
  GratefulbingerAppearanceExamples,
} from '../../components/gratefulbinger-appearance-chance';
import { slugs } from './slugs';
import { AnchorLink } from '../../components/ui/anchor-link';

export const gratefulbinger: Encounter = {
  slug: slugs.gratefulbinger,
  name: 'The Gratefulbinger',
  icon: '/encounters/Justice_npc8.png',
  interactions: [
    {
      id: 1,
      text: "I've been watching you closely, and I wanted to thank you for everything you've done for the community with a gift of 5 coins, and 1 Retirement Chest!",
      approve: {
        coin: 5,
        chest: 1,
      },
      reject: {
        mentalHealth: -999,
      },
      advice: {
        approve: true,
        always: true,
      },
    },
  ],
  notes: (
    <div className="grid grid-cols-1 sm:grid-cols-[min-content_1fr] grid-rows-[auto_auto] gap-y-1 items-center">
      <GratefulbingerAppearanceChance className="md:row-span-2" />
      <span>
        Chance to replace <AnchorLink to={slugs.harbinger}>Harbinger</AnchorLink>
      </span>
      <GratefulbingerAppearanceExamples className="sm:col-span-2 md:col-start-2" />
    </div>
  ),
};
