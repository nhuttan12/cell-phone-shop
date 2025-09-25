/**
 * @description App module
 * @author Nhut Tan
 * @since 2025-08-07
 * @version 1.0.0
 */

import { Module } from '@nestjs/common';
import {
  AuthGuard,
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './common/config/app-config/schema/schema-validation';
import { APP_GUARD } from '@nestjs/core';
import { LoggerModule } from './common/logger/logger.module';
import { KeycloakConfigService } from './common/config/keycloak/keycloak-config.service';
import { AppConfigModule } from './common/config/app-config/app-config.module';
import { DatabaseModule } from './common/database/typeorm/database.module';
import { KeycloakConfigModule } from './common/config/keycloak/keycloak-config.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema,
    }),

    AppConfigModule,
    KeycloakConfigModule,

    KeycloakConnectModule.registerAsync({
      imports: [KeycloakConfigModule],
      useExisting: KeycloakConfigService,
    }),
    LoggerModule.forRootAsync(),
    // DatabaseModule,
    // KeycloakTypeormModule.forRootAsync(),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard, //By default, it will throw a 401 unauthorized when it is unable to verify the JWT token or Bearer header is missing.
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard, //Only controllers annotated with @Resource and methods with @Scopes are handled by this guard
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard, //Permissive by default. Used by controller methods annotated with @Roles
    },
  ],
})
export class AppModule {}
