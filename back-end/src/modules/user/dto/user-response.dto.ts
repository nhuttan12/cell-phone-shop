import { AutoMap } from '@automapper/classes';

export class UserResponse {
  @AutoMap()
  id: string;

  @AutoMap()
  username: string;

  @AutoMap()
  email: string;

  @AutoMap()
  role: string[];
}
