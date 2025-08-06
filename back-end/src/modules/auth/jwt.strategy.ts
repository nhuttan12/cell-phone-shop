import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AppConfigService } from '../../common/config/app-config.service';
import { passportJwtSecret } from 'jwks-rsa';
import { JwtPayload } from './dto/jwt-payload.dto';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { UserService } from '../user/user.service';
import { UserResponse } from '../user/dto/user-response.dto';
import { BaseResponse } from '../../common/response/base.response';
import { UserMessageLogs } from '../user/messages/user.message-logs';
import { FailureResponse } from '../../common/response/failer.response';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly config: AppConfigService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: Logger,
    private readonly userService: UserService,
    @InjectMapper()
    private readonly mapper: Mapper,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: config.keycloak.clientId,
      issuer: config.keycloak.issuer,
      algorithms: ['RS256'],
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: config.keycloak.jwksRequestsPerMinute,
        jwksUri: config.keycloak.jwksUri,
      }),
    });
  }

  async validate(payload: JwtPayload): Promise<JwtPayload | FailureResponse> {
    // 1. Get payload from token
    this.logger.debug('Get payload from token', payload);
    const user: UserResponse | BaseResponse =
      await this.userService.getUserFromPayload(payload);
    this.logger.debug('Get user from payload', user);

    // 2. Check user exist
    this.logger.debug('Check user exist', user);
    if (!user) {
      this.logger.error(UserMessageLogs.USER_NOT_FOUND);
      return new FailureResponse(
        UserMessageLogs.USER_NOT_FOUND,
        HttpStatus.NOT_FOUND,
      );
    }

    // 3. Mapping user response to jwt payload
    this.logger.verbose('Mapping user response to jwt payload');
    const jwtPayload: JwtPayload = this.mapper.map(
      user,
      UserResponse,
      JwtPayload,
    );
    this.logger.debug('Mapping user response to jwt payload', jwtPayload);

    // 4. Return jwt payload
    this.logger.verbose('Return jwt payload');
    return jwtPayload;
  }
}
