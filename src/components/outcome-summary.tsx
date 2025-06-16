import type { Outcome } from '../lib/encounters/types';
import { MentalHealth, Coin, Pop, Dismissal, Chest } from './ui/icons/resource';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export function OutcomeSummary({ outcome }: { outcome: Outcome }) {
  return (
    <div className="grid grid-cols-[auto_auto_max-content] gap-x-0.5 items-center justify-items-center">
      {outcome.mentalHealth ? (
        <>
          <NumberLabel value={outcome.mentalHealth} />
          <div className="-ml-0.25 -mt-0.25">⨯</div>
          <MentalHealth />
        </>
      ) : null}
      {outcome.coin ? (
        <>
          <NumberLabel value={outcome.coin} />
          <div className="-ml-0.25 -mt-0.25">⨯</div>
          <Coin />
        </>
      ) : null}
      {outcome.popularity ? (
        <>
          <NumberLabel value={outcome.popularity} />
          <div className="-ml-0.25 -mt-0.25">⨯</div>
          <Pop />
        </>
      ) : null}
      {outcome.dismissal ? (
        <>
          <NumberLabel value={outcome.dismissal} />
          <div className="-ml-0.25 -mt-0.25">⨯</div>
          <Dismissal />
        </>
      ) : null}
      {outcome.chest ? (
        <>
          <NumberLabel value={outcome.chest} />
          <div className="-ml-0.25 -mt-0.25">⨯</div>
          <Chest />
        </>
      ) : null}
      {outcome.special && (
        <div className="col-span-3 pt-0.5">
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
