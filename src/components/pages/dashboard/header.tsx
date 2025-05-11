import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { Copyright, LogOut } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ROUTES } from '@/constants/routes';
import { useDispatch } from 'react-redux';
import { logout } from '@/store/slices/authSlice';

export function Header() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    router.push(ROUTES.ROOT);
  };

  return (
    <header className="flex h-20 w-full items-center justify-between bg-white px-8">
      <div className="w-24" />
      <div className="flex items-center justify-center gap-3">
        <Image
          src="/assets/kamion-logo-linear.png"
          alt="Kamion Logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <div className="flex flex-col">
          <Typography
            variant="bodySmall"
            weight="medium"
            className="text-fg-primary inline-flex gap-1"
          >
            Kamion <Copyright className="text-fg-primary size-4" />
          </Typography>
          <Typography
            variant="bodySmall"
            weight="medium"
            className="text-fg-tertiary"
          >
            Yükveren Paneli
          </Typography>
        </div>
      </div>
      <div className="flex w-24 justify-end">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
          className="text-fg-primary hover:bg-bg-primary/90"
        >
          <Typography variant="bodyBase" weight="medium">
            Logout
          </Typography>
          <LogOut className="size-4" />
        </Button>
      </div>
    </header>
  );
}
