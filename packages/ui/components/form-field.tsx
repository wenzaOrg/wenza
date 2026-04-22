import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cn } from '../lib/utils';

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  error?: string;
  helperText?: string;
  name: string;
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      'text-sm font-medium leading-none text-text-heading peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export function FormField({
  label,
  error,
  helperText,
  name,
  children,
  className,
  ...props
}: FormFieldProps) {
  const errorId = `${name}-error`;
  const helperId = `${name}-helper`;

  return (
    <div className={cn('flex flex-col space-y-2', className)} {...props}>
      <Label htmlFor={name}>{label}</Label>
      {children}

      {error && (
        <p id={errorId} className="text-sm font-medium text-error">
          {error}
        </p>
      )}
      {!error && helperText && (
        <p id={helperId} className="text-sm text-text-muted">
          {helperText}
        </p>
      )}
    </div>
  );
}
