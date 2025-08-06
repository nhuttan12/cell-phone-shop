export interface KeycloakConfig {
  url: string;
  realm: string;
  clientId: string;
  secret: string;
  logLevels: string;
  useNestLogger: boolean;
  jwksRequestsPerMinute: number;
  issuer: string;
  jwksUri: string;
}
