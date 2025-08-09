export interface KeycloakConfig {
  url: string;
  realmID: string;
  clientID: string;
  onLoad: string;
  pkceMethod: string;
}
