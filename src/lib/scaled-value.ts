export type ScalableValue = number | { flat?: number; mult?: number };

export function scaled(value: ScalableValue, base: number): number {
  if (typeof value === 'number') {
    return value * base;
  }

  const { flat = 0, mult = 0 } = value;
  return flat + mult * base;
}
