import { HttpConfig } from './http.interface';
import { KeycloakConfig } from './keycloak.interface';
import { DatabaseConfig } from './database-config.interface';

export interface AppConfig {
  http: HttpConfig;
  database: DatabaseConfig;
  keycloak: KeycloakConfig;
}
