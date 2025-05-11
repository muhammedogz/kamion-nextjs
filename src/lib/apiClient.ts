import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { ROUTES } from '@/constants/routes';

const API_URL = 'https://api.dev.kamion.co/api/admin';

const client = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
client.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response interceptor
client.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = ROUTES.ROOT;
    }
    return Promise.reject(error);
  }
);

export const apiClient = client;
