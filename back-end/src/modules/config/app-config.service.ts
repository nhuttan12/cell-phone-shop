import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from '../../common/config/interface/config.interface';
import { HttpConfig } from '../../common/config/interface/http.interface';
import { DatabaseConfig } from '../../common/config/interface/database.interface';
import { KeycloakConfig } from '../../common/config/interface/keycloak.interface';

@Injectable()
export class AppConfigService {
  constructor(private readonly configSerivce: ConfigService<AppConfig>) {}

  get http(): HttpConfig {
    return this.configSerivce.getOrThrow('http');
  }

  get database(): DatabaseConfig {
    return this.configSerivce.getOrThrow('db');
  }

  get keycloak(): KeycloakConfig {
    return this.configSerivce.getOrThrow('keycloak');
  }
}
