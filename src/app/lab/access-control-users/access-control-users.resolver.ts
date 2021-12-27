import { Resolver, Query, Args } from '@nestjs/graphql';
import { AccessControlUsersService } from './access-control-users.service';
import { AccessControlUsers } from './access-control-users.model';

@Resolver()
export class AccessControlUsersResolver {
  constructor(private readonly accessControlUsersService: AccessControlUsersService) { }

  @Query((returns) => [AccessControlUsers])
  async fetchAccessControlUsers(@Args('role', { type: () => String }) role: string) {
    return await this.accessControlUsersService.fetchAccessControlUsers(role) || [];
  }
}
