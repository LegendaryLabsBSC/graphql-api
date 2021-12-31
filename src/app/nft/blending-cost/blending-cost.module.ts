import { Module } from '@nestjs/common';
import { BlendingRulesService } from '../blending-rules/blending-rules.service';
import { BlendingCostService } from './blending-cost.service';
import { BlendingCostResolver } from './blending-cost.resolver';

@Module({
  providers: [BlendingCostService, BlendingCostResolver, BlendingRulesService],
})
export class BlendingCostModule {}
