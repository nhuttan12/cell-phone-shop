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
            type: config.database.dialect as SupportedDB,
            host: config.database.host,
            port: config.database.port,
            username: config.database.username,
            password: config.database.password,
            database: config.database.database,
            autoLoadEntities: true,
            synchronize: true,
          }),
        }),
      ],
      exports: [],
    };
  }
}
