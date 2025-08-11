import { KeycloakTokenResponse } from '@/type/keycloak/keycloak-token-response';
import { RawKeycloakTokenResponse } from '@/type/keycloak/raw-keycloak-token-response';

export default function mapKeycloakResponse(
  data: RawKeycloakTokenResponse,
): KeycloakTokenResponse {
  return {
    accessToken: data.access_token,
    expiresIn: data.expires_in,
    refreshExpiresIn: data.refresh_expires_in,
    refreshToken: data.refresh_token,
    tokenType: data.token_type,
    notBeforePolicy: data['not-before-policy'],
    sessionState: data.session_state,
    scope: data.scope,
  };
}
