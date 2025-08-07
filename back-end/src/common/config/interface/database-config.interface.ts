import { MainDatabaseConfig } from './main-database.interface';
import { KeycloakDatabaseConfig } from './keycloak-database.interface';

export interface DatabaseConfig {
  main: MainDatabaseConfig;
  keycloak: KeycloakDatabaseConfig;
}
