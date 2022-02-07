import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { LegendListingService } from './legend-listing.service';
import { LegendListing } from './legend-listing.model';
import { LegendNFTService } from 'src/app/nft/legend-nft/legend-nft.service';
import { LegendNFT } from 'src/app/nft/legend-nft/legend-nft.model';

@Resolver(of => LegendListing)
export class LegendListingResolver {
  constructor(
    private readonly legendListingService: LegendListingService,
    private readonly legendNFTService: LegendNFTService,
  ) {}

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
      (await this.legendListingService.fetchAllLegendListings(
        filter,
        status,
      )) || []
    );
  }

  @ResolveField()
  async legendDetails(@Parent() legendListing: LegendListing) {
    const { legendId } = legendListing;
    return this.legendNFTService.fetchLegendNFT(`${legendId}`);
  }
}
