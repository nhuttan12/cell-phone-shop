/**
 * @description User service
 * @author Nhut Tan
 * @since 2025-08-07
 * @version 1.0.0
 */

import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { JwtPayload } from '../auth/dto/jwt-payload.dto';
import { KeycloakUser } from './entities/keycloak-user.entity';
import { UserRepository } from './repositories/user.repository';
import { UserMessageLogs } from './messages/user.message-logs';
import { UserResponse } from './dto/user-response.dto';
import { FailureResponse } from '../../common/response/failer.response';
import { UserMapper } from './mappers/user.mapper';

@Injectable()
export class UserService {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: Logger,
    private readonly userRepo: UserRepository,
    private readonly userMapper: UserMapper,
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
    const userResponse: UserResponse = this.userMapper.toUserResponse(user);
    this.logger.debug('Mapping user to user response', userResponse);

    // 5. Return user response
    this.logger.verbose('Return user response');
    return userResponse;
  }
}
