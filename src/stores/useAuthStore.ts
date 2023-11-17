import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState } from '../types/storeTypes';

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      id: 0,
      isLoggedIn: false,
      token: null,
      email: '',
      loginUser: async (token, email) => {
        set({ token, email, isLoggedIn: true });
      },
      logoutUser: () => {
        get().isLoggedIn && set({ token: null, email: '', isLoggedIn: false });
      },
      refreshToken: (newToken) => {
        set({ token: newToken });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

export const useIsLoggedIn = () => {
  return useAuthStore((state) => state.isLoggedIn);
};
