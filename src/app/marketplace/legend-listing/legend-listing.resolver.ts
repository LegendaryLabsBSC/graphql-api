import { Resolver, Query, Args } from '@nestjs/graphql';
import { LegendListingService } from './legend-listing.service';
import { LegendListing } from './legend-listing.model';

@Resolver()
export class LegendListingResolver {
  constructor(private readonly legendListingService: LegendListingService) {}

  @Query((returns) => LegendListing)
  async legendListing(
    @Args('id') id: string,
    // @Args('filter') filter: string
    ) {
    return await this.legendListingService.fetchLegendListing(id);
  }
}
