import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User } from '@wenza/api-client/types';

/**
 * Auth Redux slice per wenza/README.md §9.1.
 *
 * Persisted to localStorage via redux-persist so token survives reloads.
 * The BaseRequest Axios interceptor reads the token from localStorage directly.
 */
export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /**
     * Called on successful login / register.
     * Stores the user object and Sanctum plain-text token.
     */
    setAuth: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    /**
     * Called on logout or 401 Unauthenticated response.
     * Clears all auth state — redux-persist writes to localStorage.
     */
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
