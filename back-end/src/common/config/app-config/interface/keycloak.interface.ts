/**
 * @description Keycloak config
 * @author Nhut Tan
 * @since 2025-08-07
 * @version 1.0.0
 */

export interface KeycloakConfig {
  url: string;
  realm: string;
  clientID: string;
  secret: string;
  logLevels: string;
  useNestLogger: boolean;
  jwksRequestsPerMinute: number;
  issuer: string;
  jwksUri: string;
}
