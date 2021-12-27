import { Module } from '@nestjs/common';
import { AccessControlUsersService } from './access-control-users.service';
import { AccessControlUsersResolver } from './access-control-users.resolver';

@Module({
  providers: [AccessControlUsersService, AccessControlUsersResolver],
})
export class AccessControlUsersModule {}
