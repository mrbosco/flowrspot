/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  email: string;
}

interface AuthActions {
  loginUser: (token: string, email: string) => void;
  refreshToken: (newToken: string) => void;
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
          get().isLoggedIn && set({ isLoggedIn: false });
        },
        refreshToken: (newToken) => {
          set({ token: newToken });
        },
      }),
      {
        name: 'auth-storage',
      }
    )
  )
);
