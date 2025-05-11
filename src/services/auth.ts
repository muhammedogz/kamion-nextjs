import { apiClient } from '@/lib/apiClient';
import { API_ENDPOINTS } from '@/constants/api';
import { BaseApiResponse } from '@/types/api';
import { LoginCredentials, LoginResponse } from '@/types/services/auth';

export const authService = {
  login: async (
    credentials: LoginCredentials
  ): Promise<BaseApiResponse<LoginResponse>> =>
    apiClient.post(API_ENDPOINTS.AUTH.LOGIN, credentials),
};
