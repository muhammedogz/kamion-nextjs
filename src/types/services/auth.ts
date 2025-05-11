export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  type: number;
  type_value: string;
  status: number;
  phone_verified_at: number | null;
  email_verified_at: number | null;
  token: string;
  created_at: number;
  updated_at: number;
}
