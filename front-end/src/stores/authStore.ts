import { create } from 'zustand';
import { AuthState } from '@/type/auth/auth-state.interface';
import keycloak from '@/libs/keycloak';
import { persist } from 'zustand/middleware';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      authenticated: false,
      setAuthenticated: (auth: boolean) => set({ authenticated: auth }),

      accessToken: null,
      refreshToken: null,
      setTokens: (accessToken: string, refreshToken: string) =>
        set({
          accessToken,
          refreshToken,
        }),
      clearTokens: () =>
        set({
          accessToken: null,
          refreshToken: null,
        }),
    }),
    {
      name: 'auth-storage',
      partialize: (state: AuthState) => ({
        authenticated: state.authenticated,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
      }),
    },
  ),
);
