import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigModule } from '../../config/app-config.module';
import { AppConfigService, SupportedDB } from '../../config/app-config.service';

@Module({})
export class TypeormModule {
  static forRootAsync(): DynamicModule {
    return {
      module: TypeormModule,
      imports: [
        AppConfigModule,
        TypeOrmModule.forRootAsync({
          inject: [AppConfigService],
          useFactory: (config: AppConfigService) => ({
            type: config.postgresDatabase.dialect as SupportedDB,
            host: config.postgresDatabase.host,
            port: config.postgresDatabase.port,
            username: config.postgresDatabase.username,
            password: config.postgresDatabase.password,
            database: config.postgresDatabase.database,
            autoLoadEntities: true,
            synchronize: true,
          }),
        }),
      ],
      exports: [],
    };
  }
}
