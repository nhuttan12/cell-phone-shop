/**
 * @description JWT payload
 * @author Nhut Tan
 * @since 2025-08-07
 * @version 1.0.0
 */

export class JwtPayload {
  sub: string;
  username: string;
  role: string[];
  email?: string;
}
