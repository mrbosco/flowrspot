/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
}

interface AuthActions {
  loginUser: (token: string) => void;
  logoutUser: () => void;
}

export const useAuthStore = create<AuthState & AuthActions>()(
  devtools(
    persist(
      (set, get) => ({
        isLoggedIn: false,
        token: null,
        loginUser: (token) => {
          set({ isLoggedIn: true, token });
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
