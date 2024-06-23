import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import { LoaderCircleIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'rounded-lg tracking-tight inline-flex justify-center gap-x-2 whitespace-nowrap items-center disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-colors ease-in-out text-white',
  {
    variants: {
      variant: {
        primary:
          'bg-at-primary-500 focus-visible:ring-at-primary-500 hover:bg-at-primary-500/80',
        secondary:
          'bg-at-secondary-500 focus-visible:ring-at-secondary-500 hover:bg-at-secondary-500/80',
        success:
          'bg-at-emerald-500 focus-visible:ring-at-emerald-500 hover:bg-at-emerald-500/80',
        warning:
          'bg-at-yellow-500 focus-visible:ring-at-yellow-500 hover:bg-at-yellow-500/80',
        danger:
          'bg-at-red-500 focus-visible:ring-at-red-500 hover:bg-at-red-500/80',
      },
      size: {
        sm: 'px-2 py-1 text-sm font-medium h-8',
        md: 'px-4 py-2 text-lg font-semibold h-12',
        lg: 'px-5 py-3 text-xl font-semibold h-14',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      leftIcon,
      rightIcon,
      variant,
      size,
      loading = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ className, variant, size }))}
        disabled={loading}
        {...props}
      >
        {loading ? (
          <>
            <LoaderCircleIcon className="mr-2 animate-spin" />
            {children}
          </>
        ) : (
          <>
            {leftIcon && leftIcon} {children} {rightIcon && rightIcon}
          </>
        )}
      </Comp>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
export type { ButtonProps };
