/**
 * @description User mapper
 * @author Nhut Tan
 * @since 2025-09-25
 * @version 1.0.0
 */

import { Injectable } from '@nestjs/common';
import { UserResponse } from '../dto/user-response.dto';
import { KeycloakUser } from '../entities/keycloak-user.entity';
import { UserRoleMapping } from '../entities/user-role-mapping.entity';

@Injectable()
export class UserMapper {
  /**
   * Map KeycloakUser entity to UserResponse DTO
   */
  toUserResponse(user: KeycloakUser): UserResponse {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      role:
        user.roleMappings
          ?.map((mapping: UserRoleMapping): string => mapping.role?.name)
          .filter(Boolean) || [],
    };
  }

  /**
   * Map array of KeycloakUser to array of UserResponse
   */
  toUserResponses(users: KeycloakUser[]): UserResponse[] {
    return users.map((u: KeycloakUser): UserResponse => this.toUserResponse(u));
  }
}
