/**
 * @description App config module
 * @author Nhut Tan
 * @since 2025-08-07
 * @version 1.0.0
 */

import { Module } from '@nestjs/common';
import { KeycloakConfigService } from './keycloak-config.service';
import { AppConfigModule } from '../app-config/app-config.module';

@Module({
  imports: [AppConfigModule],
  providers: [KeycloakConfigService],
  exports: [KeycloakConfigService],
})
export class KeycloakConfigModule {}
