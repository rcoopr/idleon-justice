import type { Outcome } from '../lib/encounters/types';
import { useCaseMult } from '../lib/hooks/use-case-mult';
import { MentalHealth, Coin, Pop, Dismissal, Chest } from './ui/icons/resource';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export function OutcomeSummary({ outcome }: { outcome: Outcome }) {
  const { base } = useCaseMult();

  return (
    <div className="grid grid-cols-[auto_max-content] gap-x-0.5 items-center justify-items-center">
      {outcome.mentalHealth ? (
        <>
          <NumberLabel value={outcome.mentalHealth} />
          <MentalHealth />
        </>
      ) : null}
      {outcome.coin ? (
        <>
          <NumberLabel value={base * outcome.coin} />
          <Coin />
        </>
      ) : null}
      {outcome.popularity ? (
        <>
          <NumberLabel value={base * outcome.popularity} />
          <Pop />
        </>
      ) : null}
      {outcome.dismissal ? (
        <>
          <NumberLabel value={outcome.dismissal} />
          <Dismissal />
        </>
      ) : null}
      {outcome.chest ? (
        <>
          <NumberLabel value={outcome.chest} />
          <Chest />
        </>
      ) : null}
      {outcome.special && (
        <div className="col-span-2 pt-0.5">
          <Tooltip>
            <TooltipTrigger asChild>
              <img
                width={25}
                height={25}
                src="/icons/Rupie6.png"
                alt="Special reward"
                className="rupie"
              />
            </TooltipTrigger>
            <TooltipContent side="bottom" className="special">
              {outcome.special}
            </TooltipContent>
          </Tooltip>
        </div>
      )}
    </div>
  );
}

function NumberLabel({ value }: { value: number }) {
  return <div className="pb-1 text-right justify-self-end font-semibold">{value}</div>;
}
