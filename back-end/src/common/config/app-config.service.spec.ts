import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AppConfigService } from './app-config.service';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { HttpConfig } from './interface/http.interface';
import { DatabaseConfig } from './interface/database.interface';
import { KeycloakDatabaseConfig } from './interface/keycloak-database.interface';
import { KeycloakConfig } from './interface/keycloak.interface';
import { Logger } from 'winston';

describe('AppConfigService', () => {
  let appConfigService: AppConfigService;
  let mockLogger: Logger;

  const mockHttpConfig: HttpConfig = {
    port: 3000,
    useJsonLogger: true,
    debug: true,
    host: 'localhost',
  };

  const mockDatabaseConfig: DatabaseConfig = {
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
                  return mockDatabaseConfig;
                case 'keycloak':
                  return mockKeycloakConfig;
                case 'keycloakDatabase':
                  return mockKeycloakDatabaseConfig;
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

    appConfigService = module.get<AppConfigService>(ConfigService);
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

    // 2.3. Expect logger show debug info with signature is 'httpConfig' and mockHttpConfig param
    expect(mockLogger.debug).toHaveBeenCalledWith('httpConfig', mockHttpConfig);
  });

  // 3. Testing get database config with appConfigService
  it('should return database config and log it', () => {
    // 3.1. Testing calling get database config
    const result: DatabaseConfig = appConfigService.postgresDatabase;

    // 3.2. Expect result is equal to mockDatabaseConfig
    expect(result).toEqual(mockDatabaseConfig);

    // 3.3. Expect logger show debug info with signature is 'databaseConfig' and mockDatabaseConfig param
    expect(mockLogger.debug).toHaveBeenCalledWith(
      'databaseConfig',
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
      'keycloakConfig',
      mockKeycloakConfig,
    );
  });

  // 5. Testing get keycloakDatabase config with appConfigService
  it('should return keycloakDatabase config and log it', () => {
    // 5.1. Testing calling get keycloakDatabase config
    const result: KeycloakDatabaseConfig = appConfigService.keycloakDatabase;

    // 5.2. Expect result is equal to mockKeycloakDatabaseConfig
    expect(result).toEqual(mockKeycloakDatabaseConfig);

    // 5.3. Expect logger show debug info with signature is 'keycloakDatabaseConfig' and mockKeycloakDatabaseConfig param
    expect(mockLogger.debug).toHaveBeenCalledWith(
      'keycloakDatabaseConfig',
      mockKeycloakDatabaseConfig,
    );
  });
});
