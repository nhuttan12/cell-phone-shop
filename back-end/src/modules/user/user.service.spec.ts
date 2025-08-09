import { Test, TestingModule } from '@nestjs/testing';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { UserRepository } from './repositories/user.repository';
import { getMapperToken } from '@automapper/nestjs';
import { UserService } from './user.service';
import { Mapper } from '@automapper/core';
import { JwtPayload } from '../auth/dto/jwt-payload.dto';
import { UserResponse } from './dto/user-response.dto';
import { KeycloakUser } from './entities/keycloak-user.entity';
import { FailureResponse } from '../../common/response/failer.response';
import { UserMessageLogs } from './messages/user.message-logs';
import { HttpStatus } from '@nestjs/common';

describe('UserService', () => {
  let userService: UserService;
  let mockMapper: Partial<Mapper>;
  let mockUserRepo: Partial<UserRepository>;

  const mockPayload: JwtPayload = {
    email: 'test@example.com',
    role: ['test-role'],
    sub: 'test-id',
    username: 'test-username',
  };

  const mockKeycloakUser: KeycloakUser = {
    id: 'test-id',
    username: 'test-username',
    realmID: 'test-realm-id',
    email: 'test@example.com',
    firstName: 'test-first-name',
    lastName: 'test-last-name',
    enabled: true,
    emailVerified: true,
    roleMappings: [],
    createdTimestamp: new Date().toString(),
  };

  const mockUserResponse: UserResponse = {
    email: 'test@example.com',
    id: 'test-id',
    role: ['test-role'],
    username: 'test-username',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: WINSTON_MODULE_NEST_PROVIDER,
          useValue: {
            verbose: jest.fn(),
            debug: jest.fn(),
            error: jest.fn(),
          },
        },
        {
          provide: UserRepository,
          useValue: {
            getUserByUserID: jest.fn(),
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

    userService = module.get<UserService>(UserService);
    mockMapper = module.get<Mapper>(getMapperToken());
    mockUserRepo = module.get<UserRepository>(UserRepository);
  });

  it('should return UserResponse if user found', async () => {
    // 1. Testing calling getUserByUserID function if it success
    jest
      .spyOn(mockUserRepo, 'getUserByUserID')
      .mockResolvedValueOnce(mockKeycloakUser);

    // 2. Testing calling map function if it success
    jest
      .spyOn(mockMapper, 'map')
      .mockImplementationOnce(() => mockUserResponse as Record<string, any>);

    // 3. Testing calling getUserFromPayload of user service
    const result: UserResponse | FailureResponse =
      await userService.getUserFromPayload(mockPayload);

    // 4. Testing result
    // expect(result).toBeInstanceOf(UserResponse);
    expect(result).toEqual(mockUserResponse);

    // 5. Testing signature of getUserByUserID function
    expect(mockUserRepo.getUserByUserID).toHaveBeenCalledWith(mockPayload.sub);

    // 6. Testing signature of map function
    expect(mockMapper.map).toHaveBeenCalledWith(
      mockKeycloakUser,
      KeycloakUser,
      UserResponse,
    );
  });

  it('should return FailureResponse if user not found', async () => {
    // 1. Testing calling getUserByUserID function if it failed
    jest.spyOn(mockUserRepo, 'getUserByUserID').mockResolvedValueOnce(null);

    // 2. Testing calling getUserFromPayload of user service
    const result: UserResponse | FailureResponse =
      await userService.getUserFromPayload(mockPayload);

    // 3. Testing result if user not found
    expect(result).toBeInstanceOf(FailureResponse);
    expect((result as FailureResponse).message).toBe(
      UserMessageLogs.USER_NOT_FOUND,
    );
    expect((result as FailureResponse).code).toBe(HttpStatus.NOT_FOUND);
  });
});
