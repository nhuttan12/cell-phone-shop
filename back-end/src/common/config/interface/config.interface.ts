import { DatabaseConfig } from './database.interface';
import { HttpConfig } from './http.interface';
import { KeycloakConfig } from './keycloak.interface';
import { KeycloakDatabaseConfig } from './keycloak-database.interface';

export interface AppConfig {
  http: HttpConfig;
  database: {
    postgres: DatabaseConfig;
  };
  keycloak: KeycloakConfig;
  keycloakDatabase: KeycloakDatabaseConfig;
}
