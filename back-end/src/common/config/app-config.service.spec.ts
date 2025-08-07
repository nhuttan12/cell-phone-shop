import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AppConfigService } from './app-config.service';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { HttpConfig } from './interface/http.interface';
import { MainDatabaseConfig } from './interface/main-database.interface';
import { KeycloakDatabaseConfig } from './interface/keycloak-database.interface';
import { KeycloakConfig } from './interface/keycloak.interface';
import { Logger } from 'winston';
import { DatabaseConfig } from './interface/database-config.interface';

describe('AppConfigService', () => {
  let appConfigService: AppConfigService;
  let mockLogger: Logger;

  const mockHttpConfig: HttpConfig = {
    host: 'localhost',
    port: 3000,
    debug: true,
    useJsonLogger: true,
  };

  const mockMainDatabaseConfig: MainDatabaseConfig = {
    dialect: 'postgres',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'test',
  };

  const mockKeycloakConfig: KeycloakConfig = {
    issuer: 'http://localhost:8080/auth/realms/test',
    url: 'http://localhost:8080/auth',
    realm: 'test',
    clientId: 'test',
    secret: 'test',
    logLevels: 'verbose',
    useNestLogger: true,
    jwksRequestsPerMinute: 5,
    jwksUri:
      'http://localhost:8080/auth/realms/test/protocol/openid-connect/certs',
  };

  const mockKeycloakDatabaseConfig: KeycloakDatabaseConfig = {
    realmId: 'test',
    dialect: 'postgres',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'test',
  };

  const mockDatabaseConfig: DatabaseConfig = {
    main: mockMainDatabaseConfig,
    keycloak: mockKeycloakDatabaseConfig,
  };

  beforeEach(async () => {
    mockLogger = {
      verbose: jest.fn(),
      debug: jest.fn(),
      error: jest.fn(),
    } as unknown as Logger;
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppConfigService,
        {
          provide: ConfigService,
          useValue: {
            getOrThrow: jest.fn((key: string) => {
              switch (key) {
                case 'http':
                  return mockHttpConfig;
                case 'database':
                  return {
                    main: mockMainDatabaseConfig,
                    keycloak: mockKeycloakDatabaseConfig,
                  };
                case 'keycloak':
                  return mockKeycloakConfig;
                default:
                  throw new Error(`Unexpected config key: ${key}`);
              }
            }),
          },
        },
        {
          provide: WINSTON_MODULE_NEST_PROVIDER,
          useValue: mockLogger,
        },
      ],
    }).compile();

    appConfigService = module.get<AppConfigService>(AppConfigService);
  });

  // 1. Testing appConfigService is defined
  it('should be defined', () => {
    expect(appConfigService).toBeDefined();
  });

  // 2. Testing get http config with appConfigService
  it('should return http config and log it', () => {
    // 2.1. Testing calling get http config
    const result: HttpConfig = appConfigService.http;

    // 2.2. Expect result is equal to mockHttpConfig
    expect(result).toEqual(mockHttpConfig);

    // 2.3. Expect logger show debug info with signature is 'http config information' and mockHttpConfig param
    expect(mockLogger.debug).toHaveBeenCalledWith(
      'http config information',
      mockHttpConfig,
    );
  });

  // 3. Testing get main database config with appConfigService
  it('should return main database config and log it', () => {
    // 3.1. Testing calling get main database config
    const result: MainDatabaseConfig = appConfigService.mainDatabase;

    // 3.2. Expect result is equal to mockDatabaseConfig
    expect(result).toEqual(mockMainDatabaseConfig);

    // 3.3. Expect logger show debug info with signature is 'databaseConfig' and mockDatabaseConfig param
    expect(mockLogger.debug).toHaveBeenCalledWith(
      'main database config information',
      mockDatabaseConfig,
    );
  });

  // 4. Testing get keycloak config with appConfigService
  it('should return keycloak config and log it', () => {
    // 4.1. Testing calling get keycloak config
    const result: KeycloakConfig = appConfigService.keycloak;

    // 4.2. Expect result is equal to mockKeycloakConfig
    expect(result).toEqual(mockKeycloakConfig);

    // 4.3. Expect logger show debug info with signature is 'keycloakConfig' and mockKeycloakConfig param
    expect(mockLogger.debug).toHaveBeenCalledWith(
      'keycloak config information',
      mockKeycloakConfig,
    );
  });

  // 5. Testing get keycloakDatabase config with appConfigService
  it('should return keycloak database config and log it', () => {
    // 5.1. Testing calling get keycloakDatabase config
    const result: KeycloakDatabaseConfig = appConfigService.keycloakDatabase;

    // 5.2. Expect result is equal to mockKeycloakDatabaseConfig
    expect(result).toEqual(mockKeycloakDatabaseConfig);

    // 5.3. Expect logger show debug info with signature is 'keycloakDatabaseConfig' and mockKeycloakDatabaseConfig param
    expect(mockLogger.debug).toHaveBeenCalledWith(
      'keycloak database config information',
      mockDatabaseConfig,
    );
  });
});
