/**
 * @description Keycloak config service
 * @author Nhut Tan
 * @since 2025-09-25
 * @version 1.0.0
 */

import { Injectable, LogLevel } from '@nestjs/common';
import {
  KeycloakConnectOptions,
  KeycloakConnectOptionsFactory,
} from 'nest-keycloak-connect';
import { AppConfigService } from '../app-config/app-config.service';
import { KeycloakConfig } from '../app-config/interface/keycloak.interface';

@Injectable()
export class KeycloakConfigService implements KeycloakConnectOptionsFactory {
  constructor(private readonly config: AppConfigService) {}

  createKeycloakConnectOptions(): KeycloakConnectOptions {
    const keycloak: KeycloakConfig = this.config.keycloak;
    return {
      authServerUrl: keycloak.url,
      realm: keycloak.realm,
      clientId: keycloak.clientID,
      secret: keycloak.secret,
      logLevels: ['verbose', 'debug', 'info', 'warn', 'error'] as LogLevel[],
      useNestLogger: keycloak.useNestLogger,
    };
  }
}
