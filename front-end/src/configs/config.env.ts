import { AppConfig } from '@/type/configs/config';
import { KeycloakOnLoad, KeycloakPkceMethod } from 'keycloak-js';

export const config: AppConfig = {
  server: {
    port: parseInt(process.env.NEXT_PUBLIC_SERVER_PORT || '3000', 10),
  },
  keycloak: {
    url: process.env.NEXT_PUBLIC_KEYCLOAK_URL || '',
    realmID: process.env.NEXT_PUBLIC_KEYCLOAK_REALM_ID || '',
    realmName: process.env.NEXT_PUBLIC_KEYCLOAK_REALM_NAME || '',
    clientID: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID || '',
    onLoad: (process.env.NEXT_PUBLIC_KEYCLOAK_ON_LOAD as KeycloakOnLoad) || '',
    pkceMethod: process.env
      .NEXT_PUBLIC_KEYCLOAK_PKCE_METHOD as KeycloakPkceMethod,
  },
};
