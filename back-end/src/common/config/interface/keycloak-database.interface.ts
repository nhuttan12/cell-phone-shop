export interface KeycloakDatabaseConfig {
  dialect: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  realmID: string;
}
