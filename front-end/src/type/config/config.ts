import { ServerConfig } from '@/type/config/server.config';
import { KeycloakConfig } from '@/type/config/keycloak.config';

export interface AppConfig {
  server: ServerConfig;
  keycloak: KeycloakConfig;
}
