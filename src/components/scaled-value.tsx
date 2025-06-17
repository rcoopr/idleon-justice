import { useCaseMult } from '../lib/hooks/use-case-mult';
import { scaled, type ScalableValue } from '../lib/scaled-value';

export function ScaledValue({ value }: { value: ScalableValue }) {
  const { base } = useCaseMult();

  return <>{scaled(value, base)}</>;
}
