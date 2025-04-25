import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { loginUser } from '../app/(routes)/signin/service/signinService';
import Cookies from 'js-cookie';
import { UserDetails } from '@/helper/helper';

interface AuthState {
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  user: UserDetails | null;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  isAuthenticated: false,
  user: null,
};

export const merchantLogin = createAsyncThunk(
  'auth/merchantLogin',
  async ({ email, password }: { email: string; password: string }) => {
    const response = await loginUser({ email, password });
    Cookies.set('token', response.token, { expires: 7, path: '/' });
    return response;
  }
);

export const customerLogin = createAsyncThunk(
  'auth/customerLogin',
  async ({ email, password }: { email: string; password: string }) => {
    const response = await loginUser({ email, password });
    Cookies.set('token', response.token, { expires: 7, path: '/' });
    return response;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      Cookies.remove('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(merchantLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(merchantLogin.fulfilled, (state, action: PayloadAction<UserDetails>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(merchantLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Login failed';
      })
      .addCase(customerLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(customerLogin.fulfilled, (state, action: PayloadAction<UserDetails>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(customerLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Login failed';
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
