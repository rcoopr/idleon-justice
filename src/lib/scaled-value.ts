export type ScalableValue = number | { flat?: number; mult?: number };

export function scaled(value: ScalableValue, base: number, showType?: boolean): string | number {
  const { flat = 0, mult = 0 } = typeof value === 'number' ? { mult: value } : value;

  if (showType) {
    const number = flat || mult;
    const isFlat = !!flat && !mult;

    if (isFlat) {
      const sign = number < 0 ? '-' : number > 0 ? '+' : '';
      return `${sign}${Math.abs(number)}`;
    }

    const sign = number < 0 ? '-' : '';
    return `${sign}${Math.abs(number)}⨯`;
  }

  return flat + mult * base;
}
