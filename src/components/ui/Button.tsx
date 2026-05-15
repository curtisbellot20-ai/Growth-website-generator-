'use client';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils/cn';
import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-900 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg',
          {
            // variants
            'bg-gold-500 text-surface-950 hover:bg-gold-400 focus:ring-gold-500 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/30':
              variant === 'primary',
            'bg-surface-700 text-zinc-200 hover:bg-surface-600 focus:ring-zinc-500 border border-surface-500':
              variant === 'secondary',
            'bg-transparent text-zinc-300 hover:text-zinc-100 hover:bg-surface-700 focus:ring-zinc-500':
              variant === 'ghost',
            'bg-transparent border border-surface-500 text-zinc-300 hover:border-gold-500 hover:text-gold-400 focus:ring-gold-500':
              variant === 'outline',
            'bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 focus:ring-red-500':
              variant === 'danger',
          },
          {
            // sizes
            'text-xs px-3 py-1.5 gap-1.5': size === 'sm',
            'text-sm px-4 py-2 gap-2': size === 'md',
            'text-base px-5 py-2.5 gap-2': size === 'lg',
            'text-lg px-7 py-3.5 gap-2.5': size === 'xl',
          },
          className
        )}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
