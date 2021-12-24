import { Module } from '@nestjs/common';
import { LabService } from './lab.service';
import { LabResolver } from './lab.resolver';
import { ChildContractsModule } from './child-contracts/child-contracts.module';

@Module({
  providers: [LabService, LabResolver],
  imports: [ChildContractsModule]
})
export class LabModule {}
