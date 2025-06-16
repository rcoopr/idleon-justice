import { Coin, Dismissal, MentalHealth, Pop } from '../../components/ui/icons/resource';
import { slugs } from './slugs';
import type { Encounter } from './types';

export const headHoncho: Encounter = {
  slug: slugs.headHoncho,
  name: 'Head Honcho of Big Biz LLC',
  icon: '/encounters/Justice_npc2.png',
  interactions: [
    {
      id: 1,
      text: 'Good afternoon, I am seeking invesetment in my new Retirement Hedgefund! For just 1 Retirement Chest, you will receive royalties of 2 coins per day for 10 days!',
      approve: {
        chest: -1,
        special: (
          <span>
            +2 <Coin /> per day for 10 days (20 total)
          </span>
        ),
      },
      reject: { popularity: 1 },
      advice: {
        approve: false,
        always: false,
        notes: <span>Never approve after the first 10-15 cases</span>,
      },
    },
    {
      id: 2,
      text: 'Good afternoon, I represent a third party who would like to buy your popularity, yes ALL of it, for 2 coins per pop. Would you be interested in this?',
      approve: {
        special: (
          <span>
            -All <Pop />, +2 <Coin /> per <Pop /> lost
          </span>
        ),
      },
      reject: { popularity: 1 },
      advice: {
        approve: false,
        always: true,
      },
    },
    {
      id: 3,
      text: 'Greetings, I come to you today seeking a X coin investment in my time management company. I guarantee you a 250% return, but it will take 15 court cases to mature.',
      approve: {
        coin: -5,
        special: (
          <span>
            +250% return of lost <Coin /> after 15 cases
          </span>
        ),
      },
      reject: { popularity: 1 },
      advice: {
        approve: false,
        always: false,
        notes: (
          <span>
            Only approve if you have a lot of <Coin /> to spare
          </span>
        ),
      },
    },
    {
      id: 4,
      text: 'Greetings, I come to you today seeking a X popularity investment since my last company spilled some, well, accidentally spilled... look, I am willing to offer a LOT of coins!',
      approve: { popularity: -1, coin: 3 },
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
      id: 5,
      text: 'Greetings, I have a fantastic opportunity for you! For just X coins, I will invest in a crypto coin and will share the profits! 1 coin returned every day for 15 days!',
      approve: {
        coin: -6,
        popularity: -1,
        special: (
          <span>
            +1 <Coin /> each day for 15 days
          </span>
        ),
      },
      reject: { popularity: 1 },
      advice: {
        approve: true,
        always: false,
      },
    },
    {
      id: 6,
      text: 'Your honor, I seek an investment of X coins in order to grow my Student Loans company and acquire new victims. I promise your money will double by next time you see me.',
      approve: {
        coin: -3,
        popularity: -1,
        special: (
          <span>
            <Coin /> doubled on next Head Honcho case
          </span>
        ),
      },
      reject: { popularity: 2 },
      advice: {
        approve: true,
        always: false,
      },
    },
    {
      id: 7,
      text: "You aren't looking too well my friend... perhaps you would like some life insurance? I'll loan you some mental health, but the next time I see you, I'm taking it all back... PLUS interest...",
      approve: { mentalHealth: 4 },
      reject: { popularity: 2 },
      notes: 'Sets all currencies except dismisals to 1 on next interaction',
      advice: {
        approve: false,
        always: true,
        notes: (
          <span>
            Only approve if you are very low on <MentalHealth />
          </span>
        ),
      },
    },
    {
      id: 8,
      text: "Greetings, are you interested in making some big money? I have a client, some guy in a grim reaper costume, who is ready to give you X coins! All you have to do is sign this contract saying you'll NEVER dismiss him.",
      approve: { coin: 20 },
      reject: { popularity: 1 },
      advice: {
        approve: false,
        always: true,
        notes: (
          <span>
            Only approve if you are low on <Dismissal />
          </span>
        ),
      },
    },
  ],
};
