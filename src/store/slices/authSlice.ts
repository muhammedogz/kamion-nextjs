import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

const getInitialState = (): AuthState => {
  const token = Cookies.get('token');
  return {
    token: token || null,
    isAuthenticated: !!token,
  };
};

const authSlice = createSlice({
  name: 'auth',
  initialState: getInitialState(),
  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string }>) => {
      const { token } = action.payload;
      state.token = token;
      state.isAuthenticated = true;
      Cookies.set('token', token, { expires: 7 }); // Expires in 7 days
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      Cookies.remove('token');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
