import { Injectable, LogLevel } from '@nestjs/common';
import {
  KeycloakConnectOptions,
  KeycloakConnectOptionsFactory,
} from 'nest-keycloak-connect';
import { AppConfigService } from './app-config.service';
import { KeycloakConfig } from '../../common/config/interface/keycloak.interface';

@Injectable()
export class KeycloakConfigService implements KeycloakConnectOptionsFactory {
  constructor(private readonly config: AppConfigService) {}

  createKeycloakConnectOptions(): KeycloakConnectOptions {
    const keycloak: KeycloakConfig = this.config.keycloak;
    return {
      authServerUrl: keycloak.url,
      realm: keycloak.realm,
      clientId: keycloak.clientId,
      secret: keycloak.secret,
      logLevels: ['verbose', 'debug', 'info', 'warn', 'error'] as LogLevel[],
      useNestLogger: keycloak.useNestLogger,
    };
  }
}
