import { useAuthStore } from '@/stores/authStore';

export function getAccessToken(): string | null {
  return useAuthStore.getState().accessToken;
}

export function setAccessToken(accessToken: string, refreshToken: string): void {
  return useAuthStore.getState().setTokens(accessToken, refreshToken);
}

export function clearAccessToken(): void {
  return useAuthStore.getState().clearTokens();
}
