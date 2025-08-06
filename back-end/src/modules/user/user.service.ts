import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { JwtPayload } from '../auth/dto/jwt-payload.dto';
import { KeycloakUser } from './entities/keycloak-user.entity';
import { UserRepository } from './repositories/user.repository';
import { UserMessageLogs } from './messages/user.message-logs';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { UserResponse } from './dto/user-response.dto';
import { FailureResponse } from '../../common/response/failer.response';

@Injectable()
export class UserService {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: Logger,
    private readonly userRepo: UserRepository,
    @InjectMapper()
    private readonly mapper: Mapper,
  ) {}

  async getUserFromPayload(
    payload: JwtPayload,
  ): Promise<UserResponse | FailureResponse> {
    // 1. Get payload from token
    this.logger.debug('Get payload from token', payload);

    // 2. Get user by user ID from payload
    this.logger.verbose('Get user by user ID from payload');
    const user: KeycloakUser | null = await this.userRepo.getUserByUserID(
      payload.sub,
    );

    // 3. Check user exist
    this.logger.debug('Check user exist', user);
    if (!user) {
      this.logger.error(UserMessageLogs.USER_NOT_FOUND);
      return new FailureResponse(
        UserMessageLogs.USER_NOT_FOUND,
        HttpStatus.NOT_FOUND,
      );
    }

    // 4. Mapping user to user response
    this.logger.verbose('Mapping user to user response');
    const userResponse: UserResponse = this.mapper.map(
      user,
      KeycloakUser,
      UserResponse,
    );
    this.logger.debug('Mapping user to user response', userResponse);

    // 5. Return user response
    this.logger.verbose('Return user response');
    return userResponse;
  }
}
