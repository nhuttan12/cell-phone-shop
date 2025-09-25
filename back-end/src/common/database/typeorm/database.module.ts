import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppConfigModule } from '../../config/app-config/app-config.module';
import {
  AppConfigService,
  SupportedDB,
} from '../../config/app-config/app-config.service';

@Module({})
export class DatabaseModule {
  static forRootAsync(): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [
        AppConfigModule,
        TypeOrmModule.forRootAsync({
          inject: [AppConfigService],
          useFactory: (config: AppConfigService): TypeOrmModuleOptions => ({
            type: config.mainDatabase.dialect as SupportedDB,
            host: config.mainDatabase.host,
            port: config.mainDatabase.port,
            username: config.mainDatabase.username,
            password: config.mainDatabase.password,
            database: config.mainDatabase.database,
            autoLoadEntities: true,
            synchronize: true,
          }),
        }),
      ],
      exports: [],
    };
  }
}
