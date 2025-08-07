import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from './interface/config.interface';
import { HttpConfig } from './interface/http.interface';
import { DatabaseConfig } from './interface/database.interface';
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
    private readonly configSerivce: ConfigService<AppConfig>,
  ) {}

  get http(): HttpConfig {
    const httpConfig: HttpConfig = this.configSerivce.getOrThrow('http');
    this.logger.debug('httpConfig', httpConfig);

    return httpConfig;
  }

  get postgresDatabase(): DatabaseConfig {
    const databaseConfig = this.configSerivce.getOrThrow('database');
    this.logger.debug('databaseConfig', databaseConfig);

    const postgresConfig = databaseConfig.postgres;
    this.logger.debug('postgresConfig', postgresConfig);

    return databaseConfig;
  }

  get keycloak(): KeycloakConfig {
    const keycloakConfig: KeycloakConfig =
      this.configSerivce.getOrThrow('keycloak');
    this.logger.debug('keycloakConfig', keycloakConfig);

    return keycloakConfig;
  }

  get keycloakDatabase(): KeycloakDatabaseConfig {
    const keycloakDatabaseConfig: KeycloakDatabaseConfig =
      this.configSerivce.getOrThrow('keycloakDatabase');
    this.logger.debug('keycloakDatabaseConfig', keycloakDatabaseConfig);

    return keycloakDatabaseConfig;
  }
}
