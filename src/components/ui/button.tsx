import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { typographyVariants } from '@/components/ui/typography';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
    typographyVariants({ variant: 'bodyBase', weight: 'medium' })
  ),
  {
    variants: {
      variant: {
        default:
          'bg-bg-primary text-white shadow-xs hover:bg-bg-primary/90 px-2 h-4 rounded-2xl',
        secondary:
          'bg-bg-secondary text-white shadow-xs hover:bg-bg-secondary/80 rounded-[110px]',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-18 px-8 py-4',
        sm: 'h-12 px-6 py-3',
        lg: 'h-16 px-10 py-5',
        icon: 'size-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  } & {
    isLoading?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  isLoading = false,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      disabled={isLoading}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {isLoading ? <Loader2 className="size-4 animate-spin" /> : null}
      {children}
    </Comp>
  );
}

export { Button, buttonVariants };
