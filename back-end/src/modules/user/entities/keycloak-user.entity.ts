import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { AutoMap } from '@automapper/classes';
import { UserRoleMapping } from './user-role-mapping.entity';

@Entity({ name: 'user_entity' })
export class KeycloakUser {
  @PrimaryColumn({ name: 'id' })
  @AutoMap()
  id: string;

  @Column({ name: 'username' })
  @AutoMap()
  username: string;

  @Column({
    name: 'email',
    nullable: true,
  })
  @AutoMap()
  email: string;

  @Column({
    name: 'first_name',
    nullable: true,
  })
  @AutoMap()
  firstName: string;

  @Column({
    name: 'last_name',
    nullable: true,
  })
  @AutoMap()
  lastName: string;

  @Column({ name: 'enabled' })
  @AutoMap()
  enabled: boolean;

  @Column({ name: 'email_verified' })
  @AutoMap()
  emailVerified: boolean;

  @Column({
    name: 'created_timestamp',
    type: 'bigint',
  })
  @AutoMap()
  createdTimestamp: string;

  @Column({ name: 'realm_id' })
  @AutoMap()
  realmId: string;

  @Column({ name: 'created_timestamp' })
  @AutoMap()
  createdAt: Date;

  @OneToMany(() => UserRoleMapping, (mapping: UserRoleMapping) => mapping.user)
  roleMappings: UserRoleMapping[];
}
