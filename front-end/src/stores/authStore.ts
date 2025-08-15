import { create } from 'zustand';
import { AuthState } from '@/type/auths/authState';
import { persist } from 'zustand/middleware';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      authenticated: false,
      setAuthenticated: (auth: boolean) => set({ authenticated: auth }),

      accessToken: null,
      setAccessTokens: (accessToken: string) =>
        set({
          accessToken,
        }),
      clearTokens: () =>
        set({
          accessToken: null,
        }),
    }),
    {
      name: 'auths-storage',
      partialize: (state: AuthState) => ({
        authenticated: state.authenticated,
        accessToken: state.accessToken,
      }),
    },
  ),
);
