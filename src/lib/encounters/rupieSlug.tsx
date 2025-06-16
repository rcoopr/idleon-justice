import { Coin, Dismissal, MentalHealth, Pop } from '../../components/ui/icons/resource';
import { slugs } from './slugs';
import type { Encounter } from './types';

export const rupieSlug: Encounter = {
  slug: slugs.rupieSlug,
  name: 'Rupie Slug',
  icon: '/encounters/Justice_npc14.png',
  interactions: [
    {
      id: 1,
      text: "Hai!!! You're really popular, can I have some of your popularness? I give coins in return of how popular you make me!",
      approve: {
        special: (
          <span>
            Removes some <Pop /> and gives <Coin /> in return
          </span>
        ),
      },
      reject: {},
      advice: {
        approve: true,
        always: false,
      },
    },
    {
      id: 2,
      text: "Heyy!!! You're really rich, can I have some of your riches? I tell all the other slugs about how much you give me!",
      approve: {
        special: (
          <span>
            Removes some <Coin /> and gives <Pop /> in return
          </span>
        ),
      },
      reject: {},
      advice: {
        approve: true,
        always: false,
      },
    },
    {
      id: 3,
      text: 'Hewwo!!! I think I dropped X coins around here on accident... have you seen them?',
      approve: {
        coin: -3,
        popularity: 6,
      },
      reject: {
        coin: 3,
        popularity: -5,
      },
      advice: {
        approve: true,
        always: false,
      },
    },
    {
      id: 4,
      text: "Hii!!! You're really tough looking, can you give me a dismissal? I give you good health!",
      approve: {
        dismissal: -1,
        mentalHealth: 1,
      },
      reject: {},
      advice: {
        approve: false,
        always: false,
        notes: (
          <span>
            Value <Dismissal /> slightly higher than <MentalHealth /> unless you can't use them.
          </span>
        ),
      },
    },
    {
      id: 5,
      text: "Henlo!!! You're really awesome!! I wanna be just like you!",
      approve: {
        popularity: 2,
      },
      reject: {
        popularity: -5,
      },
      advice: {
        approve: true,
        always: true,
      },
    },
    {
      id: 6,
      text: "Omg hi hi! You have been so nice to me, you're an inspiration! I will let you touch my rupie, it has magic power to SWAP your Coins and Popularity!!! You'll also get a mental health, because magic!",
      approve: {
        mentalHealth: 1,
        special: (
          <span>
            Swaps <Coin /> with <Pop />
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
