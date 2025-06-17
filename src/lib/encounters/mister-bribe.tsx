import { AnchorLink } from '../../components/ui/anchor-link';
import { Coin, Dismissal, Pop } from '../../components/ui/icons/resource';
import { slugs } from './slugs';
import type { Encounter } from './types';

export const misterBribe: Encounter = {
  slug: slugs.misterBribe,
  name: 'Mister Bribe',
  icon: '/encounters/Justice_npc3.png',
  interactions: [
    {
      id: 1,
      text: "Aight, check it. I ain't done no dirty tricks this time, I got a shiny clean coin right 'ere, just for you! Seriously, take it!",
      approve: { coin: { flat: 1 } },
      reject: { popularity: { flat: -1 } },
      advice: {
        approve: true,
        always: true,
      },
    },
    {
      id: 2,
      text: "Eyo was up my guy, I got a bit of a deal for ya. X coins, but you can't Approve that Little Timmy fella next you see him. Whatchu think?",
      approve: { coin: 3 },
      reject: {},
      advice: {
        approve: false,
        always: false,
        notes: (
          <span>
            You can approve if you need <Coin /> but <b>beware</b> it may slow down{' '}
            <AnchorLink to={`${slugs.timmy}-8`}>Timmy's 🍦 interactions</AnchorLink>
          </span>
        ),
      },
    },
    {
      id: 3,
      text: "Hey buddy, how's the grind going? Look, I got X coins on me, and you can have them all!!! Only thing is, for 3 days you won't be able to Approve anything...",
      approve: { coin: 7 },
      reject: {},
      notes: 'Accepting the bribe counts as the first day',
      advice: {
        approve: false,
        always: false,
        notes: (
          <span>
            <b>NEVER</b> approve this if you're close to a{' '}
            <AnchorLink to={slugs.harbinger}>Harbinger</AnchorLink> case, rolling{' '}
            <AnchorLink to={slugs.gratefulbinger}>Gratefulbinger</AnchorLink> with no <Dismissal />{' '}
            is death
          </span>
        ),
      },
    },
    {
      id: 4,
      text: "Hey friendo. Is me again, what's good? I got a huge score, and wanted to share some of it! Here, have X coins, but your mental health will take a hit when you hear the news tonight...",
      approve: { coin: 7, mentalHealth: -1 },
      reject: { popularity: { flat: 1 } },
      advice: {
        approve: false,
        always: true,
      },
    },
    {
      id: 5,
      text: "Hey pal, how we doin'? You lookin' for some extra cash? I got X coins on me, take em! Don't ask questions, 'specially 'bout where I got 'em from.",
      approve: { coin: 3, popularity: -1 },
      reject: { popularity: 1 },
      advice: {
        approve: true,
        always: false,
        notes: (
          <span>
            Only reject if you don't need <Coin /> at all
          </span>
        ),
      },
    },
    {
      id: 6,
      text: "Ok dog hear me out, I had this dope idea while I was drying out yesterday... a reverse bribe! You give me X coins, and I'll boost your popularity",
      approve: { coin: -1, popularity: 1 },
      reject: {},
      advice: {
        approve: false,
        always: false,
        notes: (
          <span>
            <Coin /> is usually more important than <Pop />
          </span>
        ),
      },
    },
  ],
};
