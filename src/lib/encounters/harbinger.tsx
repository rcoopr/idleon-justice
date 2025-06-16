import { AnchorLink } from '../../components/ui/anchor-link';
import { Coin, MentalHealth, Pop } from '../../components/ui/icons/resource';
import { slugs } from './slugs';
import type { Encounter } from './types';

export const harbinger: Encounter = {
  slug: slugs.harbinger,
  name: 'The Harbinger',
  icon: '/encounters/Justice_npc4.png',
  notes: 'Generally, if you can afford to pay with coins, do so',
  interactions: [
    {
      id: 1,
      text: 'Blocked artery. Your spouse rushed you to the hospital at quite the pace, you should say thanks if you ever see them again! The bill is looking to be about X coins, are you ready to pay up?',
      approve: { coin: -4 },
      reject: { mentalHealth: -1 },
      advice: {
        approve: false,
        always: true,
      },
    },
    {
      id: 2,
      text: "It's a heart attack. You're currently in the hospital, you'll make a full recovery if you pay X coins for the best cardiologist.",
      approve: { coin: -5 },
      reject: { mentalHealth: -1 },
      advice: {
        approve: false,
        always: true,
      },
    },
    {
      id: 3,
      text: "No no, I'm not here for you. It's... well, it's Little Timmy. After that 3rd rejection, he ran home crying and won't come out of his room. It's gonna cost you X coins to make him feel better, or you can just live with the guilt.",
      approve: { coin: -8 },
      reject: { mentalHealth: -1 },
      notes: 'Only happens after rejecting Little Timmy 3 times',
      advice: {
        approve: false,
        always: true,
      },
    },
    {
      id: 4,
      text: "Shark attack during a weekend hike in the ocean. You REALLY are quite the extravert. But, without proper care that wound is going to get a lot worse! It's gonna be X coins for full medicare.",
      approve: { coin: -3 },
      reject: { mentalHealth: -1 },
      advice: {
        approve: false,
        always: true,
      },
    },
    {
      id: 5,
      text: "Snake attack during a weekend hike. You really are quite the extravert! But, the venom will cause quite a lot of stress if you don't buy the cure... last I checked, it currently goes for X coins.",
      approve: { coin: -4 },
      reject: { mentalHealth: -1 },
      advice: {
        approve: false,
        always: true,
      },
    },
    {
      id: 6,
      text: "Someone you rejected is putting their plot into action... yea, like, right now. Don't be too surprised, you're really not that popular. You won't come out unscathed unless you pay X coins to hire a better Bailiff.",
      approve: { coin: -6 },
      reject: { mentalHealth: -1 },
      notes: (
        <span>
          Only appears if you have 0 <Pop />
        </span>
      ),
      advice: {
        approve: false,
        always: true,
      },
    },
    {
      id: 7,
      text: "Uh oh, looks like your bills finally got the better of you! I guess managing money ain't so easy after all. Look, if you give me X popularity, I'll save you the embarassment of an empty coffer.",
      approve: { popularity: -1, coin: 1 },
      reject: { mentalHealth: -1 },
      notes: (
        <span>
          Only appears if you have 0 <Coin />, the next harbinger case with 0 <Coin /> will lose{' '}
          <MentalHealth /> on either choice
        </span>
      ),
      advice: {
        approve: true,
        always: true,
        notes: (
          <span>
            You can time this to push further. Repeatable only after losing a <MentalHealth /> to{' '}
            <AnchorLink to={`${slugs.harbinger}-10`}>next interaction at 0 coins</AnchorLink>
          </span>
        ),
      },
    },
    {
      id: 8,
      text: "Uhhh... hey...? Why am I here? You seem fine. But, since I AM here, I'm a bit short on rent. Soooo give me X coins, or I'll be taking 1 mental health of yours!",
      approve: { coin: -3 },
      reject: { mentalHealth: -1 },
      advice: {
        approve: false,
        always: true,
      },
    },
    {
      id: 9,
      text: "Well that Stream could have gone better... you're a Millennial judge, of course you stream in your free time. Look, unless you give me X coins to wipe your memory, you're going to feel REALLY bad for a long time. Like, really bad.",
      approve: { coin: -4 },
      reject: { mentalHealth: -1 },
      advice: {
        approve: false,
        always: true,
      },
    },
    {
      id: 10,
      text: "You're broke...? AGAIN??? I even gave you a coin myself last time! Nope, you're not weaseling your way out of this one you sneaky beaky. Approve, reject, dismiss, I don't care, I'm taking some of your mental with me.",
      approve: { mentalHealth: -1 },
      reject: { mentalHealth: -1 },
      notes: (
        <span>
          Only happens if you have 0 <Coin /> twice, the next harbinger case with 0 <Coin /> will be{' '}
          <AnchorLink to={`${slugs.harbinger}-7`}>
            the <Pop /> cost one
          </AnchorLink>
        </span>
      ),
      advice: {
        approve: false,
        always: true,
      },
    },
    {
      id: 11,
      text: "You're in a coma. Yea, car crash on your way to the next court case. You'll recover, but only if you pay X coins to cover the doctor fees.",
      approve: { coin: -4 },
      reject: { mentalHealth: -1 },
      advice: {
        approve: false,
        always: true,
      },
    },
  ],
};
