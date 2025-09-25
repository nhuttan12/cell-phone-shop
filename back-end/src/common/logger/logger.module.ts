import { DynamicModule, Global, Module } from '@nestjs/common';
import { AppConfigService } from '../config/app-config/app-config.service';
import { WinstonModule } from 'nest-winston';
import { format, transports } from 'winston';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston/dist/winston.utilities';
import { AppConfigModule } from '../config/app-config/app-config.module';

@Global()
@Module({
  imports: [],
  providers: [],
  exports: [],
})
export class LoggerModule {
  static forRootAsync(): DynamicModule {
    return {
      module: LoggerModule,
      imports: [
        AppConfigModule,
        WinstonModule.forRootAsync({
          imports: [AppConfigModule],
          inject: [AppConfigService],
          useFactory: (config: AppConfigService) => {
            const httpConfig = config.http;

            const consoleFormat = httpConfig.useJsonLogger
              ? format.combine(format.ms(), format.timestamp(), format.json())
              : format.combine(
                  format.timestamp(),
                  format.ms(),
                  nestWinstonModuleUtilities.format.nestLike('API', {
                    colors: true,
                    prettyPrint: true,
                  }),
                );

            return {
              level: httpConfig.debug ? 'debug' : 'info',
              transports: [new transports.Console({ format: consoleFormat })],
            };
          },
        }),
      ],
      exports: [WinstonModule],
    };
  }
}
