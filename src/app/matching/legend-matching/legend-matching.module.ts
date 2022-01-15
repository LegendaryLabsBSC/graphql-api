import { Module } from '@nestjs/common';
import { LegendMatchingService } from './legend-matching.service';
import { LegendMatchingResolver } from './legend-matching.resolver';

@Module({
  providers: [
    LegendMatchingService,
    LegendMatchingResolver,
  ],
})
export class LegendMatchingModule {}
