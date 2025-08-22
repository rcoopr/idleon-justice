import { AnchorLink } from '../../components/ui/anchor-link';
import { Coin, MentalHealth, Pop } from '../../components/ui/icons/resource';
import { slugs } from './slugs';
import type { Encounter } from './types';

export const retirementChester: Encounter = {
  slug: slugs.chester,
  name: 'Retirement Chester',
  icon: '/encounters/Justice_npc5.png',
  interactions: [
    {
      id: 1,
      text: "Retirement is everything, trust me I'd know! I'll give you 1 retirement chest, but I want 1 mental health... unless you're down to your last one, then you can have the chest free.",
      approve: {
        mentalHealth: -1,
        chest: 1,
        special: (
          <span>
            Free if you have only 1 <MentalHealth />
          </span>
        ),
      },
      reject: {},
      advice: {
        approve: true,
        always: false,
        notes: (
          <b>
            Never approve if you have more than 1 <MentalHealth />
          </b>
        ),
      },
    },
    {
      id: 2,
      text: "Retirement is important, trust me I'd know! I'll give you 1 retirement chest, but it'll cost you X coins.",
      approve: {
        chest: 1,
        coin: -2,
      },
      reject: {},
      advice: {
        approve: true,
        always: false,
        notes: (
          <span>
            Only approve early or when you have enough <Coin /> to spare
          </span>
        ),
      },
    },
    {
      id: 3,
      text: "Retirement is the key to happiness, trust me I'd know! I'll give you 1 retirement chest, but it'll cost you X popularity.",
      approve: {
        chest: 1,
        popularity: -1,
      },
      reject: {},
      advice: {
        approve: false,
        always: false,
        notes: (
          <span>
            Only approve when you have ~140+ <Pop />
          </span>
        ),
      },
    },
    {
      id: 4,
      text: "Retirement is the number one source of all things good, trust me! I'll give you 1 retirement chest completely free just to show you how right I am!",
      approve: {
        chest: 1,
      },
      reject: {},
      advice: {
        approve: true,
        always: true,
      },
    },
    {
      id: 5,
      text: "Retirement is the top priority, trust me! I'll give you 1 retirement chest to get you going, but I'll be taking X coins and } popularity whether you have them or not!",
      approve: {
        chest: 1,
        coin: -2,
        popularity: -1,
      },
      reject: {},
      related: true,
      advice: {
        approve: false,
        always: false,
        notes: (
          <span>
            Almost always better to wait for an only <Coin /> / <Pop /> trade instead
          </span>
        ),
      },
    },
    {
      id: 6,
      text: "Retirement is worth considering, trust me I'd know! I'll give you 1 retirement chest, but it'll cost you X coins.",
      approve: {
        chest: 1,
        coin: -3,
      },
      reject: {},
      advice: {
        approve: false,
        always: false,
        notes: (
          <span>
            Only approve early or when you have enough <Coin /> to spare
          </span>
        ),
      },
    },
    {
      id: 7,
      text: "Hey buddy, life sure is a gamble sometimes! I'll give you 2 retirement chests, but if you have less coins the next time I see you than you do now, you're losing a mental health!",
      approve: {
        chest: 2,
        special: (
          <span>
            Lose 1 <MentalHealth /> on next <AnchorLink to={slugs.chester}>Chester</AnchorLink> if{' '}
            <Coin /> decreased
          </span>
        ),
      },
      reject: {},
      advice: {
        approve: false,
        always: false,
        notes: (
          <span>
            It's{' '}
            <b>
              possible to take when low on <Coin />
            </b>{' '}
            but risks losing <MentalHealth />
          </span>
        ),
      },
    },
    {
      id: 8,
      text: "Have you hit the lottery? Are you looking to juice up your retirement fund to the MAX? Well look no further, for just X coins, I'll give you 2 retirement chests!",
      approve: {
        coin: -10,
        chest: 2,
      },
      reject: {},
      advice: {
        approve: false,
        always: true,
        notes: (
          <span>
            The amount of <Coin /> would usually pay for a{' '}
            <AnchorLink to={slugs.harbinger}>Harbinger</AnchorLink> instead
          </span>
        ),
      },
    },
  ],
};
