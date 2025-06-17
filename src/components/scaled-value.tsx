import { useCaseMult } from '../lib/hooks/use-case-mult';
import { useCaseStore } from '../lib/hooks/use-case-store';
import { scaled, type ScalableValue } from '../lib/scaled-value';

export function ScaledValue({ value }: { value: ScalableValue }) {
  const { caseNumber } = useCaseStore();
  const { base } = useCaseMult();

  return <>{scaled(value, base, caseNumber === null)}</>;
}
