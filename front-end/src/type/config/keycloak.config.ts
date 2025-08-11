import { KeycloakOnLoad, KeycloakPkceMethod } from 'keycloak-js';

export interface KeycloakConfig {
  url: string;
  realmID: string;
  realmName: string;
  clientID: string;
  onLoad: KeycloakOnLoad;
  pkceMethod: KeycloakPkceMethod;
}
