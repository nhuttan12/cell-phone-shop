export interface KeycloakAccessToken {
	'acr': string;
	'allowed-origins'?: string[];
	'aud': string[] | string;
	'auth_time': number;
	'azp': string;
	'email'?: string;
	'email_verified'?: boolean;
	'exp': number;
	'family_name'?: string;
	'given_name'?: string;
	'iat': number;
	'iss': string;
	'jti': string;
	'name'?: string;
	'preferred_username': string;
	'realm_access'?: {
		roles: string[];
	};
	'resource_access'?: {
		[clientId: string]: {
			roles: string[];
		};
	};
	'scope'?: string;
	'sid'?: string;
	'sub': string;
	'typ': string;
}
