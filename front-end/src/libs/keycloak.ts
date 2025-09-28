import Keycloak from 'keycloak-js';
import { config } from '@/configs/config.env';

const keycloak = new Keycloak({
	url: config.keycloak.url,
	realm: config.keycloak.realmName,
	clientId: config.keycloak.clientID,
});

export default keycloak;
