import * as React from 'react';
import { cn } from '../lib/utils';
import { focusRing } from '../lib/classes';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
            {leftIcon}
          </div>
        )}
        <input
          className={cn(
            'flex w-full rounded-button border bg-bg-card px-4 py-2 text-text-body transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-muted disabled:cursor-not-allowed disabled:opacity-50',
            error
              ? 'border-error focus:border-error focus:outline-none focus:ring-2 focus:ring-error/30'
              : cn('border-border focus:border-primary', focusRing),
            leftIcon && 'pl-10',
            rightIcon && 'pr-10',
            className
          )}
          ref={ref}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
