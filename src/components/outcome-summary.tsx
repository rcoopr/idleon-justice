import type { Outcome } from '../lib/encounters/types';
import { useCaseMult } from '../lib/hooks/use-case-mult';
import { useCaseStore } from '../lib/hooks/use-case-store';
import { scaled } from '../lib/scaled-value';
import { MentalHealth, Coin, Pop, Dismissal, Chest } from './ui/icons/resource';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export function OutcomeSummary({ outcome, harbinger }: { outcome: Outcome; harbinger?: boolean }) {
  if (outcome.special)
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="size-full px-4 py-2 grid place-content-center">
            <img
              width={25}
              height={25}
              src="/icons/Rupie6.png"
              alt="Special reward"
              className="rupie"
            />
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom" sideOffset={-20} className="special">
          <div className="col-span-2 pt-0.5">{outcome.special}</div>
        </TooltipContent>
      </Tooltip>
    );

  return <OutcomeSummaryResources outcome={outcome} harbinger={harbinger} />;
}

export function OutcomeSummaryResources({
  outcome,
  harbinger,
}: {
  outcome: Outcome;
  harbinger?: boolean;
}) {
  const { caseNumber } = useCaseStore();
  const { base, harbinger: harbingerMult } = useCaseMult();
  const coinMult = harbinger ? harbingerMult : base;

  return (
    <div className="px-4 py-2 h-full grid place-content-center">
      <div className="grid grid-cols-[auto_max-content] gap-x-0.5 items-center justify-items-center">
        {outcome.mentalHealth ? (
          <>
            <ValueLabel value={outcome.mentalHealth} />
            <MentalHealth />
          </>
        ) : null}
        {outcome.coin ? (
          <>
            <ValueLabel value={scaled(outcome.coin, coinMult, caseNumber === null)} />
            <Coin />
          </>
        ) : null}
        {outcome.popularity ? (
          <>
            <ValueLabel value={scaled(outcome.popularity, base, caseNumber === null)} />
            <Pop />
          </>
        ) : null}
        {outcome.dismissal ? (
          <>
            <ValueLabel value={outcome.dismissal} />
            <Dismissal />
          </>
        ) : null}
        {outcome.chest ? (
          <>
            <ValueLabel value={outcome.chest} />
            <Chest />
          </>
        ) : null}
        {outcome.special && <div className="col-span-2 pt-0.5">{outcome.special}</div>}
      </div>
    </div>
  );
}

function ValueLabel({ value }: { value: string | number }) {
  return <div className="pb-1 text-right justify-self-end font-semibold">{value}</div>;
}
