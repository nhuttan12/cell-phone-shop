/**
 * @description User role mapping
 * @author Nhut Tan
 * @since 2025-08-07
 * @version 1.0.0
 */

import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { KeycloakUser } from './keycloak-user.entity';
import { KeycloakRole } from '../../role/entities/keycloak-role.entity';

@Entity({ name: 'user_role_mapping' })
export class UserRoleMapping {
  @PrimaryColumn({ name: 'user_id' })
  userId: string;

  @PrimaryColumn({ name: 'role_id' })
  roleId: string;

  @ManyToOne(() => KeycloakUser)
  @JoinColumn({ name: 'user_id' })
  user: KeycloakUser;

  @ManyToOne(() => KeycloakRole)
  @JoinColumn({ name: 'role_id' })
  role: KeycloakRole;
}
