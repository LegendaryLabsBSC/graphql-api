import { Module } from '@nestjs/common';
import { LabRulesService } from './lab-rules.service';
import { LabRulesResolver } from './lab-rules.resolver';

@Module({
  providers: [LabRulesService, LabRulesResolver]
})
export class LabRulesModule {}
