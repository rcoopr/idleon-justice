import { AnchorLink } from '../../components/ui/anchor-link';
import { Reject } from '../../components/ui/icons/decision';
import { Chest, Coin, Dismissal, Pop } from '../../components/ui/icons/resource';
import { slugs } from './slugs';
import type { Encounter } from './types';

export const esquire: Encounter = {
  slug: slugs.esquire,
  name: 'Esquire Bored Bean',
  icon: '/encounters/Justice_npc7.png',
  interactions: [
    {
      id: 1,
      text: 'Hark, I have returned bearing the gift of a Retirement Chest, albeit only if you can solve my riddle. Tell me magistrate... as I am royalty, what action to me speaks loudest, yet not at all?',
      approve: {
        popularity: { flat: -1 },
        special: (
          <span>
            <Dismissal /> to get a <Chest />
          </span>
        ),
      },
      reject: {
        popularity: { flat: -1 },
      },
      advice: {
        approve: false,
        always: true,
        notes: (
          <span>
            Only approve if you made the <AnchorLink to={`${slugs.headHoncho}-8`}>deal</AnchorLink>{' '}
            not to use <Dismissal /> on <AnchorLink to={slugs.harbinger}>Harbinger</AnchorLink>
          </span>
        ),
      },
    },
    {
      id: 2,
      text: 'Huzzah, it is I! Would you like to buy a mental health, perchance? I doooo have the greatest mind ever to grace this court! All it will cost you is... HALF of all your coins!',
      approve: {
        special: (
          <span>
            -50% of current <Coin />
          </span>
        ),
        mentalHealth: 1,
      },
      reject: {},
      advice: {
        approve: true,
        always: false,
        notes: (
          <span>
            Only approve if you have low <Coin /> or your run is ending
          </span>
        ),
      },
    },
    {
      id: 3,
      text: 'I have a deeeelightful proposition for you! Every time you Approve a case, I will give 4 coins. However, two rejections and I will make you infinitely unpopular. Any Case Dismissal will void this deal.',
      approve: {
        special: (
          <span className="inline-block text-center">
            4 <Coin /> per approval until <Dismissal />
            <br /> <Pop /> set to 0 after 2
            <img alt="Reject" src="/icons/Justice_Act1.png" className="h-3.5 inline -mb-0.5" />
          </span>
        ),
      },
      reject: {},
      notes: (
        <span>
          Sets <Pop /> to 0 after two <Reject /> (can still gain new <Pop />) and cancels the 4{' '}
          <Coin /> per approval
        </span>
      ),
      advice: {
        approve: false,
        always: false,
        notes: (
          <span>
            Only approve in the first few cases or if you have low <Pop />
          </span>
        ),
      },
    },
    {
      id: 4,
      text: 'Mmmm yeeees, charmed your honor. Perchance could I get a loan of all your money? I will give it all back next you see me, and you would make me one very happy bean oh hohoho yeeees!',
      approve: {
        popularity: { flat: 12 },
        special: (
          <span>
            Lose all <Coin />, get them back on next{' '}
            <AnchorLink to={slugs.esquire}>Esquire</AnchorLink> case
          </span>
        ),
      },
      reject: {},
      notes: 'Has a 15% chance to reappear every case until he does so',
      advice: {
        approve: false,
        always: false,
        notes: (
          <span>
            Decent source of <Pop />, consider this if you have low <Coin />
          </span>
        ),
      },
    },
    {
      id: 5,
      text: 'Ohohoho I have heard the stories about you judge! Oh yes indeed! Gulp gulp gulp, say no more! Shall we keep this a secret between us? Oh how I do LOVE secrets!',
      approve: {
        popularity: 2,
      },
      reject: {
        popularity: -4,
      },
      notes: (
        <span>
          Happens immediately after approving a 3rd{' '}
          <AnchorLink to={slugs.fizarreDrink}>Fizarre Drink</AnchorLink> and is repeatable
        </span>
      ),
      advice: {
        approve: true,
        always: true,
      },
    },
  ],
};
