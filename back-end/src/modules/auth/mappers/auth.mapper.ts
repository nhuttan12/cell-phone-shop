/**
 * @description Auth mapper
 * @author Nhut Tan
 * @since 2025-09-25
 * @version 1.0.0
 */
import { Injectable } from '@nestjs/common';
import { UserResponse } from '../../user/dto/user-response.dto';
import { JwtPayload } from '../dto/jwt-payload.dto';

@Injectable()
export class AuthMapper {
  /**
   * Map UserResponse DTO to JwtPayload
   */
  toJwtPayload(userResponse: UserResponse): JwtPayload {
    return {
      sub: userResponse.id,
      username: userResponse.username,
      email: userResponse.email,
      role: userResponse.role,
    };
  }
}
