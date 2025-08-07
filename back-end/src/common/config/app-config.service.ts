import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from './interface/config.interface';
import { HttpConfig } from './interface/http.interface';
import { MainDatabaseConfig } from './interface/main-database.interface';
import { KeycloakConfig } from './interface/keycloak.interface';
import { KeycloakDatabaseConfig } from './interface/keycloak-database.interface';
import { Logger } from 'winston';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { DatabaseConfig } from './interface/database-config.interface';

export type SupportedDB = 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql';

@Injectable()
export class AppConfigService {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: Logger,
    private readonly configService: ConfigService<AppConfig>,
  ) {}

  get http(): HttpConfig {
    const httpConfig: HttpConfig = this.configService.getOrThrow('http');
    this.logger.debug('http config information', httpConfig);

    return httpConfig;
  }

  get mainDatabase(): MainDatabaseConfig {
    const dbConfig: DatabaseConfig = this.configService.getOrThrow('database');
    this.logger.debug('main database config information', dbConfig);

    return dbConfig.main;
  }

  get keycloakDatabase(): KeycloakDatabaseConfig {
    const dbConfig: DatabaseConfig = this.configService.getOrThrow('database');
    this.logger.debug('keycloak database config information', dbConfig);

    return dbConfig.keycloak;
  }

  get keycloak(): KeycloakConfig {
    const keycloakConfig: KeycloakConfig =
      this.configService.getOrThrow('keycloak');
    this.logger.debug('keycloak config information', keycloakConfig);
    return keycloakConfig;
  }
}
