import keycloak from '@/libs/keycloak';

export interface AuthState {
  authenticated: boolean;
  setAuthenticated: (auth: boolean) => void;

  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (accessToken: string, refreshToken: string) => void;
  clearTokens: () => void;
}
