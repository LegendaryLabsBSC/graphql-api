import { Module } from '@nestjs/common';
import { BlendingRulesService } from './blending-rules.service';
import { BlendingRulesResolver } from './blending-rules.resolver';

@Module({
  providers: [BlendingRulesService, BlendingRulesResolver]
})
export class BlendingRulesModule {}
