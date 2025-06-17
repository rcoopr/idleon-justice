import { AnchorLink } from '../../components/ui/anchor-link';
import { Reject } from '../../components/ui/icons/decision';
import { Coin, Dismissal, MentalHealth, Pop } from '../../components/ui/icons/resource';
import { slugs } from './slugs';
import type { Encounter } from './types';

export const timmy: Encounter = {
  slug: slugs.timmy,
  name: 'Little Timmy',
  icon: '/encounters/Justice_npc0.png',
  notes: (
    <span>
      All 3 🍦 interactions must be completed to unlock one that gives 4⨯ <MentalHealth />
    </span>
  ),
  interactions: [
    {
      id: 1,
      text: 'Can I has X coins pwease?',
      approve: { coin: -1, popularity: 2 },
      reject: { popularity: -1 },
      advice: {
        approve: true,
        always: false,
      },
    },
    {
      id: 2,
      text: 'Can u make today a holiday so school is no?',
      approve: { coin: -3, popularity: 2 },
      reject: {},
      notes: 'Can approve without the necessary coins',
      advice: {
        approve: false,
        always: false,
        notes: (
          <span>
            Unless you have very low <Coin />
          </span>
        ),
      },
    },
    {
      id: 3,
      text: 'Can u subskwibe to my yootoob channel pwease?? Is free!!!',
      approve: { popularity: 1 },
      reject: { popularity: -2 },
      advice: {
        approve: true,
        always: true,
      },
    },
    {
      id: 4,
      text: 'Hewwo OwO can u tell everyone they are stinky heads? Also ummmmmmmm... are you skibbidy??!?',
      approve: { popularity: -1 },
      reject: { popularity: 1 },
      advice: {
        approve: false,
        always: true,
        notes: (
          <span>
            Using a <Dismissal /> can be worth it <b>ONLY</b> if you have a lot of <Pop /> to lose
          </span>
        ),
      },
    },
    {
      id: 5,
      text: 'I stole my fwends toy, and he said I am under arrest. Can I be free pwease? I will give u X coins... did I do bribe right? Daddy teached it to me today!',
      approve: { coin: 1, popularity: -1 },
      reject: { popularity: 1 },
      advice: {
        approve: false,
        always: false,
        notes: (
          <span>
            Overall you get more resources by rejecting this, but if you need <Coin /> then you
            could approve
          </span>
        ),
      },
    },
    {
      id: 6,
      text: 'Can I has fwee stuff pls? Liiike I want fwee stuff!!! I think you should giff me X coins! You BETTER not say no!!!',
      approve: { coin: -2, popularity: 1 },
      reject: { popularity: -5 },
      advice: {
        approve: true,
        always: true,
        notes: (
          <span>
            Using a <Dismissal /> can be worth it <b>ONLY</b> if you have a lot of <Pop /> to lose
          </span>
        ),
      },
    },
    {
      id: 7,
      text: 'your a big poopy head! fr fr you stink!! daddy told me all about how MEAN you are when I visited him in jail last week!!!',
      approve: { popularity: -1 },
      reject: { popularity: -1 },
      advice: {
        approve: true,
        always: true,
        notes: (
          <span>
            It's a lose-lose, but rejecting adds to{' '}
            <AnchorLink to={`${slugs.harbinger}-3`}>Harbinger/Timmy interaction</AnchorLink>
          </span>
        ),
      },
    },
    {
      id: 8,
      text: "🍦 'Musical Theme Plays' OOH OHH TEH ICE CWEAM TRUCK! Can I has X coins to buy a red ice cream pwease?",
      approve: { coin: -1, popularity: 1 },
      reject: { popularity: -1 },
      related: true,
      advice: {
        approve: true,
        always: false,
        notes: 'Unlocks the next 🍦 interaction',
      },
    },
    {
      id: 9,
      text: "🍦 'Musical Theme Plays' OOH OHH TEH ICE CWEAM TRUCK AGAIN!!! Can I has X coins to buy a blue ice cream supreme pwease?",
      approve: { coin: -1, popularity: 1 },
      reject: { popularity: -1 },
      related: true,
      advice: {
        approve: true,
        always: false,
        notes: 'Unlocks the next 🍦 interaction',
      },
    },
    {
      id: 10,
      text: "🍦 'Musical Theme Plays' OOH OHH TEH ICE CWEAM TRUCK AGAIN AGAIN!!!! Can I has X coins to buy a yellow ice cream mega deluxe pwease?",
      approve: { coin: -2, popularity: 1 },
      reject: { popularity: -1 },
      related: true,
      advice: {
        approve: true,
        always: false,
        notes: 'Unlocks the next 🍦 interaction',
      },
    },
    {
      id: 11,
      text: "🍦 'Musical Theme Plays' Nonono I cant eat more I'm full.. Thank u so so sooooo much for those ice cweams, they were yummy for real! Can I give u a hug pwease ur da best!",
      approve: { mentalHealth: 4 },
      reject: { popularity: { flat: -999 } },
      related: true,
      advice: {
        approve: true,
        always: true,
        notes: (
          <span>
            Game over if you <Reject />
          </span>
        ),
      },
    },
  ],
};
