/**
 * @description Database config
 * @author Nhut Tan
 * @since 2025-08-07
 * @version 1.0.0
 */

import { MainDatabaseConfig } from './main-database.interface';
import { KeycloakDatabaseConfig } from './keycloak-database.interface';

export interface DatabaseConfig {
  main: MainDatabaseConfig;
  keycloak: KeycloakDatabaseConfig;
}
