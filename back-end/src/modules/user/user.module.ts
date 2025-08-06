import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeycloakUser } from './entities/keycloak-user.entity';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './user.service';
import { AppConfigModule } from '../../common/config/app-config.module';

@Module({
  imports: [TypeOrmModule.forFeature([KeycloakUser]), AppConfigModule],
  controllers: [],
  providers: [UserRepository],
  exports: [UserService],
})
export class UserModule {}
