'use client';

import { useAuthStore } from '@/stores/authStore';
import { useEffect } from 'react';
import { config} from '@/configs/config.env';
import keycloak from '@/libs/keycloak';

export default function KeycloakInitialize() {
  // 1. Get the auth state zustand
  const { setAuthenticated } = useAuthStore();

  // 2. Initialize keycloak
  useEffect(() => {
    keycloak
      .init({
        onLoad: config.keycloak.onLoad,
      })
      .then((auth) => {
        setAuthenticated(auth);
      });
  }, [keycloak, setAuthenticated]);

  return null;
}
