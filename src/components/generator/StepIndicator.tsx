import { Check } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const STEPS = [
  { num: 1, label: 'Business' },
  { num: 2, label: 'Customer' },
  { num: 3, label: 'Offers' },
  { num: 4, label: 'Brand' },
  { num: 5, label: 'Goals' },
];

export default function StepIndicator({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center justify-center gap-0">
      {STEPS.map((step, i) => (
        <>
          <div key={step.num} className="flex flex-col items-center gap-1.5">
            <div
              className={cn(
                'w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200',
                step.num < currentStep
                  ? 'bg-gold-500 text-surface-950'
                  : step.num === currentStep
                  ? 'bg-gold-500 text-surface-950 ring-4 ring-gold-500/30'
                  : 'bg-surface-600 text-zinc-500 border border-surface-400'
              )}
            >
              {step.num < currentStep ? <Check className="w-4 h-4" /> : step.num}
            </div>
            <span
              className={cn(
                'text-xs font-medium',
                step.num <= currentStep ? 'text-zinc-300' : 'text-zinc-600'
              )}
            >
              {step.label}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <div
              className={cn(
                'w-16 h-0.5 mb-5 transition-all duration-300',
                step.num < currentStep ? 'bg-gold-500' : 'bg-surface-500'
              )}
            />
          )}
        </>
      ))}
    </div>
  );
}
