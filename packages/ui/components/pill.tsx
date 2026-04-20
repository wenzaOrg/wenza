import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const pillVariants = cva(
  'inline-flex items-center rounded-pill px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50',
  {
    variants: {
      variant: {
        primary: 'bg-primary/10 text-primary',
        secondary: 'bg-secondary/10 text-secondary',
        gold: 'bg-gold/10 text-gold',
        success: 'bg-success/10 text-success',
        muted: 'bg-text-muted/10 text-text-muted',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface PillProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pillVariants> {}

function Pill({ className, variant, ...props }: PillProps) {
  return <div className={cn(pillVariants({ variant }), className)} {...props} />;
}

export { Pill, pillVariants };
