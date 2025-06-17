import { AnchorLink } from '../../components/ui/anchor-link';
import { Coin, Dismissal, Pop } from '../../components/ui/icons/resource';
import { slugs } from './slugs';
import type { Encounter } from './types';

export const poppy: Encounter = {
  slug: slugs.poppy,
  name: 'Concerned Poppy',
  icon: '/encounters/Justice_npc15.png',
  interactions: [
    {
      id: 1,
      text: "Uhm, hello. I was wondering if you could set an example for the kids of how popularity isn't everything? I promise the next time I see you, you'll ironically be more popular than ever by being such a good role model!",
      approve: {
        special: (
          <span>
            Sets your <Pop /> to 1, get back more next{' '}
            <AnchorLink to={slugs.poppy}>Poppy</AnchorLink> case
          </span>
        ),
      },
      reject: {},
      advice: {
        approve: false,
        always: true,
      },
    },
    {
      id: 2,
      text: "Um, hey there. I was thinking maybe you had X coins I could borrow? I'll get Scripticus to pay you back next time you see him, and I'll even add a little extra as a way to say thanks",
      approve: {
        coin: -4,
        popularity: { flat: 5 },
      },
      reject: {
        popularity: { flat: -3 },
      },
      advice: {
        approve: true,
        always: false,
        notes: (
          <span>
            Accept this if you have the <Coin /> to avoid the <Pop /> loss
          </span>
        ),
      },
    },
    {
      id: 3,
      text: "Ummm, greetings your honor. Would you have any interest in buying my dismissal for X coins? I just can't bring myself to say no to anyone..",
      approve: {
        coin: -6,
        dismissal: 1,
      },
      reject: {
        popularity: { flat: -2 },
      },
      advice: {
        approve: true,
        always: true,
      },
    },
    {
      id: 4,
      text: 'Uh, hello there. Could you consider maybe telling lava to lower the cost of Megafish? I just think it would be nice for the players to get more of them is all...',
      approve: {
        popularity: 2,
      },
      reject: {
        popularity: -2,
      },
      advice: {
        approve: true,
        always: true,
      },
    },
    {
      id: 5,
      text: "Uhm, hi. Could you spare me a mental health? I'll give you all X coins I have to my name, I really need it...",
      approve: {
        coin: 10,
        mentalHealth: -1,
      },
      reject: {
        popularity: { flat: -2 },
      },
      advice: {
        approve: true,
        always: true,
        notes: (
          <span>
            The <Coin /> gained can pay for the{' '}
            <AnchorLink to={slugs.harbinger}>Harbinger</AnchorLink>, so you can avoid the <Pop />{' '}
            loss
          </span>
        ),
      },
    },
    {
      id: 6,
      text: "Hey there judge. I just wanted to tell you what a fantastic job you've done, and how much we appreciate the effort you put into your decisions. It's not much, but I collected X coins from everyone who wanted to express their thanks",
      approve: {
        coin: 3,
        popularity: { flat: 2 },
      },
      reject: {
        popularity: -40,
      },
      advice: {
        approve: true,
        always: true,
        notes: (
          <span>
            If you can't approve this, it's worth using a <Dismissal />
          </span>
        ),
      },
    },
  ],
};
