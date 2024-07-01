import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const headingVariants = cva('scroll-m-20', {
  variants: {
    as: {
      h1: 'text-5xl font-extrabold tracking-tight lg:text-6xl',
      h2: 'text-4xl font-extrabold tracking-tight lg:text-5xl',
      h3: 'text-3xl font-extrabold tracking-tight lg:text-4xl',
      h4: 'text-2xl font-extrabold tracking-tight lg:text-3xl',
      h5: 'text-xl font-extrabold tracking-tight lg:text-2xl',
      h6: 'text-lg font-extrabold tracking-tight lg:text-xl',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
  },
  defaultVariants: {
    as: 'h1',
    weight: 'extrabold',
  },
});

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as, weight, className, children, ...props }, ref) => {
    const Comp = as ?? 'h1';

    return (
      <Comp
        ref={ref}
        className={cn(headingVariants({ as, weight, className }))}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Heading.displayName = 'Heading';

const paragraphVariants = cva('scroll-m-20 text-pretty', {
  variants: {
    as: {
      body1: 'leading-5 text-base font-normal',
      body2: 'leading-7 text-lg font-medium',
    },
  },
  defaultVariants: {
    as: 'body1',
  },
});

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLHeadingElement, ParagraphProps>(
  ({ as, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(paragraphVariants({ as, className }))}
        {...props}
      />
    );
  },
);

Paragraph.displayName = 'Paragraph';

export { Heading, Paragraph, headingVariants, paragraphVariants };
export type { HeadingProps, ParagraphProps };
