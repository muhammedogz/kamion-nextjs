import { LoginBackground } from '@/components/pages/login/login-background';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { LoginForm } from '@/components/pages/login/login-form';
import { LoginHeader } from '@/components/pages/login/login-header';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function Home() {
  return (
    <div className={cn(inter.className, 'flex min-h-screen')}>
      {/* Left side - Login background */}
      <LoginBackground />

      {/* Right side - Sign in form */}
      <div className="mx-auto mt-20 flex w-full max-w-[1000px] flex-col justify-between gap-6 p-8 lg:w-1/2">
        <div className="mx-auto w-full space-y-8">
          <LoginHeader />
          <LoginForm />
        </div>
        <div>footer</div>
      </div>
    </div>
  );
}
