import { Module } from '@nestjs/common';
import { LegendListingService } from './legend-listing.service';
import { LegendListingResolver } from './legend-listing.resolver';

@Module({
  providers: [LegendListingService, LegendListingResolver],
})
export class LegendListingModule {}
