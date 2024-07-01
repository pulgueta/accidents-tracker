'use client';

import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

import { Root } from '@radix-ui/react-label';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const labelVariants = cva(
  'font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
);

type LabelProps = ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof labelVariants>;

const Label = forwardRef<ElementRef<typeof Root>, LabelProps>(
  ({ className, ...props }, ref) => (
    <Root ref={ref} className={cn(labelVariants(), className)} {...props} />
  ),
);

Label.displayName = Root.displayName;

export { Label, labelVariants };
export type { LabelProps };
