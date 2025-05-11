import { Button } from '@/components/ui/button';
import { Typography, typographyVariants } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function LoginBackground() {
  return (
    <div className="relative m-8 hidden w-1/2 overflow-hidden rounded-4xl lg:block">
      <Image
        src="/assets/login-bg.png"
        alt="Login background"
        fill
        className="rounded-4xl object-cover"
        priority
      />
      <div className="absolute inset-0 z-1">
        <Image
          src="/assets/login-bg-gradient.png"
          alt="Background gradient overlay"
          fill
          className="rounded-4xl object-cover mix-blend-overlay"
          priority
        />
      </div>
      <div className="absolute inset-0 z-10 mb-10 flex flex-col items-center justify-end text-center text-white">
        <Typography variant="bodyBase" className="mb-4">
          ONE PLATFORM FOR ALL ROAD FREIGHT
        </Typography>
        <Typography variant="h1" className="mb-8">
          Visibility, Efficiency, Sustainability
        </Typography>
        <Typography variant="h3" weight="light">
          <span className="text-fg-secondary">MENA’s</span> Most Efficient
          Digital Freight Network
        </Typography>
        <Button variant="secondary" className="mt-8">
          <Typography variant="bodyLarge" weight="light">
            Join the Kamion Logistics Network{' '}
            <span
              className={cn(
                typographyVariants({
                  variant: 'bodyLarge',
                  weight: 'medium',
                }),
                'underline'
              )}
            >
              Sing Up
            </span>
          </Typography>
          <ArrowRight className="size-5 font-bold" />
        </Button>
      </div>
    </div>
  );
}
