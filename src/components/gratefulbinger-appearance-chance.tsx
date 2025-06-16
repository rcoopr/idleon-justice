import { twMerge } from 'tailwind-merge';
import { useMathMLSupported } from '../lib/hooks/use-mathml-supported';
import { Pop } from './ui/icons/resource';

export function GratefulbingerAppearanceChance({ className }: { className?: string }) {
  const mathMlSupported = useMathMLSupported();

  if (!mathMlSupported)
    return (
      <span>
        ((40 ⨯ <Pop />) / (
        <Pop /> + 20))%
      </span>
    );

  return (
    <math xmlns="http://www.w3.org/1998/Math/MathML" className={className}>
      <mrow displaystyle="true">
        <mrow>
          <mo>(</mo>
          <mrow>
            <mfrac>
              <mrow>
                <mrow>
                  <mn>4</mn>
                  <mn>0</mn>
                  <mspace></mspace>
                  <mo>⨯</mo>
                  <mspace></mspace>
                  <mi>P</mi>
                  <mi>O</mi>
                  <mi>P</mi>
                </mrow>
              </mrow>
              <mrow>
                <mrow>
                  <mi>P</mi>
                  <mi>O</mi>
                  <mi>P</mi>
                  <mspace></mspace>
                  <mo>+</mo>
                  <mspace></mspace>
                  <mn>2</mn>
                  <mn>0</mn>
                </mrow>
              </mrow>
            </mfrac>
          </mrow>
          <mo>)</mo>
          <mi>%</mi>
        </mrow>
        <mspace></mspace>
      </mrow>
    </math>
  );
}

export function GratefulbingerAppearanceExamples({ className }: { className?: string }) {
  return (
    <div className={twMerge('flex flex-wrap gap-x-1.5 items-center', className)}>
      <div className="flex items-center gap-1">
        12 <Pop /> ⤳ 15%
      </div>
      <span className="md:inline-block hidden h-3 mt-0.5 w-px bg-cosmic-200/30" />
      <div className="md:flex hidden items-center gap-1">
        30 <Pop /> ⤳ 24%
      </div>
      <span className="inline-block h-3 mt-0.5 w-px bg-cosmic-200/30" />
      <div className="flex items-center gap-1">
        60 <Pop /> ⤳ 30%
      </div>
      <span className="inline-block h-3 mt-0.5 w-px bg-cosmic-200/30" />
      <div className="flex items-center gap-1">
        140 <Pop /> ⤳ 35%
      </div>
      <span className="md:inline-block hidden h-3 mt-0.5 w-px bg-cosmic-200/30" />
      <div className="md:flex hidden items-center gap-1">
        180 <Pop /> ⤳ 36%
      </div>
      <span className="inline-block h-3 mt-0.5 w-px bg-cosmic-200/30" />
      <div className="flex items-center gap-1">
        247 <Pop /> ⤳ 37%
      </div>
    </div>
  );
}
