import { Module } from '@nestjs/common';
import { ChildContractsService } from './child-contracts.service';
import { ChildContractsResolver } from './child-contracts.resolver';

@Module({
  providers: [ChildContractsService, ChildContractsResolver],
})
export class ChildContractsModule {}
