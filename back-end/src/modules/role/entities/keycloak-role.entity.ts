import { Column, Entity, OneToMany } from 'typeorm';
import { UserRoleMapping } from '../../user/entities/user-role-mapping.entity';

@Entity({ name: 'keycloak_role' })
export class KeycloakRole {
  @Column({ name: 'id' })
  id: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'client_realm_constraint' })
  clientRealmConstraint: string;

  @Column({ name: 'realm_id' })
  realmID: string;

  @Column({ name: 'client' })
  client: string;

  @Column({ name: 'realm' })
  realm: string;

  @OneToMany(() => UserRoleMapping, (mapping: UserRoleMapping) => mapping.role)
  userMappings: UserRoleMapping[];
}
