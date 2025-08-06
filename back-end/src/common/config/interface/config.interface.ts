import { DatabaseConfig } from './database.interface';
import { HttpConfig } from './http.interface';
import { KeycloakConfig } from './keycloak.interface';

export interface AppConfig {
  http: HttpConfig;
  db: {
    postgres: DatabaseConfig;
  };
  keycloak: KeycloakConfig;
}
