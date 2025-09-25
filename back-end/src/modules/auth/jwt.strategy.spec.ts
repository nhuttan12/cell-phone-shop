import { AppConfigService } from '../../common/config/app-config/app-config.service';
import { UserService } from '../user/user.service';
import { JwtPayload } from './dto/jwt-payload.dto';
import { UserResponse } from '../user/dto/user-response.dto';
import { Test } from '@nestjs/testing';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Mapper } from '@automapper/core';
import { getMapperToken } from '@automapper/nestjs';
import { JwtStrategy } from './jwt.strategy';
import { FailureResponse } from '../../common/response/failer.response';
import { HttpStatus } from '@nestjs/common';
import { UserMessageLogs } from '../user/messages/user.message-logs';

describe('JwtStrategy', () => {
  let mockUserService: Partial<UserService>;
  let mockMapper: Partial<Mapper>;
  let jwtStrategy: JwtStrategy;

  const mockPayload: JwtPayload = {
    email: 'test@example.com',
    role: ['test-role'],
    sub: 'test-sub',
    username: 'test-username',
  };

  const mockUserResponse: UserResponse = {
    email: 'test@example.com',
    id: 'test-id',
    role: ['test-role'],
    username: 'test-username',
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        JwtStrategy,
        {
          provide: AppConfigService,
          useValue: {
            keycloak: {
              clientId: 'test-client-id',
              issuer: 'test-issuer',
              jwksRequestsPerMinute: 5,
              jwksUri: 'test-jwks-uri.http',
            },
          },
        },
        {
          provide: WINSTON_MODULE_NEST_PROVIDER,
          useValue: {
            verbose: jest.fn(),
            debug: jest.fn(),
            error: jest.fn(),
          },
        },
        {
          provide: UserService,
          useValue: {
            getUserFromPayload: jest.fn(),
          },
        },
        {
          provide: getMapperToken(),
          useValue: {
            map: jest.fn(),
          },
        },
      ],
    }).compile();

    jwtStrategy = module.get(JwtStrategy);
    mockUserService = module.get(UserService);
    mockMapper = module.get(getMapperToken());
  });

  it('should return FailerResponse if user not found', async () => {
    jest
      .spyOn(mockUserService, 'getUserFromPayload')
      .mockResolvedValueOnce(
        new FailureResponse(
          UserMessageLogs.USER_NOT_FOUND,
          HttpStatus.NOT_FOUND,
        ),
      );

    const result: JwtPayload | FailureResponse =
      await jwtStrategy.validate(mockPayload);

    expect(result).toBeInstanceOf(FailureResponse);
    expect((result as FailureResponse).message).toBe(
      UserMessageLogs.USER_NOT_FOUND,
    );
    expect((result as FailureResponse).code).toBe(HttpStatus.NOT_FOUND);
  });

  it('should return UserResponse if user found', async () => {
    jest
      .spyOn(mockUserService, 'getUserFromPayload')
      .mockResolvedValueOnce(mockUserResponse);

    const mappedPayload: JwtPayload = {
      email: 'test@example.com',
      role: ['test-role'],
      sub: 'test-sub',
      username: 'test-username',
    };

    jest
      .spyOn(mockMapper, 'map')
      .mockImplementationOnce(() => mappedPayload as Record<string, any>);

    const result = await jwtStrategy.validate(mockPayload);

    expect(result).toEqual(mappedPayload);
    expect(mockUserService.getUserFromPayload).toHaveBeenCalledWith(
      mockPayload,
    );
    expect(mockMapper.map).toHaveBeenCalledWith(
      mockUserResponse,
      UserResponse,
      JwtPayload,
    );
  });
});
