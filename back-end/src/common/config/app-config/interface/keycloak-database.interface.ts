/**
 * @description Keycloak database config
 * @author Nhut Tan
 * @since 2025-08-07
 * @version 1.0.0
 */

export interface KeycloakDatabaseConfig {
  dialect: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  realmID: string;
}
