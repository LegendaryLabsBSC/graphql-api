import { Module } from '@nestjs/common';
import { AccessControlUsersService } from './access-control-users.service';
import { AccessControlUsersResolver } from './access-control-users.resolver';
import { AccessControlRolesService } from '../access-control-roles/access-control-roles.service';

@Module({
  providers: [
    AccessControlUsersService,
    AccessControlUsersResolver,
    AccessControlRolesService,
  ],
})
export class AccessControlUsersModule {}
