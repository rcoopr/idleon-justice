import { twJoin } from 'tailwind-merge';
import HalfArrow from '../assets/HalfArrow.svg?react';
import HalfArrowRight from '../assets/HalfArrowRight.svg?react';
import { Chest, Coin, Dismissal, MentalHealth, Pop } from './ui/icons/resource';
import { retirementChester } from '../lib/encounters/chester';
import { AnchorLink } from './ui/anchor-link';
import { useSettingsStore } from '../lib/hooks/use-settings-store';
import { slugs } from '../lib/encounters/slugs';

export function GeneralStrategy() {
  const { expandGeneralStrategy: expand, toggleGeneralStrategy: toggleExpand } = useSettingsStore();

  return (
    <div className="max-w-max overflow-hidden border border-amber-200/20 backdrop-blur-lg bg-amber-200/10 text-amber-200 rounded-md mb-4">
      <button
        className="w-full flex items-center px-4 py-2"
        onClick={toggleExpand}
        aria-expanded={expand}
      >
        <h2 className="grow text-left font-bold">General Strategy</h2>
        <HalfArrow
          width={24}
          height={7}
          className={twJoin(
            'transition-transform duration-300',
            expand ? 'rotate-0' : '-rotate-180'
          )}
          aria-hidden
        />
      </button>
      <div
        className={twJoin(
          'grid transition-all duration-300',
          expand ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <ul className="px-4 list-disc space-y-1 [&>li]:ml-4 overflow-hidden border-t -mb-px border-amber-200/20 [&>li]:first:mt-2 [&>li]:last:mb-2.25">
          <li>
            Hoard <Coin /> / <Pop /> until later cases, don't buy <Chest /> midgame{' '}
            <span className="text-sm">(case 20 ~ 70)</span>
          </li>
          <li>
            <Dismissal />
            <span className="inline-block align-middle mx-2">
              <HalfArrowRight width={7} height={11} />
            </span>
            <MentalHealth /> as long as you don't approve the{' '}
            <AnchorLink to={`${slugs.headHoncho}-8`}>Head Honcho contract</AnchorLink>
          </li>
          <li>
            Don't buy the <AnchorLink to={`${retirementChester.slug}-3`}>pop chests</AnchorLink>{' '}
            until ~140+ <Pop />{' '}
            <span className="text-sm">
              (35% <AnchorLink to={slugs.gratefulbinger}>Gratefulbinger</AnchorLink> chance, 180 ⤳
              36%)
            </span>
          </li>
          <li>
            Take deals that give +2<span className="inline-block translate-y-0">⨯</span> for -1
            <span className="inline-block translate-y-0">⨯</span> with no downside
          </li>
          <li>
            Saving <Coin /> has a slight priority over <Pop />
          </li>
          <li>
            <AnchorLink to={`${slugs.timmy}-8`}>Timmy's ice cream interactions</AnchorLink> are very
            important for <MentalHealth />
          </li>
          <li>
            Approve{' '}
            <AnchorLink to={`${slugs.fizarreDrink}-1`}>
              Fizarre's <Dismissal />
            </AnchorLink>{' '}
            and <AnchorLink to={`${slugs.grumblo}-1`}>Grumblo's gift</AnchorLink>{' '}
            <span className="text-sm italic">(not the double gift)</span>
          </li>
          <li>
            It's no longer important to use <MentalHealth /> before <Dismissal />
          </li>
        </ul>
      </div>
    </div>
  );
}
/**
 * add case counter + next button, add distinct background for that section
 * replace all +/-/x with real values if !!(case counter)
 */
