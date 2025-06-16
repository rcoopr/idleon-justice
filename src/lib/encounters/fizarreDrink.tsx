import type { Encounter } from './types';
import { AnchorLink } from '../../components/ui/anchor-link';
import { Coin, MentalHealth, Pop } from '../../components/ui/icons/resource';
import { slugs } from './slugs';

export const fizarreDrink: Encounter = {
  slug: slugs.fizarreDrink,
  name: 'Fizarre Drink',
  icon: '/encounters/Justice_npc13.png',
  notes: (
    <span>
      Accepting Fizarre 3 times triggers a new choice with{' '}
      <AnchorLink to={slugs.esquire}>Esquire Bored Bean</AnchorLink> for big <Pop /> gains
    </span>
  ),
  interactions: [
    {
      id: 1,
      text: "I'm not a free drink, X coin please! My effects? Well, this time 'round I grant the consumer 2 dismissals, but I am known in the state of Blunder Hills to cause mental fatigue!",
      approve: {
        coin: -1,
        dismissal: 2,
        mentalHealth: -1,
      },
      reject: {},
      advice: {
        approve: true,
        always: true,
        notes: (
          <span>
            Only approve if you have more than 1 <MentalHealth />
          </span>
        ),
      },
    },
    {
      id: 2,
      text: "I'm not a free drink, X coin please! My effects? Well, this time 'round I grant the consumer a LOT of pop!",
      approve: {
        coin: -1,
        popularity: 1,
      },
      reject: {},
      advice: {
        approve: true,
        always: false,
        notes: (
          <span>
            Event trade, works towards the 3 drinks required for the{' '}
            <AnchorLink to={`${slugs.esquire}-5`}>Esquire event</AnchorLink>
          </span>
        ),
      },
    },
    {
      id: 3,
      text: "I'm not a free drink, X coin please! My effects? Well, this time 'round I grant the consumer a strange ability to never ever become unpopular! Like, ever!",
      approve: {
        coin: -1,
        special: (
          <span>
            <Pop /> minimum is set to 5 permanently
          </span>
        ),
      },
      reject: {},
      notes: 'Does not stack',
      advice: {
        approve: false,
        always: true,
        notes: (
          <span>
            <Pop /> should never be that low, so it's a waste of coins
          </span>
        ),
      },
    },
    {
      id: 4,
      text: "I'm not a free drink, X coin please! My effects? Well, this time around I grant the consumer some sort of Chest Magnetizer effect, lasts for 3 days I reckon...",
      approve: {
        coin: -1,
        special: (
          <span>
            Next 3 cases are replaced with{' '}
            <AnchorLink to={slugs.chester}>Retirement Chester</AnchorLink>
          </span>
        ),
      },
      reject: {},
      notes: 'Chest Magnetizer does not replace Harbinger cases',
      advice: {
        approve: false,
        always: false,
        notes: 'Accepting this stalls other interactions that would help you progress',
      },
    },
    {
      id: 5,
      text: "I'm not a free drink, X coin please! My effects? Well, this time I'm just a normal drink, but there's a 1 in 4 chance I'm the limited edition glass all the internet nerds want to buy!",
      approve: {
        coin: -1,
        special: (
          <span>
            1/3 chance to receive 6x <Coin />
          </span>
        ),
      },
      reject: {},
      advice: {
        approve: true,
        always: false,
        notes: (
          <span>
            Accept if you have enough <Coin /> to gamble, it's a 2⨯ expected value
          </span>
        ),
      },
    },
  ],
};
