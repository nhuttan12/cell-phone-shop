import { Module } from '@nestjs/common';
import {
  AuthGuard,
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import { ConfigModule } from '@nestjs/config';
import configuration from './common/config/configuration';
import { validationSchema } from './common/config/schema-validation';
import { APP_GUARD } from '@nestjs/core';
import { LoggerModule } from './common/logger/logger.module';
import { KeycloakConfigService } from './modules/config/keycloak-config.service';
import { AppConfigModule } from './modules/config/app-config.module';

@Module({
  imports: [
    AppConfigModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      validationSchema,
    }),
    KeycloakConnectModule.registerAsync({
      useExisting: KeycloakConfigService,
      imports: [ConfigModule],
    }),
    LoggerModule.forRootAsync(),
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
