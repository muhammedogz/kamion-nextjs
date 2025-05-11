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
      bodySmall: 'text-sm',
      bodyXSmall: 'text-xs leading-[166%]',
    },
    weight: {
      light: 'font-light',
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    variant: 'bodyBase',
    weight: 'regular',
  },
});

type TypographyProps = React.HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof typographyVariants> & {
    as?: React.ElementType;
  } & React.RefAttributes<HTMLParagraphElement>;

const Typography = ({
  className,
  variant,
  weight,
  as,
  ref,
  ...props
}: TypographyProps) => {
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
};
Typography.displayName = 'Typography';

export { Typography, typographyVariants };
