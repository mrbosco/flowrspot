/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { getAuthenticatedUser } from '../services/apiUsers';

interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  email: string;
}

interface AuthActions {
  loginUser: (token: string, email: string) => void;
  logoutUser: () => void;
}

export const useAuthStore = create<AuthState & AuthActions>()(
  devtools(
    persist(
      (set, get) => ({
        isLoggedIn: false,
        token: null,
        email: '',
        loginUser: async (token, email) => {
          set({ token, email, isLoggedIn: true });
        },
        logoutUser: () => {
          set({ isLoggedIn: false, token: null });
        },
      }),
      {
        name: 'auth-storage',
      }
    )
  )
);
