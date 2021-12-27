import { Module } from '@nestjs/common';
import { AccessControlRolesService } from './access-control-roles.service';
import { AccessControlRolesResolver } from './access-control-roles.resolver';

@Module({
  providers: [AccessControlRolesService, AccessControlRolesResolver],
})
export class AccessControlRolesModule {}
