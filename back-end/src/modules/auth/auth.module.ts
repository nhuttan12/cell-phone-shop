import { Module } from '@nestjs/common';
import { AppConfigModule } from '../../common/config/app-config.module';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';

@Module({
  imports: [AppConfigModule, UserModule],
  providers: [JwtStrategy],
  exports: [PassportModule],
})
export class AuthModule {}
