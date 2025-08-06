import { Module } from '@nestjs/common';
import {
  AuthGuard,
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import { ConfigModule } from '@nestjs/config';
import configuration from './common/config/configuration/configuration';
import { validationSchema } from './common/config/schema/schema-validation';
import { APP_GUARD } from '@nestjs/core';
import { LoggerModule } from './common/logger/logger.module';
import { KeycloakConfigService } from './common/config/keycloak-config.service';
import { AppConfigModule } from './common/config/app-config.module';
import { TypeormModule } from './common/database/typeorm/typeorm.module';
import { KeycloakTypeormModule } from './common/database/keycloak/keycloak-typeorm.module';
import { AutoMapperModule } from './common/auto-mapper/auto-mapper.module';

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
    TypeormModule.forRootAsync(),
    KeycloakTypeormModule.forRootAsync(),
    AutoMapperModule,
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
