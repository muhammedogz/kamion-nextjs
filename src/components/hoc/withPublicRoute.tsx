import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { ROUTES } from '@/constants/routes';

export function withPublicRoute<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithPublicRoute(props: P) {
    const router = useRouter();
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
      if (isAuthenticated) {
        router.replace(ROUTES.DASHBOARD);
      }
    }, [isAuthenticated, router]);

    // Don't render anything on server-side
    if (!isClient) {
      return null;
    }

    if (isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}
