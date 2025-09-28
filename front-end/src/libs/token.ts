import { useAuthStore } from '@/stores/authStore';
import Cookies from 'js-cookie';

export function getAccessToken(): string | null {
	return useAuthStore.getState().accessToken;
}

export function setAccessToken(accessToken: string): void {
	return useAuthStore.getState().setAccessTokens(accessToken);
}

export function clearAccessToken(): void {
	return useAuthStore.getState().clearTokens();
}

export function setRefreshToken(refreshToken: string): void {
	Cookies.set('refreshToken', refreshToken, {
		secure: true,
		sameSite: 'strict',
		expires: 7,
	});
}

export function getRefreshToken(): string | undefined {
	return Cookies.get('refreshToken');
}

export function clearRefreshToken(): void {
	return Cookies.remove('refreshToken');
}
