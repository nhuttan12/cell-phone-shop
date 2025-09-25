/**
 * @description JWT authentication guard
 * @author Nhut Tan
 * @since 2025-08-07
 * @version 1.0.0
 */

import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
