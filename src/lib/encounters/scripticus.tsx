import { AnchorLink } from '../../components/ui/anchor-link';
import { Reject } from '../../components/ui/icons/decision';
import { Coin, Dismissal, MentalHealth } from '../../components/ui/icons/resource';
import { slugs } from './slugs';
import type { Encounter } from './types';

export const scripticus: Encounter = {
  slug: slugs.scripticus,
  name: 'Scripticus',
  icon: '/encounters/Justice_npc6.png',
  interactions: [
    {
      id: 1,
      text: "Can I get a X coin loan to buy my next kitchen in World 4? I play the game too you know! I'll give you back the coins plus interest next time you see me, AND you'll have my gratitude!",
      approve: {
        coin: -2,
        popularity: 1,
        special: (
          <span>
            Get 2.5⨯ <Coin /> back on next encounter
          </span>
        ),
      },
      reject: {
        popularity: -1,
      },
      advice: {
        approve: true,
        always: false,
        notes: (
          <span>
            Only approve this if you have spare <Coin />
          </span>
        ),
      },
    },
    {
      id: 2,
      text: "Hey it's me, everyone's favorite wiggly piece of paper! I really want to help the next guy, can you PROMISE me you'll Approve the next case? I'll give you X coins. Please?",
      approve: {
        coin: 3,
        special: (
          <span>
            Must approve next case or lose 1 <MentalHealth />
          </span>
        ),
      },
      reject: {
        popularity: { flat: -1 },
      },
      notes: (
        <span>
          You lose 1 <MentalHealth /> if you break your promise to Scripticus by using <Dismissal />{' '}
          or
          <Reject />
        </span>
      ),
      advice: {
        approve: false,
        always: false,
        notes: (
          <span>
            Risky to approve regardless, but <b>NEVER</b> approve this when the next case is the{' '}
            <AnchorLink to={slugs.harbinger}>Harbinger</AnchorLink>
          </span>
        ),
      },
    },
    {
      id: 3,
      text: "Oh boy, I'm in the Justice Monument minigame again! Wanna trade some of your coins for my popularity? Also it's ok if you don't have enough coins, I have plenty of popularity to go around!",
      approve: {
        coin: -2,
        popularity: 1,
      },
      reject: {
        popularity: -1,
      },
      notes: (
        <span>
          Can still approve when you have 0 <Coin />
        </span>
      ),
      advice: {
        approve: true,
        always: false,
        notes: (
          <span>
            Only approve this if you have spare <Coin />
          </span>
        ),
      },
    },
  ],
};
