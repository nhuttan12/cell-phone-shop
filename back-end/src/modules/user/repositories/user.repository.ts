import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KeycloakUser } from '../entities/keycloak-user.entity';
import { DataSource, Repository } from 'typeorm';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { AppConfigService } from '../../../common/config/app-config.service';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(KeycloakUser, 'keycloak')
    private readonly userRepo: Repository<KeycloakUser>,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: Logger,
    private readonly dataSource: DataSource,
    private readonly config: AppConfigService,
  ) {}

  async getUserByUserID(UserID: string): Promise<KeycloakUser | null> {
    try {
      // 1. Get user by user ID join with keycloak role table
      this.logger.verbose('Get user by user ID join with keycloak role table');
      const userWithRoles: KeycloakUser | null = await this.dataSource
        .getRepository(KeycloakUser)
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.roleMappings', 'urm')
        .leftJoinAndSelect('urm.role', 'role')
        .where('user.realmId = :realmId', {
          realmId: this.config.keycloakDatabase.realmId,
        })
        .andWhere('user.id = :id', { id: UserID })
        .getOne();
      this.logger.debug(
        'GEt user by user ID join with keycloak role table',
        userWithRoles,
      );

      // 2. Return user to service
      this.logger.verbose('Return user to service');
      return userWithRoles;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
