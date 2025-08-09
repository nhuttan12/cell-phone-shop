import { Logger } from 'winston';
import { UserRepository } from './user.repository';
import { DataSource, SelectQueryBuilder } from 'typeorm';
import { AppConfigService } from '../../../common/config/app-config.service';
import { KeycloakUser } from '../entities/keycloak-user.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

describe('UserRepository', () => {
  let userRepo: UserRepository;
  let mockLogger: Logger;
  let mockDataSource: Partial<DataSource>;
  let mockConfig: Partial<AppConfigService>;

  let mockQueryBuilder: jest.Mocked<SelectQueryBuilder<KeycloakUser>>;
  let mockRepo: { createQueryBuilder: jest.Mock };

  const userID = 'test-user-id';
  const fakeUser: KeycloakUser = {
    id: userID,
    username: 'test-user',
    realmID: 'realm-test',
    email: 'test-email',
    firstName: 'test-first-name',
    lastName: 'test-last-name',
    enabled: true,
    emailVerified: true,
    roleMappings: [],
    createdTimestamp: new Date().toString(),
  };

  beforeEach(async () => {
    mockQueryBuilder = {
      leftJoinAndSelect: jest.fn().mockReturnThis(),
      where: jest.fn().mockReturnThis(),
      andWhere: jest.fn().mockReturnThis(),
      getOne: jest.fn().mockResolvedValue(fakeUser),
    } as unknown as jest.Mocked<SelectQueryBuilder<KeycloakUser>>;

    mockRepo = {
      createQueryBuilder: jest.fn().mockReturnValue(mockQueryBuilder),
    };

    mockDataSource = {
      getRepository: jest.fn().mockReturnValue(mockRepo),
    };

    mockConfig = {
      keycloakDatabase: {
        realmID: 'realm-test',
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'admin',
        password: '123123',
        database: 'cell-phone-shop',
      },
    };

    mockLogger = {
      verbose: jest.fn(),
      debug: jest.fn(),
      error: jest.fn(),
    } as unknown as Logger;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserRepository,
        {
          provide: 'KeycloakUserRepository',
          useValue: mockRepo,
        },
        {
          provide: WINSTON_MODULE_NEST_PROVIDER,
          useValue: mockLogger,
        },
        {
          provide: DataSource,
          useValue: mockDataSource,
        },
        {
          provide: AppConfigService,
          useValue: mockConfig,
        },
      ],
    }).compile();

    userRepo = module.get(UserRepository);
  });

  it('should return user with role by user ID', async () => {
    const result = await userRepo.getUserByUserID(userID);

    expect(mockDataSource.getRepository).toHaveBeenCalledWith(KeycloakUser);
    expect(result).toEqual(fakeUser);
    expect(mockLogger.verbose).toHaveBeenCalledWith(
      'Get user by user ID join with keycloak role table',
    );
    expect(mockLogger.debug).toHaveBeenCalledWith(
      'Get user by user ID join with keycloak role table',
      fakeUser,
    );
  });

  it('should throw error if user not found', async () => {
    const error = new Error('Something went wrong');

    mockQueryBuilder.getOne.mockRejectedValueOnce(error);

    await expect(userRepo.getUserByUserID(userID)).rejects.toThrow(error);
    expect(mockLogger.error).toHaveBeenCalledWith(error);
  });
});
