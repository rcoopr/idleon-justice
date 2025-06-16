import { Chest, Coin, Pop } from '../../components/ui/icons/resource';
import { slugs } from './slugs';
import type { Encounter } from './types';

export const reanimatedHand: Encounter = {
  slug: slugs.reanimatedHand,
  name: 'Reanimated Hand',
  icon: '/encounters/Justice_npc1.png',
  interactions: [
    {
      id: 1,
      text: 'Good going judge, your STUPID laws just got me arrested! You HAVE to pay my bail of X coins, you OWE me for enforcing such dumb rules!!!',
      approve: { coin: -3, popularity: 1 },
      reject: { popularity: -1 },
      advice: {
        approve: false,
        always: false,
        notes: (
          <span>
            Only approve this if you have a lot of <Coin />
          </span>
        ),
      },
    },
    {
      id: 2,
      text: 'Here judge, I brought the X coins I owe for my previous misdemeanors. Just shake my hand first, I promise I wont do anything to damage your mental health! Hehehe...',
      approve: { coin: 5, mentalHealth: -1 },
      reject: {},
      advice: {
        approve: false,
        always: true,
      },
    },
    {
      id: 3,
      text: "I got fined X coins by YOUR LAWS for using the 5 finger discount! Can you waive this fine? I really don't want to pay it!",
      approve: { popularity: 1 },
      reject: { coin: 2, popularity: -1 },
      advice: {
        approve: true,
        always: false,
        notes: (
          <span>
            Accept this unless you are low on <Coin />
          </span>
        ),
      },
    },
    {
      id: 4,
      text: "You are SO dumb, forcing me here whenever I break your dumb rules. Can you just make me above the law? I'll share part what I steal every time you see me, I'll even share the blame!",
      approve: { popularity: -1 },
      reject: { popularity: 2 },
      notes: '+4 Court Coins, -2 Popularity every time you see the Reanimated Hand',
      advice: {
        approve: true,
        always: false,
      },
    },
    {
      id: 5,
      text: "You look richer than the guy I just stole from. Give me one of your retirement chests, and I'll tell all the other Reanimated Limbs back home what a legend you are!",
      approve: { chest: -1, popularity: 4 },
      reject: { popularity: -1 },
      advice: {
        approve: true,
        always: false,
        notes: (
          <span>
            Always approve this unless early in the run. Later, the <Pop /> can buy 2 or more{' '}
            <Chest />
          </span>
        ),
      },
    },
  ],
};
