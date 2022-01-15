import { Resolver, Query } from '@nestjs/graphql';
import { ListingCountsService } from './listing-counts.service';
import { ListingCounts } from './listing-counts.model';

@Resolver()
export class ListingCountsResolver {
  constructor(private readonly listingCountsService: ListingCountsService) {}

  @Query((returns) => ListingCounts)
  async listingCounts() {
    return await this.listingCountsService.fetchListingCounts();
  }
}
