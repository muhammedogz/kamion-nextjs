import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { authService } from '@/services/auth';
import { setCredentials } from '@/store/slices/authSlice';
import { useRouter } from 'next/router';
import { ROUTES } from '@/constants/routes';
import { LoginCredentials } from '@/types/services/auth';

export const useLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  return useMutation({
    mutationFn: (credentials: LoginCredentials) =>
      authService.login(credentials),
    onSuccess: (response) => {
      dispatch(setCredentials({ token: response.data.token }));
      router.push(ROUTES.DASHBOARD);
    },
  });
};
