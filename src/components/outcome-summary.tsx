import type { Outcome } from '../lib/encounters/types';
import { useCaseMult } from '../lib/hooks/use-case-mult';
import { useCaseStore } from '../lib/hooks/use-case-store';
import { scaled } from '../lib/scaled-value';
import { MentalHealth, Coin, Pop, Dismissal, Chest } from './ui/icons/resource';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export function OutcomeSummary({ outcome, harbinger }: { outcome: Outcome; harbinger?: boolean }) {
  const { caseNumber } = useCaseStore();
  const { base, harbinger: harbingerMult } = useCaseMult();
  const coinMult = harbinger ? harbingerMult : base;

  return (
    <OptionalTooltip
      tooltip={!!outcome.special}
      content={
        <TooltipContent side="left" sideOffset={-15} className="special">
          <div className="col-span-2 pt-0.5">{outcome.special}</div>
        </TooltipContent>
      }
    >
      <div className="px-4 py-2 h-full grid place-content-center gap-1">
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
        </div>
        {outcome.special && (
          <div className="place-self-center">
            <img
              width={25}
              height={25}
              src="/icons/Rupie6.png"
              alt="Special reward"
              className="rupie"
            />
          </div>
        )}
      </div>
    </OptionalTooltip>
  );
}

function OptionalTooltip({
  children,
  content,
  tooltip,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
  tooltip: boolean;
}) {
  if (!tooltip) return children;

  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      {content}
    </Tooltip>
  );
}

function ValueLabel({ value }: { value: string | number }) {
  return <div className="pb-1 text-right justify-self-end font-semibold">{value}</div>;
}
