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
