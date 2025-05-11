import { Typography, typographyVariants } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { Copyright } from 'lucide-react';
import Image from 'next/image';

export function LoginHeader() {
  return (
    <div className={cn('space-y-6')}>
      <Image
        src="/assets/kamion-logo.png"
        alt="Kamion Logo"
        width={56}
        height={56}
      />
      <Typography
        variant="h2"
        weight="light"
        className="text-fg-primary whitespace-pre-line"
      >
        <span
          className={cn(
            typographyVariants({ variant: 'h2', weight: 'medium' }),
            'inline-flex gap-1'
          )}
        >
          Kamion <Copyright />
        </span>
        {'\n'}
        Dashboard Log In
      </Typography>
    </div>
  );
}
