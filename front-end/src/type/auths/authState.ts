export interface AuthState {
  authenticated: boolean;
  setAuthenticated: (auth: boolean) => void;

  accessToken: string | null;
  setAccessTokens: (accessToken: string) => void;
  clearTokens: () => void;
}
