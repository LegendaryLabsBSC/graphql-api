import { Resolver, Query, Args } from '@nestjs/graphql';
import { LegendListingService } from './legend-listing.service';
import { LegendListing } from './legend-listing.model';

@Resolver()
export class LegendListingResolver {
  constructor(private readonly legendListingService: LegendListingService) {}

  @Query((returns) => LegendListing)
  async legendListing(@Args('id') id: string) {
    return await this.legendListingService.fetchLegendListing(id);
  }

  @Query((returns) => [LegendListing])
  async allLegendListings(
    @Args('filter') filter: string,
    @Args('status', { nullable: true }) status?: string,
  ) {
    return (
      (await this.legendListingService.fetchAllLegendListings(filter, status)) || []
    );
  }
}
