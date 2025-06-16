import { twJoin } from 'tailwind-merge';
import { OutcomeSummary } from './outcome-summary';
import { useSearchStore } from '../lib/hooks/use-search-store';
import { HighlightedText, type HighlightedTextData } from './ui/highlighted-text';
import type { Encounter, Interaction } from '../lib/encounters/types';
import { AnchorLink } from './ui/anchor-link';
import { slugs } from '../lib/encounters/slugs';
import type { JSX } from 'react';
import { Approve, Reject } from './ui/icons/decision';

export function DialogueOptions() {
  const { filteredEncounters, selectedEncounter } = useSearchStore();
  const filteredEncountersBySelectedEncounter = selectedEncounter
    ? filteredEncounters.filter((encounter) => encounter.slug === selectedEncounter.slug)
    : filteredEncounters;

  return (
    <>
      {filteredEncountersBySelectedEncounter.map((encounter) => {
        const interactions = encounter.matchingInteractions.length
          ? encounter.matchingInteractions
          : encounter.interactions;

        return (
          <ul key={encounter.slug} className="space-y-3 w-full">
            <div className="grid grid-cols-[auto_79px_79px] items-end">
              <div className="flex items-end px-2 gap-4">
                <img src={encounter.icon} alt={encounter.name} />
                <div className="flex flex-col">
                  <h3
                    id={encounter.slug}
                    className="font-bold transition-colors duration-300 target:text-cosmic-400 scroll-m-8"
                  >
                    {encounter.name}
                  </h3>
                  {encounter.notes && (
                    <div className="text-sm text-amber-200">{encounter.notes}</div>
                  )}
                </div>
              </div>
              <Approve />
              <Reject />
            </div>
            {interactions.map((interaction, index) => (
              <EncounterInteraction
                key={interaction.id}
                index={index}
                interaction={interaction}
                encounter={encounter}
              />
            ))}
          </ul>
        );
      })}
    </>
  );
}

function EncounterInteraction({
  interaction,
  encounter,
  index,
}: {
  interaction: Interaction;
  encounter: Encounter;
  index: number;
}) {
  return (
    <li
      id={`${encounter.slug}-${interaction.id}`}
      className={twJoin(
        'grid grid-cols-[auto_79px_79px] items-center overflow-hidden border rounded-md',
        'bg-cosmic-200/3 border-cosmic-200/10 backdrop-blur-lg transition-colors duration-300',
        'target:bg-cosmic-500/30 target:border-cosmic-400/50',
        '[&:target~.related]:bg-cosmic-500/30 [&:target~.related]:border-cosmic-400/50',
        index === 0 ? 'scroll-m-14' : 'scroll-m-4',
        interaction.related && 'related'
      )}
    >
      <span className="px-4 py-2 text-nebula-400">
        <HighlightedText>
          {'highlightedText' in interaction
            ? (interaction.highlightedText as HighlightedTextData)
            : interaction.text}
        </HighlightedText>
      </span>
      <div className="px-4 py-2 grid place-content-center h-full border-l border-cosmic-200/10">
        <OutcomeSummary outcome={interaction.approve} />
      </div>
      <div className="px-4 py-2 grid place-content-center h-full border-l border-cosmic-200/10">
        <OutcomeSummary outcome={interaction.reject} />
      </div>
      <Advice advice={interaction.advice} notes={interaction.notes} />
    </li>
  );
}

const adviceSettings = {
  approve: {
    always: {
      titleClassName: 'text-emerald-400',
      className: 'text-emerald-300 bg-emerald-400/20',
      defaultText: undefined,
    },
    sometimes: {
      titleClassName: 'text-sky-400',
      className: 'text-sky-300 bg-sky-400/20',
      defaultText: (
        <span>
          Approve this if you can afford{' '}
          <AnchorLink to={slugs.fizarreDrink}>Fizarre's Drinks</AnchorLink> and{' '}
          <AnchorLink to={`${slugs.grumblo}-1`}>Grumblo</AnchorLink>.
        </span>
      ),
    },
  },
  reject: {
    always: {
      titleClassName: 'text-red-400',
      className: 'text-red-300 bg-red-400/20',
      defaultText: undefined,
    },
    sometimes: {
      titleClassName: 'text-orange-400',
      className: 'text-orange-300 bg-orange-400/20',
      defaultText: undefined,
    },
  },
};

function Advice({
  advice,
  notes,
}: {
  advice: Interaction['advice'];
  notes?: string | JSX.Element;
}) {
  const prefix = advice.approve ? 'approve' : 'reject';
  const { titleClassName, className, defaultText } =
    adviceSettings[prefix][advice.always ? 'always' : 'sometimes'];

  return (
    <>
      <div
        className={twJoin(
          'px-4 pt-0.75 pb-1.25 col-span-3 border-t border-cosmic-200/10 flex justify-between items-center',
          className
        )}
      >
        <span>{advice.notes || defaultText}</span>
        <span className={twJoin(titleClassName, 'italic font-bold uppercase text-sm ml-2')}>
          {prefix}
        </span>
      </div>
      {notes ? (
        <div className="px-4 pt-0.75 pb-1.25 col-span-3 border-t bg-cosmic-200/10 border-cosmic-200/10 flex justify-between items-center">
          <span className="italic">{notes}</span>
          <span className="italic font-bold text-sm ml-2">NOTE</span>
        </div>
      ) : null}
    </>
  );
}
