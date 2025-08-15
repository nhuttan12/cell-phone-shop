import { ServerConfig } from '@/type/configs/serverConfig';
import { Keycloak } from '@/type/configs/keycloak';

export interface AppConfig {
  server: ServerConfig;
  keycloak: Keycloak;
}
