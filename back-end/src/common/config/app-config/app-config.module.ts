/**
 * @description App config module
 * @author Nhut Tan
 * @since 2025-08-07
 * @version 1.0.0
 */

import { Module } from '@nestjs/common';
import { AppConfigService } from './app-config.service';

@Module({
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
