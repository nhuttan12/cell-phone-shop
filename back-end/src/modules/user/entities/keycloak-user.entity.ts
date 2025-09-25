/**
 * @description Keycload user entity
 * @author Nhut Tan
 * @since 2025-08-07
 * @version 1.0.0
 */

import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { UserRoleMapping } from './user-role-mapping.entity';

@Entity({ name: 'user_entity' })
export class KeycloakUser {
  @PrimaryColumn({ name: 'id' })
  id: string;

  @Column({ name: 'username' })
  username: string;

  @Column({
    name: 'email',
    nullable: true,
  })
  email: string;

  @Column({
    name: 'first_name',
    nullable: true,
  })
  firstName: string;

  @Column({
    name: 'last_name',
    nullable: true,
  })
  lastName: string;

  @Column({ name: 'enabled' })
  enabled: boolean;

  @Column({ name: 'email_verified' })
  emailVerified: boolean;

  @Column({
    name: 'created_timestamp',
    type: 'bigint',
  })
  createdTimestamp: string;

  @Column({ name: 'realm_id' })
  realmID: string;

  @OneToMany(() => UserRoleMapping, (mapping: UserRoleMapping) => mapping.user)
  roleMappings: UserRoleMapping[];
}
