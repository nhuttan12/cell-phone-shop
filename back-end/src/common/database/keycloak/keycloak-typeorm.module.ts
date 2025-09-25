/**
 * @description Keycloak typeorm module
 * @author Nhut Tan
 * @since 2025-09-25
 * @version 1.0.0
 */

import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeycloakUser } from '../../../modules/user/entities/keycloak-user.entity';
import { AppConfigModule } from '../../config/app-config/app-config.module';
import {
  AppConfigService,
  SupportedDB,
} from '../../config/app-config/app-config.service';

@Module({})
export class KeycloakTypeormModule {
  static forRootAsync(): DynamicModule {
    return {
      module: KeycloakTypeormModule,
      imports: [
        AppConfigModule,
        TypeOrmModule.forRootAsync({
          name: 'keycloak',
          inject: [AppConfigService],
          useFactory: (config: AppConfigService) => ({
            type: config.keycloakDatabase.dialect as SupportedDB,
            host: config.keycloakDatabase.host,
            port: config.keycloakDatabase.port,
            username: config.keycloakDatabase.username,
            password: config.keycloakDatabase.password,
            database: config.keycloakDatabase.database,
            entities: [KeycloakUser],
            synchronize: false,
          }),
        }),
      ],
      exports: [],
    };
  }
}
