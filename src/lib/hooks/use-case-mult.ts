import { useCaseStore } from './use-case-store';

export function useCaseMult() {
  const caseNumber = useCaseStore((state) => state.caseNumber) || 1;

  const stepped = Math.ceil(caseNumber / 5);
  const harbingerMult = 1 + 0.25 * Math.floor((caseNumber - 1) / 13);

  return {
    base: stepped,
    harbinger: stepped * harbingerMult,
  };
}
