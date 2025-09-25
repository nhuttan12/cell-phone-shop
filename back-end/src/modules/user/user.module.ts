/**
 * @description User module
 * @author Nhut Tan
 * @since 2025-08-07
 * @version 1.0.0
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeycloakUser } from './entities/keycloak-user.entity';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './user.service';
import { AppConfigModule } from '../../common/config/app-config/app-config.module';
import { UserMapper } from './mappers/user.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([KeycloakUser]), AppConfigModule],
  controllers: [],
  providers: [UserRepository, UserService, UserMapper],
  exports: [UserService],
})
export class UserModule {}
