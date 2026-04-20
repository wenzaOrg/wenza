import * as React from 'react';
import { cn } from '../lib/utils';
import { focusRing } from '../lib/classes';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  maxLength?: number;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, maxLength, value, defaultValue, onChange, ...props }, ref) => {
    // Basic uncontrolled internal state for character count if not strictly controlled
    const [charCount, setCharCount] = React.useState(
      () => String(value || defaultValue || '').length
    );

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      onChange?.(e);
    };

    return (
      <div className="relative w-full">
        <textarea
          className={cn(
            'flex min-h-[80px] w-full rounded-button border bg-bg-card px-4 py-2 text-text-body transition-colors placeholder:text-text-muted disabled:cursor-not-allowed disabled:opacity-50',
            error
              ? 'border-error focus:border-error focus:outline-none focus:ring-2 focus:ring-error/30'
              : cn('border-border focus:border-primary', focusRing),
            className
          )}
          ref={ref}
          maxLength={maxLength}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          {...props}
        />
        {maxLength && (
          <div className="absolute bottom-2 right-3 text-xs text-text-muted">
            {charCount}/{maxLength}
          </div>
        )}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
