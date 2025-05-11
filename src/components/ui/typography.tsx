import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-[64px] font-medium leading-[138%] tracking-normal',
      h2: 'text-[48px] font-medium leading-[64px] tracking-normal',
      h3: 'text-2xl font-medium leading-[120%] tracking-normal',
      h4: 'text-lg font-medium leading-[120%] tracking-normal',
      bodyLarge: 'text-xl leading-[144%]',
      bodyBase: 'text-base',
      bodyMedium: 'text-sm',
      bodySmall: 'text-xs leading-[166%]',
    },
    weight: {
      light: 'font-light',
      regular: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    variant: 'bodyBase',
    weight: 'regular',
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, variant, weight, as, ...props }, ref) => {
    const isHeading = variant?.startsWith('h');
    // Determine the default element based on variant
    const defaultElement = isHeading
      ? (variant as 'h1' | 'h2' | 'h3' | 'h4')
      : 'p';

    const Component = as || defaultElement;

    return (
      <Component
        className={cn(
          typographyVariants({
            variant,
            weight,
            className,
          })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Typography.displayName = 'Typography';

export { Typography, typographyVariants };
