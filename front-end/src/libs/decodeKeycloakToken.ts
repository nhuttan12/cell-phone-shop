import { jwtDecode } from "jwt-decode";
import { KeycloakAccessToken } from "@/type/tokens/keycloakAccessTokens";

export function decodeKeycloakToken(accessToken: string): KeycloakAccessToken | null {
  try {
    const decoded: KeycloakAccessToken = jwtDecode<KeycloakAccessToken>(accessToken);

    return decoded;
  } catch (err) {
    console.error("Invalid token", err);
    return null;
  }
}
