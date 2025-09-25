/**
 * @description App config service
 * @author Nhut Tan
 * @since 2025-08-07
 * @modifies 2025-09-25
 * @version 1.0.1
 */

import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpConfig } from './interface/http.interface';
import { MainDatabaseConfig } from './interface/main-database.interface';
import { KeycloakConfig } from './interface/keycloak.interface';
import { KeycloakDatabaseConfig } from './interface/keycloak-database.interface';
import { Logger } from 'winston';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

export type SupportedDB = 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql';

@Injectable()
export class AppConfigService {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: Logger,
    private readonly configService: ConfigService,
  ) {}

  get http(): HttpConfig {
    return {
      host: this.configService.getOrThrow<string>('HTTP_HOST'),
      port: this.configService.getOrThrow<number>('HTTP_PORT'),
      debug: this.configService.get<boolean>('HTTP_DEBUG')!,
      useJsonLogger: this.configService.get<boolean>('HTTP_USE_JSON_LOGGER')!,
    };
  }

  get mainDatabase(): MainDatabaseConfig {
    return {
      dialect: this.configService.getOrThrow<string>('MAIN_DB_DIALECT'),
      host: this.configService.getOrThrow<string>('MAIN_DB_HOST'),
      port: this.configService.getOrThrow<number>('MAIN_DB_PORT'),
      username: this.configService.getOrThrow<string>('MAIN_DB_USERNAME'),
      password: this.configService.getOrThrow<string>('MAIN_DB_PASSWORD'),
      database: this.configService.getOrThrow<string>('MAIN_DB_DATABASE'),
    };
  }

  get keycloakDatabase(): KeycloakDatabaseConfig {
    return {
      dialect: this.configService.getOrThrow<string>('KEYCLOAK_DB_DIALECT'),
      host: this.configService.getOrThrow<string>('KEYCLOAK_DB_HOST'),
      port: this.configService.getOrThrow<number>('KEYCLOAK_DB_PORT'),
      username: this.configService.getOrThrow<string>('KEYCLOAK_DB_USERNAME'),
      password: this.configService.getOrThrow<string>('KEYCLOAK_DB_PASSWORD'),
      database: this.configService.getOrThrow<string>('KEYCLOAK_DB_DATABASE'),
      realmID: this.configService.getOrThrow<string>('KEYCLOAK_DB_REALM_ID'),
    };
  }

  get keycloak(): KeycloakConfig {
    return {
      url: this.configService.getOrThrow<string>('KEYCLOAK_URL'),
      realm: this.configService.getOrThrow<string>('KEYCLOAK_REALM'),
      clientID: this.configService.getOrThrow<string>('KEYCLOAK_CLIENT_ID'),
      secret: this.configService.getOrThrow<string>('KEYCLOAK_SECRET'),
      logLevels: this.configService.getOrThrow<string>('KEYCLOAK_LOG_LEVELS'),
      useNestLogger: this.configService.get<boolean>(
        'KEYCLOAK_USE_NEST_LOGGER',
      )!,
      jwksRequestsPerMinute: this.configService.get<number>(
        'KEYCLOAK_JWKS_REQUESTS_PER_MINUTE',
      )!,
      issuer: this.configService.getOrThrow<string>('KEYCLOAK_ISSUER'),
      jwksUri: this.configService.getOrThrow<string>('KEYCLOAK_JWKS_URI'),
    };
  }
}
