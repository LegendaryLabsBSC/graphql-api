import { Module } from '@nestjs/common';
import { BlendingCostService } from './blending-cost.service';
import { BlendingCostResolver } from './blending-cost.resolver';

@Module({
  providers: [BlendingCostService, BlendingCostResolver],
})
export class BlendingCostModule {}
