import { Resolver, Query} from '@nestjs/graphql';
import { AccessControlRolesService } from './access-control-roles.service';
import { AccessControlRoles } from './access-control-roles.model';

@Resolver()
export class AccessControlRolesResolver {
  constructor(private readonly accessControlRolesService: AccessControlRolesService) {}

  @Query((returns) => AccessControlRoles)
  async fetchAccessControlRoles() {
    return await this.accessControlRolesService.fetchAccessControlRoles();
  }
}