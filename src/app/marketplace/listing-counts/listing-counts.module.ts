import { Module } from '@nestjs/common';
import { ListingCountsService } from './listing-counts.service';
import { ListingCountsResolver } from './listing-counts.resolver';

@Module({
  providers: [ListingCountsService, ListingCountsResolver],
})
export class ListingCountsModule {}
