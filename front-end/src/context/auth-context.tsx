'use client';

import React, { createContext, useEffect } from 'react';
import keycloak from '@/lib/keycloak';
import { config } from '@/config/config.env';
import { AuthContextType } from '@/type/auth/auth-context.interface';

export const AuthContext = createContext<AuthContextType>({
  authenticated: false,
  keycloak,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = React.useState(false);

  useEffect(() => {
    keycloak
      .init({
        onLoad: config.keycloak.onLoad,
        pkceMethod: config.keycloak.pkceMethod,
        silentCheckSsoRedirectUri:
          window.location.origin + '/silent-check-sso.html',
      })
      .then((auth: boolean) => {
        setAuthenticated(auth);
      })
      .catch((error: unknown) => {
        console.error('Failed to initialize Keycloak', error);
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        keycloak,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
