import { cn } from '@/lib/utils/cn';
import type { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'gold' | 'green' | 'blue' | 'red' | 'zinc' | 'amber';
  size?: 'sm' | 'md';
}

export default function Badge({
  className,
  variant = 'zinc',
  size = 'sm',
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        {
          'text-gold-400 bg-gold-500/10 border border-gold-500/20': variant === 'gold',
          'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20': variant === 'green',
          'text-blue-400 bg-blue-500/10 border border-blue-500/20': variant === 'blue',
          'text-red-400 bg-red-500/10 border border-red-500/20': variant === 'red',
          'text-zinc-400 bg-zinc-500/10 border border-zinc-500/20': variant === 'zinc',
          'text-amber-400 bg-amber-500/10 border border-amber-500/20': variant === 'amber',
        },
        {
          'text-xs px-2 py-0.5': size === 'sm',
          'text-sm px-3 py-1': size === 'md',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
