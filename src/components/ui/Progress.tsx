import { cn } from '@/lib/utils/cn';
import { getScoreBarColor } from '@/lib/utils/format';

interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
  showLabel?: boolean;
  colorByValue?: boolean;
  color?: string;
}

export default function Progress({
  value,
  max = 100,
  className,
  showLabel,
  colorByValue,
  color = 'bg-gold-500',
}: ProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  const barColor = colorByValue ? getScoreBarColor(value) : color;

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="flex-1 h-2 bg-surface-500 rounded-full overflow-hidden">
        <div
          className={cn('h-full rounded-full transition-all duration-700 ease-out', barColor)}
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs text-zinc-400 w-8 text-right">{value}</span>
      )}
    </div>
  );
}

interface ScoreRingProps {
  score: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
}

export function ScoreRing({ score, size = 80, strokeWidth = 6, label }: ScoreRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 10) * circumference;

  const color =
    score >= 9 ? '#34d399' :
    score >= 7 ? '#fbbf24' :
    score >= 5 ? '#f59e0b' :
    '#f87171';

  return (
    <div className="flex flex-col items-center gap-1">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#2a2a2a"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1s ease-out' }}
        />
      </svg>
      <div className="-mt-[calc(50%+8px)] flex flex-col items-center" style={{ marginTop: -(size / 2 + 4) }}>
        <span className="text-xl font-bold" style={{ color }}>{score}</span>
        <span className="text-[10px] text-zinc-500">/10</span>
      </div>
      {label && <span className="text-xs text-zinc-400 text-center">{label}</span>}
    </div>
  );
}
