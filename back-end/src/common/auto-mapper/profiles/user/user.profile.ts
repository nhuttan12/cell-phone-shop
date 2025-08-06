import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import {
  createMap,
  forMember,
  mapFrom,
  Mapper,
  MappingProfile,
} from '@automapper/core';
import { KeycloakUser } from '../../../../modules/user/entities/keycloak-user.entity';
import { UserResponse } from '../../../../modules/user/dto/user-response.dto';
import { Injectable } from '@nestjs/common';
import { JwtPayload } from '../../../../modules/auth/dto/jwt-payload.dto';

@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile(): MappingProfile {
    return (mapper) => {
      this.userKeycloakToUserResponse(mapper);
      this.userResponseToJwtPayload(mapper);
    };
  }

  private userKeycloakToUserResponse(mapper: Mapper) {
    createMap(
      mapper,
      KeycloakUser,
      UserResponse,
      forMember(
        (dest: UserResponse) => dest.id,
        mapFrom((src: KeycloakUser) => src.id),
      ),
      forMember(
        (dest: UserResponse) => dest.username,
        mapFrom((src: KeycloakUser) => src.username),
      ),
      forMember(
        (dest: UserResponse) => dest.email,
        mapFrom((src: KeycloakUser) => src.email),
      ),
      forMember(
        (dest: UserResponse) => dest.role,
        mapFrom(
          (src: KeycloakUser) =>
            src.roleMappings
              .map((mapping) => mapping.role.name)
              .filter(Boolean) || [],
        ),
      ),
    );
  }

  private userResponseToJwtPayload(mapper: Mapper) {
    createMap(
      mapper,
      UserResponse,
      JwtPayload,
      forMember(
        (dest: JwtPayload) => dest.sub,
        mapFrom((src: UserResponse) => src.id),
      ),
      forMember(
        (dest: JwtPayload) => dest.username,
        mapFrom((src: UserResponse) => src.username),
      ),
      forMember(
        (dest: JwtPayload) => dest.role,
        mapFrom((src: UserResponse) => src.role),
      ),
      forMember(
        (dest: JwtPayload) => dest.email,
        mapFrom((src: UserResponse) => src.email),
      ),
    );
  }
}
