export type BaseApiResponse<T> = {
  success: boolean;
  status: number;
  message: string | null;
  error_code: number;
  data: T;
};
