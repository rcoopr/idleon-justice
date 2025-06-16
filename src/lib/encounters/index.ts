import { timmy } from './timmy';
import { reanimatedHand } from './reanimated-hand';
import { headHoncho } from './head-honcho';
import { misterBribe } from './mister-bribe';
import { billionaireChest } from './billionaireChest';
import { harbinger } from './harbinger';
import { retirementChester } from './chester';
import { scripticus } from './scripticus';
import { esquire } from './esquire';
import { gratefulbinger } from './gratefulbinger';
import { coolBird } from './coolBird';
import { chippy } from './chippy';
import { ghost } from './ghost';
import { grumblo } from './grumblo';
import { fizarreDrink } from './fizarreDrink';
import { rupieSlug } from './rupieSlug';
import { poppy } from './poppy';
import type { Encounter } from './types';

export const encounters: Encounter[] = [
  gratefulbinger,
  harbinger,
  timmy,
  reanimatedHand,
  headHoncho,
  misterBribe,
  scripticus,
  esquire,
  coolBird,
  chippy,
  ghost,
  grumblo,
  fizarreDrink,
  rupieSlug,
  poppy,
  retirementChester,
  billionaireChest,
];

export const encounterMap: Record<string, Encounter> = Object.fromEntries(
  encounters.map((encounter) => [encounter.slug, encounter])
);
