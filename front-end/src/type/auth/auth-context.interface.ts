import keycloak from '@/lib/keycloak';

export interface AuthContextType {
  authenticated: boolean;
  keycloak: typeof keycloak;
}
