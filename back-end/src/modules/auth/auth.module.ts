/**
 * @description Auth module
 * @author Nhut Tan
 * @since 2025-08-07
 * @version 1.0.0
 */

import { Module } from '@nestjs/common';
import { AppConfigModule } from '../../common/config/app-config/app-config.module';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { AuthMapper } from './mappers/auth.mapper';

@Module({
  imports: [AppConfigModule, UserModule],
  providers: [JwtStrategy, AuthMapper],
  exports: [PassportModule],
})
export class AuthModule {}
