import Keycloak from 'keycloak-js';
import { config} from '@/config/config.env'

const keycloak = Keycloak({
  url: config.keycloak.url,
  realm: config.keycloak.realmID,
  clientId: config.keycloak.clientID,
});

export default keycloak;
