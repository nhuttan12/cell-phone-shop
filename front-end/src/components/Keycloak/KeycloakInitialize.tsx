'use client';

import { useAuthStore } from '@/stores/authStore';
import { useEffect } from 'react';
import { config } from '@/configs/config.env';
import keycloak from '@/libs/keycloak';
import { AuthState } from '@/type/auths/authState';

export default function KeycloakInitialize() {
	// 1. Get the auths state zustand
	const setAuthenticated = useAuthStore(
		(state: AuthState) => state.setAuthenticated,
	);
	const setAccessToken = useAuthStore(
		(state: AuthState) => state.setAccessTokens,
	);

	// 2. Initialize tokens
	useEffect(() => {
		keycloak
			.init({
				onLoad: config.keycloak.onLoad,
				pkceMethod: config.keycloak.pkceMethod,
			})
			.then((auth: boolean) => {
				setAuthenticated(auth);

				if (keycloak.authenticated && keycloak.token) {
					setAccessToken(keycloak.token);
				} else {
					setAccessToken('');
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}, [keycloak, setAuthenticated]);

	return null;
}
