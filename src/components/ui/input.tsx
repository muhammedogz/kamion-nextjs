import * as React from 'react';

import { cn } from '@/lib/utils';

type InputProps = React.ComponentProps<'input'> & {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  variant?: 'default' | 'ghost';
};

function Input({
  className,
  type,
  id,
  startAdornment,
  endAdornment,
  variant = 'default',
  ...props
}: InputProps) {
  return (
    <div className="group relative">
      <div className="absolute inset-y-0 left-4 flex items-center transition-transform duration-200 group-focus-within:scale-110">
        {startAdornment}
      </div>
      <input
        id={id}
        type={type}
        data-slot="input"
        // Purposely set to new-password to prevent auto-fill
        autoComplete={'new-password'}
        className={cn(
          'placeholder:text-fg-muted/50 selection:bg-bg-primary/20',
          'flex w-full min-w-0 rounded-full',
          'px-4 py-2.5 text-base transition-all duration-200',
          'ring-0 outline-none',
          'hover:border-border/60 hover:bg-background/80',
          'focus:border-primary/50 focus:bg-background focus:ring-primary/20 focus:ring-1',
          'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          'file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium',
          'md:text-sm',
          variant === 'ghost' &&
            'hover:bg-background/50 border-none bg-transparent',
          className
        )}
        {...props}
      />
      <div className="absolute inset-y-0 right-4 flex items-center transition-transform duration-200 group-focus-within:scale-110">
        {endAdornment}
      </div>
    </div>
  );
}

export { Input };
