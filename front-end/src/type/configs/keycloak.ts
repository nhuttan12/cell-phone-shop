import { KeycloakOnLoad, KeycloakPkceMethod } from 'keycloak-js';

export interface Keycloak {
	url: string;
	realmID: string;
	realmName: string;
	clientID: string;
	onLoad: KeycloakOnLoad;
	pkceMethod: KeycloakPkceMethod;
}
