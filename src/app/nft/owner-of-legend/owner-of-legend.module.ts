import { Module } from '@nestjs/common';
import { OwnerOfLegendService } from './owner-of-legend.service';
import { OwnerOfLegendResolver } from './owner-of-legend.resolver';

@Module({
  providers: [OwnerOfLegendService, OwnerOfLegendResolver],
})
export class OwnerOfLegendModule {}
