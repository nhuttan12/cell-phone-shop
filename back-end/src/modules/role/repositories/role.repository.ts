import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { KeycloakRole } from '../entities/keycloak-role.entity';

@Injectable()
export class RoleRepository {
  constructor(
    @InjectRepository(KeycloakRole, 'keycloak')
    private readonly roleRepo: Repository<KeycloakRole>,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: Logger,
  ) {}
}
