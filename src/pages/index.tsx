import { LoginBackground } from '@/components/pages/login/login-background';
import { LoginForm } from '@/components/pages/login/login-form';
import { LoginHeader } from '@/components/pages/login/login-header';
import { withPublicRoute } from '@/components/hoc/withPublicRoute';
import { PageTitle } from '@/components/seo/PageTitle';
import { Typography, typographyVariants } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

function Home() {
  return (
    <>
      <PageTitle
        title="Login | Kamion"
        description="Sign in to your Kamion admin account"
        canonical="https://admin.kamion.co"
        noindex={true}
      />
      <div className={cn(inter.className, 'flex min-h-screen')}>
        {/* Left side - Login background */}
        <LoginBackground />

        {/* Right side - Sign in form */}
        <div className="mx-auto mt-20 flex w-full max-w-[1000px] flex-col items-center justify-between gap-6 p-8 lg:w-1/2">
          <div className="mx-auto w-full space-y-8">
            <LoginHeader />
            <LoginForm />
          </div>
          <Typography variant="bodyBase" weight="light">
            @ Copyright 2024,{' '}
            <span
              className={typographyVariants({
                variant: 'bodyBase',
                weight: 'medium',
              })}
            >
              Kamion Logistics
            </span>{' '}
            - All rights reserved.
          </Typography>
        </div>
      </div>
    </>
  );
}

export default withPublicRoute(Home);
