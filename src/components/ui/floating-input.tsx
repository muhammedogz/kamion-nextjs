import * as React from 'react';

import { cn } from '@/lib/utils';

type InputProps = React.ComponentProps<'input'> & {
  label?: React.ReactNode;
  endAdornment?: React.ReactNode;
};

function FloatingInput({
  className,
  type,
  label,
  id,
  endAdornment,
  ref,
  ...props
}: InputProps) {
  return (
    <div
      className={cn(
        'group border-border-input relative flex h-22 flex-col gap-2 rounded-lg border bg-transparent p-6 transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'
      )}
      {...props}
    >
      {label}
      <input
        ref={ref}
        id={id}
        type={type}
        data-slot="input"
        // Purposely set to new-password to prevent auto-fill
        autoComplete="new-password"
        className={cn(
          'placeholder:text-fg-muted/50 selection:bg-bg-primary/20 text-fg-primary flex h-full w-full min-w-0 border border-none bg-none p-0 text-base transition-[color,box-shadow] outline-none selection:text-white file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:invisible disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          'focus-visible:ring-none focus-within:placeholder:visible focus-visible:border-none',
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

export { FloatingInput as Input };
