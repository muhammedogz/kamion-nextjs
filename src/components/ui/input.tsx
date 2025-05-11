import * as React from 'react';

import { cn } from '@/lib/utils';

type InputProps = React.ComponentProps<'input'> & {
  label?: React.ReactNode;
  endAdornment?: React.ReactNode;
};

function Input({
  className,
  type,
  label,
  id,
  endAdornment,
  ...props
}: InputProps) {
  return (
    <div
      className={cn(
        'border-input-border relative flex h-22 flex-col gap-2 rounded-lg border bg-transparent p-6 transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'
      )}
      {...props}
    >
      {label}
      <input
        id={id}
        type={type}
        data-slot="input"
        // Purposely set to new-password to prevent auto-fill
        autoComplete={'new-password'}
        className={cn(
          'placeholder:text-fg-muted/50 selection:bg-bg-primary flex w-full min-w-0 border border-none bg-none p-0 text-base transition-[color,box-shadow] outline-none selection:text-white file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'focus-visible:ring-none focus-visible:border-none',
          className
        )}
        {...props}
      />
      <div className="absolute inset-y-0 right-6 flex items-center">
        {endAdornment}
      </div>
    </div>
  );
}

export { Input };
